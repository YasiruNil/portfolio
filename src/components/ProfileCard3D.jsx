import { Suspense, useRef, useCallback, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { TextureLoader, EdgesGeometry, PlaneGeometry } from 'three'
import * as THREE from 'three'

const BASE_URL = import.meta.env.BASE_URL;

function ProfileScene({ mouse, isHovering }) {
  const groupRef = useRef()
  const texture = useLoader(TextureLoader, `${BASE_URL}profile.jpg`)
  const borderGeo = useMemo(() => new EdgesGeometry(new PlaneGeometry(2.48, 3.1)), [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()

    // Auto-oscillate when idle; follow mouse on hover
    const targetY = isHovering.current
      ? mouse.current.x * 0.55
      : Math.sin(t * 0.5) * 0.42          // ±24° oscillation
    const targetX = isHovering.current
      ? -mouse.current.y * 0.32
      : Math.sin(t * 0.35 + 1.0) * 0.12

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.04)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04)
  })

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 0, 6]} intensity={4.5} color="#ffffff" />
      <pointLight position={[4, 4, 5]} intensity={3.0} color="#ffffff" />
      <pointLight position={[-4, -2, 4]} intensity={2.0} color="#00f2ff" />
      <pointLight position={[2, -4, 2]} intensity={1.2} color="#66ccff" />

      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.4}>
        <group ref={groupRef}>
          {/* 3D slab — sides become visible when the card rotates */}
          <mesh position={[0, 0, -0.13]}>
            <boxGeometry args={[2.58, 3.18, 0.26]} />
            <meshStandardMaterial
              color="#001818"
              emissive="#00f2ff"
              emissiveIntensity={0.12}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Profile image on the front face */}
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[2.4, 3.0]} />
            <meshStandardMaterial map={texture} roughness={0.3} metalness={0.1} />
          </mesh>

          {/* Neon border outline */}
          <lineSegments geometry={borderGeo} position={[0, 0, 0.02]}>
            <lineBasicMaterial color="#00f2ff" />
          </lineSegments>

          {/* Cyan sparkle particles */}
          <Sparkles
            count={60}
            scale={[4.5, 5.5, 3]}
            size={1.6}
            speed={0.45}
            color="#00f2ff"
            opacity={0.75}
          />
        </group>
      </Float>
    </>
  )
}

export default function ProfileCard3D() {
  const mouse = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)
  const containerRef = useRef()

  const onMouseMove = useCallback((e) => {
    if (!containerRef.current) return
    isHovering.current = true
    const rect = containerRef.current.getBoundingClientRect()
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }, [])

  const onMouseLeave = useCallback(() => {
    isHovering.current = false
    mouse.current = { x: 0, y: 0 }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-4/5"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Cyberpunk corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-color-accent-cyan z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-color-accent-cyan z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-color-accent-cyan z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-color-accent-cyan z-10 pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <ProfileScene mouse={mouse} isHovering={isHovering} />
        </Suspense>
      </Canvas>
    </div>
  )
}
