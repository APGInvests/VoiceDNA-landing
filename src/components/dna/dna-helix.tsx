"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface HelixNodeProps {
  position: [number, number, number];
  color: string;
  delay?: number;
}

function HelixNode({ position, color, delay = 0 }: HelixNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle pulsing glow effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

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

// Soundwave connector - vertical bars between the two strands
interface SoundwaveConnectorProps {
  start: [number, number, number];
  end: [number, number, number];
  index: number;
}

function SoundwaveConnector({ start, end, index }: SoundwaveConnectorProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Soundwave bar heights pattern (like an audio waveform)
  const barHeights = [0.15, 0.35, 0.5, 0.35, 0.15];

  const bars = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const direction = endVec.clone().sub(startVec);
    const length = direction.length();
    const numBars = barHeights.length;

    return barHeights.map((height, i) => {
      const t = (i + 0.5) / numBars;
      const pos = startVec.clone().add(direction.clone().multiplyScalar(t));
      return {
        position: [pos.x, pos.y, pos.z] as [number, number, number],
        height: height,
        width: length / (numBars * 2.5),
      };
    });
  }, [start, end]);

  // Animate the bars
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const baseHeight = barHeights[i];
          const pulse = Math.sin(state.clock.elapsedTime * 3 + i * 0.5 + index) * 0.15;
          child.scale.y = baseHeight + pulse;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {bars.map((bar, i) => (
        <mesh key={i} position={bar.position}>
          <boxGeometry args={[bar.width, 1, bar.width]} />
          <meshStandardMaterial
            color={i === 2 ? "#fef3c7" : "#fb7185"}
            emissive={i === 2 ? "#fef3c7" : "#fb7185"}
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function DNAStrand() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate helix points
  const { nodes1, nodes2, connectors } = useMemo(() => {
    const nodes1: [number, number, number][] = [];
    const nodes2: [number, number, number][] = [];
    const connectors: { start: [number, number, number]; end: [number, number, number] }[] = [];

    const turns = 2.5;
    const pointsPerTurn = 10;
    const totalPoints = Math.floor(turns * pointsPerTurn);
    const radius = 0.8;
    const height = 6;

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints;
      const angle = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;

      // First strand
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      nodes1.push([x1, y, z1]);

      // Second strand (offset by PI)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      nodes2.push([x2, y, z2]);

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
      {nodes1.map((pos, i) => (
        <HelixNode
          key={`strand1-${i}`}
          position={pos}
          color="#fb7185"
          delay={i * 0.2}
        />
      ))}

      {/* Second strand - Peach */}
      {nodes2.map((pos, i) => (
        <HelixNode
          key={`strand2-${i}`}
          position={pos}
          color="#fda4af"
          delay={i * 0.2 + Math.PI}
        />
      ))}

      {/* Connectors - middle ones are soundwave bars */}
      {connectors.map((conn, i) => {
        const totalConnectors = connectors.length;
        const middleStart = Math.floor(totalConnectors / 2) - 2;
        const middleEnd = Math.floor(totalConnectors / 2) + 1;
        const isSoundwave = i >= middleStart && i <= middleEnd;

        return isSoundwave ? (
          <SoundwaveConnector
            key={`conn-${i}`}
            start={conn.start}
            end={conn.end}
            index={i}
          />
        ) : (
          <Connector key={`conn-${i}`} start={conn.start} end={conn.end} />
        );
      })}

      {/* Strand lines */}
      <StrandLine nodes={nodes1} color="#fb7185" />
      <StrandLine nodes={nodes2} color="#fda4af" />
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
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
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
