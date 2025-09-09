import ParticleBackground from "./components/particles";

function App() {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Your main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello Boss 👑</h1>
      </div>
    </div>
  );
}

export default App;
