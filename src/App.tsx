/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, ChevronRight, Instagram, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Game {
  title: string;
  description: string;
  image: string;
}

const GAMES_DATA: Game[] = [
  {
    "title": "Ride 5 mobile",
    "description": "Realistic bike racing with unlimited money.",
    "image": "https://i.postimg.cc/1Xdtnbsp/EGS-RIDE5-Milestone-Srl-S2-1200x1600-abc515266abe022f93ee7517ca8ec7fa.jpg"
  },
  {
    "title": "Sifu mobile",
    "description": "Martial arts action with unlimited skills.",
    "image": "https://i.postimg.cc/g0p0ZVFv/EGS-SIFUStandard-Edition-Sloclap-S4-1200x1600-32aca69d756abfcc25f8581942a6162b-1200x1600-32aca69d756.jpg"
  },
  {
    "title": "Rooftops & alleys",
    "description": "Parkour gameplay with mod menu.",
    "image": "https://i.postimg.cc/x8Xj2gMr/header.jpg"
  },
  {
    "title": "Beamng drive mobile",
    "description": "Realistic driving with unlimited cars.",
    "image": "https://i.postimg.cc/NfrGCJQx/4508fc3bbbcf6b9c440498af6900703b.jpg"
  },
  {
    "title": "Rematch mobile",
    "description": "Fast matches with unlocked features.",
    "image": "https://i.postimg.cc/TPTRwTgz/bf53eec311119801d096ef4c5e05ef0feb20c365e568e344.avif"
  },
  {
    "title": "The Last of Us 2 Mobile",
    "description": "Story-driven survival with unlimited resources.",
    "image": "https://i.postimg.cc/D04hD0k9/images.jpg"
  },
  {
    "title": "Ghost of Tsushima Mobile",
    "description": "Samurai adventure with unlimited gold.",
    "image": "https://i.postimg.cc/bw9ZLCRL/b3i-B2zf2x-Hj9sh-C0XDTULx-ND.avif"
  },
  {
    "title": "Assassin's Creed Mirage Mobile",
    "description": "Stealth action with unlimited coins.",
    "image": "https://i.postimg.cc/WzZ3ZX3Q/Assassin-s-Creed-Mirage-cover.jpg"
  },
  {
    "title": "Inside Mobile",
    "description": "Full dark adventure unlocked.",
    "image": "https://i.postimg.cc/CLj5LP95/1cf3189182c0590efb17a040fd06ce26.jpg"
  },
  {
    "title": "Red Dead Redemption 2 Mobile",
    "description": "Open-world western with unlimited money.",
    "image": "https://i.postimg.cc/s20D0tGh/Red-Dead-Redemption-II.jpg"
  },
  {
    "title": "God of War Mobile",
    "description": "Epic battles with mod menu.",
    "image": "https://i.postimg.cc/Mp66ZWyj/God-of-War-4-cover.jpg"
  },
  {
    "title": "Watch Dogs 2 Mobile",
    "description": "Open-world hacking with unlimited money.",
    "image": "https://i.postimg.cc/GtnRWrLB/images.jpg"
  },
  {
    "title": "Dragon Ball FighterZ Mobile",
    "description": "Anime fighting with all characters.",
    "image": "https://i.postimg.cc/FHC490Fs/images.jpg"
  },
  {
    "title": "Attack on Titan 2 Mobile",
    "description": "Intense battles with unlimited materials.",
    "image": "https://i.postimg.cc/fW7QVGW5/images.jpg"
  },
  {
    "title": "Naruto Ultimate Ninja Storm 4 Mobile",
    "description": "Ninja fights with all characters unlocked.",
    "image": "https://i.postimg.cc/vZNJRMXV/images.jpg"
  },
  {
    "title": "GTA 5 Mobile",
    "description": "Open-world crime with unlimited cash.",
    "image": "https://i.postimg.cc/0QghQfTk/Grand-Theft-Auto-V.png"
  },
  {
    "title": "Minecraft Mobile",
    "description": "Creative survival with unlimited resources.",
    "image": "https://i.postimg.cc/hvsY2qfP/pixel-minecraft-style-land-background-vector.jpg"
  },
  {
    "title": "Cuphead Mobile",
    "description": "Classic boss fights fully unlocked.",
    "image": "https://i.postimg.cc/FsPqcmMS/4bafba8d6811e04e85c7e9646cf5177a.png"
  },
  {
    "title": "Spider-Man 2 Mobile",
    "description": "Superhero action with unlimited upgrades.",
    "image": "https://i.postimg.cc/W4ZfQZh6/images.jpg"
  },
  {
    "title": "Counter Strike 2 Mobile",
    "description": "FPS action with unlimited money.",
    "image": "https://i.postimg.cc/brm6QHBY/3c83b35f11599402266a671290beb516.jpg"
  },
  {
    "title": "Jump Force Mobile",
    "description": "Anime crossover with all fighters.",
    "image": "https://i.postimg.cc/9FfgcKDw/4b392164f89981c794c943b22936cff3.jpg"
  },
  {
    "title": "Elite auto brasil Mod",
    "description": "Driving game with unlimited money.",
    "image": "https://i.postimg.cc/zB5p6cmf/unnamed.jpg"
  },
  {
    "title": "Hollow knight silksong",
    "description": "Full game access adventure.",
    "image": "https://i.postimg.cc/FHLZR4NH/images-3.jpg"
  },
  {
    "title": "Rocket league mobile",
    "description": "Car soccer with unlimited items.",
    "image": "https://i.postimg.cc/GtfFLMfN/images-2.jpg"
  },
  {
    "title": "One piece mugen",
    "description": "Fighting game with all characters.",
    "image": "https://i.postimg.cc/mr4Qg1dB/images-5.jpg"
  },
  {
    "title": "One piece fighting path",
    "description": "Anime action with unlimited gems.",
    "image": "https://i.postimg.cc/W3Wr8Wsj/images-4.jpg"
  },
  {
    "title": "Jujutsu Kaisen Cursed Clash",
    "description": "Anime battles with unlocked characters.",
    "image": "https://i.postimg.cc/t43xwC9v/images.jpg"
  },
  {
    "title": "Hajime No Ippo The Fighting",
    "description": "Boxing fights with unlimited stamina.",
    "image": "https://i.postimg.cc/cHHtvRw7/images-(1).jpg"
  },
  {
    "title": "RDR Mobile",
    "description": "Wild west action with unlimited gold.",
    "image": "https://i.postimg.cc/s1FMHb8J/unnamed.png"
  },
  {
    "title": "WWE 2K25 Mobile",
    "description": "Wrestling action with all unlocks.",
    "image": "https://i.postimg.cc/CLD7M0FG/images-(2).jpg"
  },
  {
    "title": "Days Gone Mobile",
    "description": "Survival gameplay with unlimited resources.",
    "image": "https://i.postimg.cc/cH27Z92R/images-(3).jpg"
  },
  {
    "title": "Horizon Zero Dawn Mobile",
    "description": "Open-world adventure with unlimited shards.",
    "image": "https://i.postimg.cc/c4Q7ycmT/images-(4).jpg"
  },
  {
    "title": "Euro Truck Simulator",
    "description": "Truck driving with unlimited money.",
    "image": "https://i.postimg.cc/GppvDn1k/images-(5).jpg"
  },
  {
    "title": "Assetto Corsa Mobile",
    "description": "Realistic racing with unlocked cars.",
    "image": "https://i.postimg.cc/RhwtmMwD/images-(6).jpg"
  },
  {
    "title": "Fifa Street Mobile",
    "description": "Street football with unlimited skills.",
    "image": "https://i.postimg.cc/0ykSg1jV/images-(7).jpg"
  },
  {
    "title": "Getaway 2",
    "description": "Crime action with unlimited money.",
    "image": "https://i.postimg.cc/Ghq2y83K/images-1.jpg"
  },
  {
    "title": "Mini soccer star Mod",
    "description": "Arcade football game with unlimited money and unlocked skills.",
    "image": "https://i.postimg.cc/Njnjd3HD/images.jpg"
  },
  {
    "title": "Kimetsu no yaiba thc 2",
    "description": "Demon slayer battles with all characters.",
    "image": "https://i.postimg.cc/qqQkySrt/Screenshot-2025-09-19-211151.png"
  },
  {
    "title": "Forza Horizon 5 Mobile",
    "description": "Open-world racing with unlimited credits.",
    "image": "https://i.postimg.cc/6p894MmG/d5e0490d7a06ac352730a2a444d432df.jpg"
  },
  {
    "title": "Hytale mobile",
    "description": "Sandbox RPG world with creative freedom and unlocked content.",
    "image": "https://i.postimg.cc/JnLmgM4x/33996ceea154cd64c6825c9ac5fd9327.jpg"
  },
  {
    "title": "Avatar : from the ashes",
    "description": "Epic open-world adventure with enhanced powers and full access.",
    "image": "https://i.postimg.cc/05ZxWggC/hb-avatar-frontiersofpandora-fromtheashes-mobile-banner-9f40cffb.jpg"
  },
  {
    "title": "Snow Runner",
    "description": "Extreme off-road driving with unlimited vehicles and resources.",
    "image": "https://i.postimg.cc/nh9JhCXv/d8e9fd4f19bc311690d90d8985e7656c7bde4726.avif"
  },
  {
    "title": "Etiket pro",
    "description": "Smart productivity tools with full pro features unlocked.",
    "image": "https://i.postimg.cc/XJ4SLLQp/etiket-Pro.jpg"
  },
  {
    "title": "The crew motor fest",
    "description": "Open-world racing festival with unlocked cars and endless events.",
    "image": "https://i.postimg.cc/MT5kFBLw/images.jpg"
  },
  {
    "title": "Skate 4",
    "description": "Realistic skateboarding with total freedom and unlimited tricks.",
    "image": "https://i.postimg.cc/Wp9LmMrD/images.jpg"
  },
  {
    "title": "Left 4 dead 2",
    "description": "Intense co-op zombie survival with full campaigns unlocked.",
    "image": "https://i.postimg.cc/YSBJ28Kv/left-4-dead-2-game-icon-by-mec120-d55x3hp-375w-2x.png"
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white font-sans selection:bg-[#00FF00] selection:text-black relative overflow-x-hidden">
      {/* Premium Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#161a22_0%,#0b0d12_100%)] pointer-events-none" />
      
      {/* Header Area */}
      <header className="relative pt-16 pb-12 px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="w-8 h-8 bg-[#00FF00] rounded-sm mb-4 shadow-[0_0_20px_rgba(0,255,0,0.2)]" />
        
        {/* Site Name */}
        <h1 className="text-[#00FF00] text-2xl font-bold tracking-tight mb-1 drop-shadow-sm">
          bu_gha1.club
        </h1>
        
        {/* Tagline */}
        <p className="text-[#FFA500] text-sm font-medium opacity-80">
          - PlayStation games on your phone -
        </p>
      </header>

      {/* Search Bar Section */}
      <div className="max-w-2xl mx-auto px-4 -mt-6 mb-12 relative z-10">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#222222] border border-[#333333] rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-hidden focus:border-[#444444] focus:ring-1 focus:ring-[#444444] transition-all shadow-lg"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <main className="max-w-3xl mx-auto px-4 pb-20">
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game, index) => (
              <div key={game.title}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.03,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  onClick={() => setSelectedGame(game)}
                  className="group relative bg-[#181818] border border-[#222222] hover:bg-[#202020] hover:border-[#333333] rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-0.5"
                >
                  {/* Inner Highlight Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />

                  {/* Thumbnail */}
                  <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-[#222222] border border-[#333333]">
                    <img
                      src={game.image}
                      alt={game.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Block */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[#00FF00] text-[10px] font-bold uppercase tracking-wider mb-0.5 block">
                      bu_gha1
                    </span>
                    <h3 className="text-white font-semibold text-base truncate leading-tight mb-0.5">
                      {game.title}
                    </h3>
                    <p className="text-gray-400 text-xs truncate leading-relaxed">
                      {game.description}
                    </p>
                  </div>

                  {/* Right Icon */}
                  <div className="shrink-0 text-gray-500 group-hover:text-white transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.div>
                
                {game.title === "Left 4 dead 2" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center gap-8 mt-6 mb-4"
                  >
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-[#00FF00] transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-7 h-7" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-[#00FF00] transition-all duration-300 hover:scale-110"
                      aria-label="TikTok"
                    >
                      <Music2 className="w-7 h-7" />
                    </a>
                  </motion.div>
                )}
              </div>
            ))}
          </AnimatePresence>

          {filteredGames.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500"
            >
              No games found matching "{searchQuery}"
            </motion.div>
          )}
        </div>
      </main>

      {/* Verification Modal */}
      <AnimatePresence>
        {selectedGame && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGame(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-[#1a1a1a] rounded-[2rem] p-8 shadow-2xl border border-[#00FF00]/20 overflow-hidden"
            >
              {/* Premium Glow Effect */}
              <div className="absolute -inset-px rounded-[2rem] border border-[#00FF00]/30 shadow-[0_0_30px_rgba(0,255,0,0.1)] pointer-events-none" />
              
              {/* Top Visual Area: Stylized Mobile Screen */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-64 bg-[#111111] rounded-[2.5rem] border-4 border-[#222222] p-3 relative shadow-inner overflow-hidden">
                  {/* Speaker/Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#222222] rounded-b-xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="h-full w-full flex flex-col items-center pt-8 gap-4">
                    {/* Selected Game Icon */}
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                      <img 
                        src={selectedGame.image} 
                        alt={selectedGame.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Blurred Placeholders */}
                    <div className="grid grid-cols-3 gap-2 w-full px-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="aspect-square bg-[#222222] rounded-lg blur-[2px] opacity-40" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="text-center space-y-3 mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Verification required
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed px-4">
                  Complete the next step to continue to your selected game.
                </p>
              </div>

              {/* Primary Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (typeof (window as any)._Tu === 'function') {
                      (window as any)._Tu();
                    }
                  }}
                  className="w-full bg-[#ccffdd] hover:bg-[#b3ffcc] text-black font-bold py-4 rounded-2xl transition-colors shadow-[0_4px_15px_rgba(0,255,0,0.2)]"
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
