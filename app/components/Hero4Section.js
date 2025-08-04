export default function Hero4Section() {
  return (
    <section className="bg-white">
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
          
          {/* Logo */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white drop-shadow-lg">
              Bihter Sabanoğlu
            </h1>
          </div> */}
        </div>
      </div>
    </section>
  );
}