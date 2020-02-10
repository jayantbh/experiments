import React, { FC, useRef, useState } from 'react';
import { Canvas, ReactThreeFiber, useFrame } from 'react-three-fiber';

import css from './styles.module.scss';
import { Color, Euler } from 'three';

type Object3DNode = ReactThreeFiber.Object3DNode<any, any> & {
  rotation: Euler;
};

const Box: FC<{ position: [number, number, number] }> = ({ position }) => {
  const mesh = useRef<Object3DNode>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => mesh.current?.rotation && (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={Array(3).fill(active ? 1.5 : 1)}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshPhongMaterial attach='material' color={hovered ? 'coral' : 'teal'} />
    </mesh>
  );
};

const TopFacingCube = () => (
  <div className={css.container}>
    <Canvas>
      {/*<ambientLight color={new Color('#5a5')} />*/}
      <directionalLight position={[5, 8, 3]} color={new Color('#f0f')} />
      {/*<pointLight position={[5, 5, 5]} color={new Color('#fff')} />*/}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </div>
);

export default TopFacingCube;
