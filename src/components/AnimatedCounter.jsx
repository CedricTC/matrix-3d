import React, { useState, useEffect, useRef } from 'react'

const MatrixCounter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState({})
  const [matrixChars, setMatrixChars] = useState([])
  const sectionRef = useRef(null)

  // Matrix karakterleri
  const matrixCharacters = ['0', '1', 'א', 'ב', 'ד', 'ה', 'ו', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', '2', '3', '4', '5', '6', '7', '8', '9']

  // Matrix Counter verileri
  const counterItems = [
    { number: '11700000000', label: 'SİSTEMDE YAŞAYAN İNSAN', suffix: '', icon: '👤', color: 'text-green-400' },
    { number: '250000', label: 'KAÇMAYA ÇALIŞAN', suffix: '', icon: '🔓', color: 'text-green-400' },
    { number: '1043', label: 'ZION\'DA YAŞAYAN', suffix: '', icon: '🏛️', color: 'text-green-400' },
    { number: '99.7', label: 'KONTROL ALTINDA', suffix: '%', icon: '🔒', color: 'text-green-400' }
  ]

  // Daha yoğun matrix efekti
  useEffect(() => {
    const generateChars = () => {
      const chars = []
      for (let i = 0; i < 10; i++) {
        chars.push({
          id: i,
          char: matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.1,
          size: Math.random() * 0.5 + 0.8
        })
      }
      return chars
    }

    setMatrixChars(generateChars())

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        char: matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)],
        opacity: Math.random() * 0.5 + 0.1
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  
  useEffect(() => {
    if (isVisible) {
      counterItems.forEach((item, index) => {
        let start = 0
        const end = parseFloat(item.number)
        const duration = 3000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [index]: item.suffix === '%' ? start.toFixed(1) : Math.floor(start).toLocaleString()
          }))
        }, 16)
      })
    }
  }, [isVisible])

  const formatNumber = (num, suffix) => {
    if (suffix === '%') return num
    const number = typeof num === 'string' ? parseInt(num.replace(/,/g, '')) : num
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + 'B'
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M'
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K'
    }
    return number.toLocaleString()
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black py-12 overflow-hidden"
    >
      {/* Yoğun Matrix Background */}
      <div className="absolute inset-0">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="absolute font-mono text-green-400 select-none"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              opacity: char.opacity,
              fontSize: `${char.size}rem`,
              textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
              animation: `matrixFall ${1 + Math.random() * 2}s linear infinite`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Daha belirgin grid */}
      <div className="absolute inset-0 opacity-0"
           style={{
             backgroundImage: `
               linear-gradient(rgba(0,255,0,0.5) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,255,0,0.5) 1px, transparent 1px)
             `,
             backgroundSize: '80px 80px'
           }} />

      <div className="relative z-10 max-w-full mx-auto px-6">
        {/* Terminal Header */}
        <div className="mb-12">
          <div className="bg-black/90 border border-green-400/70 rounded-lg p-8 font-mono shadow-lg shadow-green-400/20">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-6">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-green-400 text-xl">MATRIX MAINFRAME v2.1</span>
            </div>
            <div className="text-green-400 text-lg">
              <span className="text-green-300">root@matrix:~$</span> ./population_monitor.exe --real-time
              <span className="animate-pulse ml-2">█</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-mono font-bold text-green-400 mb-8 tracking-wider"
              style={{ textShadow: '0 0 30px #00ff00, 0 0 60px #00ff00' }}>
            POPULATION
          </h2>
          <div className="w-60 h-1 bg-green-400 mx-auto shadow-lg shadow-green-400/50"></div>
          <p className="mt-4 text-green-300 text-xl font-mono">GERÇEK ZAMANLI İZLEME SİSTEMİ</p>
        </div>

        {/* Counter Grid - Genişletilmiş */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {counterItems.map((item, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="bg-black/80 border border-green-400/40 rounded-xl p-10 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 min-h-[400px] backdrop-blur-sm">
                
                {/* Terminal bar */}
                <div className="flex items-center mb-8 pb-4 border-b border-green-400/30">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-500/70 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-500/40 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-green-400 text-sm font-mono">DATA_STREAM_{String(index + 1).padStart(2, '0')}.log</span>
                </div>

                {/* Icon */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto bg-green-400/10 border-2 border-green-400/40 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-green-400/10">
                    {item.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-8">
                  <div className={`text-4xl md:text-5xl font-mono font-bold ${item.color} tracking-wider`} 
                       style={{ textShadow: `0 0 20px ${item.color.includes('green') ? '#00ff00' : item.color.includes('red') ? '#ff0000' : item.color.includes('blue') ? '#0000ff' : '#ffff00'}` }}>
                    {animatedNumbers[index] || (item.suffix === '%' ? '0.0' : '0')}
                    <span className="text-green-300 text-2xl ml-1">{item.suffix}</span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mb-8">
                  <p className="text-green-300 text-lg font-mono uppercase tracking-wide leading-relaxed">
                    {item.label}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-8 w-full bg-green-900/30 rounded-full h-3 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-3000 ease-out shadow-lg shadow-green-400/30"
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 300}ms`
                    }}
                  ></div>
                </div>

                {/* Status */}
                <div className="mt-4 text-sm text-green-400/80 flex justify-between font-mono">
                  <span>STATUS: ACTIVE</span>
                  <span className="animate-pulse text-green-400">●</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom status */}
        <div className="mt-16 bg-black/90 border border-green-400/50 rounded-lg p-8 font-mono shadow-lg shadow-green-400/20">
          <div className="text-green-400 text-xl flex justify-between items-center">
            <span>SYSTEM STATUS: MATRIX OPERATIONAL - NO ANOMALIES DETECTED</span>
            <span className="animate-pulse">█</span>
          </div>
          <div className="mt-2 text-green-300 text-sm">
            LAST UPDATED: {new Date().toLocaleString()} | CONNECTION: SECURE
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrixFall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </section>
  )
}

export default MatrixCounter