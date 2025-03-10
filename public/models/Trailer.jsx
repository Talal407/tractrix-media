/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 trailer.glb 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/trailer.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Wood" geometry={nodes.Wood.geometry} material={materials.floor_roof} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop002" geometry={nodes.walktop002.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop005" geometry={nodes.walktop005.geometry} material={materials.body} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop007" geometry={nodes.walktop007.geometry} material={materials['C_Iron_Corroded_Stained.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop008" geometry={nodes.walktop008.geometry} material={materials['Speckled_Plastic_01.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop010" geometry={nodes.walktop010.geometry} material={materials['Rubber_Grip_01_1.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop011" geometry={nodes.walktop011.geometry} material={materials.Iron_Cast_01} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop013" geometry={nodes.walktop013.geometry} material={materials.Neon_Red} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop021" geometry={nodes.walktop021.geometry} material={materials['Paper_Speaker.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop022" geometry={nodes.walktop022.geometry} material={materials['default.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop034" geometry={nodes.walktop034.geometry} material={materials['jack.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop041" geometry={nodes.walktop041.geometry} material={materials['D_Black_Plastic_Dull.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop042" geometry={nodes.walktop042.geometry} material={materials.Neon_Orange} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop043" geometry={nodes.walktop043.geometry} material={materials.D_Tinted_Glass} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop045" geometry={nodes.walktop045.geometry} material={materials['Plastic_01_1.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop046" geometry={nodes.walktop046.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop047" geometry={nodes.walktop047.geometry} material={materials['D_Grey_Plastic_Aged.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop050" geometry={nodes.walktop050.geometry} material={materials['M_Solar_Cell.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop051" geometry={nodes.walktop051.geometry} material={materials['speaker_side.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop053" geometry={nodes.walktop053.geometry} material={materials['fan.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop054" geometry={nodes.walktop054.geometry} material={materials['Logo.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop062" geometry={nodes.walktop062.geometry} material={materials.D_Bumpy_Plastic} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop063" geometry={nodes.walktop063.geometry} material={materials.D_Bumpy_Plastic_1} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="walktop064" geometry={nodes.walktop064.geometry} material={materials.D_Bumpy_Plastic_2} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <group name="walktop068" position={[-0.045, 5.613, 3.593]} rotation={[2.804, 0, 0]} scale={0.21}>
          <mesh name="walktop040" geometry={nodes.walktop040.geometry} material={materials.body} />
          <mesh name="walktop040_1" geometry={nodes.walktop040_1.geometry} material={materials.Logo} />
          <mesh name="walktop040_2" geometry={nodes.walktop040_2.geometry} material={materials['C_Iron_Corroded_Stained.001']} />
        </group>
        <group name="walktop069" position={[-0.021, 0.851, 3.739]} rotation={[-0.326, 0, 0]} scale={0.21}>
          <mesh name="walktop044" geometry={nodes.walktop044.geometry} material={materials.body} />
          <mesh name="walktop044_1" geometry={nodes.walktop044_1.geometry} material={materials.floor_roof} />
          <mesh name="walktop044_2" geometry={nodes.walktop044_2.geometry} material={materials.LogoMark} />
        </group>
        <mesh name="walktop036" geometry={nodes.walktop036.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.05, 2.429, 1.231]} rotation={[Math.PI / 2, 0, 1.567]} scale={0.21} />
        <group name="walktop038" position={[2.072, 2.841, -1.466]} rotation={[Math.PI / 2, 0, 1.572]} scale={0.21}>
          <mesh name="walktop049" geometry={nodes.walktop049.geometry} material={materials['C_Gun_Metal_03.001']} />
          <mesh name="walktop049_1" geometry={nodes.walktop049_1.geometry} material={materials['Iron_Cast_01_1.001']} />
          <mesh name="walktop049_2" geometry={nodes.walktop049_2.geometry} material={materials['Starry_Night_Paracord.001']} />
          <mesh name="walktop049_3" geometry={nodes.walktop049_3.geometry} material={materials.Logo} />
          <mesh name="walktop049_4" geometry={nodes.walktop049_4.geometry} material={materials['C_Aluminum_Damaged.001']} />
          <mesh name="walktop049_5" geometry={nodes.walktop049_5.geometry} material={materials['Dark_Specks_Paracord.001']} />
        </group>
        <group name="walktop016" position={[1.95, 2.84, 1.231]} rotation={[Math.PI / 2, 0, -1.525]} scale={0.21}>
          <mesh name="walktop052" geometry={nodes.walktop052.geometry} material={materials.C_Gun_Metal_03} />
          <mesh name="walktop052_1" geometry={nodes.walktop052_1.geometry} material={materials['C_Aluminum_Damaged.001']} />
          <mesh name="walktop052_2" geometry={nodes.walktop052_2.geometry} material={materials['Iron_Cast_01_1.001']} />
          <mesh name="walktop052_3" geometry={nodes.walktop052_3.geometry} material={materials['Rubber_Grip_01_2.001']} />
          <mesh name="walktop052_4" geometry={nodes.walktop052_4.geometry} material={materials['Dark_Specks_Paracord.001']} />
          <mesh name="walktop052_5" geometry={nodes.walktop052_5.geometry} material={materials.Logo} />
        </group>
        <mesh name="walktop017" geometry={nodes.walktop017.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.03, 2.443, -1.469]} rotation={[Math.PI / 2, 0, -1.563]} scale={0.21} />
        <group name="walktop018" position={[-2.177, 5.634, 0]} rotation={[Math.PI / 2, 1.397, 0]} scale={0.21}>
          <mesh name="walktop084" geometry={nodes.walktop084.geometry} material={materials.body} />
          <mesh name="walktop084_1" geometry={nodes.walktop084_1.geometry} material={materials.LogoMark} />
          <mesh name="walktop084_2" geometry={nodes.walktop084_2.geometry} material={materials.Logo} />
        </group>
        <group name="walktop019" position={[2.15, 5.634, 0]} rotation={[Math.PI / 2, -1.358, 0]} scale={0.21}>
          <mesh name="walktop056" geometry={nodes.walktop056.geometry} material={materials.body} />
          <mesh name="walktop056_1" geometry={nodes.walktop056_1.geometry} material={materials.LogoMark} />
          <mesh name="walktop056_2" geometry={nodes.walktop056_2.geometry} material={materials.Logo} />
        </group>
        <mesh name="walktop020" geometry={nodes.walktop020.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.03, 4.751, -1.469]} rotation={[Math.PI / 2, 0, -1.563]} scale={0.21} />
        <mesh name="walktop039" geometry={nodes.walktop039.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.05, 4.799, 1.231]} rotation={[Math.PI / 2, 0, 1.567]} scale={0.21} />
        <mesh name="walktop048" geometry={nodes.walktop048.geometry} material={materials['C_Gun_Metal_03.001']} position={[1.95, 5.015, 1.231]} rotation={[Math.PI / 2, 0, -1.525]} scale={0.21} />
        <mesh name="walktop065" geometry={nodes.walktop065.geometry} material={materials['C_Gun_Metal_03.001']} position={[2.072, 5.011, -1.466]} rotation={[Math.PI / 2, 0, 1.572]} scale={0.21} />
        <mesh name="walktop003" geometry={nodes.walktop003.geometry} material={materials['C_Iron_Corroded_Stained.001']} position={[-2.504, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="Stabilizer" geometry={nodes.Stabilizer.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        <mesh name="Stabilizer001" geometry={nodes.Stabilizer001.geometry} material={materials['C_Gun_Metal_03.001']} position={[0, 0, -6.581]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
      </group>
    </group>
  )
}

useGLTF.preload('/trailer.glb')
