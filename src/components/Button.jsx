const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      }}
      className={`${className ?? ''} matrix-button-wrapper inline-block cursor-pointer group`}
    >
      <div className="relative bg-black/80 border-2 border-green-400/50 rounded-lg px-8 py-4 font-mono text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 overflow-hidden">
        
        {/* Terminal header */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-green-900/20 border-b border-green-400/30 flex items-center px-3">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="ml-2 text-green-400 text-xs">execute.sh</span>
        </div>

        {/* Button content */}
        <div className="pt-6 flex items-center justify-center space-x-3">
          <span className="text-green-300 text-xs">$</span>
          <span className="text-green-400 font-semibold tracking-wide uppercase">
            {text}
          </span>
          
          {/* Matrix arrow */}
          <div className="transform group-hover:translate-y-1 transition-transform duration-300">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              className="text-green-400"
              style={{ filter: 'drop-shadow(0 0 5px #00ff00)' }}
            >
              <path 
                fill="currentColor" 
                d="M8 12l-4-4h2.5V4h3v4H12l-4 4z"
              />
            </svg>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Terminal cursor */}
        <div className="absolute bottom-2 right-3 text-green-400 text-xs animate-pulse">█</div>
      </div>
    </a>
  );
};

export default Button;