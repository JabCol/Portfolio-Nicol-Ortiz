import { ClickMe } from "../globales/ClickMe";
import { Board } from "../globales/Board";
import { Informacion2D } from "../globales/Informacion";
import { TextBack } from "../globales/TextBack";
import { Vikingo } from "./Vikingo";
import { PianoPared } from "./PianoPared";
import { useCharacterAnimations } from "../globales/CharacterAnimations";

const SceneB = () => {
  const { clicParedPiano } = useCharacterAnimations();

  return (
    <>
      <PianoPared
        position={[7, -2, -0.2]}
        rotation={[0, 2.9, 0]}
        scale-y={0.9}
      />
      <Vikingo position={[13.5, -2, 11]} scale={1.2} />
      <ClickMe
        size={0.15}
        posy={0.5}
        posx={9}
        message={`  Clic on the \n wall piano! `}
        material={<meshNormalMaterial />}
      />
      <Board
        position={[5.5, -2, -0.2]}
        rotation={[0, 3.6, 0]}
        scale={[1, 1, 0.4]}
      />
      {clicParedPiano && (
        <Informacion2D
          fontsize={0.13}
          pos={[5.5, -0.5, 0]}
          posB={[5.5, -1.2, 0]}
          rotat={[0, 0.8, 0]}
          color={"#000000"}
          color2={"#0A4481"}
          alineacion={"left"}
          value={false}
          messageB={"Clic On Next"}
          message={` Languages \n - React \n - Html \n - CSS \n - JavaScript \n - Python `}
        />
      )}
    </>
  );
};

export default SceneB;
