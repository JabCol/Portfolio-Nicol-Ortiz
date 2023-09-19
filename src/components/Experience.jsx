import { OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import SenCosAnimation from "./SenCosAnimation";
import { Piano } from "./Piano";
import PhoenixBird from "./PhoenixBird";
import Lights from "./Lights";
import Environments from "./Environments";

const Experience = () => {

  const PATH = "/assets/textures/wood/";
  const propsTexture = useTexture({
    map: PATH + "woodColor.jpg",
    // displacementMap: PATH + 'woodHeight.png',
    normalMap: PATH + "woodNormal.jpg",
    roughnessMap: PATH + "woodRoughness.png",
    aoMap: PATH + "woodAO.jpg",
  });

  return (
    <>
      <OrbitControls makeDefault />
      {/* <SenCosAnimation funcion={"seno"} color={"pink"} />
      <SenCosAnimation funcion={"cos"} color={"blue"} /> */}
      <Lights />
      <Environments />
      <Piano position={[0, -2, 0]} scale={0.1}/>
      <PhoenixBird position={[0, 0, 0]} rotation-y={-Math.PI * 0.15} scale={0.0009}/>
      <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry attach="geometry" args={[9, 9]} />
        <meshStandardMaterial {...propsTexture} attach="material" color="red" />
      </mesh>
    </>
  );
};

export default Experience;
