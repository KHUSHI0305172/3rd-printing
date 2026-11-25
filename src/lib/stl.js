// Browser-side STL analysis: size, volume, watertight check and a 3D thumbnail.
// Files never leave the user's device.
let renderer = null;

async function thumbnail(T, geo, bb) {
  try {
    if (!renderer) {
      renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      renderer.setSize(200, 160);
      renderer.setClearColor(0xffffff, 0);
    }
    const scene = new T.Scene();
    const mesh = new T.Mesh(geo, new T.MeshStandardMaterial({ color: 0x178aa1, metalness: 0.25, roughness: 0.45 }));
    const c = new T.Vector3(); bb.getCenter(c); mesh.position.sub(c);
    scene.add(mesh, new T.AmbientLight(0xffffff, 0.75));
    const dl = new T.DirectionalLight(0xffffff, 0.9); dl.position.set(3, 5, 4); scene.add(dl);
    const sz = bb.getSize(new T.Vector3());
    const r = Math.max(sz.x, sz.y, sz.z) || 1;
    const cam = new T.PerspectiveCamera(35, 200 / 160, r / 100, r * 30);
    cam.position.set(r * 1.5, r * 1.3, r * 1.9); cam.lookAt(0, 0, 0);
    renderer.render(scene, cam);
    const url = renderer.domElement.toDataURL('image/webp', 0.75);
    mesh.material.dispose();
    return url;
  } catch (e) { return null; }
}

export async function analyseStl(file) {
  const T = await import('three');
  const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader.js');
  const geo = new STLLoader().parse(await file.arrayBuffer());
  geo.computeVertexNormals(); // recompute: many STL files carry empty or wrong normals
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const size = [bb.max.x - bb.min.x, bb.max.y - bb.min.y, bb.max.z - bb.min.z];
  const p = geo.attributes.position.array;
  const tri = p.length / 9;

  let vol = 0;
  for (let i = 0; i < p.length; i += 9) {
    const ax = p[i], ay = p[i + 1], az = p[i + 2], bx = p[i + 3], by = p[i + 4], bz = p[i + 5], cx = p[i + 6], cy = p[i + 7], cz = p[i + 8];
    vol += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
  }
  const volume = Math.abs(vol) / 1000; // mm³ -> cm³ (assumes the model is in millimetres)

  // Watertight (manifold) check: every edge must be shared by exactly two triangles.
  let watertight = null;
  if (tri <= 120000) {
    const k = (i) => Math.round(p[i] * 1000) + ',' + Math.round(p[i + 1] * 1000) + ',' + Math.round(p[i + 2] * 1000);
    const edges = new Map();
    for (let t = 0; t < tri; t++) {
      const v = [k(t * 9), k(t * 9 + 3), k(t * 9 + 6)];
      for (const [a, b] of [[0, 1], [1, 2], [2, 0]]) {
        const key = v[a] < v[b] ? v[a] + '|' + v[b] : v[b] + '|' + v[a];
        edges.set(key, (edges.get(key) || 0) + 1);
      }
    }
    watertight = true;
    for (const n of edges.values()) if (n !== 2) { watertight = false; break; }
  }
  const thumb = await thumbnail(T, geo, bb);
  return { size, volume, triangles: tri, watertight, thumb };
}
