export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Moments Captured</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Gallery event ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
