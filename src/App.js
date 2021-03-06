import './styles.css';

import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from "./models/Earth2"
import Sat from "./models/Sat"

function App() {
  var x = 8;
  return (
    <main>
      <h1>Hello World</h1>
      <div class="earth-div">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls />

          <Suspense fallback={null} >
            <Earth position={[0, 0, 0]} name="Earth"/>
            <Sat position={[0, 0, 0]} name="Sat"/>
          </Suspense>

        </Canvas>
      </div>
    </main>
  )
}

export default App;
