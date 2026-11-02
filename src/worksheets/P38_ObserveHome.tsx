import React, { useState, useRef, useEffect } from 'react';
import { Home, Pencil, Eraser, RotateCcw, Sparkles } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface RoomItem {
  id: string;
  name: string;
  emoji: string;
  room: 'living' | 'kitchen' | 'bedroom' | 'bathroom';
}

const AVAILABLE_ITEMS: RoomItem[] = [
  // Living room
  { id: 'sofa', name: 'Comfy Sofa', emoji: '🛋️', room: 'living' },
  { id: 'tv', name: 'Television', emoji: '📺', room: 'living' },
  { id: 'plant', name: 'House Plant', emoji: '🪴', room: 'living' },
  { id: 'lamp', name: 'Floor Lamp', emoji: '💡', room: 'living' },
  { id: 'clock', name: 'Wall Clock', emoji: '⏰', room: 'living' },

  // Kitchen
  { id: 'pot', name: 'Cooking Pot', emoji: '🍲', room: 'kitchen' },
  { id: 'stove', name: 'Gas Stove', emoji: '🍳', room: 'kitchen' },
  { id: 'fridge', name: 'Fridge', emoji: '🧊', room: 'kitchen' },
  { id: 'microwave', name: 'Microwave', emoji: '📻', room: 'kitchen' },
  { id: 'kettle', name: 'Tea Kettle', emoji: '🫖', room: 'kitchen' },

  // Bedroom
  { id: 'bed', name: 'Cozy Bed', emoji: '🛏️', room: 'bedroom' },
  { id: 'pillow', name: 'Soft Pillow', emoji: '🪶', room: 'bedroom' },
  { id: 'wardrobe', name: 'Wardrobe', emoji: '🚪', room: 'bedroom' },
  { id: 'desk', name: 'Study Desk', emoji: '🪑', room: 'bedroom' },
  { id: 'books', name: 'Story Books', emoji: '📚', room: 'bedroom' },

  // Bathroom
  { id: 'bath', name: 'Bathtub', emoji: '🛁', room: 'bathroom' },
  { id: 'towel', name: 'Clean Towel', emoji: '🧖', room: 'bathroom' },
  { id: 'soap', name: 'Fragrant Soap', emoji: '🧼', room: 'bathroom' },
  { id: 'brush', name: 'Toothbrush', emoji: '🪥', room: 'bathroom' },
  { id: 'mirror', name: 'Wall Mirror', emoji: '🪞', room: 'bathroom' }
];

export const P38_ObserveHome: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const roomItems: Record<string, string[]> = data.roomItems || {
    living: [],
    kitchen: [],
    bedroom: [],
    bathroom: []
  };

  const roomNotes: Record<string, string> = data.roomNotes || {
    living: '',
    kitchen: '',
    bedroom: '',
    bathroom: ''
  };

  const [activeTab, setActiveTab] = useState<'stickers' | 'draw'>('stickers');
  const [selectedRoom, setSelectedRoom] = useState<'living' | 'kitchen' | 'bedroom' | 'bathroom'>('living');

  // Simple canvas doodle support
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawColor, setDrawColor] = useState('#2563eb');
  const [brushSize, setBrushSize] = useState(4);

  const toggleItemInRoom = (item: RoomItem) => {
    if (isCompleted) return;
    const currentList = roomItems[item.room] || [];
    const updatedList = currentList.includes(item.id)
      ? currentList.filter(id => id !== item.id)
      : [...currentList, item.id];

    onUpdate('roomItems', {
      ...roomItems,
      [item.room]: updatedList
    });
  };

  const handleNoteChange = (room: string, val: string) => {
    onUpdate('roomNotes', {
      ...roomNotes,
      [room]: val
    });
  };

  const rooms = [
    { id: 'living', name: 'Living Room (बैठक खोली)', icon: '🛋️', color: 'border-amber-300 bg-amber-50/30' },
    { id: 'kitchen', name: 'Kitchen (स्वयंपाकघर)', icon: '🍳', color: 'border-orange-300 bg-orange-50/30' },
    { id: 'bedroom', name: 'Bedroom (शयनकक्ष)', icon: '🛏️', color: 'border-blue-300 bg-blue-50/30' },
    { id: 'bathroom', name: 'Bathroom (स्नानगृह)', icon: '🛁', color: 'border-teal-300 bg-teal-50/30' }
  ];

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (isCompleted || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (canvasRef.current) {
      onUpdate('savedCanvas', canvasRef.current.toDataURL());
    }
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      onUpdate('savedCanvas', '');
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 38 • उमलताना (Observation & Art)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Home className="w-8 h-8 text-sky-200" />
            Observe and Draw Your Home!
          </h2>
          <p className="mt-1 text-sky-100 text-sm sm:text-base max-w-2xl">
            Look around your home! Think about the special things inside each room. Place the furniture and household items in the correct room, or use the draw tool to sketch them!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🏡</div>
      </div>

      {/* Mode Switcher */}
      <div className="flex gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('stickers')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'stickers'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          🛋️ 4-Room Interactive Explorer
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('draw')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'draw'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          ✏️ Freehand Drawing Canvas
        </button>
      </div>

      {activeTab === 'stickers' ? (
        <div className="space-y-6">
          {/* 4 Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rooms.map(room => {
              const placed = roomItems[room.id] || [];
              const availableInThisRoom = AVAILABLE_ITEMS.filter(i => i.room === room.id);

              return (
                <div
                  key={room.id}
                  className={`p-5 rounded-2xl border-2 ${room.color} bg-white shadow-sm space-y-4`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-base">
                      <span className="text-2xl">{room.icon}</span>
                      <span>{room.name}</span>
                    </div>
                    <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">
                      {placed.length} items
                    </span>
                  </div>

                  {/* Room Stickers Tray */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Tap items to place in this room:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableInThisRoom.map(item => {
                        const isPlaced = placed.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleItemInRoom(item)}
                            className={`p-2 rounded-xl border text-left text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isPlaced
                                ? 'bg-sky-100 border-sky-400 text-sky-950 scale-102 shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <span className="text-lg">{item.emoji}</span>
                            <span className="truncate">{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Observations Note */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      What else did you observe in your {room.name.split(' ')[0]}?
                    </label>
                    <input
                      type="text"
                      value={roomNotes[room.id] || ''}
                      onChange={(e) => handleNoteChange(room.id, e.target.value)}
                      placeholder="e.g. My study books, a blue curtain, soft rug..."
                      className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-400 focus:outline-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Freehand Drawing Canvas */
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Color:</span>
              {['#2563eb', '#16a34a', '#dc2626', '#d97706', '#9333ea', '#000000'].map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setDrawColor(c)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform ${
                    drawColor === c ? 'scale-125 border-slate-800' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Brush:</span>
              {[2, 4, 8].map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setBrushSize(s)}
                  className={`px-2 py-0.5 rounded text-xs border font-bold ${
                    brushSize === s ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {s}px
                </button>
              ))}

              <button
                type="button"
                onClick={clearCanvas}
                className="px-3 py-1 text-xs text-red-600 hover:bg-red-50 rounded-lg border border-red-200 font-bold flex items-center gap-1 ml-2"
              >
                <Eraser className="w-3.5 h-3.5" /> Clear
              </button>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-2xl overflow-hidden bg-slate-50 relative flex items-center justify-center">
            <canvas
              ref={canvasRef}
              width={640}
              height={360}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full max-w-[640px] aspect-[16/9] cursor-crosshair bg-white"
            />
          </div>
          <p className="text-xs text-center text-slate-400">
            Sketch your home layout, bedroom desk, or living room sofa!
          </p>
        </div>
      )}
    </div>
  );
};
