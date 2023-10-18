import { useTexture } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

const Floor = ({ dimensiones, color, posi }) => {
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
      <mesh position={posi} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry attach="geometry" args={dimensiones} />
        <meshStandardMaterial
          {...propsTexture}
          attach="material"
          color={color}
        />
      </mesh>
    </>
  );
};

export default Floor;
