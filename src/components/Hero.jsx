function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      
      <div>
        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
          Photography Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Capturing <br /> Moments & Mood
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          A personal collection of frames, emotions, lights, shadows,
          and stories through my lens.
        </p>

        <button className="mt-8 border border-white px-6 py-3 hover:bg-white hover:text-black transition duration-300">
          Explore Gallery
        </button>
      </div>

    </section>
  )
}

export default Hero