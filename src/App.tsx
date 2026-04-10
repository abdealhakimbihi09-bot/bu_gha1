/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { Search, ChevronRight, ArrowUp, LayoutGrid, List, Flag, Globe, Truck, Target, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Game {
  title: string;
  description: string;
  image: string;
  category: string;
}

const GAMES_DATA: Game[] = [
  {
    "title": "Left 4 dead 2",
    "description": "Intense co-op zombie survival with full campaigns unlocked.",
    "image": "https://i.postimg.cc/YSBJ28Kv/left-4-dead-2-game-icon-by-mec120-d55x3hp-375w-2x.png",
    "category": "Action"
  },
  {
    "title": "Skate 4",
    "description": "Realistic skateboarding with total freedom and unlimited tricks.",
    "image": "https://i.postimg.cc/Wp9LmMrD/images.jpg",
    "category": "Simulation"
  },
  {
    "title": "The crew motor fest",
    "description": "Open-world racing festival with unlocked cars and endless events.",
    "image": "https://i.postimg.cc/MT5kFBLw/images.jpg",
    "category": "Racing"
  },
  {
    "title": "Etiket pro",
    "description": "Smart productivity tools with full pro features unlocked.",
    "image": "https://i.postimg.cc/XJ4SLLQp/etiket-Pro.jpg",
    "category": "Simulation"
  },
  {
    "title": "Snow Runner",
    "description": "Extreme off-road driving with unlimited vehicles and resources.",
    "image": "https://i.postimg.cc/nh9JhCXv/d8e9fd4f19bc311690d90d8985e7656c7bde4726.avif",
    "category": "Simulation"
  },
  {
    "title": "Avatar : from the ashes",
    "description": "Epic open-world adventure with enhanced powers and full access.",
    "image": "https://i.postimg.cc/05ZxWggC/hb-avatar-frontiersofpandora-fromtheashes-mobile-banner-9f40cffb.jpg",
    "category": "Open World"
  },
  {
    "title": "Hytale mobile",
    "description": "Sandbox RPG world with creative freedom and unlocked content.",
    "image": "https://i.postimg.cc/JnLmgM4x/33996ceea154cd64c6825c9ac5fd9327.jpg",
    "category": "Open World"
  },
  {
    "title": "Forza Horizon 5 Mobile",
    "description": "Open-world racing with unlimited credits.",
    "image": "https://i.postimg.cc/6p894MmG/d5e0490d7a06ac352730a2a444d432df.jpg",
    "category": "Racing"
  },
  {
    "title": "Kimetsu no yaiba thc 2",
    "description": "Demon slayer battles with all characters.",
    "image": "https://i.postimg.cc/qqQkySrt/Screenshot-2025-09-19-211151.png",
    "category": "Action"
  },
  {
    "title": "Mini soccer star Mod",
    "description": "Arcade football game with unlimited money and unlocked skills.",
    "image": "https://i.postimg.cc/Njnjd3HD/images.jpg",
    "category": "Action"
  },
  {
    "title": "Getaway 2",
    "description": "Crime action with unlimited money.",
    "image": "https://i.postimg.cc/Ghq2y83K/images-1.jpg",
    "category": "Action"
  },
  {
    "title": "Fifa Street Mobile",
    "description": "Street football with unlimited skills.",
    "image": "https://i.postimg.cc/0ykSg1jV/images-(7).jpg",
    "category": "Action"
  },
  {
    "title": "Assetto Corsa Mobile",
    "description": "Realistic racing with unlocked cars.",
    "image": "https://i.postimg.cc/RhwtmMwD/images-(6).jpg",
    "category": "Racing"
  },
  {
    "title": "Euro Truck Simulator",
    "description": "Truck driving with unlimited money.",
    "image": "https://i.postimg.cc/GppvDn1k/images-(5).jpg",
    "category": "Simulation"
  },
  {
    "title": "Horizon Zero Dawn Mobile",
    "description": "Open-world adventure with unlimited shards.",
    "image": "https://i.postimg.cc/c4Q7ycmT/images-(4).jpg",
    "category": "Open World"
  },
  {
    "title": "Days Gone Mobile",
    "description": "Survival gameplay with unlimited resources.",
    "image": "https://i.postimg.cc/cH27Z92R/images-(3).jpg",
    "category": "Open World"
  },
  {
    "title": "WWE 2K25 Mobile",
    "description": "Wrestling action with all unlocks.",
    "image": "https://i.postimg.cc/CLD7M0FG/images-(2).jpg",
    "category": "Action"
  },
  {
    "title": "RDR Mobile",
    "description": "Wild west action with unlimited gold.",
    "image": "https://i.postimg.cc/s1FMHb8J/unnamed.png",
    "category": "Open World"
  },
  {
    "title": "Hajime No Ippo The Fighting",
    "description": "Boxing fights with unlimited stamina.",
    "image": "https://i.postimg.cc/cHHtvRw7/images-(1).jpg",
    "category": "Action"
  },
  {
    "title": "Jujutsu Kaisen Cursed Clash",
    "description": "Anime battles with unlocked characters.",
    "image": "https://i.postimg.cc/t43xwC9v/images.jpg",
    "category": "Action"
  },
  {
    "title": "One piece fighting path",
    "description": "Anime action with unlimited gems.",
    "image": "https://i.postimg.cc/W3Wr8Wsj/images-4.jpg",
    "category": "Action"
  },
  {
    "title": "One piece mugen",
    "description": "Fighting game with all characters.",
    "image": "https://i.postimg.cc/mr4Qg1dB/images-5.jpg",
    "category": "Action"
  },
  {
    "title": "Rocket league mobile",
    "description": "Car soccer with unlimited items.",
    "image": "https://i.postimg.cc/GtfFLMfN/images-2.jpg",
    "category": "Racing"
  },
  {
    "title": "Hollow knight silksong",
    "description": "Full game access adventure.",
    "image": "https://i.postimg.cc/FHLZR4NH/images-3.jpg",
    "category": "Action"
  },
  {
    "title": "Elite auto brasil Mod",
    "description": "Driving game with unlimited money.",
    "image": "https://i.postimg.cc/zB5p6cmf/unnamed.jpg",
    "category": "Simulation"
  },
  {
    "title": "Jump Force Mobile",
    "description": "Anime crossover with all fighters.",
    "image": "https://i.postimg.cc/9FfgcKDw/4b392164f89981c794c943b22936cff3.jpg",
    "category": "Action"
  },
  {
    "title": "Counter Strike 2 Mobile",
    "description": "FPS action with unlimited money.",
    "image": "https://i.postimg.cc/brm6QHBY/3c83b35f11599402266a671290beb516.jpg",
    "category": "Action"
  },
  {
    "title": "Spider-Man 2 Mobile",
    "description": "Superhero action with unlimited upgrades.",
    "image": "https://i.postimg.cc/W4ZfQZh6/images.jpg",
    "category": "Action"
  },
  {
    "title": "Cuphead Mobile",
    "description": "Classic boss fights fully unlocked.",
    "image": "https://i.postimg.cc/FsPqcmMS/4bafba8d6811e04e85c7e9646cf5177a.png",
    "category": "Action"
  },
  {
    "title": "Minecraft Mobile",
    "description": "Creative survival with unlimited resources.",
    "image": "https://i.postimg.cc/hvsY2qfP/pixel-minecraft-style-land-background-vector.jpg",
    "category": "Open World"
  },
  {
    "title": "GTA 5 Mobile",
    "description": "Open-world crime with unlimited cash.",
    "image": "https://i.postimg.cc/0QghQfTk/Grand-Theft-Auto-V.png",
    "category": "Open World"
  },
  {
    "title": "Naruto Ultimate Ninja Storm 4 Mobile",
    "description": "Ninja fights with all characters unlocked.",
    "image": "https://i.postimg.cc/vZNJRMXV/images.jpg",
    "category": "Action"
  },
  {
    "title": "Attack on Titan 2 Mobile",
    "description": "Intense battles with unlimited materials.",
    "image": "https://i.postimg.cc/fW7QVGW5/images.jpg",
    "category": "Action"
  },
  {
    "title": "Dragon Ball FighterZ Mobile",
    "description": "Anime fighting with all characters.",
    "image": "https://i.postimg.cc/FHC490Fs/images.jpg",
    "category": "Action"
  },
  {
    "title": "Watch Dogs 2 Mobile",
    "description": "Open-world hacking with unlimited money.",
    "image": "https://i.postimg.cc/GtnRWrLB/images.jpg",
    "category": "Open World"
  },
  {
    "title": "God of War Mobile",
    "description": "Epic battles with mod menu.",
    "image": "https://i.postimg.cc/Mp66ZWyj/God-of-War-4-cover.jpg",
    "category": "Action"
  },
  {
    "title": "Red Dead Redemption 2 Mobile",
    "description": "Open-world western with unlimited money.",
    "image": "https://i.postimg.cc/s20D0tGh/Red-Dead-Redemption-II.jpg",
    "category": "Open World"
  },
  {
    "title": "Inside Mobile",
    "description": "Full dark adventure unlocked.",
    "image": "https://i.postimg.cc/CLj5LP95/1cf3189182c0590efb17a040fd06ce26.jpg",
    "category": "Action"
  },
  {
    "title": "Assassin's Creed Mirage Mobile",
    "description": "Stealth action with unlimited coins.",
    "image": "https://i.postimg.cc/WzZ3ZX3Q/Assassin-s-Creed-Mirage-cover.jpg",
    "category": "Open World"
  },
  {
    "title": "Ghost of Tsushima Mobile",
    "description": "Samurai adventure with unlimited gold.",
    "image": "https://i.postimg.cc/bw9ZLCRL/b3i-B2zf2x-Hj9sh-C0XDTULx-ND.avif",
    "category": "Open World"
  },
  {
    "title": "The Last of Us 2 Mobile",
    "description": "Story-driven survival with unlimited resources.",
    "image": "https://i.postimg.cc/D04hD0k9/images.jpg",
    "category": "Action"
  },
  {
    "title": "Rematch mobile",
    "description": "Fast matches with unlocked features.",
    "image": "https://i.postimg.cc/TPTRwTgz/bf53eec311119801d096ef4c5e05ef0feb20c365e568e344.avif",
    "category": "Action"
  },
  {
    "title": "Beamng drive mobile",
    "description": "Realistic driving with unlimited cars.",
    "image": "https://i.postimg.cc/NfrGCJQx/4508fc3bbbcf6b9c440498af6900703b.jpg",
    "category": "Simulation"
  },
  {
    "title": "Rooftops & alleys",
    "description": "Parkour gameplay with mod menu.",
    "image": "https://i.postimg.cc/x8Xj2gMr/header.jpg",
    "category": "Simulation"
  },
  {
    "title": "Sifu mobile",
    "description": "Martial arts action with unlimited skills.",
    "image": "https://i.postimg.cc/g0p0ZVFv/EGS-SIFUStandard-Edition-Sloclap-S4-1200x1600-32aca69d756abfcc25f8581942a6162b-1200x1600-32aca69d756.jpg",
    "category": "Action"
  },
  {
    "title": "Ride 5 mobile",
    "description": "Realistic bike racing with unlimited money.",
    "image": "https://i.postimg.cc/1Xdtnbsp/EGS-RIDE5-Milestone-Srl-S2-1200x1600-abc515266abe022f93ee7517ca8ec7fa.jpg",
    "category": "Racing"
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = [
    { name: 'All', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'Racing', icon: <Flag className="w-4 h-4" /> },
    { name: 'Open World', icon: <Globe className="w-4 h-4" /> },
    { name: 'Simulation', icon: <Truck className="w-4 h-4" /> },
    { name: 'Action', icon: <Target className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white font-sans selection:bg-[#00FF00] selection:text-black relative overflow-x-hidden">
      {/* Premium Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#161a22_0%,#0b0d12_100%)] pointer-events-none" />
      
      {/* Main Content Container */}
      <main className="max-w-3xl mx-auto px-4 pt-12 pb-20">
        {/* Advanced Search & Filter Section */}
        <div className="mb-8 relative z-10 space-y-6">
          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] border border-[#222222] rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-hidden focus:border-[#00FF00]/30 focus:ring-1 focus:ring-[#00FF00]/30 transition-all shadow-lg"
            />
          </div>

          {/* Controls Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* View Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-xl border transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-[#111111] border-[#00FF00]/40 text-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.1)]' 
                    : 'bg-[#111111] border-[#222222] text-gray-500 hover:border-[#333333]'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-xl border transition-all ${
                  viewMode === 'list' 
                    ? 'bg-[#111111] border-[#00FF00]/40 text-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.1)]' 
                    : 'bg-[#111111] border-[#222222] text-gray-500 hover:border-[#333333]'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border whitespace-nowrap transition-all ${
                    activeCategory === cat.name
                      ? 'bg-[#111111] border-[#00FF00]/40 text-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.1)]'
                      : 'bg-[#111111] border-[#222222] text-gray-400 hover:border-[#333333] hover:text-white'
                  }`}
                >
                  {cat.icon}
                  <span className="text-sm font-medium">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "flex flex-col gap-4"}>
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.02,
                  ease: "easeOut"
                }}
                onClick={() => setSelectedGame(game)}
                className={`group relative bg-[#111111] border border-[#222222] hover:bg-[#161616] hover:border-[#00FF00]/20 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${
                  viewMode === 'grid' ? 'p-4 flex flex-col gap-4' : 'p-4 flex items-center gap-4'
                }`}
              >
                {/* Inner Highlight Effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />

                {/* Thumbnail */}
                <div className={`shrink-0 rounded-xl overflow-hidden bg-[#222222] border border-[#333333] ${
                  viewMode === 'grid' ? 'w-full aspect-video' : 'w-16 h-16'
                }`}>
                  <img
                    src={game.image}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Text Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold text-base truncate leading-tight">
                      {game.title}
                    </h3>
                    {viewMode === 'list' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FF00]/60 bg-[#00FF00]/5 px-2 py-0.5 rounded-md border border-[#00FF00]/10">
                        {game.category}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    {game.description}
                  </p>
                </div>

                {/* Right Icon (List mode only) */}
                {viewMode === 'list' && (
                  <div className="shrink-0 text-gray-600 group-hover:text-[#00FF00] transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredGames.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20 text-gray-500"
            >
              No games found in this category
            </motion.div>
          )}
        </div>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-[#1a1a1a] border border-[#333333] rounded-full shadow-2xl text-[#00FF00] hover:bg-[#222222] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

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
