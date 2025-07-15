import React, { useRef, useEffect, useState } from 'react';

const TechStack = () => {
  const wantedCriminals = [
    {
      name: "Neo",
      image: "./images/Neo.png",
      crime: "Matrix'i Hackleme",
      bounty: "50,000,000",
      status: "SON DERECE TEHLİKELİ"
    },
    {
      name: "Trinity",
      image: "./images/Trinity.png",
      crime: "Sistem Sızması",
      bounty: "35,000,000",
      status: "SİLAHLI & TEHLİKELİ"
    },
    {
      name: "Morpheus",
      image: "./images/Morpheus.png",
      crime: "Terörist Faaliyetler",
      bounty: "40,000,000",
      status: "TERÖRİST LİDERİ"
    },
    {
      name: "Smith",
      image: "./images/Smith.png",
      crime: "Program Bozma",
      bounty: "100,000,000",
      status: "HAİN AJAN"
    },
  ];

  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoaded(true);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fare takip efekti
  useEffect(() => {
    const section = sectionRef.current;
    const handleMouseMove = (e) => {
      const icons = section.querySelectorAll('.wanted-card');
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateX = (mouseY / 150) * -1;
        const rotateY = (mouseX / 150);
        icon.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix Arka Plan Efekti */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-20"></div>
        <div className="circuit-pattern opacity-15"></div>
        <div className="floating-particles"></div>
        <div className="scanning-lines"></div>
      </div>

      {/* Terminal Başlığı */}
      <div className="relative z-10 p-6">
        <div className="border border-red-500 bg-black bg-opacity-80 p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-red-300">ARANANLAR.EXE</h1>
            <span className="text-sm text-red-300">[{currentTime}] UYARI DURUMU: MAKSİMUM</span>
          </div>
          <div className="text-center">
            <div className="text-red-400 animate-pulse text-lg font-bold">
              
            </div>
          </div>
        </div>

        {/* Ana İçerik */}
        <section ref={sectionRef} id="wanted" className="relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-300 mb-4 glitch-text">
              [ EN ÇOK ARANANLAR ]
            </h1>
            <p className="text-lg text-red-400">
              &gt; MATRİX SİSTEMİNİN EN TEHLİKELİ SUÇLULARI
            </p>
          </div>

          {/* Aranan Kartlar - 4 Büyük Kart */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto px-4">
            {wantedCriminals.map((criminal, index) => (
              <div key={criminal.name} className="wanted-card group">
                {/* Aranan Poster Kutusu */}
                <div className="wanted-container border-2 border-red-500 bg-black bg-opacity-95 p-8 rounded-xl relative overflow-hidden hover:border-red-300 transition-all duration-500 min-h-[500px]">

                  {/* Aranan Poster Başlığı */}
                  <div className="text-center mb-6">
                    <div className="text-red-400 text-3xl font-bold mb-2">ARANIYOR</div>
                    <div className="text-red-300 text-xs">DİRİ YA DA ÖLÜ</div>
                  </div>

                  {/* Suçlu Fotoğraf Alanı */}
                  <div className="photo-container h-135 bg-gray-900 border-2 border-red-600 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={criminal.image}
                      alt={criminal.name}
                      className="w-full h-full object-cover rounded opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTExIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZjAwIiBmb250LXNpemU9IjE2Ij5JTUFHRSBOT1QgRk9VTkQ8L3RleHQ+Cjwvc3ZnPg==";
                      }}
                    />

                    {/* Fotoğraf üstü efektleri */}
                    <div className="absolute inset-0 border-2 border-red-500 rounded-lg animate-pulse opacity-50"></div>
                    <div className="absolute top-2 right-2 text-red-400 text-xs font-bold bg-black bg-opacity-70 p-1 rounded">
                      {criminal.status}
                    </div>
                  </div>

                  {/* Suçlu Bilgisi */}
                  <div className="text-center">
                    <div className="text-red-300 font-bold text-2xl mb-2">
                      {criminal.name.toUpperCase()}
                    </div>

                    {/* Suç */}
                    <div className="text-red-400 text-sm mb-3">
                      <div className="font-bold">SUÇU:</div>
                      <div>{criminal.crime}</div>
                    </div>

                    {/* Ödül */}
                    <div className="text-green-400 text-lg font-bold mb-3">
                      ÖDÜL: ${criminal.bounty}
                    </div>

                    {/* Durum Göstergesi */}
                    <div className="flex items-center justify-center space-x-2 text-sm mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400">AKTİF ARANMA</span>
                    </div>

                    {/* Tehlike Seviyesi */}
                    <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-2000 ease-out rounded-full"
                        style={{
                          width: isLoaded ? '100%' : '0%',
                          transitionDelay: `${index * 300}ms`
                        }}
                      ></div>
                    </div>

                    {/* Ekstra bilgiler */}
                    <div className="mt-4 text-xs text-red-500">
                      <div>&gt; TEHLİKE SEVİYESİ: MAKSİMUM</div>
                      <div>&gt; DURUM: KAÇAK</div>
                    </div>
                  </div>

                  {/* Üzerine Gelince Efekti */}
                  <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>

                  {/* Matrix kod yağmuru efekti (üzerine gelince) */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                    <div className="matrix-rain text-xs text-red-500">
                      {Array.from({length: 30}, (_, i) => (
                        <div key={i} className="animate-pulse" style={{animationDelay: `${i * 50}ms`}}>
                          {Math.random().toString(36).substring(7)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Köşe süslemeleri */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-red-500 opacity-50"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-red-500 opacity-50"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-red-500 opacity-50"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-red-500 opacity-50"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Alt Terminal Çıktısı */}
          
        </section>
      </div>

      <style jsx>{`
        .matrix-bg {
          background-image:
            linear-gradient(90deg, rgba(255,0,0,0.2) 1px, transparent 1px),
            linear-gradient(rgba(255,0,0,0.2) 1px, transparent 1px);
          background-size: 30px 30px;
          width: 100%;
          height: 100%;
          animation: matrix-scroll 25s linear infinite;
        }

        .circuit-pattern {
          background-image:
            radial-gradient(circle at 25% 25%, rgba(255,0,0,0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255,0,0,0.1) 2px, transparent 2px),
            linear-gradient(45deg, transparent 40%, rgba(255,0,0,0.05) 50%, transparent 60%);
          background-size: 60px 60px, 60px 60px, 40px 40px;
          width: 100%;
          height: 100%;
          animation: circuit-flow 30s linear infinite;
        }

        .floating-particles {
          background-image:
            radial-gradient(circle at 20% 50%, rgba(255,0,0,0.3) 1px, transparent 1px),
            radial-gradient(circle at 40% 20%, rgba(255,0,0,0.2) 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(255,0,0,0.25) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, rgba(255,0,0,0.15) 1px, transparent 1px);
          background-size: 200px 200px, 150px 150px, 180px 180px, 220px 220px;
          width: 100%;
          height: 100%;
          animation: float-particles 20s ease-in-out infinite;
        }

        .scanning-lines {
          background: linear-gradient(
            90deg,
            transparent 98%,
            rgba(255,0,0,0.1) 100%
          );
          background-size: 100px 100%;
          width: 100%;
          height: 100%;
          animation: scan 8s linear infinite;
        }

        @keyframes matrix-scroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        @keyframes circuit-flow {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(20px, 20px) rotate(360deg); }
        }

        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }

        @keyframes scan {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100vw); }
        }

        .glitch-text {
          animation: glitch 3s linear infinite;
          text-shadow:
            0 0 10px rgba(255,0,0,0.5),
            0 0 20px rgba(255,0,0,0.3),
            0 0 30px rgba(255,0,0,0.1);
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
            text-shadow:
              0 0 10px rgba(255,0,0,0.5),
              0 0 20px rgba(255,0,0,0.3),
              0 0 30px rgba(255,0,0,0.1);
          }
          10% {
            transform: translate(-2px, 2px);
            text-shadow:
              2px 0 0 rgba(0,255,0,0.5),
              -2px 0 0 rgba(0,255,255,0.5);
          }
          20% {
            transform: translate(-2px, -2px);
            text-shadow:
              2px 0 0 rgba(0,255,0,0.5),
              -2px 0 0 rgba(0,255,255,0.5);
          }
          30% { transform: translate(0); }
          40% {
            transform: translate(2px, 2px);
            text-shadow:
              -2px 0 0 rgba(0,255,0,0.5),
              2px 0 0 rgba(0,255,255,0.5);
          }
          50% { transform: translate(0); }
          60% {
            transform: translate(2px, -2px);
            text-shadow:
              -2px 0 0 rgba(0,255,0,0.5),
              2px 0 0 rgba(0,255,255,0.5);
          }
          70% { transform: translate(0); }
          80% {
            transform: translate(-2px, 2px);
            text-shadow:
              2px 0 0 rgba(0,255,0,0.5),
              -2px 0 0 rgba(0,255,255,0.5);
          }
          90% { transform: translate(0); }
        }

        .wanted-card {
          transition: all 0.5s ease;
          transform-style: preserve-3d;
        }

        .wanted-card:hover {
          transform: scale(1.05) rotateY(5deg);
        }

        .wanted-container:hover {
          box-shadow:
            0 0 50px rgba(255, 0, 0, 0.4),
            inset 0 0 20px rgba(255, 0, 0, 0.1);
          border-color: rgba(255, 0, 0, 0.8);
        }

        .matrix-rain {
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .matrix-rain > div {
          writing-mode: vertical-rl;
          font-size: 10px;
          line-height: 1;
          opacity: 0.7;
        }

        .photo-container img {
          filter: grayscale(50%) contrast(110%);
        }

        .photo-container:hover img {
          filter: grayscale(0%) contrast(120%);
        }
      `}</style>
    </div>
  );
};

export default TechStack;