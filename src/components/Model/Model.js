import React, { useEffect, useRef, useState } from "react";
import { useFrame, Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Model(props) {
  const ref = useRef(0);
  const [clicked, click] = useState(true);
  //   useFrame(({ clock }) => {
  //     ref.current.position.y += 9.8 / clock.getElapsedTime() - 5;
  //   });
  useFrame(({ clock }) => {
    ref.current.rotation.y += clicked ? 0.003 : -0.003;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh
        position={props.position}
        ref={ref}
        onClick={(e) => {
          click(!clicked);
        }}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
