import { Text } from "@react-three/drei";
import { useCharacterAnimations } from "./CharacterAnimations";
import { useFrame } from "@react-three/fiber";

export const TextBack = ({ pos, rotat }) => {
  const { setClicParedPiano, setClicBack, setClicNext2 } =
    useCharacterAnimations();

  const handleClick = () => {
    setClicBack(true);
    setClicNext2(false);
    setClicParedPiano(false);
  };

  return (
    <>
      <Text
        font="/assets/fonts/poppins/Poppins-Light.ttf"
        fontSize={0.23}
        color={"blue"}
        position={pos}
        rotation={rotat}
        maxWidth={2}
        onClick={handleClick}
      >
        {"Clic to Go\n    Back"}
      </Text>
    </>
  );
};
