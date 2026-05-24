import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Sliders, Palette, RotateCcw, Copy, Check, Sparkles } from 'lucide-react';

const Playground = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('game');

  // Tic Tac Toe State
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ player: 0, ai: 0, ties: 0 });
  const [gameWinner, setGameWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [comicEffect, setComicEffect] = useState('');

  // Shadow Generator State
  const [shadowX, setShadowX] = useState(6);
  const [shadowY, setShadowY] = useState(6);
  const [shadowColor, setShadowColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#3b82f6');
  const [copiedText, setCopiedText] = useState(false);

  // Color Palette State
  const [copiedColor, setCopiedColor] = useState(null);

  const palettes = [
    {
      name: "Retro Comic",
      colors: ["#3b82f6", "#ef4444", "#f59e0b", "#10b981", "#ffffff", "#000000"]
    },
    {
      name: "Cyber Brutalist",
      colors: ["#ec4899", "#8b5cf6", "#06b6d4", "#a855f7", "#1e1b4b", "#fdf2f8"]
    },
    {
      name: "Vintage Pop",
      colors: ["#f43f5e", "#fb923c", "#fde047", "#2dd4bf", "#fafaf9", "#292524"]
    },
    {
      name: "Neon Sunset",
      colors: ["#ff007f", "#ff7f00", "#7f00ff", "#00ffff", "#121212", "#f3f4f6"]
    }
  ];

  // ------------------ TIC TAC TOE LOGIC ------------------
  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    if (squares.every(sq => sq !== null)) {
      return { winner: 'Tie', line: [] };
    }
    return null;
  };

  const handleSquareClick = (index) => {
    if (board[index] || gameWinner || !isXNext) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  // AI Move (Minimax or Smart heuristic)
  useEffect(() => {
    if (isXNext || gameWinner) return;

    const result = checkWinner(board);
    if (result) return;

    const timer = setTimeout(() => {
      // Find best move or random move
      const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
      if (emptyIndices.length === 0) return;

      // Smart AI: Try to win or block X
      let chosenMove = null;

      // 1. Can AI win?
      for (let idx of emptyIndices) {
        const testBoard = [...board];
        testBoard[idx] = 'O';
        if (checkWinner(testBoard)?.winner === 'O') {
          chosenMove = idx;
          break;
        }
      }

      // 2. Can X win? Block them
      if (chosenMove === null) {
        for (let idx of emptyIndices) {
          const testBoard = [...board];
          testBoard[idx] = 'X';
          if (checkWinner(testBoard)?.winner === 'X') {
            chosenMove = idx;
            break;
          }
        }
      }

      // 3. Take center if available
      if (chosenMove === null && emptyIndices.includes(4)) {
        chosenMove = 4;
      }

      // 4. Default to random empty index
      if (chosenMove === null) {
        const randomIdx = Math.floor(Math.random() * emptyIndices.length);
        chosenMove = emptyIndices[randomIdx];
      }

      const newBoard = [...board];
      newBoard[chosenMove] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }, 600);

    return () => clearTimeout(timer);
  }, [isXNext, board, gameWinner]);

  // Check board status after any move
  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setGameWinner(result.winner);
      setWinningLine(result.line);

      if (result.winner === 'X') {
        setScores(prev => ({ ...prev, player: prev.player + 1 }));
        const winEffects = ['POW!', 'BOOM!', 'KABOOM!', 'SMASH!', 'AWESOME!'];
        setComicEffect(winEffects[Math.floor(Math.random() * winEffects.length)]);
      } else if (result.winner === 'O') {
        setScores(prev => ({ ...prev, ai: prev.ai + 1 }));
        setComicEffect('OH NO!');
      } else if (result.winner === 'Tie') {
        setScores(prev => ({ ...prev, ties: prev.ties + 1 }));
        setComicEffect('SERI!');
      }
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameWinner(null);
    setWinningLine([]);
    setComicEffect('');
  };

  // ------------------ SHADOW GENERATOR LOGIC ------------------
  const shadowStyle = {
    boxShadow: `${shadowX}px ${shadowY}px 0px 0px ${shadowColor}`,
    backgroundColor: bgColor,
    border: '3px solid #000000'
  };

  const getTailwindCode = () => {
    return `shadow-[${shadowX}px_${shadowY}px_0px_0px_${shadowColor}] border-3 border-black`;
  };

  const copyShadowCode = () => {
    navigator.clipboard.writeText(getTailwindCode());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // ------------------ PALETTE LOGIC ------------------
  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <section className={`py-24 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900 border-t-4 border-comic-black text-white' : 'bg-white border-t-4 border-comic-black text-comic-black'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white border-4 border-comic-black px-8 py-4 transform rotate-[-1.5deg] shadow-comic">
            <h2 className="text-5xl font-bangers uppercase tracking-wider flex items-center justify-center gap-3">
              <Sparkles className="animate-pulse" /> PLAYGROUND INTERAKTIF <Sparkles className="animate-pulse" />
            </h2>
          </div>
          <p className="font-comic font-bold text-lg mt-6 max-w-2xl mx-auto text-comic-black dark:text-slate-300">
            Selamat datang di lab kreatif saya! Coba berbagai mini-game interaktif, generator style, dan skema warna neo-brutalist di bawah ini.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'game', label: 'Comic Tic-Tac-Toe', color: 'bg-primary' },
            { id: 'shadow', label: 'Shadow Generator', color: 'bg-secondary' },
            { id: 'palette', label: 'Color Board', color: 'bg-green-500' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-bangers text-xl uppercase tracking-widest px-6 py-3 border-3 border-comic-black shadow-comic transition-all active:translate-x-1 active:translate-y-1 active:shadow-none hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                activeTab === tab.id 
                  ? `${tab.color} text-white scale-105` 
                  : (darkMode ? 'bg-slate-800 text-white' : 'bg-white text-comic-black')
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Workspace */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: TIC TAC TOE */}
            {activeTab === 'game' && (
              <motion.div
                key="game"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="comic-card text-comic-black dark:text-white"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  
                  {/* Scoreboard and Status */}
                  <div className="md:col-span-1 space-y-4">
                    <h3 className="text-3xl font-bangers text-primary uppercase text-center md:text-left">TIC-TAC-TOE VS AI</h3>
                    
                    <div className="border-3 border-comic-black p-4 bg-accent dark:bg-slate-800 rounded-none shadow-comic-sm font-comic font-bold text-center md:text-left">
                      <div className="text-sm uppercase text-slate-500 dark:text-slate-400">STATUS GAME:</div>
                      <div className="text-xl uppercase mt-1">
                        {gameWinner === 'Tie' ? (
                          <span className="text-yellow-500">SERI!</span>
                        ) : gameWinner ? (
                          <span className={gameWinner === 'X' ? 'text-green-500' : 'text-red-500'}>
                            {gameWinner === 'X' ? 'Kamu Menang!' : 'AI Menang!'}
                          </span>
                        ) : isXNext ? (
                          <span className="text-primary animate-pulse">Giliran Anda (X)</span>
                        ) : (
                          <span className="text-orange-500">AI sedang berpikir...</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center font-bangers text-lg border-3 border-comic-black p-3 bg-white dark:bg-slate-900 shadow-comic-sm">
                      <div className="bg-green-100 dark:bg-green-950 p-2">
                        <div className="text-green-600 dark:text-green-400">PLAYER</div>
                        <div className="text-2xl text-comic-black dark:text-white">{scores.player}</div>
                      </div>
                      <div className="bg-red-100 dark:bg-red-950 p-2">
                        <div className="text-red-600 dark:text-red-400">ROBOT</div>
                        <div className="text-2xl text-comic-black dark:text-white">{scores.ai}</div>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-2">
                        <div className="text-slate-600 dark:text-slate-400">SERI</div>
                        <div className="text-2xl text-comic-black dark:text-white">{scores.ties}</div>
                      </div>
                    </div>

                    <button
                      onClick={resetGame}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 text-white font-bangers text-xl uppercase py-3 border-3 border-comic-black shadow-comic hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
                    >
                      <RotateCcw size={18} /> ULANG GAME
                    </button>
                  </div>

                  {/* The Grid Board */}
                  <div className="md:col-span-2 relative flex justify-center py-4">
                    {/* Comic Effect Popup */}
                    <AnimatePresence>
                      {comicEffect && (
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: [1.2, 1], rotate: [20, -5] }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute z-30 bg-yellow-400 text-comic-black border-4 border-comic-black font-bangers text-5xl md:text-6xl px-8 py-4 shadow-comic-lg transform rotate-6 uppercase tracking-wider"
                          style={{ top: '35%' }}
                        >
                          {comicEffect}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-3 gap-3 w-72 h-72 md:w-80 md:h-80 bg-comic-black border-4 border-comic-black shadow-comic-lg p-2 relative">
                      {board.map((square, index) => {
                        const isWinning = winningLine.includes(index);
                        return (
                          <button
                            key={index}
                            onClick={() => handleSquareClick(index)}
                            disabled={!!square || !!gameWinner || !isXNext}
                            className={`relative text-4xl md:text-5xl font-bangers flex items-center justify-center transition-all ${
                              isWinning 
                                ? 'bg-yellow-400 text-comic-black font-extrabold'
                                : square === 'X' 
                                  ? 'bg-blue-100 dark:bg-blue-900 text-primary' 
                                  : square === 'O' 
                                    ? 'bg-red-100 dark:bg-red-900 text-red-500' 
                                    : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
                            } border-3 border-comic-black select-none`}
                          >
                            {square && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="transform"
                              >
                                {square}
                              </motion.span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB 2: SHADOW GENERATOR */}
            {activeTab === 'shadow' && (
              <motion.div
                key="shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="comic-card text-comic-black dark:text-white"
              >
                <h3 className="text-3xl font-bangers text-secondary uppercase mb-8 text-center md:text-left">NEO-BRUTALIST SHADOW MAKER</h3>
                
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Controls */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between font-comic font-bold text-sm uppercase">
                        <span>Offset X:</span>
                        <span>{shadowX}px</span>
                      </div>
                      <input 
                        type="range" 
                        min="-20" 
                        max="20" 
                        value={shadowX} 
                        onChange={(e) => setShadowX(Number(e.target.value))}
                        className="w-full accent-primary border-2 border-comic-black p-1 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between font-comic font-bold text-sm uppercase">
                        <span>Offset Y:</span>
                        <span>{shadowY}px</span>
                      </div>
                      <input 
                        type="range" 
                        min="-20" 
                        max="20" 
                        value={shadowY} 
                        onChange={(e) => setShadowY(Number(e.target.value))}
                        className="w-full accent-primary border-2 border-comic-black p-1 bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block font-comic font-bold text-sm uppercase">Warna Shadow:</label>
                        <div className="flex gap-2 items-center">
                          <input 
                            type="color" 
                            value={shadowColor} 
                            onChange={(e) => setShadowColor(e.target.value)}
                            className="w-12 h-10 border-3 border-comic-black cursor-pointer bg-transparent"
                          />
                          <span className="font-mono text-sm">{shadowColor}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block font-comic font-bold text-sm uppercase">Warna Box:</label>
                        <div className="flex gap-2 items-center">
                          <input 
                            type="color" 
                            value={bgColor} 
                            onChange={(e) => setBgColor(e.target.value)}
                            className="w-12 h-10 border-3 border-comic-black cursor-pointer bg-transparent"
                          />
                          <span className="font-mono text-sm">{bgColor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={copyShadowCode}
                        className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-bangers text-xl uppercase py-3 border-3 border-comic-black shadow-comic active:translate-y-1 active:shadow-none hover:-translate-y-0.5"
                      >
                        {copiedText ? (
                          <>
                            <Check size={18} /> BERHASIL DISALIN!
                          </>
                        ) : (
                          <>
                            <Copy size={18} /> SALIN CLASS TAILWIND
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Preview Screen */}
                  <div className="flex flex-col items-center justify-center border-4 border-dashed border-slate-300 dark:border-slate-700 p-8 min-h-64 bg-slate-50 dark:bg-slate-950 relative">
                    <div 
                      style={shadowStyle}
                      className="w-44 h-44 flex flex-col items-center justify-center p-4 transition-all duration-75 select-none"
                    >
                      <span className="font-bangers text-3xl text-white uppercase text-center tracking-wider drop-shadow-[2px_2px_0px_#000000]">
                        BOOM!
                      </span>
                    </div>

                    <div className="mt-8 font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-2 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {getTailwindCode()}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: PALETTE BOARD */}
            {activeTab === 'palette' && (
              <motion.div
                key="palette"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="comic-card text-comic-black dark:text-white"
              >
                <h3 className="text-3xl font-bangers text-green-500 uppercase mb-8 text-center md:text-left">COMIC COLOR PALETTE BOARD</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {palettes.map((palette) => (
                    <div 
                      key={palette.name}
                      className="border-3 border-comic-black p-4 bg-white dark:bg-slate-900 shadow-comic"
                    >
                      <h4 className="font-bangers text-xl text-comic-black dark:text-white uppercase mb-3 tracking-wide">{palette.name}</h4>
                      
                      <div className="grid grid-cols-6 gap-2">
                        {palette.colors.map((color) => {
                          const isCopied = copiedColor === color;
                          return (
                            <button
                              key={color}
                              onClick={() => handleCopyColor(color)}
                              style={{ backgroundColor: color }}
                              className="h-14 border-2 border-comic-black shadow-comic-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center text-white relative group"
                              title={`Copy ${color}`}
                            >
                              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                {isCopied ? <Check size={16} /> : <Copy size={16} />}
                              </div>
                              {isCopied && (
                                <span className="absolute -top-8 bg-comic-black text-white text-xxs font-mono px-1 py-0.5 rounded shadow-comic-sm uppercase">
                                  COPIED!
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-3 border-comic-black p-4 bg-yellow-100 dark:bg-yellow-950 font-comic font-bold text-center text-comic-black dark:text-slate-200">
                  Tips: Klik warna apa saja di atas untuk menyalin kode hex secara instan ke clipboard Anda!
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Playground;
