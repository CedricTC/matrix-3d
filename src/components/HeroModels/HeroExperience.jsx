import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { useRef, useEffect } from 'react'
import HeroLights from './HeroLights'
import { Room2 } from './Matrix-room'


const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const controlsRef = useRef()

  useEffect(() => {
    if (controlsRef.current) {
     
      const targetAzimuth = 60 * Math.PI / 180  
      controlsRef.current.setAzimuthalAngle(targetAzimuth)
      controlsRef.current.setPolarAngle(Math.PI / 2.5)  // Biraz yukarıdan
      controlsRef.current.update()
    }
  }, [])

  
  const getCameraDistance = () => {
    if (isMobile) return 4
    if (isTablet) return 5
    return 2
  }

  const distance = getCameraDistance()
  const azimuth = 60 * Math.PI / 145  
  const polar = Math.PI / 1.5

  return (
    <Canvas 
      shadows 
      camera={{
        position: [
          distance * Math.sin(polar) * Math.cos(azimuth),
          distance * Math.cos(polar),
          distance * Math.sin(polar) * Math.sin(azimuth)
        ],
        fov: isMobile ? 50 : isTablet ? 45 : 40
      }}
    >
      <HeroLights />
      
      
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={!isTablet}
        maxDistance={isMobile ? 12 : 15}
        minDistance={isMobile ? 3 : 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        enableDamping={true}
        dampingFactor={0.08}
        target={[0, 0, 0]}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />

      <group
        position={isMobile ? [0, -2, 0] : isTablet ? [0, -1.5, 0] : [0, -1, 0]}
        scale={isMobile ? 0.8 : isTablet ? 0.9 : 1}
        rotation={[0, 0, 0]}
      >
        <Room2 />
      </group>
    </Canvas>
  )
}

export default HeroExperience