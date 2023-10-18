import { SpotLight, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SpotLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  //   useHelper(spotLightRef, SpotLightHelper);
  useFrame((state, delta) => {
    spotLightRef.current.position.x +=
      1 * Math.sin(state.clock.getElapsedTime()) * 0.01;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <SpotLight
        castShadow
        ref={spotLightRef}
        position={[0, 4, 0]}
        angle={6}
        intensity={1000}
        penumbra={1}
        color={"white"}
        distance={8}
      />
    </>
  );
};

export default Lights;
