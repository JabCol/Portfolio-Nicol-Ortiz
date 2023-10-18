import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCharacterAnimations } from "../globales/CharacterAnimations";

export function PianoPared(props) {
  const { nodes, materials } = useGLTF(
    "/assets/models/piano/vintage_upright_piano.glb"
  );
  const { setClicParedPiano, avatar } = useCharacterAnimations();

  const handleClick = () => {
    if ( (avatar.current.position.x > 7.5) && (avatar.current.position.x < 8.2) ){
      setClicParedPiano(true);
    }
  };

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main_Body_Main_Body_Piano_0.geometry}
          material={materials.Main_Body_Piano}
          position={[-19.481, 19.597, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main_Body_Legs_Main_Body_Piano_0.geometry}
          material={materials.Main_Body_Piano}
          position={[-72.578, 70.977, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube2_Main_Body_Piano_0.geometry}
          material={materials.Main_Body_Piano}
          position={[-62.503, 85.651, 80.222]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube1_Main_Body_Piano_0.geometry}
          material={materials.Main_Body_Piano}
          position={[-62.503, 85.651, -86.621]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Main_Body_Piano_0.geometry}
          material={materials.Main_Body_Piano}
          position={[-52.597, 91.669, 0]}
          rotation={[-Math.PI / 2, 0.054, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stool_Legs_Bench_0.geometry}
          material={materials.Bench}
          position={[-113.615, 40.68, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stool_Body_Bench_0.geometry}
          material={materials.Bench}
          position={[-113.615, 47.152, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Side_Trimming_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-39.541, 5.381, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Under_Trimming_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-39.541, 5.381, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trimming_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-39.541, 5.381, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys_Backboard_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-53.496, 88.46, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-52.896, 91.626, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holder_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-49.753, 114.697, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pedals_Decorative_0.geometry}
          material={materials.Decorative}
          position={[-40.365, 2.554, 0]}
          rotation={[-Math.PI / 2, -0.05, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.White_Keys_Piano_Keys_0.geometry}
          material={materials.Piano_Keys}
          position={[-64.273, 88.386, -71.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Black_Keys_Piano_Keys_0.geometry}
          material={materials.Piano_Keys}
          position={[-64.273, 88.386, -71.664]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Side_KEys_Piano_Keys_0.geometry}
          material={materials.Piano_Keys}
          position={[-64.273, 88.386, -90.895]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_Floor_0.geometry}
          material={materials.Floor}
          position={[-51.035, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          onClick={handleClick}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/piano/vintage_upright_piano.glb");
