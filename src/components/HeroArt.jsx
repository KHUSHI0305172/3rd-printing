// Custom illustrations for the inner-page hero banners (white + teal, matching the brand).
const T = '#178aa1', D = '#0b4f60';
const ART = {
  about: (<>
    <rect x="40" y="14" width="140" height="8" rx="4" fill="#fff" opacity=".5" />
    <rect x="100" y="22" width="20" height="40" rx="4" fill="#fff" />
    <polygon points="102,62 118,62 110,78" fill="#fff" />
    <polygon points="110,92 160,118 110,144 60,118" fill="#fff" opacity=".95" />
    <polygon points="60,118 110,144 110,190 60,164" fill="#fff" opacity=".6" />
    <polygon points="160,118 110,144 110,190 160,164" fill="#fff" opacity=".35" />
    <path d="M60 130 L110 156 M60 142 L110 168 M60 154 L110 180 M160 130 L110 156 M160 142 L110 168 M160 154 L110 180" stroke={T} strokeOpacity=".4" strokeWidth="2" />
  </>),
  materials: (<>
    <circle cx="82" cy="104" r="58" fill="#fff" opacity=".95" />
    <circle cx="82" cy="104" r="46" fill={T} />
    {[38, 31, 24].map((r) => <circle key={r} cx="82" cy="104" r={r} fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="2" />)}
    <circle cx="82" cy="104" r="19" fill="#fff" /><circle cx="82" cy="104" r="10" fill={D} />
    <rect x="146" y="64" width="32" height="16" rx="4" fill="#fff" />
    <path d="M148 80 h28 v10 q14 8 14 24 v48 q0 8 -8 8 h-40 q-8 0 -8 -8 v-48 q0 -16 14 -24 z" fill="#fff" opacity=".88" />
    <rect x="134" y="120" width="56" height="30" fill={T} opacity=".8" />
    <circle cx="162" cy="135" r="6" fill="#fff" />
  </>),
  products: (<>
    <path d="M60 76h100l10 100q0 10-10 10H60q-10 0-10-10z" fill="#fff" opacity=".93" />
    <path d="M84 76v-14a26 26 0 0 1 52 0v14" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
    <polygon points="110,104 136,118 110,132 84,118" fill={T} />
    <polygon points="84,118 110,132 110,162 84,148" fill={D} />
    <polygon points="136,118 110,132 110,162 136,148" fill="#3cc3d1" />
    <circle cx="176" cy="52" r="15" fill="#fff" opacity=".9" /><path d="M169 52l5 5 9-10" stroke={T} strokeWidth="3.5" fill="none" strokeLinecap="round" />
  </>),
  projects: (<>
    <rect x="26" y="34" width="116" height="84" rx="8" fill="#fff" opacity=".95" />
    <rect x="36" y="44" width="96" height="64" rx="4" fill={T} opacity=".22" />
    <polygon points="36,108 68,72 88,94 108,76 132,108" fill={T} opacity=".8" />
    <circle cx="112" cy="58" r="8" fill="#fff" />
    <rect x="98" y="96" width="98" height="92" rx="8" fill="#fff" opacity=".82" />
    <rect x="108" y="106" width="78" height="72" rx="4" fill={T} opacity=".18" />
    <polygon points="147,118 172,131 147,144 122,131" fill={T} /><polygon points="122,131 147,144 147,170 122,157" fill={D} /><polygon points="172,131 147,144 147,170 172,157" fill="#3cc3d1" />
  </>),
  industries: (<>
    <path d="M24 176V106l36 22v-22l36 22v-22l36 22V66h30v110z" fill="#fff" opacity=".93" />
    <rect x="132" y="38" width="14" height="30" fill="#fff" /><circle cx="140" cy="28" r="9" fill="#fff" opacity=".5" /><circle cx="156" cy="16" r="6" fill="#fff" opacity=".35" />
    {[[40, 140], [76, 140], [112, 140], [148, 90]].map(([x, y]) => <rect key={x + y} x={x} y={y} width="14" height="16" fill={T} opacity=".6" />)}
    <g className="sp">
      <circle cx="172" cy="140" r="26" fill="none" stroke="#fff" strokeWidth="12" strokeDasharray="8.2 7.8" />
      <circle cx="172" cy="140" r="22" fill="#fff" /><circle cx="172" cy="140" r="9" fill={T} />
    </g>
  </>),
  quote: (<>
    <rect x="54" y="26" width="112" height="146" rx="10" fill="#fff" opacity=".95" />
    {[[48, 64], [64, 80], [80, 52]].map(([y, w]) => <rect key={y} x="72" y={y} width={w} height="8" rx="4" fill={T} opacity=".45" />)}
    <rect x="72" y="112" width="76" height="40" rx="9" fill={T} />
    <text x="110" y="140" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" fontFamily="system-ui,sans-serif">₹ / g</text>
    <circle cx="160" cy="40" r="17" fill="#3cc3d1" /><path d="M151 40l7 7 12-14" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
  </>),
  contact: (<>
    <path d="M40 34h104a14 14 0 0 1 14 14v52a14 14 0 0 1-14 14H88l-28 24v-24H40a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14z" fill="#fff" opacity=".95" />
    {[58, 84, 110].map((x) => <circle key={x} cx={x} cy="74" r="7" fill={T} />)}
    <path d="M112 128h76a14 14 0 0 1 14 14v30a14 14 0 0 1-14 14h-8v18l-22-18h-46a14 14 0 0 1-14-14v-30a14 14 0 0 1 14-14z" fill="#fff" opacity=".68" />
    <rect x="124" y="148" width="56" height="7" rx="3.5" fill={T} opacity=".55" /><rect x="124" y="162" width="36" height="7" rx="3.5" fill={T} opacity=".35" />
  </>),
};

export default function HeroArt({ name }) {
  return <svg viewBox="0 0 220 200" className="hart">{ART[name] || ART.about}</svg>;
}
