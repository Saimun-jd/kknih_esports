import React from 'react';
import { Gamepad2, Trophy, Zap, Target, Sword, Crown, Clock } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
  formUrl: string;
  image: string;
}

const games: Game[] = [
  {
    id: 'fifa',
    name: 'FIFA',
    icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    gradient: 'from-green-400 to-green-600',
    description: 'The ultimate football experience',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScw9gXC7nctWC6gbMCxINUp3bxJj00DikQNbvQ49xA4SjDkoQ/viewform',
    image: 'https://wallpaperaccess.com/full/14173101.jpg'
  },
  {
    id: 'efootball',
    name: 'eFootball',
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    gradient: 'from-blue-400 to-blue-600',
    description: 'Next-generation football gaming',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdSM4w0pTigThuBvUNw-45VyGI8nuv6YtYr1kLkfRVXIkKTUA/viewform',
    image: 'https://4kwallpapers.com/images/wallpapers/neymar-jr-efootball-3840x2160-22229.jpg'
  },
  {
    id: 'pubg',
    name: 'PUBG',
    icon: <Sword className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    gradient: 'from-orange-400 to-red-600',
    description: 'Battle royale at its finest',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfg_pDmyTkQgOor96qKTtp6_1gGJWQTt_31zHuao7zZi-4Bjw/viewform',
    image: 'https://4kwallpapers.com/images/wallpapers/pubg-playerunknowns-battlegrounds-2022-games-5k-3840x2160-7976.jpg'
  },
  {
    id: 'freefire',
    name: 'Free Fire',
    icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    gradient: 'from-yellow-400 to-orange-600',
    description: 'Fast-paced survival shooter',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfDSG8CsozwvCzij6mk49dv6B03a465cpPxw1rLK3s24EW5nw/viewform',
    image: 'https://sm.ign.com/t/ign_in/screenshot/default/garena-free-fire-734y_njqg.1200.jpg'
  },
  {
    id: 'clashroyale',
    name: 'Clash Royale',
    icon: <Crown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    gradient: 'from-purple-400 to-pink-600',
    description: 'Strategic tower defense battles',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdIXbDQ63bRBtSQYbflaZVE1XZ7KiWP1f31QpdPkyH2upJXFg/viewform',
    image: 'https://www.highgroundgaming.com/wp-content/uploads/2023/10/Clash-Royale-Header.webp'
  }
];

function GameCard({ game }: { game: Game }) {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleClick = () => {
    window.open(game.formUrl, '_blank');
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <div 
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl
        ${isPressed 
          ? 'scale-105 shadow-2xl' 
          : 'hover:scale-105 hover:shadow-2xl'
        }`}
      style={{ height: '400px' }}
    >
      {/* Full Background Image - No opacity reduction */}
      <div className="absolute inset-0">
        <img 
          src={game.image} 
          alt={game.name}
          className={`w-full h-full object-cover transition-all duration-700 
            ${isPressed ? 'scale-110 brightness-110 saturate-110' : 'group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-110'}`}
        />
      </div>
      
      {/* Minimal gradient only at the very bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      {/* Floating Icon in top-left */}
      <div className="absolute top-4 left-4 z-20">
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${game.gradient} shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-white/30
          ${isPressed ? 'scale-110 rotate-12' : 'group-hover:scale-110 group-hover:rotate-12'}`}>
          <div className="text-white">
            {React.cloneElement(game.icon as React.ReactElement, {
              className: 'w-7 h-7'
            })}
          </div>
        </div>
      </div>
      
      {/* Game Title Badge - Top Right */}
      <div className="absolute top-4 right-4 z-20">
        <div className={`px-3 py-1 rounded-full bg-black/70 backdrop-blur-md shadow-lg transition-all duration-300 border border-white/20
          ${isPressed ? 'scale-105' : 'group-hover:scale-105'}`}>
          <span className="text-sm font-bold text-white">
            {game.name}
          </span>
        </div>
      </div>
      
      {/* Floating Action Button - Center */}
      <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-500
        ${isPressed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <div className={`px-8 py-4 rounded-full bg-gradient-to-r ${game.gradient} shadow-2xl transition-all duration-300 border-2 border-white/30
          ${isPressed ? 'scale-110' : 'group-hover:scale-110'}`}>
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-5 h-5 text-white" />
            <span className="font-bold text-white">
              Join Tournament
            </span>
          </div>
        </div>
      </div>
      
      
      
      {/* Dynamic Border Animation */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none
        ${isPressed 
          ? `ring-4 ring-offset-4 ring-offset-transparent` 
          : `group-hover:ring-4 group-hover:ring-offset-4 group-hover:ring-offset-transparent`
        }`}
        style={{
          ringColor: isPressed ? `rgb(${game.gradient.includes('green') ? '34, 197, 94' : game.gradient.includes('blue') ? '59, 130, 246' : game.gradient.includes('orange') ? '249, 115, 22' : game.gradient.includes('yellow') ? '234, 179, 8' : '168, 85, 247'})` : undefined
        }}
      ></div>
      
      {/* Animated Corner Triangles */}
      <div className={`absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-white/20 border-r-transparent transition-all duration-300
        ${isPressed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
      <div className={`absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-l-[40px] border-b-white/20 border-l-transparent transition-all duration-300
        ${isPressed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    // Set registration deadline - adjust this date as needed
    const deadline = new Date('2025-08-17T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="mb-6 sm:mb-8 max-w-5xl mx-auto px-4">
      <div className="text-center mb-3 sm:mb-4">
        <div className="flex items-center justify-center mb-2 sm:mb-3">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-400 mr-2 animate-pulse" />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-400">Registration Deadline</h3>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">Don't miss your chance to compete!</p>
      </div>
      
      <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-3 sm:mb-4 max-w-full">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-2xl">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-300 to-red-500 drop-shadow-lg">
              {formatNumber(timeLeft.days)}
            </div>
          </div>
          <div className="mt-1 text-red-400 text-xs font-semibold uppercase tracking-wider">
            Days
          </div>
        </div>

        {/* Separator */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-red-400/60 animate-pulse mx-1">:</div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-2xl">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-orange-500 drop-shadow-lg">
              {formatNumber(timeLeft.hours)}
            </div>
          </div>
          <div className="mt-1 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Hours
          </div>
        </div>

        {/* Separator */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-orange-400/60 animate-pulse mx-1">:</div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-2xl">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 drop-shadow-lg">
              {formatNumber(timeLeft.minutes)}
            </div>
          </div>
          <div className="mt-1 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
            Min
          </div>
        </div>

        {/* Separator */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-yellow-400/60 animate-pulse mx-1">:</div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-2xl">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-500 drop-shadow-lg">
              {formatNumber(timeLeft.seconds)}
            </div>
          </div>
          <div className="mt-1 text-green-400 text-xs font-semibold uppercase tracking-wider">
            Sec
          </div>
        </div>
      </div>
      
      <div className="text-center mt-3 sm:mt-4">
        <p className="text-gray-400 text-xs sm:text-sm px-2">
          Registration closes on <span className="text-red-400 font-semibold">August 17, 2025 at 11:59 PM</span>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0">
        {/* Custom background image */}
        <div className="absolute inset-0">
          {/* Replace the URL below with your custom background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/05/08/18/19/esport-7979431_1280.jpg")'
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Gaming gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full animate-pulse" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
          <div className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
          <div className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-400 rounded-full animate-pulse" style={{top: '30%', left: '70%', animationDelay: '3s'}}></div>
          <div className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse" style={{top: '70%', left: '50%', animationDelay: '4s'}}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="text-center py-6 sm:py-8 md:py-12 px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 sm:mb-6 leading-tight">
              KKNIH Esports Tournament
              <br />
              Season 01
            </h1>
            
            <style jsx>{`
              .glow-text {
                text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
              }
              
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              
              .float-animation {
                animation: float 3s ease-in-out infinite;
              }
            `}</style>
            
            {/* Subtitle */}
            <div className="max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed relative">
                <span className="inline-block animate-bounce mr-2 text-2xl sm:text-3xl">📣</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 font-bold animate-pulse drop-shadow-lg">
                  Join the ultimate esports showdown!
                </span>
                <span className="text-gray-100 font-medium"> Compete in top games, </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 font-semibold glow-text">
                  win epic prizes,
                </span>
                <span className="text-gray-100 font-medium"> and showcase your skills on the biggest stage. </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold animate-pulse">
                  Register now
                </span>
                <span className="text-gray-100 font-medium"> and make your mark in gaming history!</span>
              </p>
              
              {/* Glowing underline effect */}
              <div className="mt-3 sm:mt-4 flex justify-center">
                <div className="w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
              </div>
              
              {/* Floating particles around the text */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-75" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
                <div className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping opacity-75" style={{top: '20%', right: '20%', animationDelay: '1s'}}></div>
                <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75" style={{bottom: '15%', left: '25%', animationDelay: '2s'}}></div>
                <div className="absolute w-0.5 h-0.5 bg-green-400 rounded-full animate-ping opacity-75" style={{bottom: '10%', right: '15%', animationDelay: '3s'}}></div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-12">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-cyan-400">5</div>
                <div className="text-gray-400 text-md sm:text-lg uppercase tracking-wider">Games</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-400">⌛</div>
                <div className="text-gray-400 text-md sm:text-lg uppercase tracking-wider">Players</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-purple-400">💵+🏆</div>
                <div className="text-gray-400 text-md sm:text-lg uppercase tracking-wider">Prize Pool</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Games Section */}
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            {/* Registration Countdown */}
            <CountdownTimer />
            
            {/* Section header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Choose Your Game
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-3 sm:mb-4"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
                Select your preferred game and register for upcoming tournaments
              </p>
            </div>
            
            {/* Games grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 sm:py-12 px-4 mt-12 sm:mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-2 sm:mr-3" />
              <span className="text-xl sm:text-2xl font-bold text-white">KKNIH ARENA</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Join and enhance KKNIH Hall legacy.
            </p>
            <div className="text-gray-500 text-xs sm:text-sm">
              © 2025 KKNIH Arena. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;