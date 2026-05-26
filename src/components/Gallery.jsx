import photos from "../data/photos"
import PhotoCard from "./PhotoCard"

function Gallery() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
            Gallery
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Selected Works
          </h2>
        </div>
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              image={photo.image}
              title={photo.title}
              location={photo.location}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery