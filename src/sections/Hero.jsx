import React from 'react'
import { words } from '../constants/index.js'
//import Button from '../components/button'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter.jsx'


const Hero = () => {
  useGSAP(() => {
    // System Boot Sequence
    gsap.timeline()
      .fromTo(".boot-sequence", 
        { opacity: 0 },
        { opacity: 1, duration: 0.1, stagger: 0.05 }
      )
      .fromTo(".terminal-header", 
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(".ascii-art", 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo(".system-info", 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      )
      .fromTo(".command-prompt", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )

    // Matrix Code Rain
    gsap.to(".matrix-rain", {
      y: "100vh",
      duration: () => gsap.utils.random(4, 8),
      repeat: -1,
      ease: "none",
      stagger: {
        each: 0.1,
        repeat: -1
      }
    })

    // Glitch Effects
    gsap.to(".glitch-text", {
      x: () => gsap.utils.random(-2, 2),
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })

    // Terminal Cursor
    gsap.to(".cursor", {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })

    // Hacking Progress Bars
    gsap.to(".progress-bar", {
      width: "100%",
      duration: 3,
      repeat: -1,
      ease: "power2.inOut",
      stagger: 0.5,
      yoyo: true
    })

    // Floating Particles
    gsap.to(".particle", {
      y: () => gsap.utils.random(-20, 20),
      x: () => gsap.utils.random(-20, 20),
      rotation: () => gsap.utils.random(0, 360),
      duration: () => gsap.utils.random(2, 4),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    })

    // Screen Flicker
    gsap.to(".screen-flicker", {
      opacity: () => gsap.utils.random(0.95, 1),
      duration: 0.1,
      repeat: -1,
      ease: "none"
    })
  })

  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?"
  const bootMessages = [
    "MATRIX BAĞLANTISI BAŞLATILIYOR...",
    "NÖRAL AĞLAR YÜKLENİYOR...",
    "GÜVENLİ TÜNEL KURULUYOR...",
    "GÜVENLİK DUVARI AŞILIYOR...",
    "ERİŞİM ONAYLANDI"
  ]

  const systemCommands = [
    { cmd: "whoami", output: "neo@matrix:~$ Full Stack Geliştirici" },
    { cmd: "cat /proc/skills", output: "React • Next.js • Node.js • Python • AI/ML" },
    { cmd: "grep -r 'location'", output: "İstanbul, Türkiye" },
    { cmd: "systemctl status neo.service", output: "1999'dan beri çalışıyor" }
  ]

  return (
    <section id="hero" className='relative min-h-screen bg-black overflow-hidden font-mono pt-20 lg:pt-24'>
      
      {/* Matrix Rain Background */}
      <div className='absolute inset-0 pointer-events-none opacity-10'>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className='matrix-rain absolute text-green-400 font-bold leading-none'
            style={{
              left: `${i}%`,
              top: '-100px',
              fontSize: `${Math.random() * 12 + 8}px`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>

      {/* Screen Overlay Effect */}
      <div className='screen-flicker absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent pointer-events-none'></div>
      
      {/* Scanlines */}
      <div className='absolute inset-0 pointer-events-none opacity-20'>
        <div className='h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]'></div>
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='particle absolute w-1 h-1 bg-green-400 rounded-full opacity-30'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className='relative z-10 flex min-h-screen'>
        
        {/* Main Terminal Interface */}
        <div className='w-full lg:w-3/5 p-6 lg:p-12'>
          
          {/* Terminal Window */}
          <div className='terminal-window bg-black border-2 border-green-400/50 rounded-lg shadow-2xl shadow-green-400/20 h-full max-h-[90vh] overflow-hidden'>
            
            {/* Terminal Header */}
            <div className='terminal-header bg-green-400/10 border-b border-green-400/30 p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex gap-2'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                </div>
                <span className='text-green-400 text-sm'>neo@matrix: ~/portfolyo</span>
              </div>
              <div className='text-green-400/60 text-xs'>
                {new Date().toLocaleString('tr-TR')}
              </div>
            </div>

            {/* Terminal Content */}
            <div className='p-6 space-y-6 h-full overflow-y-auto'>
              
              {/* Boot Sequence */}
              <div className='space-y-1'>
                {bootMessages.map((msg, i) => (
                  <div key={i} className='boot-sequence text-green-400 text-sm opacity-0'>
                    <span className='text-green-400/60'>[{String(i + 1).padStart(2, '0')}]</span> {msg}
                  </div>
                ))}
              </div>

              {/* ASCII Art Logo */}
              <div className='ascii-art text-green-400 text-xs leading-tight opacity-0'>
                <pre>{`
 ███▄    █ ▓█████  ▒█████  
 ██ ▀█   █ ▓█   ▀ ▒██▒  ██▒
▓██  ▀█ ██▒▒███   ▒██░  ██▒
▓██▒  ▐▌██▒▒▓█  ▄ ▒██   ██░
▒██░   ▓██░░▒████▒░ ████▓▒░
░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▒░▒░ 
░ ░░   ░ ▒░ ░ ░  ░  ░ ▒ ▒░ 
   ░   ░ ░    ░   ░ ░ ░ ▒  
         ░    ░  ░    ░ ░  
                `}</pre>
              </div>

              {/* System Information */}
              <div className='space-y-3'>
                <div className='text-green-400 text-lg font-bold glitch-text'>
                  === SİSTEM PROFİLİ ===
                </div>
                
                {systemCommands.map((item, i) => (
                  <div key={i} className='system-info space-y-1 opacity-0'>
                    <div className='text-green-400'>
                      <span className='text-green-400/80'>$</span> {item.cmd}
                    </div>
                    <div className='text-green-300 pl-4'>
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Matrix */}
              <div className='space-y-3'>
                <div className='text-green-400 text-lg font-bold'>
                  === YETENEKLERİM ===
                </div>
                
                {[
                  { skill: "React Geliştirme", level: 95 },
                  { skill: "Node.js Backend", level: 90 },
                  { skill: "AI/ML Entegrasyonu", level: 85 },
                  { skill: "Sistem Mimarisi", level: 88 },
                  { skill: "Veritabanı Tasarımı", level: 82 }
                ].map((item, i) => (
                  <div key={i} className='system-info space-y-1 opacity-0'>
                    <div className='flex justify-between text-green-400'>
                      <span>{item.skill}</span>
                      <span>%{item.level}</span>
                    </div>
                    <div className='w-full bg-green-400/20 h-2 rounded'>
                      <div 
                        className='progress-bar h-full bg-green-400 rounded'
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Command Prompt */}
              <div className='command-prompt space-y-2 opacity-0'>
                <div className='text-green-400'>
                  <span className='text-green-400/80'>$</span> ./iletisim --mod=ise_al
                </div>
                <div className='text-green-300 pl-4'>
                  İletişim protokolü başlatılıyor...
                </div>
                <div className='text-green-300 pl-4'>
                  Görev parametrelerini almaya hazır.
                </div>
                <div className='flex items-center text-green-400'>
                  <span className='text-green-400/80'>$</span>
                  <span className='cursor ml-2'>|</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Side Panel - Matrix Code & Stats */}
        <div className='hidden lg:block lg:w-2/5 p-6'>
          
          {/* 3D Experience Container */}
          <div className='relative h-96 mb-6 bg-black border border-green-400/30 rounded-lg overflow-hidden'>
            <HeroExperience />
            
            {/* Overlay Grid */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none'></div>
            
            {/* Corner Brackets */}
            <div className='absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-green-400'></div>
            <div className='absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-green-400'></div>
            <div className='absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-green-400'></div>
            <div className='absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-green-400'></div>
          </div>

          {/* System Status Panel */}
          <div className='bg-black border border-green-400/50 rounded-lg p-6 mb-6'>
            <div className='text-green-400 text-lg font-bold mb-4'>
              === SİSTEM DURUMU ===
            </div>
            
            <div className='space-y-3 text-sm'>
              <div className='flex justify-between'>
                <span className='text-green-400/80'>CPU Kullanımı:</span>
                <span className='text-green-400'>%12</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-green-400/80'>Bellek:</span>
                <span className='text-green-400'>2.1GB / 16GB</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-green-400/80'>Ağ:</span>
                <span className='text-green-400'>GÜVENLİ</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-green-400/80'>Durum:</span>
                <span className='text-green-400 animate-pulse'>ÇEVRİMİÇİ</span>
              </div>
            </div>
          </div>

          {/* Matrix Code Stream */}
          <div className='bg-black border border-green-400/50 rounded-lg p-6 h-112 overflow-hidden'>
            <div className='text-green-400 text-lg font-bold mb-4'>
              === MATRIX VERİ AKIŞI ===
            </div>
            
            <div className='space-y-2 text-xl text-green-400/100 leading-tight'>
              {[...Array(20)].map((_, i) => (
                <div key={i} className='glitch-text'>
                  {Array.from({ length: 90 }, () => 
                    matrixChars[Math.floor(Math.random() * matrixChars.length)]
                  ).join('')}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='mt-6 space-y-4'>
           
            
            <div className='flex gap-4'>
              <button className='flex-1 h-12 bg-red-500/20 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-mono text-sm'>
                KIRMIZI HAP
              </button>
              <button className='flex-1 h-12 bg-blue-500/20 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-mono text-sm'>
                MAVİ HAP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className='relative z-10'>
        <AnimatedCounter />
        
      </div>

      <style jsx>{`
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        .glitch-text {
          animation: glitch 0.3s infinite;
        }
        
        @keyframes matrix-rain {
          0% { opacity: 0; transform: translateY(-100px); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateY(100vh); }
        }
        
        .matrix-rain {
          animation: matrix-rain 8s linear infinite;
        }
        
        .terminal-window {
          box-shadow: 
            0 0 20px rgba(0, 255, 0, 0.3),
            inset 0 0 20px rgba(0, 255, 0, 0.1);
        }
        
        @media (max-width: 1024px) {
          .ascii-art pre {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero