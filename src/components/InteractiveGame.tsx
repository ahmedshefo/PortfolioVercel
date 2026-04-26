import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3, Database, PieChart, TrendingUp, Zap, Target } from "lucide-react";

const icons = [BarChart3, Database, PieChart, TrendingUp, Zap, Target];

export default function InteractiveGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [activeNodes, setActiveNodes] = useState<{ id: number, x: number, y: number, iconIndex: number }[]>([]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(15);
    setActiveNodes([]);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let nodeSpawner: NodeJS.Timeout;

    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      nodeSpawner = setInterval(() => {
        setActiveNodes((prev) => {
          if (prev.length < 6) {
            const newNode = {
              id: Date.now() + Math.random(),
              x: Math.random() * 80 + 10, // 10% to 90%
              y: Math.random() * 80 + 10,
              iconIndex: Math.floor(Math.random() * icons.length)
            };
            return [...prev, newNode];
          }
          return prev;
        });
      }, 500);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setActiveNodes([]);
    }

    return () => {
      clearInterval(timer);
      clearInterval(nodeSpawner);
    };
  }, [isPlaying, timeLeft]);

  const handleNodeClick = (id: number) => {
    if (!isPlaying) return;
    setScore(s => s + 1);
    setActiveNodes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-white dark:bg-black/50 rounded-[3rem] overflow-hidden group border-4 border-transparent hover:border-accent/10 transition-colors">
      
      {/* Top Bar */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 text-gray-900 dark:text-white font-bold bg-gray-50/90 dark:bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-gray-100 dark:border-white/10">
        <div className="text-sm">SCORE <span className="text-accent text-xl ml-2 font-black">{score}</span></div>
        <div className="text-sm">TIME <span className={`ml-2 text-xl font-black ${timeLeft <= 5 && timeLeft > 0 ? "text-red-500 animate-pulse" : ""}`}>{timeLeft}s</span></div>
      </div>

      {!isPlaying && timeLeft === 15 && (
        <div className="text-center z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mb-6 text-accent">
             <Target className="w-10 h-10 animate-bounce" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Catch the Insights</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-[240px] leading-relaxed">
            Click as many floating data points as you can in 15 seconds!
          </p>
          <button 
            onClick={startGame}
            className="px-8 py-4 bg-accent text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-accent/20"
          >
            Start Game
          </button>
        </div>
      )}

      {!isPlaying && timeLeft === 0 && (
        <div className="text-center z-10 flex flex-col items-center">
          <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-4">Time's Up!</h3>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">You collected <strong className="text-accent text-3xl mx-2 block mt-2">{score}</strong> insights</p>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-8 mt-4">
            {score > 20 ? "Data Master 👑" : score > 10 ? "Great Job 🚀" : "Keep Practicing 💪"}
          </p>
          <button 
            onClick={startGame}
            className="px-8 py-4 bg-accent text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-accent/20"
          >
            Play Again
          </button>
        </div>
      )}

      {/* Game Area */}
      {isPlaying && (
        <div className="absolute inset-x-6 inset-y-24">
          <AnimatePresence>
            {activeNodes.map(node => {
              const Icon = icons[node.iconIndex];
              return (
                <motion.button
                  key={node.id}
                  initial={{ scale: 0, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 90 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.8 }}
                  onMouseDown={() => handleNodeClick(node.id)}
                  onClick={() => handleNodeClick(node.id)}
                  className="absolute w-14 h-14 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-accent shadow-xl shadow-accent/10 cursor-crosshair transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <Icon className="w-6 h-6 pointer-events-none" />
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>
      )}
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_50%)] opacity-[0.03] dark:opacity-[0.08] pointer-events-none" />
    </div>
  );
}
