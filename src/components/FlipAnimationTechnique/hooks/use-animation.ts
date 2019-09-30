import { MutableRefObject, useLayoutEffect, useRef } from 'react';

export const useAnimation = (elementRef: MutableRefObject<null | HTMLElement>) => {
  // Maintain state of the element client rect
  const clientRect = useRef(null as null | ClientRect);
  // Run a side-effect to work in sync with layout changes because we'll be reading layout stuff
  useLayoutEffect(() => {
    // If this was fired with the same animation state as the last call, do nothing
    if (!elementRef || !elementRef.current) return;

    const el = elementRef.current;
    // Get first client rect from persisted state
    const first = clientRect.current;
    // Get current client rect from DOM
    const last = el.getBoundingClientRect();

    // Persist current client rect to state, so this is read at the "first" client rect next time
    clientRect.current = el.getBoundingClientRect();

    // If either a persisted, or current client rect is missing, do nothing
    if (!first || !last) return;

    // Calculate the positional difference, and size difference in proportion
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;
    const deltaW = first.width / last.width;
    const deltaH = first.height / last.height;

    // Use the WebAnimations API to make the element appear at the "first" phase
    // by transforming it according to the offsets
    el.animate(
      [
        {
          transformOrigin: 'top left',
          transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`,
        },
        // And then animate it to the "last", or current place by basically disabling the transformed offsets
        {
          transformOrigin: 'top left',
          transform: 'none',
        },
      ],
      {
        duration: 250,
        easing: 'ease-in-out',
      }
    );
  });
};
