function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-[0.25em] uppercase text-white">
          Apertur
        </h1>

        <ul className="flex gap-10 text-sm uppercase tracking-[0.2em] text-gray-300">
          <li className="hover:text-white hover:-translate-y-0.5 cursor-pointer transition duration-300">
            Home
          </li>

          <li className="hover:text-white hover:-translate-y-0.5 cursor-pointer transition duration-300">
            Gallery
          </li>

          <li className="hover:text-white hover:-translate-y-0.5 cursor-pointer transition duration-300">
            About
          </li>

          <li className="hover:text-white hover:-translate-y-0.5 cursor-pointer transition duration-300">
            Contact
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar