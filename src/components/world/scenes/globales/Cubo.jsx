import { useRef, useState } from "react";
import { ClickMe } from "./ClickMe";
import { useCharacterAnimations } from "./CharacterAnimations";

const Cubo = ({pos}) => {
  const cuboRef = useRef(); // Referencia para las esferas
  const { setClicBack } = useCharacterAnimations();

  const handleClick = () => {
    setClicBack(true);
  };
  
  return (
    <mesh ref={cuboRef} position={pos} scale={0.3} onClick={handleClick}>
      <boxGeometry />
      <meshMatcapMaterial color={'pink'} />
      <ClickMe
        size={0.3}
        posy={1.5}
        message={` Clic on the box \n   to go back `}
        material={<meshDepthMaterial/>}
      />
    </mesh>
  );
};

export default Cubo;
