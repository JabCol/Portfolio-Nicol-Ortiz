import { Text } from "@react-three/drei";
import { useCharacterAnimations } from "./CharacterAnimations";
import { TextBack } from "./TextBack";

export const Informacion2D = ({
  message,
  fontsize,
  pos,
  rotat,
  color,
  color2,
  posB,
  alineacion,
  value,
  messageB,
  event,
  messageC
}) => {
  const { setClicParedPiano, setClicNext, setClicPiano, setClicNext2, setClicNext3, avatar } =
    useCharacterAnimations();

  const handleClickA = () => {
    setClicNext(true);
    setClicNext2(false);
    setClicPiano(false);
  };

  const handleClickB = () => {
    if (avatar.current.position.x > 7) {
      setClicNext2(true);
      setClicNext(false);
      setClicPiano(false);
      setClicParedPiano(false);
    }
  };

  return (
    <>
      <Text
        font="/assets/fonts/poppins/Poppins-Light.ttf"
        fontSize={fontsize}
        color={color}
        position={pos}
        rotation={rotat}
        maxWidth={2}
        textAlign={alineacion}
      >
        {message}
      </Text>
      <Text
        font="Poppins-Bold.ttf"
        fontSize={fontsize}
        color={color2}
        position={posB}
        rotation={rotat}
        maxWidth={2}
        textAlign="center"
        onClick={value ? handleClickA : handleClickB}
      >
        {messageB}
      </Text>
      <Text
        font="Poppins-Bold.ttf"
        fontSize={fontsize}
        color={color2}
        position={posB}
        rotation={rotat}
        maxWidth={2}
        textAlign="center"
        onDoubleClick={event}
      >
        {messageC}
      </Text>
    </>
  );
};


TextBack.defaultProps = {
  message: "",
  messageB: "",
  messageC: ""
}