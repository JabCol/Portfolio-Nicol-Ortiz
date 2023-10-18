import { Cloud, Sky, Stars, Sparkles } from "@react-three/drei";

const Environments = () => {
  return (
    <>
      <Stars count={3000} />
      <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={50} // Width of the full cloud
        depth={5} // Z-dir depth
        segments={20} // Number of particles
        position-y={20}
      />
      <Sky
        distance={450000} // Aumenta la distancia para que la escena parezca más grande
        sunPosition={[0, -100, 0]} // Coloca el sol debajo de la escena
        inclination={0} // Ajusta la inclinación a 0 para simular la noche
        azimuth={0} // Establece el ángulo azimutal en 0 para una orientación específica
        rayleigh={3}
        turbidity={30} // Aumenta la turbidez para dar un aspecto más etéreo
        mieCoefficient={0.005}
        mieDirectionalG={0.8} // Aumenta la luminosidad para las auroras boreales
        exposure={0.5}
      />
      <Sparkles
            color="white"
            count={100}
            size={4}
            fade={false}
            speed={0.5}
            scale={6}
        />
    </>
  );
};

export default Environments;
