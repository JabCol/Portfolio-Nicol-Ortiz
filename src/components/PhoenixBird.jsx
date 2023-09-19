import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const PhoenixBird = (props) =>{

    const phoenixRef = useRef()
    const {nodes, materials, animations}  = useGLTF("/assets/models/phoenix_bird/phoenix_bird.glb")
    const { actions } = useAnimations(animations, phoenixRef);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const radius = 2; // Adjust the radius of the circular path as needed
        const speed = 1; // Adjust the speed of rotation as needed
    
        // Calculate new positions in a circular path
        const x = radius * Math.cos(speed * elapsedTime);
        const y = 0
        const z = radius * Math.sin(speed * elapsedTime); // Keep the z-coordinate constant if you want 2D circular motion
    
        if (phoenixRef.current) {
            phoenixRef.current.position.set(x, y, z);
            phoenixRef.current.rotation.set(0, x, 0);
        }
    });
    
    useEffect( ()=>{
        const action = actions["Take 001"]
        action.play()
    } )

    return <>
         <group ref={phoenixRef } {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.625, 0, -17.137]}
          rotation={[-Math.PI / 2, 0, 0.053]}
        >
          <group
            name="5f59736c86d4457fa045aec4aea6b7e0fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    castShadow
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MatI_Ride_FengHuang_01a}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MatI_Ride_FengHuang_01b}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group
                    name="AMesh_Ride_FengHuang_01"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </>
}

export default PhoenixBird;
useGLTF.preload("/assets/models/phoenix_bird/phoenix_bird.glb");


