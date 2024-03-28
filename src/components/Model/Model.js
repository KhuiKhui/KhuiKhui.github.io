import React, { useEffect, useRef, useState } from "react";
import { useFrame, Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const ref = useRef(0);
  const [clicked, click] = useState(true);
  //   useFrame(({ clock }) => {
  //     ref.current.position.y += 9.8 / clock.getElapsedTime() - 5;
  //   });
  useFrame(({ clock }) => {
    ref.current.rotation.x += clicked ? 0.001 : -0.001;
  });
  // const { nodes, materials } = useGLTF("/music_note_gltf.gltf");
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
        {/* <primitive
          geometry={nodes.imagetostl_mesh0.geometry}
          materials={materials.imagetostl_mesh0}
        /> */}
        <boxGeometry args={[310, 1000, 1000]} />
        <meshStandardMaterial color="#F8C26C" />
      </mesh>
    </>
  );
}
