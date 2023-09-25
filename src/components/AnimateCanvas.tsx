"use client"
import React, { Fragment, memo, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import vertexShader from "../shader/vertex.glsl";
import fragmentShader from "../shader/fragment.glsl";
import { RawShaderMaterial, TextureLoader } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap'
extend({ OrbitControls })
function AnimateCanvas() {
    const gs = gsap.timeline()
  const [shader, setShader] = useState<THREE.RawShaderMaterial>()
  const ref = useRef<THREE.RawShaderMaterial>()
  const meshref = useRef<THREE.Mesh>(null)
  const mIref = useRef<HTMLDivElement>(null)
  const loader = new TextureLoader()
  function Camera() {
    const { camera } = useThree()
    camera.position.z = 2
    return <Fragment />
  }
  const AllControll = memo(function AllControll() {
    const { camera, gl } = useThree()
    const control = new OrbitControls(camera, gl.domElement)
    control.enableDamping = true
    control.enabled = false
    useEffect(() => {
      if (!shader) return
      if (meshref.current !== null) {
        // meshref.current.rotateY(.5)
        gs.to(camera.position, { z: 1.3, duration: 1 })
        gs.to(meshref.current.rotation, { y: .5, duration: 2, ease: 'linear' })
         
      }

    }, [shader])
    useFrame(({ clock }) => {
      control.update()
      if (ref.current !== undefined) {
        ref.current.uniforms.uTime.value = clock.getElapsedTime()
      }

    })

    return <Fragment />
  })


  useEffect(() => {
    setShader(new RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: {
          value: 0
        },
        uTexture: {
          value: loader.load('/logo2.png')
        }
      }
    }))
  }, [])
  if (shader === undefined) {
    return null
  }
    return (
        <div className='w-full h-full absolute top-0 left-0'>
            <Canvas>
                <directionalLight position={[0, 5, 0]} intensity={1} />
                <AllControll />
                <Camera />
                <mesh ref={meshref}>
                    <planeGeometry args={[2.2, 2, 40, 40]} />
                    { /* @ts-ignore */}
                    <rawShaderMaterial ref={ref} args={[shader]} />

                </mesh>
            </Canvas>
        </div>
    )
}
export default AnimateCanvas