import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Djembe(props) {
  const { nodes, materials } = useGLTF(
    "/assets/models/djembe/djembe__african_instrument.glb"
  );
  const djembeRef = useRef();
  const handleClic = () => {
    djembeRef.current.applyImpulse({ x: 0.4, y: 1, z: 0 }, true);
  };
  const [sonidoGolpesIntrumentos] = useState(
    () => new Audio("/assets/audio/thump.mp3")
  );
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      sonidoGolpesIntrumentos.currentTime = 0;
      sonidoGolpesIntrumentos.volume = Math.random();
      sonidoGolpesIntrumentos.play();
    } 
  }, [play]);

  useEffect(()=>{
    djembeRef.current.sleep()
  },[])

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="dynamic"
        colliders={"hull"}
        ref={djembeRef}
        onCollisionEnter={() => setPlay(true)}
        onCollisionExit={() => setPlay(false)}
      >
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.808}>
          <group scale={[1, 1, 1.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_0.geometry}
              material={materials.Material}
              onClick={handleClic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_1.geometry}
              material={materials["Material.001"]}
              onClick={handleClic}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_0.geometry}
            material={materials["Material.001"]}
            rotation={[0, 0, -0.785]}
            scale={[0.017, 0.017, 1.409]}
            onClick={handleClic}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/assets/models/djembe/djembe__african_instrument.glb");
