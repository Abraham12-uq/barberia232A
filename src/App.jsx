export default function BarbersEliteWebsite() {
  const services = [
    {
      title: 'Classic Cut',
      subtitle: 'Elegancia atemporal',
      number: '01',
    },
    {
      title: 'Fade Premium',
      subtitle: 'Precisión moderna',
      number: '02',
    },
    {
      title: 'Beard Design',
      subtitle: 'Perfilado perfecto',
      number: '03',
    },
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512690459411-b0fdacec10fd?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div className="bg-white text-black overflow-hidden font-sans">
      {/* Floating Blur Effects */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-gray-200 blur-3xl opacity-40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-gray-300 blur-3xl opacity-30 rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.3em]">
              BARBERS ELITE
            </h1>
          </div>

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-gray-600">
            <a href="#inicio" className="hover:text-black transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-black transition">
              Servicios
            </a>
            <a href="#galeria" className="hover:text-black transition">
              Galería
            </a>
            <a href="#contacto" className="hover:text-black transition">
              Contacto
            </a>
          </nav>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition shadow-2xl">
            Reservar
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-32"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-300 bg-white shadow-lg mb-8">
              <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
              <span className="text-sm uppercase tracking-[0.2em]">
                Hermosillo · Sonora
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
              CORTES
              <br />
              <span className="text-gray-300">DE OTRO</span>
              <br />
              NIVEL.
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
              Una barbería premium diseñada para hombres que buscan presencia,
              estilo y una experiencia visualmente impecable.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-black text-white px-9 py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                Reservar cita
              </button>

              <button className="border border-black px-9 py-5 rounded-2xl text-lg hover:bg-black hover:text-white transition-all">
                Explorar estilos
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16">
              <div>
                <h3 className="text-4xl font-black">+1600</h3>
                <p className="text-gray-500 mt-2">Seguidores</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">130+</h3>
                <p className="text-gray-500 mt-2">Publicaciones</p>
              </div>

              <div>
                <h3 className="text-4xl font-black">232</h3>
                <p className="text-gray-500 mt-2">Estilo premium</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent blur-3xl opacity-60 rounded-full"></div>

            <div className="relative w-full max-w-[550px] rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.25)] border border-gray-200 bg-white p-4 rotate-2 hover:rotate-0 transition duration-700">
              <img
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1600&auto=format&fit=crop"
                alt="Barbería"
                className="rounded-[2.5rem] w-full h-[750px] object-cover"
              />

              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-gray-200">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
                  Barbers Elite
                </p>
                <h3 className="text-2xl font-black">Classic Modern</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-gray-200 bg-black text-white overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap text-3xl font-black tracking-[0.2em] animate-pulse">
          <span>BARBERS ELITE </span>
          <span>PREMIUM EXPERIENCE</span>
          <span>MODERN STYLE</span>
          <span>CLASSIC CUTS</span>
          <span>FADE EXPERTS</span>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
                Servicios Premium
              </p>

              <h2 className="text-6xl font-black leading-none">
                EXPERIENCIA
                <br />
                VISUAL.
              </h2>
            </div>

            <p className="max-w-md text-lg text-gray-600 leading-relaxed">
              Cada detalle está diseñado para crear una barbería moderna,
              elegante y totalmente premium.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white to-gray-100 border border-gray-200 rounded-[2.5rem] p-10 hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.18)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gray-200 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-16">
                    <div className="w-20 h-20 rounded-3xl bg-black text-white flex items-center justify-center text-2xl font-black shadow-2xl">
                      {service.number}
                    </div>

                    <div className="text-gray-300 text-7xl font-black group-hover:text-black transition">
                      232
                    </div>
                  </div>

                  <h3 className="text-4xl font-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-xl text-gray-500 mb-10">
                    {service.subtitle}
                  </p>

                  <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-4">
              Gallery
            </p>

            <h2 className="text-7xl font-black leading-none">
              STYLE
              <br />
              SHOWCASE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gallery.map((image, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-[3rem] relative ${
                  index % 2 === 0 ? 'md:mt-16' : ''
                }`}
              >
                <img
                  src={image}
                  alt="Barber style"
                  className="w-full h-[650px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-black mb-2">
                    Barber Style {index + 1}
                  </h3>
                  <p className="text-gray-300 uppercase tracking-[0.2em] text-sm">
                    Premium Collection
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contacto"
        className="relative py-40 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_55%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-6 py-3 rounded-full bg-black text-white uppercase tracking-[0.3em] text-sm mb-10 shadow-2xl">
            Barbers Elite
          </div>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10">
            RESERVA
            <br />
            TU ESTILO.
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
           Av. Normalistas 464, Colinas de La Normal, 44270 Guadalajara, Jal.
            Lunes a sábado de 11:00 AM a 8:00 PM.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-10 py-5 rounded-2xl text-lg hover:scale-105 transition shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
              Agendar por WhatsApp
            </button>

            <button className="border border-black px-10 py-5 rounded-2xl text-lg hover:bg-black hover:text-white transition">
              Ver Instagram
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
