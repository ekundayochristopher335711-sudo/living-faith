import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import logoUrl from "@/assets/logo.png";

function ChurchCross({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const beamColor = isDark ? "#FF4444" : "#C41E3A";
  const emissiveColor = isDark ? "#aa1122" : "#6a0e1d";

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0.5, 0]}>
        {/* Vertical beam */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.15, 2.2, 0.15]} />
          <meshStandardMaterial
            color={beamColor}
            roughness={0.15}
            metalness={0.95}
            emissive={emissiveColor}
            emissiveIntensity={isDark ? 0.6 : 0.4}
          />
        </mesh>
        {/* Horizontal beam */}
        <mesh position={[0, 0.45, 0]}>
          <boxGeometry args={[1.4, 0.15, 0.15]} />
          <meshStandardMaterial
            color={beamColor}
            roughness={0.15}
            metalness={0.95}
            emissive={emissiveColor}
            emissiveIntensity={isDark ? 0.6 : 0.4}
          />
        </mesh>
      </group>
    </Float>
  );
}

function GlowingSphere({ position, scale, isDark }: { position: [number, number, number]; scale: number; isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const sphereColor = isDark ? "#FF4444" : "#C41E3A";
  const emissiveColor = isDark ? "#aa1122" : "#6a0e1d";

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 64]} />
      <MeshDistortMaterial
        color={sphereColor}
        roughness={0.08}
        metalness={1}
        distort={0.35}
        speed={1.2}
        emissive={emissiveColor}
        emissiveIntensity={isDark ? 0.5 : 0.3}
      />
    </mesh>
  );
}

function ParticleRing({ isDark }: { isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const particleColor = isDark ? new THREE.Color("#FF4444") : new THREE.Color("#C41E3A");

  const particles = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 0.8;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#F5F5DC"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingOrbs({ isDark }: { isDark: boolean }) {
  return (
    <>
      <GlowingSphere position={[-3, 1.5, -2]} scale={0.5} isDark={isDark} />
      <GlowingSphere position={[3.5, -1, -3]} scale={0.7} isDark={isDark} />
      <GlowingSphere position={[0, -2.5, -1]} scale={0.35} isDark={isDark} />
    </>
  );
}

export default function FluidBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ambientColor = isDark ? "#8B8B8B" : "#F5F5DC";
  const accentLightColor = isDark ? "#FF6666" : "#C41E3A";

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]}>
        <fog attach="fog" args={[isDark ? "#1a1a2e" : "#0A0A0A", 5, 18]} />
        <ambientLight intensity={isDark ? 0.3 : 0.2} color={ambientColor} />
        <directionalLight position={[5, 8, 5]} intensity={isDark ? 0.9 : 1.2} color={ambientColor} />
        <directionalLight position={[-3, -2, 4]} intensity={isDark ? 0.6 : 0.4} color={accentLightColor} />
        <pointLight position={[0, 3, 3]} intensity={isDark ? 1.1 : 0.8} color={accentLightColor} distance={10} decay={2} />
        <pointLight position={[0, -3, 2]} intensity={isDark ? 0.5 : 0.3} color={ambientColor} distance={8} decay={2} />

        <ChurchCross isDark={isDark} />
        <ParticleRing isDark={isDark} />
        <FloatingOrbs isDark={isDark} />
      </Canvas>
    </div>
  );
}
