import React, { useState } from 'react';
import { Grid, RotateCcw, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface Point {
  x: number;
  y: number;
}

interface PuzzleConfig {
  id: string;
  title: string;
  gridCols: number;
  gridRows: number;
  referencePoints: Point[]; // Sequence of polygon vertices
  extraLines?: Point[][];
  eye?: Point;
}

const PUZZLES: PuzzleConfig[] = [
  {
    id: 'duck',
    title: '1. Geometric Duck',
    gridCols: 8,
    gridRows: 9,
    referencePoints: [
      { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 2 }, { x: 2, y: 2 },
      { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 6 },
      { x: 6, y: 6 }, { x: 7, y: 5 }, { x: 7, y: 4 }, { x: 6, y: 3 },
      { x: 5, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 1 }
    ],
    extraLines: [
      [{ x: 3, y: 6 }, { x: 3, y: 8 }, { x: 2, y: 8 }],
      [{ x: 5, y: 6 }, { x: 5, y: 8 }, { x: 6, y: 8 }]
    ],
    eye: { x: 3, y: 2 }
  },
  {
    id: 'elephant',
    title: '2. Geometric Elephant',
    gridCols: 8,
    gridRows: 9,
    referencePoints: [
      { x: 4, y: 1 }, { x: 5, y: 2 }, { x: 7, y: 2 }, { x: 7, y: 5 },
      { x: 8, y: 6 }, { x: 7, y: 5 }, { x: 7, y: 8 }, { x: 6, y: 8 },
      { x: 6, y: 6 }, { x: 4, y: 6 }, { x: 4, y: 8 }, { x: 3, y: 8 },
      { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 8 }, { x: 2, y: 7 },
      { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 1 }
    ],
    extraLines: [
      [{ x: 4, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 5 }]
    ],
    eye: { x: 2.5, y: 3.5 }
  },
  {
    id: 'bull',
    title: '3. Geometric Bull Head',
    gridCols: 8,
    gridRows: 9,
    referencePoints: [
      { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 1 },
      { x: 5, y: 2 }, { x: 6, y: 1 }, { x: 7, y: 2 }, { x: 6, y: 4 },
      { x: 6, y: 6 }, { x: 5, y: 8 }, { x: 3, y: 8 }, { x: 2, y: 6 },
      { x: 2, y: 4 }, { x: 1, y: 2 }
    ],
    extraLines: [
      [{ x: 1, y: 3 }, { x: 7, y: 3 }]
    ]
  }
];

export const P48_CopyPicture: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const [activePuzzleId, setActivePuzzleId] = useState<string>('duck');
  const [showGhost, setShowGhost] = useState<boolean>(false);

  // Map puzzleId -> Point[]
  const userLines: Record<string, Point[]> = data.userLines || {
    duck: [],
    elephant: [],
    bull: []
  };

  const activePuzzle = PUZZLES.find(p => p.id === activePuzzleId) || PUZZLES[0];
  const currentPoints = userLines[activePuzzle.id] || [];

  const handleGridClick = (x: number, y: number) => {
    if (isCompleted) return;
    const nextPoints = [...currentPoints, { x, y }];
    onUpdate('userLines', {
      ...userLines,
      [activePuzzle.id]: nextPoints
    });
  };

  const handleClearCurrent = () => {
    if (isCompleted) return;
    onUpdate('userLines', {
      ...userLines,
      [activePuzzle.id]: []
    });
  };

  const handleAutoConnect = () => {
    if (isCompleted) return;
    onUpdate('userLines', {
      ...userLines,
      [activePuzzle.id]: [...activePuzzle.referencePoints]
    });
  };

  // SVG grid renderer helper
  const renderGridSVG = (points: Point[], isReference = false, ghost = false) => {
    const cellSize = 30;
    const width = activePuzzle.gridCols * cellSize;
    const height = activePuzzle.gridRows * cellSize;

    const polylineStr = points.map(p => `${p.x * cellSize},${p.y * cellSize}`).join(' ');

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={`w-full max-w-[280px] aspect-[8/9] bg-white rounded-xl border-2 ${
          isReference ? 'border-slate-300' : 'border-indigo-300 shadow-sm'
        }`}
      >
        {/* Grid lines */}
        {Array.from({ length: activePuzzle.gridCols + 1 }).map((_, c) => (
          <line
            key={`c-${c}`}
            x1={c * cellSize}
            y1={0}
            x2={c * cellSize}
            y2={height}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: activePuzzle.gridRows + 1 }).map((_, r) => (
          <line
            key={`r-${r}`}
            x1={0}
            y1={r * cellSize}
            x2={width}
            y2={r * cellSize}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}

        {/* Ghost guide overlay */}
        {ghost && (
          <polyline
            points={activePuzzle.referencePoints.map(p => `${p.x * cellSize},${p.y * cellSize}`).join(' ')}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeDasharray="4,4"
          />
        )}

        {/* Connected path */}
        {points.length > 1 && (
          <polyline
            points={polylineStr}
            fill={isReference ? '#f8fafc' : 'rgba(99, 102, 241, 0.08)'}
            stroke={isReference ? '#0f172a' : '#4f46e5'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Eye dot */}
        {activePuzzle.eye && (
          <circle
            cx={activePuzzle.eye.x * cellSize}
            cy={activePuzzle.eye.y * cellSize}
            r="4"
            fill="#0f172a"
          />
        )}

        {/* Clickable vertex nodes for the right active grid */}
        {!isReference &&
          Array.from({ length: activePuzzle.gridCols + 1 }).map((_, col) =>
            Array.from({ length: activePuzzle.gridRows + 1 }).map((_, row) => {
              const isSelected = points.some(p => p.x === col && p.y === row);
              return (
                <circle
                  key={`dot-${col}-${row}`}
                  cx={col * cellSize}
                  cy={row * cellSize}
                  r={isSelected ? 5 : 3.5}
                  fill={isSelected ? '#4f46e5' : '#cbd5e1'}
                  className="cursor-pointer hover:fill-indigo-600 transition-all hover:scale-125"
                  onClick={() => handleGridClick(col, row)}
                />
              );
            })
          )}
      </svg>
    );
  };

  const completedPuzzlesCount = PUZZLES.filter(p => (userLines[p.id]?.length || 0) >= 4).length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 48 • बालविकास (Grid Precision Drawing)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Grid className="w-8 h-8 text-cyan-200" />
            Copy the Picture on the Grid
          </h2>
          <p className="mt-1 text-indigo-100 text-sm sm:text-base max-w-2xl">
            Look at the picture on the left grid. Replicate the exact geometric drawing vertex-by-vertex on the right grid!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">📐</div>
      </div>

      {/* Puzzle Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {PUZZLES.map(p => {
            const hasProgress = (userLines[p.id]?.length || 0) >= 4;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePuzzleId(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activePuzzleId === p.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{p.title}</span>
                {hasProgress && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowGhost(!showGhost)}
            className="text-xs font-bold text-slate-600 bg-white border border-slate-300 px-3 py-1.5 rounded-xl hover:bg-slate-50 flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-500" />
            {showGhost ? 'Hide Ghost Guide' : 'Show Ghost Guide'}
          </button>
          <button
            type="button"
            onClick={handleAutoConnect}
            className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-xl hover:bg-indigo-100 flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Auto-Trace
          </button>
          <button
            type="button"
            onClick={handleClearCurrent}
            className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl hover:bg-rose-100 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Side by side comparison */}
      <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>Original Reference (डावीकडे)</span>
          <span>Your Drawing Canvas (उजवीकडे - Click dots to connect)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {/* Left Reference */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-bold text-slate-600">Left: Reference Model</span>
            {renderGridSVG(activePuzzle.referencePoints, true)}
          </div>

          {/* Right Interactive Grid */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-bold text-indigo-700">
              Right: Your Canvas ({currentPoints.length} vertices connected)
            </span>
            {renderGridSVG(currentPoints, false, showGhost)}
          </div>
        </div>

        <div className="pt-3 text-center text-xs text-slate-500">
          💡 Click on each grid dot to draw the next segment. Click 'Show Ghost Guide' if you need a dotted hint!
        </div>
      </div>
    </div>
  );
};
