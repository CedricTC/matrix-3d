import React from 'react'

const HeroLights = () => {
  return (
    <>
      
      <ambientLight intensity={0.4} color="#fff8dc" />
      
      
      <directionalLight
        position={[4, 8, 6]}
        intensity={0.8}
        color="#ffd700"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      
      
      <spotLight
        position={[-2, 4, 3]}
        angle={0.4}
        intensity={60}
        penumbra={0.9}
        color="#ff8c42"
        castShadow
        target-position={[-1.5, 0, 0]}
      />
      
      
      <spotLight
        position={[2, 4, 3]}
        angle={0.4}
        intensity={60}
        penumbra={0.9}
        color="#ff8c42"
        castShadow
        target-position={[1.5, 0, 0]}
      />
      
     
      <spotLight
        position={[0, 3, 4]}
        angle={0.3}
        intensity={80}
        penumbra={0.8}
        color="#ffb347"
        castShadow
        target-position={[0, -0.5, 0]}
      />
      
      
      <directionalLight
        position={[0, 6, -4]}
        intensity={0.6}
        color="#ffa500"
        castShadow={false}
      />
      
      
      <pointLight 
        position={[-3, 2, 2]} 
        intensity={30} 
        color="#fff8dc" 
        distance={8}
        decay={0.5}
      />
      
      
      <pointLight 
        position={[3, 2, 2]} 
        intensity={30} 
        color="#fff8dc" 
        distance={8}
        decay={0.5}
      />
      
      
      <pointLight 
        position={[0, 1, 1]} 
        intensity={25} 
        color="#ffeb3b" 
        distance={4}
        decay={0.8}
      />
      
      
      <pointLight 
        position={[0, -1, 0]} 
        intensity={15} 
        color="#ffd700" 
        distance={6}
        decay={0.7}
      />
      
      
      <hemisphereLight
        skyColor="#fff8dc"
        groundColor="#8b4513"
        intensity={0.3}
      />
    </>
  )
}

export default HeroLights