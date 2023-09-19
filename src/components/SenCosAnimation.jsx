import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { SphereGeometry } from "three";

const SenCosAnimation = ({ funcion, color }) => {
  const sphereRef = useRef(); // Referencia para las esferas
  const lineRef = useRef(); // Referencia para la línea

  // Estado para controlar la dirección de movimiento
  const [moveDirection, setMoveDirection] = useState(1); // 1 para adelante, -1 para atrás

  const trajectoryPoints = []; // Almacena los puntos de la trayectoria

  useFrame((state, delta) => {
    // Parámetros para la animación
    const amplitud = 1; // Amplitud de la oscilación
    const frequency = 2; // Frecuencia de la oscilación
    const limit = 5.3; // Límite en X

    // Función para la posición en Y (seno o coseno)
    const yPosition = funcion === "seno" ? Math.sin(frequency * state.clock.elapsedTime) : Math.cos(frequency * state.clock.elapsedTime);

    // Actualiza la posición de la esfera según la dirección de movimiento
    sphereRef.current.position.x += moveDirection * delta;
    sphereRef.current.position.y = amplitud * yPosition;

    // Agrega el punto actual a la trayectoria
    trajectoryPoints.push(sphereRef.current.position.clone()); // se utiliza para crear una copia del 
                                                              //vector de posición actual de la esfera en Three.js

    // Actualiza la posición de la línea
    lineRef.current.geometry.setFromPoints(trajectoryPoints);

    // Cambia la dirección de movimiento si se alcanza el límite
    if (moveDirection === 1 && sphereRef.current.position.x >= limit) {
      setMoveDirection(-1); // Cambia a la dirección opuesta
    } else if (moveDirection === -1 && sphereRef.current.position.x <= -limit) {
      setMoveDirection(1); // Cambia a la dirección opuesta
    }
  });

  return (
    <>
      <Stars count={3000} />
      <mesh ref={sphereRef} scale={0.2}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshMatcapMaterial color={color} />
      </mesh>
      {/* Línea que representa la trayectoria */}
      <line ref={lineRef} scale={0.1}>
        <bufferGeometry />
        <lineBasicMaterial color={color} linewidth={2} />
      </line>
    </>
  );
};

export default SenCosAnimation;
