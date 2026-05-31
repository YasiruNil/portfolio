import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

function SparkleScene() {
  return (
    <Sparkles
      count={180}
      scale={[32, 22, 12]}
      size={2.2}
      speed={0.25}
      color="#00f2ff"
      opacity={0.55}
    />
  )
}

export default function BackgroundSparkles() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        dpr={1}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <SparkleScene />
      </Canvas>
    </div>
  )
}
