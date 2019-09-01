import { usePrevious } from 'hooks/use-previous';
import { MutableRefObject, useLayoutEffect, useState } from 'react';

// This isn't very reusable for different kinds of layouts, but easily tweakable nonetheless.
// This is an experiment anyway.
// Refer to src/components/FlipAnimationTechnique/hooks/use-animation.ts for comments common to both hooks
export const useChildAwareAnimation = (elementRef: MutableRefObject<null | HTMLDivElement>, animated: boolean) => {
  const [parentClientRect, setParentClientRect] = useState(null as null | ClientRect);
  const [childClientRect, setChildClientRect] = useState(null as null | ClientRect);
  const { animated: prevAnimated } = usePrevious({ animated });

  useLayoutEffect(() => {
    if (animated === prevAnimated) return;
    if (!elementRef || !elementRef.current) return;

    const parentEl = elementRef.current;
    const childEl = elementRef.current.querySelector('div');
    if (!childEl) return;

    // Get first and last client rects for both child and parent
    const parentFirst = parentClientRect;
    const parentLast = parentEl.getBoundingClientRect();

    const childFirst = childClientRect;
    const childLast = childEl.getBoundingClientRect();

    setParentClientRect(parentEl.getBoundingClientRect());
    setChildClientRect(childEl.getBoundingClientRect());

    if (!parentFirst || !parentLast) return;
    if (!childFirst || !childLast) return;

    const parentDeltaX = parentFirst.left - parentLast.left;
    const parentDeltaY = parentFirst.top - parentLast.top;
    const parentDeltaW = parentFirst.width / parentLast.width;
    const parentDeltaH = parentFirst.height / parentLast.height;

    // Get scale offset for the parent, because we want the child to scale inversely to the parent
    const childDeltaW = parentLast.width / parentFirst.width;
    const childDeltaH = parentLast.height / parentFirst.height;

    parentEl.animate(
      [
        {
          transformOrigin: 'top left',
          transform: `translate(${parentDeltaX}px, ${parentDeltaY}px) scale(${parentDeltaW}, ${parentDeltaH})`,
        },
        {
          transformOrigin: 'top left',
          transform: 'none',
        },
      ],
      {
        duration: 250,
        easing: 'ease-in-out',
        fill: 'both',
      }
    );

    // In this case, the child is centered, so just ensure the child scales correctly.
    childEl.animate(
      [
        {
          transformOrigin: 'center',
          transform: `scale(${childDeltaW}, ${childDeltaH})`,
        },
        {
          transformOrigin: 'center',
          transform: 'none',
        },
      ],
      {
        duration: 250,
        easing: 'ease-in-out',
      }
    );
  }, [elementRef, animated, prevAnimated, parentClientRect, childClientRect]);
};
