export default function HeroSection() {
  return (
    <section className="bg-white pt-16">
      <div className="w-full">
        <div className="relative w-full h-[80vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/heroAnimation.webm" type="video/webm" />
            <img
              src="/bihterAnimation.png"
              alt="Bihter Sabanoğlu"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
    </section>
  );
}