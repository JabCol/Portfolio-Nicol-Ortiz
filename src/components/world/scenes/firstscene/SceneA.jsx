import { Piano } from "./Piano";
import { Avatar } from "../globales/Avatar";
import { ClickMe } from "../globales/ClickMe";
import { Board } from "../globales/Board";
import { useCharacterAnimations } from "../globales/CharacterAnimations";
import { Informacion2D } from "../globales/Informacion";
import { Controls } from "../../control/Controls";

const SceneA = () => {
  const { mostrar } = useCharacterAnimations();

  return (
    <>
      <Piano position={[0, -2, 0]} scale={0.1} />
      <Avatar position={[1.4, -2, 1.3]} />
      <ClickMe
        size={0.3}
        posy={1.5}
        message={` Welcome to my \n     portfolio! `}
        material={<meshLambertMaterial />}
      />
      <ClickMe
        size={0.15}
        posy={0}
        posx={1.6}
        message={` Clic on the \n     piano! `}
        material={<meshNormalMaterial />}
      />
      {mostrar && (
        <Board
          position={[-2.5, -2, 1]}
          rotation={[0, 4, 0]}
          scale={[1, 1, 0.4]}
        />
      )}
      {mostrar && (
        <Informacion2D
          fontsize={0.16}
          pos={[-2.43, -0.7, 1]}
          posB={[-2.43, -1.4, 1]}
          rotat={[0, 0.9, 0]}
          color={"#000000"}
          color2={"#0A4481"}
          alineacion={"center"}
          value={true}
          messageB={"Clic On Next"}
          message={` Hey there! \nAs you can notice \n my passions are \n programming \nand music. `}
        />
      )}
    </>
  );
};

export default SceneA;
