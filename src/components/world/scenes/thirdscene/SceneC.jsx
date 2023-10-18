import { Physics, RigidBody } from "@react-three/rapier";
import { ClickMe } from "../globales/ClickMe";
import { Board } from "../globales/Board";
import { Informacion2D } from "../globales/Informacion";
import { Djembe } from "./Djembe";
import { useTexture } from "@react-three/drei";
import { TextBack } from "../globales/TextBack";
import { useCharacterAnimations } from "../globales/CharacterAnimations";

const SceneC = () => {
  const PATH = "/assets/textures/wood/";
  const propsTexture = useTexture({
    map: PATH + "woodColor.jpg",
    // displacementMap: PATH + 'woodHeight.png',
    normalMap: PATH + "woodNormal.jpg",
    roughnessMap: PATH + "woodRoughness.png",
    aoMap: PATH + "woodAO.jpg",
  });
  const { clicBack2 } = useCharacterAnimations();

  return (
    <>
      <ClickMe
        size={0.15}
        posy={0}
        posx={15}
        message={`        Clic on the \n     instruments! `}
        material={<meshNormalMaterial />}
      />
      <Physics>
        <Djembe position={[14, -1.5, 0]} scale={0.4} />
        <Djembe position={[15, -1.5, 0]} scale={0.4} />
        <Djembe position={[14, -1.5, 1]} scale={0.4} />
        <Djembe position={[15, -1.5, 1]} scale={0.4} />
        <RigidBody type="fixed">
          <mesh
            position={[15, -1.99, 0]}
            rotation-x={-Math.PI / 2}
            receiveShadow
          >
            <planeGeometry attach="geometry" args={[6.5, 6]} />
            <meshStandardMaterial
              {...propsTexture}
              attach="material"
              color={"white"}
            />
          </mesh>
        </RigidBody>
      </Physics>
      <Board
        position={[12, -2, 0]}
        rotation={[0, 4, 0]}
        scale={[1, 1, 0.4]}
      />
      <Informacion2D
        fontsize={0.14}
        pos={[12.03, -0.6, 0.02]}
        posB={[12.03, -1.4, 0.01]}
        rotat={[0, 0.9, 0]}
        color={"#000000"}
        color2={"#0A4481"}
        alineacion={"center"}
        messageC={`Double clic to \ngo to the repository`}
        event={(e) => {
          window.open("https://github.com/JabCol");
        }}
        message={` Aquí dejo mi \nrepositorio GitHub \ndonde podras hechar \nun vistazo a mis \nproyectos`}
      />
      <TextBack pos={[12.3, 0.6, 1]} rotat={[0, 0.6, 0]} /> 
    </>
  );
};

export default SceneC;
