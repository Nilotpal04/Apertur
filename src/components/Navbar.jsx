function Navbar() {
    function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-semibold tracking-widest uppercase">
          Apertur
        </h1>

        <ul className="hidden md:flex gap-10 text-sm tracking-wide">
          <li className="hover:text-gray-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-gray-400 cursor-pointer transition">
            Gallery
          </li>

          <li className="hover:text-gray-400 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-gray-400 cursor-pointer transition">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  )
}
}
export default Navbar