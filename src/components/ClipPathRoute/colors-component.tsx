import { motion } from 'framer-motion';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { shuffle } from 'utils/shuffle';

import css from './styles.module.scss';
import { useInterval } from 'hooks/use-interval';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

export const ColorShuffle = () => {
  const [colors, setColors] = useState(initialColors);

  useInterval(() => setColors(shuffle(colors)), 1500, [colors]);

  return (
    <ul className={css['tiles-container']}>
      {colors.map(background => (
        <motion.li key={background} layoutTransition={spring} style={{ background }} className={css['color-tile']} />
      ))}
    </ul>
  );
};

const initialColors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF'];
