import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useCharacterAnimations } from "../scenes/globales/CharacterAnimations";

export const Controls = () => {
  const { avatar } = useCharacterAnimations();
  const controlsRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (avatar) {
      camera.position.x = avatar.current.position.x+1;
      controlsRef.current.target.x = avatar.current.position.x;
      controlsRef.current.target.y = avatar.current.position.y +2;
      controlsRef.current.target.z = avatar.current.position.z;
    }
  });
  
  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      rotateSpeed={0.5}
      target={[0, 0.3, 0]}
    />
  );
};

