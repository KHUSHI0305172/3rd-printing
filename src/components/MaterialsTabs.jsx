'use client';
import { useState } from 'react';
import Link from 'next/link';
import Compare from './Compare';
import Colours from './Colours';
import MaterialCard from './MaterialCard';
import {
  fdm, resin, fdmCompare, fdmGuide, fdmUses, resinCompare, resinGuide, resinUses, fdmColours, resinColours,
} from '@/data/site';

const PF = ['Flexibility', 'Impact', 'Water', 'Chemical', 'UV'];
const lvl = (v) => (/^(Excellent|Good)$/.test(v) ? 'ok' : /^(Moderate|Medium)$/.test(v) ? 'mid' : /^(Limited|Poor)$/.test(v) ? 'lo' : '');
const FDM_NOTE = 'Note: All values are typical ranges and may vary by brand, filament grade, print settings, part design and orientation.';
const VALUE_LABELS = ['Tensile Strength', 'Flexural Strength', 'Elongation at Break', 'Heat Resistance (HDT)', 'Hardness (Shore)', 'Density'];

function Rows({ title, rows }) {
  return (
    <div>
      <h4>{title}</h4>
      {rows.map(([k, v]) => <div className="sp" key={k}><span>{k}</span><b>{v}</b></div>)}
    </div>
  );
}

function Head({ m }) {
  return (
    <div>
      <h3>{m.name}{m.sub && <small> {m.sub}</small>}</h3>
      <span className="mt">{m.tag}</span>
      <p className="tl">{m.line}</p>
    </div>
  );
}

const VIEWS = [['cards', 'Materials'], ['cmp', 'Comparison'], ['col', 'Colour Options']];

export default function MaterialsTabs() {
  const [t, setT] = useState('fdm');
  const [v, setV] = useState('cards');

  return (
    <section style={{ paddingTop: 30 }}>
      <div className="wrap">
        <div className="flt">
          <button className={t === 'fdm' ? 'on' : ''} onClick={() => setT('fdm')}>1. FDM 3D Printing Materials</button>
          <button className={t === 'resin' ? 'on' : ''} onClick={() => setT('resin')}>2. Resin 3D Printing Materials</button>
        </div>
        <div className="flt sub">
          {VIEWS.map(([k, l]) => <button key={k} className={v === k ? 'on' : ''} onClick={() => setV(k)}>{l}</button>)}
        </div>

        {t === 'fdm' && v === 'cards' && (
          <>
            <p className="sub" style={{ marginBottom: 28 }}>FDM (Filament) Materials – Material Properties • Applications • Printing Price</p>
            <div className="mgrid">
              {fdm.map((m) => <MaterialCard key={m.name} m={m} kind="fdm" color={fdmCompare.find((x) => x.name === m.name)?.color || '#178aa1'} />)}
            </div>
            <p className="note">{FDM_NOTE}</p>
          </>
        )}
        {t === 'fdm' && v === 'cmp' && (
          <>
            <p className="sub" style={{ marginBottom: 20 }}>FDM / FFF (Fused Deposition Modeling) – Material Comparison at a Glance. Choose the right filament for your application. Scroll sideways to see every material.</p>
            <Compare cols={fdmCompare} valueLabels={VALUE_LABELS} dotLabels={['Strength', 'Toughness / Impact', 'Flexibility', 'Chemical Resistance', 'UV / Weather Resistance', 'Wear / Abrasion Resistance']} guide={fdmGuide} uses={fdmUses} />
            <p className="note">{FDM_NOTE}</p>
          </>
        )}
        {t === 'fdm' && v === 'col' && (
          <>
            <p className="sub" style={{ marginBottom: 24 }}>FDM Filament Colour Options – available colours for PLA / PLA+ / PETG / ABS / ASA / TPU / Nylon / PC / CF.</p>
            <Colours data={fdmColours} />
          </>
        )}

        {t === 'resin' && v === 'cards' && (
          <>
            <p className="sub" style={{ marginBottom: 28 }}>Resin Materials (SLA / DLP / MSLA) – High Detail • Smooth Finish • Wide Material Options</p>
            <div className="mgrid">
              {resin.map((r) => <MaterialCard key={r.name} m={r} kind="resin" color={resinCompare.find((x) => x.name === r.name.replace(/ Resin$/, ''))?.color || '#178aa1'} />)}
            </div>
            <p className="note">Share your file for an exact quote. <Link href="/quote" style={{ color: 'var(--ac)', fontWeight: 600 }}>Get a quote</Link></p>
          </>
        )}
        {t === 'resin' && v === 'cmp' && (
          <>
            <p className="sub" style={{ marginBottom: 20 }}>SLA / DLP / MSLA Resins – Properties & Selection Guide. High Detail • Smooth Surface • Wide Range of Functional Resins. Scroll sideways to see every resin.</p>
            <Compare cols={resinCompare} valueLabels={VALUE_LABELS} dotLabels={['Strength', 'Toughness / Impact', 'Flexibility', 'Detail & Accuracy', 'Surface Finish']} guide={resinGuide} uses={resinUses} />
          </>
        )}
        {t === 'resin' && v === 'col' && (
          <>
            <p className="sub" style={{ marginBottom: 24 }}>Resin Colour Options – available colours for SLA / DLP / MSLA 3D printing resins.</p>
            <Colours data={resinColours} />
          </>
        )}
      </div>
    </section>
  );
}
