
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Bug(props) {
  const bugRef = useRef();
  const { nodes, materials } = useGLTF("./models/bug/Caterpillar.glb");

  // Состояние для отслеживания движения жука
  const [move, setMove] = useState(true);
  const [angle, setAngle] = useState(0);

  // Параметры для движения вокруг камня
  const radius = 1.5; // Радиус вокруг камня
  const speed = 0.01; // Скорость движения

  useFrame(() => {
    if (move) {
      // Обновление угла для движения по кругу
      setAngle(prev => prev + speed);

      // Вычисление новой позиции
      const x = radius * Math.sin(angle) + 0; // Позиция камня по x
      const z = radius * Math.cos(angle) - 1; // Позиция камня по z
      bugRef.current.position.set(x, -1, z);
    }

    // Рандомизация остановок
    if (Math.random() < 0.01) {
      setMove(!move);
    }
  });

  return (
    <group ref={bugRef} {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.lambert2SG} />
    </group>
  );
}

useGLTF.preload("./models/bug/Caterpillar.glb");