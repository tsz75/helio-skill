// A stand-in for HELIO: it provides the same globals, then loads the BUILT extension file.
// Server storage is simulated in localStorage. This isn't HELIO, so a pass here doesn't
// prove the widget works in the real product.
import * as sdk from '@hmiproject/helio-sdk';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';

const q = new URLSearchParams(location.search);
const LOAD_DELAY_MS = 120;
const writes: { key: string; value: string }[] = [];

function useServerState(key: string, _type: unknown, defaultValue: string, options: { scope: string }) {
  const storageKey = `${options.scope}:${key}`;
  const [value, setValue] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    const t = setTimeout(() => setValue(localStorage.getItem(storageKey) ?? defaultValue), LOAD_DELAY_MS);
    return () => clearTimeout(t);
  }, [storageKey, defaultValue]);
  const canWrite = q.get('canWrite') !== '0';
  const set = (next: string) => {
    if (!canWrite) throw new Error('setValue called while canWrite is false');
    writes.push({ key: storageKey, value: next });
    localStorage.setItem(storageKey, next);
    setValue(next);
  };
  return [value, set, { loading: value === undefined, canWrite }];
}

Object.assign(window, {
  React,
  $: jsxRuntime,
  HELIO: {
    v1: { ...sdk, useServerState, useRenderMode: () => q.get('mode') ?? 'Runtime' },
  },
});

const url = `./sequence-builder.js?${Date.now()}`;
const ext = (await import(/* @vite-ignore */ url)) as {
  default: { library: { elements: { name: string; traits: unknown[]; Component: React.FC<Record<string, unknown>> }[] } };
};
const element = ext.default.library.elements[0];
const slots = q.get('slots')?.split(',') ?? [undefined];

function App() {
  const [shown, setShown] = React.useState(true);
  Object.assign(window, { setShown, writes, elementInfo: { name: element.name, traits: element.traits.length } });
  if (!shown) return null;
  return (
    <>
      {slots.map((slot, i) => (
        <div key={i} data-role="widget-frame" style={{ width: q.get('width') ?? '100%', height: `${q.get('height') ?? 620}px`, border: '1px solid #888' }}>
          <element.Component slot={slot} />
        </div>
      ))}
    </>
  );
}

if (q.get('zoom')) document.documentElement.style.setProperty('zoom', q.get('zoom'));

const roleEl = (role: string) => document.querySelector(`[data-role="${role}"]`);
Object.assign(window, { el: roleEl });
Object.defineProperty(window, 'seqApp', {
  get: () => (roleEl('sequence-builder') as unknown as { sequenceBuilder?: unknown } | null)?.sequenceBuilder,
});

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
