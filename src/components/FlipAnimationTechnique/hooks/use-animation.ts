import { usePrevious } from 'hooks/use-previous';
import { MutableRefObject, useLayoutEffect, useState } from 'react';

export const useAnimation = (elementRef: MutableRefObject<null | HTMLDivElement>, animated: boolean) => {
  const [clientRect, setClientRect] = useState(null as null | ClientRect);
  const { animated: prevAnimated } = usePrevious({ animated });

  useLayoutEffect(() => {
    if (animated === prevAnimated) return;
    if (!elementRef || !elementRef.current) return;

    const el = elementRef.current;
    const first = clientRect;
    const last = el.getBoundingClientRect();

    setClientRect(el.getBoundingClientRect());

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
        duration: 300,
        easing: 'ease-in-out',
        fill: 'both',
      }
    );
  }, [elementRef, animated, prevAnimated, clientRect]);
};
