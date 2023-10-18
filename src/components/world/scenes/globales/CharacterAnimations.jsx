import { createContext, useContext, useState } from "react";

// Uso de contextos, para compartir datos entre componentes
const CharacterAnimationContext = createContext({});

// Es un componente que actúa como el proveedor del contexto. En su interior, defines el estado y las funciones que deseas compartir.
export const CharacterAnimationProvider = (props) => {
  const [animationIndex, setanimationIndex] = useState(4);
  const [animations, setAnimations] = useState([]);
  const [clicPiano, setClicPiano] = useState(false);
  const [clicNext, setClicNext] = useState(false);
  const [clicNext2, setClicNext2] = useState(false);
  const [clicNext3, setClicNext3] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [clicParedPiano, setClicParedPiano] = useState(false);
  const [clicBack, setClicBack] = useState(false);
  const [currentScene, setCurrentScene] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [activeScene, setActiveScene] = useState('SceneA');

  return (
    //Aquí se utiliza CharacterAnimationContext.Provider para envolver los componentes hijos (props.children). Los valores que deseas proporcionar a través del contexto se especifican en la prop value.
    <CharacterAnimationContext.Provider
      value={{
        animationIndex,
        setanimationIndex,
        animations,
        setAnimations,
        clicPiano,
        setClicPiano,
        clicNext,
        setClicNext,
        clicNext2,
        setClicNext2,
        clicNext3, 
        setClicNext3,
        clicParedPiano,
        setClicParedPiano,
        mostrar,
        setMostrar,
        clicBack,
        setClicBack,
        currentScene,
        setCurrentScene,
        activeScene, 
        setActiveScene,
        avatar, 
        setAvatar
      }}
    >
      {props.children}
    </CharacterAnimationContext.Provider>
  );
};

//useCharacterAnimations es un gancho personalizado que utiliza useContext para acceder al contexto CharacterAnimationContext. Al hacerlo, puedes acceder a las variables y funciones definidas en el proveedor del contexto.
export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationContext);
};
