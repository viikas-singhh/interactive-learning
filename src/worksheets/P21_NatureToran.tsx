import React, { useState } from 'react';
import { Leaf, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface ToranSlot {
  id: string;
  type: 'leaf' | 'flower' | 'circle';
  x: number;
  y: number;
  label: string;
}

const TORAN_SLOTS: ToranSlot[] = [
  // Top hanging garland nodes (circles)
  { id: 'c1', type: 'circle', x: 12, y: 15, label: 'Circle 1' },
  { id: 'c2', type: 'circle', x: 30, y: 18, label: 'Circle 2' },
  { id: 'c3', type: 'circle', x: 50, y: 20, label: 'Circle 3' },
  { id: 'c4', type: 'circle', x: 70, y: 18, label: 'Circle 4' },
  { id: 'c5', type: 'circle', x: 88, y: 15, label: 'Circle 5' },

  // Primary hanging flowers
  { id: 'f1', type: 'flower', x: 20, y: 36, label: 'Flower 1' },
  { id: 'f2', type: 'flower', x: 40, y: 38, label: 'Flower 2' },
  { id: 'f3', type: 'flower', x: 60, y: 38, label: 'Flower 3' },
  { id: 'f4', type: 'flower', x: 80, y: 36, label: 'Flower 4' },
  { id: 'f5', type: 'flower', x: 50, y: 62, label: 'Center Flower' },

  // Hanging leaves
  { id: 'l1', type: 'leaf', x: 14, y: 55, label: 'Leaf 1' },
  { id: 'l2', type: 'leaf', x: 28, y: 58, label: 'Leaf 2' },
  { id: 'l3', type: 'leaf', x: 38, y: 65, label: 'Leaf 3' },
  { id: 'l4', type: 'leaf', x: 62, y: 65, label: 'Leaf 4' },
  { id: 'l5', type: 'leaf', x: 72, y: 58, label: 'Leaf 5' },
  { id: 'l6', type: 'leaf', x: 86, y: 55, label: 'Leaf 6' },
  { id: 'l7', type: 'leaf', x: 20, y: 78, label: 'Leaf 7' },
  { id: 'l8', type: 'leaf', x: 50, y: 84, label: 'Leaf 8' },
  { id: 'l9', type: 'leaf', x: 80, y: 78, label: 'Leaf 9' }
];

const BOTANICAL_ITEMS = {
  leaf: [
    { id: 'mango', name: 'Mango Leaf (आंबा)', emoji: '🍃', color: '#16a34a' },
    { id: 'ashoka', name: 'Ashoka Leaf (अशोक)', emoji: '🌿', color: '#15803d' },
    { id: 'peepal', name: 'Peepal Leaf (पिंपळ)', emoji: '🌱', color: '#22c55e' },
    { id: 'neem', name: 'Neem Leaf (कडुनिंब)', emoji: '☘️', color: '#047857' }
  ],
  flower: [
    { id: 'marigold_org', name: 'Orange Marigold (झेंडू)', emoji: '🏵️', color: '#f97316' },
    { id: 'marigold_yel', name: 'Yellow Marigold (पिवळा झेंडू)', emoji: '🌼', color: '#eab308' },
    { id: 'rose', name: 'Red Rose (गुलाब)', emoji: '🌹', color: '#ef4444' },
    { id: 'jasmine', name: 'White Jasmine (मोगरा)', emoji: '🤍', color: '#f8fafc' }
  ],
  circle: [
    { id: 'sunflower_seed', name: 'Sunflower Seed (सूर्यफूल बी)', emoji: '🌰', color: '#78350f' },
    { id: 'lotus_seed', name: 'Lotus Seed (कमळ बी)', emoji: '🟤', color: '#92400e' },
    { id: 'rose_petal', name: 'Rose Petal (पाकळी)', emoji: '🌸', color: '#f43f5e' },
    { id: 'golden_bead', name: 'Golden Seed (सोनेरी मणी)', emoji: '✨', color: '#eab308' }
  ]
};

export const P21_NatureToran: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const placements: Record<string, string> = data.placements || {};
  const [selectedItem, setSelectedItem] = useState<{ type: 'leaf' | 'flower' | 'circle'; id: string } | null>({
    type: 'leaf',
    id: 'mango'
  });

  const handleSlotClick = (slot: ToranSlot) => {
    if (isCompleted || !selectedItem) return;
    if (selectedItem.type !== slot.type) {
      return;
    }
    const next = { ...placements, [slot.id]: selectedItem.id };
    onUpdate('placements', next);
  };

  const handleClearSlot = (slotId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCompleted) return;
    const next = { ...placements };
    delete next[slotId];
    onUpdate('placements', next);
  };

  const getItemDetails = (type: 'leaf' | 'flower' | 'circle', itemId: string) => {
    return BOTANICAL_ITEMS[type].find(i => i.id === itemId);
  };

  // Challenge computations
  const usedLeaves = new Set<string>();
  const usedFlowers = new Set<string>();
  let circleCount = 0;

  Object.entries(placements).forEach(([slotId, itemId]) => {
    const slot = TORAN_SLOTS.find(s => s.id === slotId);
    if (slot?.type === 'leaf') usedLeaves.add(itemId);
    if (slot?.type === 'flower') usedFlowers.add(itemId);
    if (slot?.type === 'circle') circleCount++;
  });

  const leafChallengeMet = usedLeaves.size >= 3;
  const flowerChallengeMet = usedFlowers.size >= 2;
  const circleChallengeMet = circleCount >= 3;
  const allChallengesMet = leafChallengeMet && flowerChallengeMet && circleChallengeMet;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 21 • निसर्गाचे तोरण
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Make a Nature Diwali Toran!
          </h2>
          <p className="mt-1 text-emerald-100 text-sm sm:text-base max-w-2xl">
            Let's decorate our Diwali doorway with nature! Choose leaves, flowers, and seeds from your botanical tray below and place them on the hanging toran.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🌿</div>
      </div>

      {/* Challenge Checklist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
          leafChallengeMet ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : 'bg-white border-slate-200 text-slate-700'
        }`}>
          <div className={`p-2 rounded-lg ${leafChallengeMet ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Challenge 1</div>
            <div className="text-sm font-bold">At least 3 leaf types</div>
            <div className="text-xs text-slate-500 font-semibold">{usedLeaves.size} of 3 used</div>
          </div>
          {leafChallengeMet && <CheckCircle2 className="w-5 h-5 ml-auto text-emerald-600 fill-emerald-100" />}
        </div>

        <div className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
          flowerChallengeMet ? 'bg-amber-50 border-amber-400 text-amber-900' : 'bg-white border-slate-200 text-slate-700'
        }`}>
          <div className={`p-2 rounded-lg ${flowerChallengeMet ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Challenge 2</div>
            <div className="text-sm font-bold">At least 2 flower types</div>
            <div className="text-xs text-slate-500 font-semibold">{usedFlowers.size} of 2 used</div>
          </div>
          {flowerChallengeMet && <CheckCircle2 className="w-5 h-5 ml-auto text-amber-600 fill-amber-100" />}
        </div>

        <div className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
          circleChallengeMet ? 'bg-purple-50 border-purple-400 text-purple-900' : 'bg-white border-slate-200 text-slate-700'
        }`}>
          <div className={`p-2 rounded-lg ${circleChallengeMet ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
            <span className="text-lg">🌰</span>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Challenge 3</div>
            <div className="text-sm font-bold">Seeds / Petals in circles</div>
            <div className="text-xs text-slate-500 font-semibold">{circleCount} of 3+ filled</div>
          </div>
          {circleChallengeMet && <CheckCircle2 className="w-5 h-5 ml-auto text-purple-600 fill-purple-100" />}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Botanical Tray */}
        <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <span>🌿</span> Nature's Tray (Select an Item)
          </h3>
          <p className="text-xs text-slate-500">
            Click an item to pick it up, then click matching slots on the doorway toran.
          </p>

          {/* Leaf palette */}
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">🍃 Leaves</span>
            <div className="grid grid-cols-2 gap-2">
              {BOTANICAL_ITEMS.leaf.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem({ type: 'leaf', id: item.id })}
                  className={`p-2.5 rounded-xl border text-left text-xs font-bold flex items-center gap-2 transition-all ${
                    selectedItem?.type === 'leaf' && selectedItem.id === item.id
                      ? 'bg-emerald-100 border-emerald-500 ring-2 ring-emerald-300 text-emerald-950 scale-102'
                      : 'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100/50 text-slate-700'
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="truncate">{item.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Flower palette */}
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-2">🌸 Flowers</span>
            <div className="grid grid-cols-2 gap-2">
              {BOTANICAL_ITEMS.flower.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem({ type: 'flower', id: item.id })}
                  className={`p-2.5 rounded-xl border text-left text-xs font-bold flex items-center gap-2 transition-all ${
                    selectedItem?.type === 'flower' && selectedItem.id === item.id
                      ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-300 text-amber-950 scale-102'
                      : 'bg-amber-50/50 border-amber-200 hover:bg-amber-100/50 text-slate-700'
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="truncate">{item.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Seed palette */}
          <div>
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-2">🌰 Seeds & Petals</span>
            <div className="grid grid-cols-2 gap-2">
              {BOTANICAL_ITEMS.circle.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem({ type: 'circle', id: item.id })}
                  className={`p-2.5 rounded-xl border text-left text-xs font-bold flex items-center gap-2 transition-all ${
                    selectedItem?.type === 'circle' && selectedItem.id === item.id
                      ? 'bg-purple-100 border-purple-500 ring-2 ring-purple-300 text-purple-950 scale-102'
                      : 'bg-purple-50/50 border-purple-200 hover:bg-purple-100/50 text-slate-700'
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="truncate">{item.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Toran Canvas Stage */}
        <div className="lg:col-span-2 bg-gradient-to-b from-amber-50/80 to-stone-100 rounded-2xl p-6 border-2 border-amber-200 shadow-inner flex flex-col items-center justify-center relative min-h-[460px]">
          {/* Wooden Door Frame Arch */}
          <div className="w-full max-w-lg h-10 border-b-8 border-amber-800 bg-amber-900/10 rounded-t-lg flex items-center justify-center mb-6">
            <span className="text-xs font-bold text-amber-900 tracking-widest uppercase">
              ✨ शुभ दीपावली — Doorway Garland ✨
            </span>
          </div>

          {/* Interactive Toran SVG & Nodes */}
          <div className="relative w-full max-w-lg aspect-[4/3] bg-white/70 backdrop-blur-xs rounded-xl border border-amber-200 p-4 shadow-sm">
            {/* Hanging String Curve lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 5,10 Q 50,30 95,10" fill="none" stroke="#b45309" strokeWidth="1" strokeDasharray="2,2" />
              <path d="M 12,15 Q 50,45 88,15" fill="none" stroke="#d97706" strokeWidth="1" />
              <line x1="20" y1="18" x2="20" y2="82" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1="40" y1="20" x2="40" y2="70" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1="50" y1="22" x2="50" y2="88" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1="60" y1="20" x2="60" y2="70" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1="80" y1="18" x2="80" y2="82" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="1,1" />
            </svg>

            {/* Slots */}
            {TORAN_SLOTS.map(slot => {
              const placedItemId = placements[slot.id];
              const placedItem = placedItemId ? getItemDetails(slot.type, placedItemId) : null;
              const isMatchForActive = selectedItem?.type === slot.type;

              return (
                <div
                  key={slot.id}
                  onClick={() => handleSlotClick(slot)}
                  style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                    placedItem
                      ? 'scale-110'
                      : isMatchForActive
                      ? 'animate-pulse scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center transition-all ${
                      slot.type === 'circle'
                        ? 'w-7 h-7 rounded-full border-2'
                        : slot.type === 'flower'
                        ? 'w-10 h-10 rounded-full border-2'
                        : 'w-10 h-12 rounded-xl border-2'
                    } ${
                      placedItem
                        ? 'bg-white shadow-md border-amber-400'
                        : isMatchForActive
                        ? 'bg-amber-100/90 border-amber-400 border-dashed'
                        : 'bg-slate-50 border-slate-300 border-dashed'
                    }`}
                  >
                    {placedItem ? (
                      <span className="text-lg relative group">
                        {placedItem.emoji}
                        {!isCompleted && (
                          <button
                            type="button"
                            onClick={(e) => handleClearSlot(slot.id, e)}
                            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                            title="Remove"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        {slot.type === 'circle' ? '●' : slot.type === 'flower' ? '🌸' : '🍃'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom helper */}
          <div className="mt-4 flex items-center justify-between w-full max-w-lg text-xs text-slate-600">
            <span>{Object.keys(placements).length} of {TORAN_SLOTS.length} slots decorated</span>
            {allChallengesMet && (
              <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-100 px-3 py-1 rounded-full">
                🎉 Doorway Toran Masterpiece Complete!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
