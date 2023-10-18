import { Canvas } from "@react-three/fiber";
import Info from "./components/info/Info";
import Experience from "./Experience";

const App = () => {

  // Camera settings
  const cameraSettings = {
    position: [2, 0, 5],
    fov: 65, //camera angle -> less angle, less view
  };

  return (
    <>
      <Info
        name={"Nicol Valeria Ortiz R."}
        biografhy={"I'm a programmer at Universidad del Valle"}
      />
      <Canvas shadows camera={cameraSettings} >
        <Experience />
      </Canvas>
    </>
  );
};
export default App;
