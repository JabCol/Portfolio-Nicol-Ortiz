import { Canvas } from "@react-three/fiber";
import Info from "./Info";
import Experience from "./Experience";

const App = () => {
  // Camera settings
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };

  return (
    <>
      <Info
        name={"Nicol Valeria Ortiz R."}
        biografhy={"I'm a programmer at Universidad del Valle"}
      />
      <Canvas shadows camera={cameraSettings}>
        <Experience />
      </Canvas>
    </>
  );
};
export default App;
