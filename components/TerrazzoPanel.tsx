type Tone = "warm" | "cool" | "dark" | "light" | "earth";

const TONES: Record<Tone, { base: string; specks: string[] }> = {
  warm: {
    base: "#e9ddcd",
    specks: ["#e0481f", "#211c17", "#dca52e", "#f6976d", "#ad9580", "#5c4d40"],
  },
  cool: {
    base: "#e3e6df",
    specks: ["#6b8359", "#211c17", "#e0481f", "#dca52e", "#ad9580", "#3f4f35"],
  },
  dark: {
    base: "#211c17",
    specks: ["#ef6c3e", "#efeae3", "#e8bd4f", "#f6976d", "#ad9580"],
  },
  light: {
    base: "#f8f4ee",
    specks: ["#e0481f", "#dca52e", "#869f78", "#3f352c", "#f6976d"],
  },
  earth: {
    base: "#ddd0bd",
    specks: ["#5c4d40", "#e0481f", "#211c17", "#dca52e", "#f8f4ee"],
  },
};

// Deterministic pseudo-random generator so the server and client render the same pattern
function seededRandom(seed: number) {
  let t = seed + 0x6d2b79f5;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export default function TerrazzoPanel({
  seed = 1,
  tone = "warm",
  className = "",
  speckCount = 24,
  label,
}: {
  seed?: number;
  tone?: Tone;
  className?: string;
  speckCount?: number;
  label?: string;
}) {
  const palette = TONES[tone];
  const rand = seededRandom(seed);
  const gradients: string[] = [];

  for (let i = 0; i < speckCount; i++) {
    const x = (rand() * 100).toFixed(1);
    const y = (rand() * 100).toFixed(1);
    const size = (rand() * 18 + 4).toFixed(1);
    const color = palette.specks[Math.floor(rand() * palette.specks.length)];
    gradients.push(
      `radial-gradient(circle at ${x}% ${y}%, ${color} 0, ${color} ${size}px, transparent ${
        Number(size) + 1
      }px)`
    );
  }

  return (
    <div
      role="img"
      aria-label={label ?? "Polished terrazzo surface sample"}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: palette.base,
        backgroundImage: gradients.join(", "),
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 mix-blend-overlay" />
    </div>
  );
}
