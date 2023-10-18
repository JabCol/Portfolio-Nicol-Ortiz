import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Board(props) {
  const { nodes, materials } = useGLTF("/assets/models/tablero/tablero.glb");
  const [active, setActive] = useState(false);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.029, 1.199, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.937, 1.156, 0.104]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/tablero//tablero.glb");
