import { Center, Float, Text3D } from "@react-three/drei";

export const ClickMe = ({message, size, posy, posx, material}) => {
  return (
    <Float>
      <Center position-y={posy} position-x={posx}>
        <Text3D
          font="/assets/fonts/poppins/Poppins_Bold.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.1}
          lineHeight={0.7}
          letterSpacing={0.05}
          size={size}
        >
          {message}
          {material}
        </Text3D>
      </Center>
    </Float>
  );
};


