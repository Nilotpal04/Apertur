function PhotoCard({ image, title, location }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl mb-6 break-inside-avoid">
      
      <img
        src={image}
        alt={title}
        className="w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

      <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="text-sm text-gray-300 mt-1 tracking-wide uppercase">
          {location}
        </p>
      </div>
    </div>
  )
}

export default PhotoCard