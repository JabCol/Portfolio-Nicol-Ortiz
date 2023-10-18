import React, { useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useCharacterAnimations } from "./CharacterAnimations";
import { useFrame } from "@react-three/fiber";

export function Avatar(props) {
  // referencia del objeto
  const avatarRef = useRef();

  //Extraer las cosas importantes del modelo
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/avatar/woman.glb"
  );

  //Extraigo los datos del hook personalizado, para usarlos en este archivo.
  const {
    animationIndex,
    setanimationIndex,
    setAnimations,
    clicPiano,
    clicNext,
    clicNext2,
    clicParedPiano,
    clicBack,
    setAvatar
  } = useCharacterAnimations();

  setAvatar(avatarRef);

  // use animations usa la referencia del modelo, para poder obtener las referencas de lass animaciones del modelo (en los Actions) y los names (lista con los nombre de las animaciones)
  const { actions, names } = useAnimations(animations, avatarRef);

  //Guardo todas las animaciones del modelo en la variable proporcionada por el hook personalizado.
  useEffect(() => {
    setAnimations(names);
  }, [names]);
  //Para modificar la posicion de las manos del avatar

  useFrame(() => {
    avatarRef.current.getObjectByName(
      "LeftForeArm"
    ).position.y = 0.2000002696645584;
    avatarRef.current.getObjectByName(
      "RightForeArm"
    ).position.y = 0.2088442696645584;
  });

  // Se usa useEffect para ejecutar la animación del objeto cada vez que el indice de la animación cambia.
  useEffect(() => {
    //reset, reinicia la aplicaion
    //.fadeIn(0.5): Este método se utiliza para hacer que la animación aparezca gradualmente en lugar de comenzar de manera abrupta. El valor 0.5 es el tiempo (en segundos) que toma la animación para alcanzar su plena intensidad. Puedes ajustar este valor según tus preferencias.
    //play() -> Inicia la animación
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    // Lo que esta dentro se ejecutará cuando el indice cambie
    return () => {
      //Detiene la animación actual gradualmente, para dar paso a la nueva animación
      actions[names[animationIndex]].fadeOut(0.5);
    };
    // Variable a observar
  }, [animationIndex]);

  // =========================================================================

  const [pianoSonata, setPianoSonata] = useState(
    new Audio(
      "/assets/audio/piano-Beethoven – Sonata No.17 Tempest 3rd Movement.mp3"
    )
  );
  const [pianoParedSonata] = useState(
    () =>
      new Audio(
        "/assets/audio/cello-Saint-Saëns The Swan (Cello and Piano) - Jennifer Park.mp3"
      )
  );

  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);

  // function playSonata (pianoSonata){
  //   if (play1) {
  //     pianoSonata.currentTime = 0;
  //     pianoSonata.volume = Math.random();
  //     pianoSonata.play();
  //     pianoParedSonata.loop = true
  //   }else{
  //     pianoSonata.pause();
  //   }
  // }
  useEffect(() => {
    if (play1) {
      pianoSonata.currentTime = 0;
      pianoSonata.volume = Math.random();
      pianoSonata.play();
      pianoSonata.loop = true;
    } else {
      pianoSonata.pause();
    }
  }, [play1]);

  useEffect(() => {
    if (play2) {
      pianoParedSonata.currentTime = 2;
      pianoParedSonata.volume = Math.random();
      pianoParedSonata.play();
      pianoParedSonata.loop = true;
    } else {
      pianoParedSonata.pause();
    }
  }, [play2]);

  useFrame(() => {
    // Si de ha dado click sobre el piano
    if (clicPiano) {
      //Si la posicion del avatar esta lejos a la posicion del piano
      if (avatarRef.current.position.x > -0.1) {
        //rote al avatar
        avatarRef.current.rotation.y = -Math.PI / 2;
        //pongalo a caminar
        setanimationIndex(5);
        //actualice su posición
        avatarRef.current.position.x += -0.006;
        //Si el avatar ya esta cerca del piano
      } else {
        //Rotelo
        avatarRef.current.rotation.y = -Math.PI;
        //pongalo a tocar el piano
        setanimationIndex(3);
        //Inicie la sonata
        setPlay1(true);
      }
      // Si dan clic sobre el Next del tablero
    } else if (clicNext) {
      //Pare la sonata
      setPlay1(false);
      //Si el avatar está lejos de la posicion 9.3
      if (avatarRef.current.position.x < 8) {
        //rotele la posicion
        avatarRef.current.rotation.y = Math.PI / 2;
        //pongalo a caminar
        setanimationIndex(5);
        // Cambie la posicion del avatar (para que simileque camina)
        avatarRef.current.position.x += 0.009;
        // Si el avatar pasa la posicion 9.3
      } else {
        if (clicParedPiano) {
          setanimationIndex(3);
          avatarRef.current.rotation.y = -Math.PI / 2;
          avatarRef.current.position.z = 0.1;
          //Inicie la sonata
          setPlay2(true);
        } else {
          setanimationIndex(4);
        }
      }
    } else if (clicNext2) {
      //avatarRef.current.rotation.y = -Math.PI/2;
      avatarRef.current.position.z = 1.3;
      //PAre la sonata
      setPlay2(false);
      //Si el avatar está lejos de la posicion 9.3
      if (avatarRef.current.position.x < 11.5) {
        //rotele la posicion
        avatarRef.current.rotation.y = Math.PI / 2;
        //pongalo a caminar
        setanimationIndex(5);
        // Cambie la posicion del avatar (para que simileque camina)
        avatarRef.current.position.x += 0.009;
        // Si el avatar pasa la posicion 9.3
      } else {
        setanimationIndex(4);
      }
    } 
    else if (clicBack) {
    if (avatarRef.current.position.x > 1.4) {
      avatarRef.current.position.z = 1.3;
      //rote al avatar
      avatarRef.current.rotation.y = -Math.PI / 2;
      //pongalo a caminar
      setanimationIndex(5);
      //actualice su posición
      avatarRef.current.position.x += -0.006;
      //Si el avatar ya esta cerca del piano
    } else {
      setanimationIndex(4);
    }
  }
  });

  // =========================================================================

  return (
    <group ref={avatarRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/avatar/woman.glb");


