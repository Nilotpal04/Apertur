function PhotoCard({ image, title, location }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      
      <img
        src={image}
        alt={title}
        className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
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