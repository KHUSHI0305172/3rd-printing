'use client';
import { useEffect, useRef } from 'react';

// A low-poly car that is "3D printed" layer by layer using a moving clipping plane.
export default function CarScene() {
  const ref = useRef(null);

  useEffect(() => {
    let raf, dead = false, cleanup = () => {};
    (async () => {
      const T = await import('three');
      if (dead) return;
      const cv = ref.current;
      let r;
      try { r = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); }
      catch (e) { cv.style.display = 'none'; return; }
      r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      r.localClippingEnabled = true;

      const s = new T.Scene();
      const cam = new T.PerspectiveCamera(45, 1, 0.1, 100);
      cam.position.set(0, 0, 7.5);
      s.add(new T.AmbientLight(0xffffff, 0.6));
      const l1 = new T.DirectionalLight(0xffffff, 0.9); l1.position.set(4, 5, 6); s.add(l1);
      const l2 = new T.PointLight(0x178aa1, 1.2, 30); l2.position.set(-5, -2, 3); s.add(l2);

      const plane = new T.Plane(new T.Vector3(0, -1, 0), 0);
      const M = (o) => { o.clippingPlanes = [plane]; return new T.MeshStandardMaterial(o); };
      const grp = new T.Group(); s.add(grp);
      const poly = (pts) => { const sh = new T.Shape(); pts.forEach((q, i) => (i ? sh.lineTo(q[0], q[1]) : sh.moveTo(q[0], q[1]))); return sh; };

      const bd = new T.ExtrudeGeometry(
        poly([[-2,-.9],[2,-.9],[2.05,-.45],[1.55,-.3],[.85,-.25],[.35,.35],[-.7,.38],[-1.4,-.2],[-2,-.25]]),
        { depth: 1.6, bevelEnabled: true, bevelSize: .08, bevelThickness: .08, bevelSegments: 3 }
      );
      bd.translate(0, 0, -.8);
      grp.add(new T.Mesh(bd, M({ color: 0x178aa1, metalness: .5, roughness: .3 })));
      grp.add(new T.LineSegments(new T.EdgesGeometry(bd, 25), new T.LineBasicMaterial({ color: 0x6fd0e0, transparent: true, opacity: .45 })));

      const gl = new T.ExtrudeGeometry(poly([[.8,-.2],[.35,.3],[-.68,.33],[-1.25,-.2]]), { depth: 1.8, bevelEnabled: false });
      gl.translate(0, 0, -.9);
      grp.add(new T.Mesh(gl, M({ color: 0x1b2740, metalness: .8, roughness: .1 })));

      const tire = new T.CylinderGeometry(.45, .45, .3, 28), rim = new T.CylinderGeometry(.27, .27, .32, 10), wh = [];
      [[1.25,.95],[-1.25,.95],[1.25,-.95],[-1.25,-.95]].forEach((q) => {
        const w = new T.Group();
        const a = new T.Mesh(tire, M({ color: 0x14161b, roughness: .9 }));
        const b = new T.Mesh(rim, M({ color: 0xcfd3dc, metalness: .9, roughness: .2 }));
        a.rotation.x = b.rotation.x = Math.PI / 2;
        w.add(a, b); w.position.set(q[0], -.75, q[1]); grp.add(w); wh.push(w);
      });
      [[2.05,-.5,.55],[2.05,-.5,-.55]].forEach((q) => {
        const h = new T.Mesh(new T.SphereGeometry(.13, 12, 12), new T.MeshBasicMaterial({ color: 0xfff2b0, clippingPlanes: [plane] }));
        h.position.set(...q); grp.add(h);
      });
      [[-2.06,-.45,.5],[-2.06,-.45,-.5]].forEach((q) => {
        const h = new T.Mesh(new T.BoxGeometry(.06, .14, .34), new T.MeshBasicMaterial({ color: 0xff2222, clippingPlanes: [plane] }));
        h.position.set(...q); grp.add(h);
      });

      // print layer sheet + moving nozzle
      const sheet = new T.Mesh(new T.PlaneGeometry(4.6, 2.2), new T.MeshBasicMaterial({ color: 0x178aa1, transparent: true, opacity: .22, side: T.DoubleSide }));
      sheet.rotation.x = -Math.PI / 2; grp.add(sheet);
      const nz = new T.Group();
      const cone = new T.Mesh(new T.ConeGeometry(.1, .3, 16), new T.MeshStandardMaterial({ color: 0xffffff, emissive: 0x178aa1 }));
      const rod = new T.Mesh(new T.CylinderGeometry(.04, .04, 2.2, 8), new T.MeshStandardMaterial({ color: 0x8a90a0 }));
      cone.rotation.x = Math.PI; cone.position.y = .15; rod.position.y = 1.4;
      nz.add(cone, rod); grp.add(nz);

      const base = new T.Mesh(new T.CylinderGeometry(3.3, 3.3, .1, 64), new T.MeshStandardMaterial({ color: 0x555b6b, metalness: .3, roughness: .6 }));
      base.position.y = -1.35; s.add(base);

      let mx = 0, my = 0;
      const onMove = (e) => { mx = e.clientX / window.innerWidth - .5; my = e.clientY / window.innerHeight - .5; };
      const size = () => { const w = cv.clientWidth, h = cv.clientHeight; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
      window.addEventListener('pointermove', onMove);
      window.addEventListener('resize', size);
      size();

      const t0 = performance.now();
      const loop = () => {
        const t = (performance.now() - t0) / 1000, p = (t % 9) / 9, k = Math.min(p / .72, 1), y = -1.25 + k * 1.85, pr = p < .72;
        plane.constant = y;
        sheet.visible = nz.visible = pr;
        sheet.position.y = nz.position.y = y;
        nz.position.x = Math.sin(t * 7) * 1.7; nz.position.z = Math.sin(t * 2.6) * .7;
        wh.forEach((w) => { w.rotation.z -= .04; });
        grp.rotation.y = t * .45 + mx * 1.2;
        cam.position.y = .7 + my * 1.2; cam.lookAt(0, -.3, 0);
        r.render(s, cam);
        raf = requestAnimationFrame(loop);
      };
      loop();
      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('resize', size);
        r.dispose();
      };
    })();
    return () => { dead = true; cleanup(); };
  }, []);

  return <canvas id="cv" ref={ref} />;
}
