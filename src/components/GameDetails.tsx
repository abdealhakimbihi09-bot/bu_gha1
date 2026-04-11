import { motion } from 'motion/react';
import { ArrowLeft, Smartphone, Apple, Info, Star, Download, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { Game } from '../types';

interface GameDetailsProps {
  game: Game;
  onBack: () => void;
  onContinue: (device: 'Android' | 'iPhone') => void;
}

export default function GameDetails({ game, onBack, onContinue }: GameDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="space-y-8"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to games</span>
      </button>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 border border-white/10 shadow-2xl">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {game.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            {game.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs font-bold uppercase tracking-wider rounded-full border border-[#00FF00]/20">
              {game.category}
            </span>
            {game.genre && (
              <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                {game.genre}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onContinue('Android')}
          className="flex items-center justify-center gap-3 bg-[#111111] border border-white/10 hover:border-[#00FF00]/30 py-4 px-6 rounded-2xl text-white font-bold transition-all group"
        >
          <Smartphone className="w-6 h-6 text-gray-400 group-hover:text-[#00FF00] transition-colors" />
          <span>Continue on Android</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onContinue('iPhone')}
          className="flex items-center justify-center gap-3 bg-[#111111] border border-white/10 hover:border-[#00FF00]/30 py-4 px-6 rounded-2xl text-white font-bold transition-all group"
        >
          <Apple className="w-6 h-6 text-gray-400 group-hover:text-[#00FF00] transition-colors" />
          <span>Continue on iPhone</span>
        </motion.button>
      </div>

      {/* App Info & Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Card */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <Info className="w-5 h-5 text-[#00FF00]" />
              <h2>App Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {game.title && <InfoItem label="App Name" value={game.title} />}
              {game.genre && <InfoItem label="Genre" value={game.genre} />}
              {game.developer && <InfoItem label="Developer" value={game.developer} />}
              {game.latestVersion && <InfoItem label="Latest Version" value={game.latestVersion} />}
              {game.updatedDate && <InfoItem label="Updated Date" value={game.updatedDate} />}
              {game.osVersion && <InfoItem label="OS Version" value={game.osVersion} />}
              {game.packageName && <InfoItem label="Package Name" value={game.packageName} />}
            </div>
          </div>

          {/* Features */}
          {game.features && game.features.length > 0 && (
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 space-y-6">
              <div className="flex items-center gap-2 text-white font-bold">
                <Star className="w-5 h-5 text-[#00FF00]" />
                <h2>Key Features</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00FF00] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar / Trust Badges */}
        <div className="space-y-4">
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-[#00FF00]/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#00FF00]" />
            </div>
            <div>
              <h3 className="text-white font-bold">Verified Safe</h3>
              <p className="text-gray-500 text-xs mt-1">This application has been scanned and verified as safe for your device.</p>
            </div>
          </div>
          
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Download className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-white font-bold">Fast Access</h3>
              <p className="text-gray-500 text-xs mt-1">Optimized servers ensure high-speed access to your chosen content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      {game.screenshots && game.screenshots.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <Calendar className="w-5 h-5 text-[#00FF00]" />
            <h2>Screenshots</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {game.screenshots.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/5 aspect-video bg-[#111111]">
                <img
                  src={src}
                  alt={`${game.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{label}</p>
      <p className="text-white font-medium text-sm truncate">{value}</p>
    </div>
  );
}
