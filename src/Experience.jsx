import Lights from "./components/world/staging/Lights";
import Environments from "./components/world/staging/Environments";
import { Controls } from "./components/world/control/Controls";
import { Perf } from "r3f-perf";
import SceneA from "./components/world/scenes/firstscene/SceneA";
import SceneB from "./components/world/scenes/secondscene/SceneB";
import SceneC from "./components/world/scenes/thirdscene/SceneC";
import Floor from "./components/world/scenes/globales/Floor";

const Experience = () => {
  return (
    <>
      <Controls />
      <Perf position={"top-right"} />
      <Lights />
      <Environments />
      <SceneA />
      <SceneB />
      <SceneC />
      <Floor dimensiones={[23, 7]} color={"red"} posi={[7, -2, 0]} />
    </>
  );
};

export default Experience;
