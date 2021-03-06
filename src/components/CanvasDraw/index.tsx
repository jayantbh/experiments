import cls from 'classnames';
import React, { useCallback, useRef, useState } from 'react';

import css from './styles.module.scss';

const SIZE = 3;
let frame: number | null = null;
let lastCoords: null | { x: number; y: number } = null;

const colors = [
  'hsl(205, 67%, 45%)',
  'hsl(205, 74%, 65%)',
  'hsl(29, 80%, 44%)',
  'hsl(48, 95%, 76%)',
  'hsl(209, 34%, 30%)',
  'hsl(211, 27%, 70%)',
  'hsl(185, 81%, 29%)',
  'hsl(184, 65%, 59%)',
  'hsl(360, 72%, 38%)',
  'hsl(360, 77%, 78%)',
  'hsl(166, 72%, 28%)',
  'hsl(158, 58%, 62%)',
  '#F0F0F0',
  '#A4A4A4',
  '#000',
  '#fff',
];

const CanvasDraw = () => {
  const [doDraw, setDoDraw] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const ref = useRef<HTMLCanvasElement>(null);
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent> | React.TouchEvent<HTMLCanvasElement>) => {
      if (!doDraw) lastCoords = null;
      if (!ref || !ref.current || !doDraw) return;
      const canvas = ref.current;

      if (frame) cancelAnimationFrame(frame);

      const rect = canvas.getBoundingClientRect();
      const { x, y } = getEventXY(e, rect);

      frame = requestAnimationFrame(() => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        resize(canvas);
        ctx.strokeStyle = colors[colorIndex];
        ctxPathFrom(ctx, x, y);
        if (!lastCoords) {
          lastCoords = { x, y };
          return;
        }

        ctxPathTo(ctx, lastCoords.x, lastCoords.y);
        lastCoords = { x, y };
      });
    },
    [ref, doDraw]
  );

  const onTrigger = useCallback((e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const hasTrigger = e.buttons === 1;
    setDoDraw(hasTrigger);
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    requestAnimationFrame(() => {
      lastCoords = null;
    });
    setDoDraw(true);
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    setDoDraw(false);
    requestAnimationFrame(() => {
      lastCoords = null;
    });
  }, []);

  const onPickColor = useCallback(
    (i: number) => () => {
      setColorIndex(i);
    },
    []
  );

  return (
    <div className={css.container}>
      <canvas
        ref={ref}
        className={css.canvas}
        onMouseMove={onMouseMove}
        onMouseUp={onTrigger}
        onMouseDown={onTrigger}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onMouseMove}
      />
      <div className={css['color-palette']}>
        {colors.map((c: string, i) => (
          <div
            key={c}
            className={cls(css.color, i === colorIndex && css['active-color'])}
            onMouseUp={onPickColor(i)}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
};

const getEventXY = (
  ev: React.MouseEvent<HTMLCanvasElement, MouseEvent> | React.TouchEvent<HTMLCanvasElement>,
  rect: ClientRect
) => {
  if (Object(ev).hasOwnProperty('clientX') && Object(ev).hasOwnProperty('clientY')) {
    const e = ev as React.MouseEvent<HTMLCanvasElement, MouseEvent>;
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  } else if (Object(ev).hasOwnProperty('touches')) {
    const e = ev as React.TouchEvent<HTMLCanvasElement>;
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }

  return { x: -Infinity, y: -Infinity };
};

const ctxPathFrom = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.beginPath();
  ctx.lineWidth = SIZE;
  ctx.moveTo(x, y);
};

const ctxPathTo = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.lineTo(x, y);
  ctx.stroke();
};

const resize = (canvas: HTMLCanvasElement) => {
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
};

export default CanvasDraw;
