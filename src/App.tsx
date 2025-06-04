import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'

type positionType = {
  name: string
  position: [number, number, number]
  color: string
}

const islandPositions : positionType[] = [
  { name: 'home', position: [-16, 0, 6], color: '#eeeeee' },
  { name: 'about', position: [-2, 4, 16], color: '#fdffb6' },
  { name: 'projects', position: [10, -2, 4], color: '#caffbf' },
  { name: 'experience', position: [2, 2, -10], color: '#9bf6ff' },
  { name: 'contact', position: [-8, -2, -8], color: '#a0c4ff' },
]

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        {/* Background and Environment */}
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        {/* Optional: Fog for dreamlike depth */}
        {/* <fog attach="fog" args={['#d0e6f7', 10, 100]} /> */}

        {/* Placeholder object */}
        {islandPositions.map(({ name, position, color }) => (
          <mesh key={name} position={position}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} />
          </mesh>
        ))}

        {/* Camera control (temporary for testing) */}
        <OrbitControls />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
}
