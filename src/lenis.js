// Shared handle so the nav can scroll through Lenis instead of fighting it.
export const lenisRef = { current: null };

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: 'smooth' });
}
