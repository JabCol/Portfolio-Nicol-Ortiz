import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../globales/CharacterAnimations";

export function Vikingo(props) {
  const vikingoRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/vikingo/viking_animated_cellist.glb"
  );
  const { actions } = useAnimations(animations, vikingoRef);
  const { clicParedPiano } = useCharacterAnimations();

  useEffect(() => {
    const action = actions["CHELISTA_ICLOBLENDEWR|A|iCTM"];
    if (clicParedPiano) {
      setTimeout(() => {
        // Accede a la acción de animación y la reproduce
        if (action) {
          action.fadeIn(0.5).play();
        } 
      }, 6800);
    }else{
      action.stop();
    }
  },[clicParedPiano]);

  return (
    <group ref={vikingoRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="CHELISTA_ICLOBLENDEWR_302" scale={0.01}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Metal_Corrogated_Shiny_jpg}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.material_0}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Metal_Seamed_jpg.001"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Helmet_0}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials["6___Default"]}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Metal_Seamed_jpg}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Metal_Embossed_jpg}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.Wood01_0}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.Box_001_0}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.RL_Skin}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.Part_Upper}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials["RL_Skin.001"]}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.Part_Lower}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials["RL_Skin.002"]}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.Part_Shoes}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials["RL_Skin.003"]}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials["RL_Skin.004"]}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Object_43"
                    geometry={nodes.Object_43.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <skinnedMesh
                    name="Object_45"
                    geometry={nodes.Object_45.geometry}
                    material={materials["3___Default"]}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <skinnedMesh
                    name="Object_47"
                    geometry={nodes.Object_47.geometry}
                    material={materials.cello_black}
                    skeleton={nodes.Object_47.skeleton}
                  />
                  <skinnedMesh
                    name="Object_49"
                    geometry={nodes.Object_49.geometry}
                    material={materials.cello_body_cellowood_tga}
                    skeleton={nodes.Object_49.skeleton}
                  />
                  <skinnedMesh
                    name="Object_50"
                    geometry={nodes.Object_50.geometry}
                    material={materials["Mat.001"]}
                    skeleton={nodes.Object_50.skeleton}
                  />
                  <skinnedMesh
                    name="Object_52"
                    geometry={nodes.Object_52.geometry}
                    material={materials.cello_metal}
                    skeleton={nodes.Object_52.skeleton}
                  />
                  <skinnedMesh
                    name="Object_54"
                    geometry={nodes.Object_54.geometry}
                    material={materials.Color_Material_0}
                    skeleton={nodes.Object_54.skeleton}
                  />
                  <skinnedMesh
                    name="Object_56"
                    geometry={nodes.Object_56.geometry}
                    material={materials.Color_Material}
                    skeleton={nodes.Object_56.skeleton}
                  />
                  <skinnedMesh
                    name="Object_58"
                    geometry={nodes.Object_58.geometry}
                    material={materials.Color_Material}
                    skeleton={nodes.Object_58.skeleton}
                  />
                  <skinnedMesh
                    name="Object_60"
                    geometry={nodes.Object_60.geometry}
                    material={materials.Color_Material_0}
                    skeleton={nodes.Object_60.skeleton}
                  />
                  <skinnedMesh
                    name="Object_62"
                    geometry={nodes.Object_62.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_62.skeleton}
                  />
                  <skinnedMesh
                    name="Object_63"
                    geometry={nodes.Object_63.geometry}
                    material={materials.Mat_1}
                    skeleton={nodes.Object_63.skeleton}
                  />
                  <skinnedMesh
                    name="Object_65"
                    geometry={nodes.Object_65.geometry}
                    material={materials.Cylinder_001}
                    skeleton={nodes.Object_65.skeleton}
                  />
                  <skinnedMesh
                    name="Object_67"
                    geometry={nodes.Object_67.geometry}
                    material={materials.cello_black}
                    skeleton={nodes.Object_67.skeleton}
                  />
                  <skinnedMesh
                    name="Object_69"
                    geometry={nodes.Object_69.geometry}
                    material={materials.cello_black}
                    skeleton={nodes.Object_69.skeleton}
                  />
                  <skinnedMesh
                    name="Object_71"
                    geometry={nodes.Object_71.geometry}
                    material={materials.cello_black}
                    skeleton={nodes.Object_71.skeleton}
                  />
                  <skinnedMesh
                    name="Object_73"
                    geometry={nodes.Object_73.geometry}
                    material={materials.cello_black}
                    skeleton={nodes.Object_73.skeleton}
                  />
                  <skinnedMesh
                    name="Object_75"
                    geometry={nodes.Object_75.geometry}
                    material={materials.Part_Cavity}
                    skeleton={nodes.Object_75.skeleton}
                  />
                  <skinnedMesh
                    name="Object_77"
                    geometry={nodes.Object_77.geometry}
                    material={materials.Part_DownTeeth}
                    skeleton={nodes.Object_77.skeleton}
                  />
                  <skinnedMesh
                    name="Object_79"
                    geometry={nodes.Object_79.geometry}
                    material={materials.Beard}
                    skeleton={nodes.Object_79.skeleton}
                  />
                  <skinnedMesh
                    name="Object_81"
                    geometry={nodes.Object_81.geometry}
                    material={materials["Part_Iris.001"]}
                    skeleton={nodes.Object_81.skeleton}
                  />
                  <skinnedMesh
                    name="Object_83"
                    geometry={nodes.Object_83.geometry}
                    material={materials.Part_Iris}
                    skeleton={nodes.Object_83.skeleton}
                  />
                  <skinnedMesh
                    name="Object_85"
                    geometry={nodes.Object_85.geometry}
                    material={materials.Part_Tongue}
                    skeleton={nodes.Object_85.skeleton}
                  />
                  <skinnedMesh
                    name="Object_87"
                    geometry={nodes.Object_87.geometry}
                    material={materials.Part_UpperTeeth}
                    skeleton={nodes.Object_87.skeleton}
                  />
                  <skinnedMesh
                    name="Object_89"
                    geometry={nodes.Object_89.geometry}
                    material={materials["Metal_Brass_Ceiling_jpg.001"]}
                    skeleton={nodes.Object_89.skeleton}
                  />
                  <skinnedMesh
                    name="Object_91"
                    geometry={nodes.Object_91.geometry}
                    material={materials.Metal_Rusted_jpg}
                    skeleton={nodes.Object_91.skeleton}
                  />
                  <skinnedMesh
                    name="Object_92"
                    geometry={nodes.Object_92.geometry}
                    material={materials.Metal_Brass_Ceiling_jpg}
                    skeleton={nodes.Object_92.skeleton}
                  />
                  <skinnedMesh
                    name="Object_94"
                    geometry={nodes.Object_94.geometry}
                    material={materials.cello_string}
                    skeleton={nodes.Object_94.skeleton}
                  />
                  <skinnedMesh
                    name="Object_96"
                    geometry={nodes.Object_96.geometry}
                    material={materials.cello_string}
                    skeleton={nodes.Object_96.skeleton}
                  />
                  <skinnedMesh
                    name="Object_98"
                    geometry={nodes.Object_98.geometry}
                    material={materials.cello_string}
                    skeleton={nodes.Object_98.skeleton}
                  />
                  <skinnedMesh
                    name="Object_100"
                    geometry={nodes.Object_100.geometry}
                    material={materials.cello_string}
                    skeleton={nodes.Object_100.skeleton}
                  />
                  <skinnedMesh
                    name="Object_102"
                    geometry={nodes.Object_102.geometry}
                    material={materials.Toru_003}
                    skeleton={nodes.Object_102.skeleton}
                  />
                  <skinnedMesh
                    name="Object_104"
                    geometry={nodes.Object_104.geometry}
                    material={materials["Toru_003.001"]}
                    skeleton={nodes.Object_104.skeleton}
                  />
                  <skinnedMesh
                    name="Object_106"
                    geometry={nodes.Object_106.geometry}
                    material={materials["Toru_003.002"]}
                    skeleton={nodes.Object_106.skeleton}
                  />
                  <group name="_1Skp_Mesh_Back_Side__260" />
                  <group name="_1Skp_Mesh_Front_Side__261" />
                  <group name="arco_262" />
                  <group name="Arco_violin_2_263" />
                  <group name="Body_264" />
                  <group name="Bone_Eyebrows_L01_265" />
                  <group name="Bone_Eyebrows_L02_266" />
                  <group name="Bone_Eyebrows_R01_267" />
                  <group name="Bone_Eyebrows_R02_268" />
                  <group name="Bone_Eyelid_L_Down_269" />
                  <group name="Bone_Eyelid_L_Up_270" />
                  <group name="Bone_Eyelid_R_Down_271" />
                  <group name="Bone_Eyelid_R_Up_272" />
                  <group name="cello_black_cello_black_273" />
                  <group name="cello_body_cello_body_274" />
                  <group name="cello_metal_cello_metal_275" />
                  <group name="Component_1_Back_Side__276" />
                  <group name="Component_1_Back_Side_001_277" />
                  <group name="Component_1_Front_Side__278" />
                  <group name="Component_1_Front_Side_001_279" />
                  <group name="Cuerdas_0_280" />
                  <group name="Cylinder_001_281" />
                  <group name="knob1_knob1_282" />
                  <group name="knob2_knob2_283" />
                  <group name="knob3_knob3_284" />
                  <group name="knob4_knob4_285" />
                  <group name="Part_Cavity_0_286" />
                  <group name="Part_DownTeeth_287" />
                  <group name="Part_Eyewinker_288" />
                  <group name="Part_L_Eye_289" />
                  <group name="Part_R_Eye_290" />
                  <group name="Part_Tongue_0_291" />
                  <group name="Part_UpperTeeth_292" />
                  <group name="Skp_Mesh_Back_Side__293" />
                  <group name="Skp_Mesh_Front_Side__294" />
                  <group name="string1_string1_295" />
                  <group name="string2_string2_296" />
                  <group name="string3_string3_297" />
                  <group name="string4_string4_298" />
                  <group name="Toru_003_299" />
                  <group name="Toru_003001_300" />
                  <group name="Toru_003002_301" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/vikingo/viking_animated_cellist.glb");
