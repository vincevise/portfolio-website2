'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, PointerLockControls } from '@react-three/drei'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { Vector3 } from 'three'

function Ground() {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

function Box({ position = [0, 0.5, -5] }: { position?: [number, number, number] }) {
  const [ref] = useBox<THREE.Mesh>(() => ({
    mass: 1,
    position,
    args: [1, 1, 1],
  }))
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function GLTFModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1} />
}

function Player() {
  const ref = useRef<any>()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])
  const direction = new THREE.Vector3()
  const keys = useRef<{ [key: string]: boolean }>({})

  const [bodyRef, api] = useBox<THREE.Mesh>(() => ({
    mass: 1,
    position: [0, 1, 5],
    args: [1, 1, 1],
    fixedRotation: true,
  }))

  useFrame(() => {
    api.velocity.subscribe((v:any) => (velocity.current = v))

    const speed = 5
    direction.set(
      (keys.current['KeyD'] ? 1 : 0) - (keys.current['KeyA'] ? 1 : 0),
      0,
      (keys.current['KeyS'] ? 1 : 0) - (keys.current['KeyW'] ? 1 : 0)
    )
    direction.normalize().multiplyScalar(speed).applyEuler(camera.rotation)

    api.velocity.set(direction.x, velocity.current[1], direction.z)

    if (bodyRef.current) {
      const pos = bodyRef.current.position
      camera.position.set(pos.x, pos.y, pos.z)
    }
  })

  const handleKeyDown = (e: KeyboardEvent) => {
    keys.current[e.code] = true
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    keys.current[e.code] = false
  }

  useState(() => {
    if(window){

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
  })

  return <mesh ref={bodyRef as React.RefObject<THREE.Mesh>} />
}

export default function FpvScene() {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows camera={{ fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[10, 10, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Physics>
          <Ground />
          <Box position={[0, 0.5, -5]} />
          <Player />
          <GLTFModel url="/3d/canteen/canteen_borders.gltf" />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </div>
  )
}
