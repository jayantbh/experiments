import { useLayoutEffect, useRef } from 'react';

export const useSharedElementAnimation = (id: string) => {
  const clientRect = useRef(null as null | ClientRect);
  const elInit = document.getElementById(id);
  if (elInit && !clientRect.current) clientRect.current = elInit.getBoundingClientRect();

  useLayoutEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const first = clientRect.current;
    const last = el.getBoundingClientRect();

    clientRect.current = el.getBoundingClientRect();

    if (!first || !last) return;

    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;
    const deltaW = first.width / last.width;
    const deltaH = first.height / last.height;

    el.animate(
      [
        {
          transformOrigin: 'top left',
          transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`,
        },
        {
          transformOrigin: 'top left',
          transform: 'none',
        },
      ],
      {
        duration: 250,
        easing: 'linear',
      }
    );
  }, [id]);
};
