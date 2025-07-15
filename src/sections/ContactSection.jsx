import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Code, Cpu, Terminal } from 'lucide-react';
// import { Matrix } from '../components/ContactExperience/Matrix'; // Bu import kaldırıldı
// import { Phone1 } from '../components/HeroModels/Phone'; // Bu import kaldırıldı
// import HeroExperience from '../components/HeroModels/HeroExperience.jsx' // Bu import kaldırıldı


const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillStyle = Math.random() > 0.98 ? '#FFF' : '#0F0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute left-0 right-0 top-0 h-[150vh] opacity-20"
      style={{ pointerEvents: 'none' }}

    />
  );
};

const GlitchText = ({ children, className = "" }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className={`${glitch ? 'animate-pulse' : ''}`}>
        {children}
      </div>
      {glitch && (
        <>
          <div className="absolute inset-0 text-red-500 opacity-70 transform translate-x-0.5">
            {children}
          </div>
          <div className="absolute inset-0 text-cyan-500 opacity-70 transform -translate-x-0.5">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

const TerminalWindow = ({ children }) => {
  return (
    <div className="bg-black/90 border border-green-500/30 rounded-lg overflow-hidden">
      <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 border-b border-green-500/30">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-green-400 text-sm font-mono ml-4">terminal@matrix:~$</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

// Placeholder for ContactExperience - replace with your actual component
// Bu bileşen kaldırıldığı için artık kullanılmıyor.
/*
const ContactExperience = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-green-400 font-mono text-center">
        <div className="text-2xl mb-4 animate-pulse">◇ 3D MODEL ◇</div>
        <div className="text-sm text-green-600 mb-6">İletişim Deneyimi Bileşeni</div>
        <div className="text-green-500 text-lg">
          Buraya güzel<br/>
          3D modelinizi yerleştirin
        </div>
      </div>
    </div>
  );
};
*/

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const [terminalText, setTerminalText] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const texts = [
      'Bağlantı başlatılıyor...',
      'İletişim protokolleri yükleniyor...',
      'Güvenli kanal oluşturuluyor...',
      'Veri aktarımı için hazır...',
      'Mesajınız bekleniyor...'
    ];

    let textIndex = 0;
    const typeText = () => {
      const text = texts[textIndex];
      let charIndex = 0;
      setTerminalText('');

      const typeInterval = setInterval(() => {
        setTerminalText(text.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === text.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            textIndex = (textIndex + 1) % texts.length;
            typeText();
          }, 2000);
        }
      }, 100);
    };

    typeText();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Aktarım başarılı! Mesaj Matrix\'e gönderildi...');
    setFormData({ name: '', surname: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header with Glitch Effect */}
        <div className="text-center mb-16">
          <GlitchText className="text-6xl font-mono font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              ILETISIM.EXE
            </span>
          </GlitchText>
          <div className="text-green-300 font-mono mb-4">
            [{currentTime.toLocaleTimeString()}] SİSTEM DURUMU: ÇEVRİMİÇİ
          </div>
          <p className="text-lg text-green-300 max-w-2xl mx-auto font-mono">
            &gt; Güvenli iletişim protokolü başlatılıyor<br/>
            &gt; Sinir ağına bağlantı kuruluyor...<br/>
            &gt; Veri aktarımınız için hazır
          </p>
        </div>

        {/* Main Content Grid - Form artık tam genişlikte */}
        <div className="grid lg:grid-cols-1 gap-16 items-start mb-16"> {/* lg:grid-cols-2 yerine lg:grid-cols-1 yapıldı */}
          {/* Left Side - Contact Form (Şimdi tam genişlikte) */}
          <div className="space-y-6">
            <TerminalWindow>
              <div className="space-y-6">
                <div className="text-green-400 font-mono mb-4">
                  &gt; AKTARIM VERİLERİNİ GİRİN:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Küçük ekranlarda tek sütun, orta ekranlarda iki sütun */}
                  <div>
                    <div className="block text-sm font-mono mb-2 text-green-300">
                      &gt; AD:
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-green-500/50 rounded focus:outline-none focus:border-green-400 text-green-400 placeholder-green-600 font-mono"
                      placeholder="Adınızı_girin..."
                    />
                  </div>

                  <div>
                    <div className="block text-sm font-mono mb-2 text-green-300">
                      &gt; SOYAD:
                    </div>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-green-500/50 rounded focus:outline-none focus:border-green-400 text-green-400 placeholder-green-600 font-mono"
                      placeholder="Soyadınızı_girin..."
                    />
                  </div>
                </div>

                <div>
                  <div className="block text-sm font-mono mb-2 text-green-300">
                    &gt; E-POSTA_ADRESİ:
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-green-500/50 rounded focus:outline-none focus:border-green-400 text-green-400 placeholder-green-600 font-mono"
                    placeholder="kullanici@matrix.net"
                  />
                </div>

                <div>
                  <div className="block text-sm font-mono mb-2 text-green-300">
                    &gt; MESAJ_İÇERİĞİ:
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-black border border-green-500/50 rounded focus:outline-none focus:border-green-400 text-green-400 placeholder-green-600 resize-none font-mono"
                    placeholder="Aktarımı başlatın..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black border-2 border-green-500 hover:bg-green-500/10 text-green-400 font-mono font-bold py-4 px-6 rounded transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <Send className="w-5 h-5" />
                  <span>&gt; AKTARIMI ÇALIŞTIR</span>
                </button>
              </div>
            </TerminalWindow>
          </div>

          {/* Right Side - 3D Experience & Terminal Display (Kaldırıldı) */}
          {/*
          <div className="space-y-6">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-green-500/30 min-h-[500px] relative overflow-hidden">
              <div className="w-full h-full relative">
                <HeroExperience/>
              </div>

              <div className="absolute top-3 left-3 text-green-400 font-mono text-xs bg-black/80 px-2 py-1 rounded">
                &gt; 3D_SİNİR_ARAYÜZÜ
              </div>
              <div className="absolute top-3 right-3 text-green-400 font-mono text-xs bg-black/80 px-2 py-1 rounded">
                RENDER: AKTİF
              </div>
              <div className="absolute bottom-3 left-3 text-green-400 font-mono text-xs bg-black/80 px-2 py-1 rounded">
                WEBGL: ETKİN
              </div>
              <div className="absolute bottom-3 right-3 text-green-400 font-mono text-xs bg-black/80 px-2 py-1 rounded">
                FPS: 60
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Bottom - Contact Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <TerminalWindow>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black border border-green-500 rounded flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-mono text-green-300">&gt; E-POSTA</h3>
                <p className="text-green-400 font-mono text-sm">frkakbasred55@gmail.com</p>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black border border-green-500 rounded flex items-center justify-center">
                <Terminal className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-mono text-green-300">&gt; TERMİNAL</h3>
                <p className="text-green-400 font-mono text-sm">+ SPH-N270</p>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black border border-green-500 rounded flex items-center justify-center">
                <Cpu className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-mono text-green-300">&gt; KONUM</h3>
                <p className="text-green-400 font-mono text-sm">İSTANBUL</p>
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="text-green-600 font-mono text-sm">
            Matrix'e hoş geldiniz. Gerçeklik, onu ne yaparsanız odur.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;