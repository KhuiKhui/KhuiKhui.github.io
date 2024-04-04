import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const ref = useRef(0);
  const [clicked, click] = useState(true);

  useFrame(({ clock }) => {
    ref.current.rotation.x += clicked ? 0.001 : -0.001;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 10]} />
      <mesh
        position={props.position}
        ref={ref}
        onClick={(e) => {
          click(!clicked);
        }}
      >
        <boxGeometry args={[310, 1000, 1000]} />
        <meshStandardMaterial color="#F8C26C" />
      </mesh>
    </>
  );
}
