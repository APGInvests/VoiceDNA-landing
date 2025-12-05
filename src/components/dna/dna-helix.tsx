"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

// Voice-related icons for special nodes
const MicrophoneIcon = () => (
  <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center shadow-lg shadow-coral/50">
    <svg className="w-3 h-3 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  </div>
);

const SoundWaveIcon = () => (
  <div className="w-6 h-6 bg-peach rounded-full flex items-center justify-center shadow-lg shadow-peach/50">
    <svg className="w-3 h-3 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  </div>
);

interface HelixNodeProps {
  position: [number, number, number];
  color: string;
  delay?: number;
  specialType?: "mic" | "wave" | "normal";
}

function HelixNode({ position, color, delay = 0, specialType = "normal" }: HelixNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle pulsing glow effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
    if (ringRef.current) {
      // Rotate ring for sound wave effect
      ringRef.current.rotation.x += 0.02;
    }
  });

  // Special nodes with HTML icons
  if (specialType === "mic" || specialType === "wave") {
    return (
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Sound wave rings for wave type */}
        {specialType === "wave" && (
          <>
            <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.25, 0.02, 8, 32]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.3}
                transparent
                opacity={0.6}
              />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.35, 0.015, 8, 32]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.2}
                transparent
                opacity={0.4}
              />
            </mesh>
          </>
        )}
        {/* HTML icon overlay */}
        <Html center distanceFactor={8}>
          {specialType === "mic" ? <MicrophoneIcon /> : <SoundWaveIcon />}
        </Html>
      </group>
    );
  }

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

interface ConnectorProps {
  start: [number, number, number];
  end: [number, number, number];
}

function Connector({ start, end }: ConnectorProps) {
  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial
        attach="material"
        color="#44403c"
        transparent
        opacity={0.4}
      />
    </line>
  );
}

function DNAStrand() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate helix points with special node markers
  const { nodes1, nodes2, connectors } = useMemo(() => {
    const nodes1: { pos: [number, number, number]; special: "mic" | "wave" | "normal" }[] = [];
    const nodes2: { pos: [number, number, number]; special: "mic" | "wave" | "normal" }[] = [];
    const connectors: { start: [number, number, number]; end: [number, number, number] }[] = [];

    const turns = 2.5;
    const pointsPerTurn = 10;
    const totalPoints = Math.floor(turns * pointsPerTurn);
    const radius = 0.8;
    const height = 6;

    // Indices for special nodes
    const micIndices = [3, 15];
    const waveIndices = [8, 20];

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints;
      const angle = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;

      // Determine special type
      let special1: "mic" | "wave" | "normal" = "normal";
      let special2: "mic" | "wave" | "normal" = "normal";

      if (micIndices.includes(i)) special1 = "mic";
      if (waveIndices.includes(i)) special2 = "wave";

      // First strand
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      nodes1.push({ pos: [x1, y, z1], special: special1 });

      // Second strand (offset by PI)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      nodes2.push({ pos: [x2, y, z2], special: special2 });

      // Connector between strands (every 2 nodes)
      if (i % 2 === 0) {
        connectors.push({
          start: [x1, y, z1],
          end: [x2, y, z2],
        });
      }
    }

    return { nodes1, nodes2, connectors };
  }, []);

  // Slow rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* First strand - Coral */}
      {nodes1.map((node, i) => (
        <HelixNode
          key={`strand1-${i}`}
          position={node.pos}
          color="#fb7185"
          delay={i * 0.2}
          specialType={node.special}
        />
      ))}

      {/* Second strand - Peach */}
      {nodes2.map((node, i) => (
        <HelixNode
          key={`strand2-${i}`}
          position={node.pos}
          color="#fda4af"
          delay={i * 0.2 + Math.PI}
          specialType={node.special}
        />
      ))}

      {/* Connectors */}
      {connectors.map((conn, i) => (
        <Connector key={`conn-${i}`} start={conn.start} end={conn.end} />
      ))}

      {/* Strand lines */}
      <StrandLine nodes={nodes1.map((n) => n.pos)} color="#fb7185" />
      <StrandLine nodes={nodes2.map((n) => n.pos)} color="#fda4af" />
    </group>
  );
}

interface StrandLineProps {
  nodes: [number, number, number][];
  color: string;
}

function StrandLine({ nodes, color }: StrandLineProps) {
  const points = useMemo(() => {
    return nodes.map((n) => new THREE.Vector3(...n));
  }, [nodes]);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points);
  }, [points]);

  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, 0.03, 8, false);
  }, [curve]);

  return (
    <mesh>
      <primitive object={tubeGeometry} attach="geometry" />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.4}
        metalness={0.6}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.2} />

      {/* Main directional light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#fef3c7"
      />

      {/* Accent point lights for glow effect */}
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#fb7185" />
      <pointLight position={[0, -3, -2]} intensity={0.3} color="#fda4af" />

      {/* DNA Helix */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <DNAStrand />
      </Float>
    </>
  );
}

interface DNAHelixProps {
  className?: string;
}

export function DNAHelix({ className }: DNAHelixProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
