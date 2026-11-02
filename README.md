# 🌟 KidQuest: Interactive Educational Workbook for Kids

KidQuest is a responsive, joyful, and feature-complete web application that converts static educational worksheets from a 64-page children's workbook into an engaging, interactive digital learning platform.

---

## 🚀 Features & Architecture

- **React 19 + TypeScript + Vite + Tailwind CSS + Lucide Icons + Canvas Confetti**
- **Complete Fidelity to the Source PDF**: All selected worksheets (pages 20, 21, 22, 29, 30, 36, 37, 38, 39, 40, 41, 42, 43, 46, 47, 48, 49, 50, 51, 52, 53, 54) are faithfully converted into dedicated interactive experiences.
- **Intelligent Activity Types**:
  - *Click-to-Select & Multiple Choice* (Page 39 Values, Page 42 Ethical Scenarios, Page 50 Missing Parts & Associations, Page 53 Story Quiz)
  - *Symmetry & Digital Drawing* (Page 22 Rangoli Designer, Page 38 Home Doodle, Page 48 Grid Point-to-Point Drawing, Page 49 Bilateral Symmetry Drawing, Page 47 Diya Decorator)
  - *Drag, Placement & Visual Mazes* (Page 21 Botanical Toran Maker, Page 43 Fire Safety Sorting, Page 51 5 Senses Maze, Page 52 Spot 6 Absurdities in Picture)
  - *Mathematical Ledgers & Financial Responsibility* (Page 29 Gullak Expense Calculator, Page 30 4-Month Savings Ledger with dynamic weekly totals)
  - *Interactive Word Search & Language Storytelling* (Page 54 Numbers 1-12 Word Search, Page 36 Jungle Safari Adventure with Word Bank)
- **Automatic Saving**: All answers, drawings, and states persist automatically in the browser's `localStorage`.
- **Celebration & Gamification**: Confetti bursts, star badges, and a printable **Official Master Learner Certificate**.

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Launch

```bash
# 1. Clone or navigate to the project directory
cd d:/kids-learning

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the local development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Building for Production

```bash
npm run build
npm run preview
```

---

## 📚 Worksheet Inventory & Verification Matrix

| PDF Page | Marathi Title / English Title | Interaction Type | Auto-Evaluated? | Learning Objective |
|:---:|:---|:---|:---:|:---|
| **20** | **माझी दिवाळी (My Diwali)** | 4-Quadrant Reflection, Text Writing, Festive Sticker Tray | Subjective | Festival preparations, family memories, and reflection |
| **21** | **निसर्गाचे तोरण (Nature Toran)** | Botanical item picker, garland placement, challenge counter | Yes (3 leaf + 2 flower types) | Eco-friendly decoration and botanical awareness |
| **22** | **माझी रांगोळी (Rangoli Challenge)** | Interactive SVG color filler, 12-color palette, 5-color challenge | Yes (≥ 5 colors) | Geometry, color harmony, and traditional Indian art |
| **29** | **माझ्या शिक्षणाची जबाबदारी (Education Responsibility)** | DIY Gullak selector, Expense math calculator, target planner | Yes (Real-time auto-sum) | Financial literacy and educational awareness |
| **30** | **माझी फेब्रुवारीकडे वाटचाल (Journey to February)** | 4-month weekly savings ledger, multi-checkboxes, milestone tracker | Yes (Savings math calculation) | Long-term budgeting, delayed gratification, and discipline |
| **36** | **जंगल सफारी कथा (Jungle Safari)** | Story title, word bank chips, ruled notebook manuscript | Subjective | Creative writing, vocabulary building, and wildlife storytelling |
| **37** | **घरातील विज्ञान शोध (Science in My House)** | 8-category scavenger hunt, observation fields, helper hint chips | Yes (15 observation checklist) | Physics in daily life (magnets, electricity, sound, push/pull) |
| **38** | **घर निरीक्षण व चित्रकला (Observe & Draw Home)** | 4-room furniture placement, observation notes, freehand doodle pad | Yes (Room classification) | Spatial awareness, household organization, and observation |
| **39** | **माझी ३ जीवनमूल्ये (Circle 3 Values)** | Badge selector (exact 3 enforcement), real action stories, feelings | Yes (Max 3 selection check) | Social-Emotional Learning (SEL) and moral integrity |
| **40** | **समस्या आणि उपाय (Problem & Solution)** | Reading comprehension, keyword clue highlighter, cause-and-effect | Yes (Keyword self-check) | Environmental science (deforestation and soil erosion) |
| **41** | **माझी ऊर्जा आणि गळती (Energy Leak Detector)** | Interactive water bucket, energy givers, 5 leak diagnosis cards | Subjective | Mental energy management and self-awareness |
| **42** | **योग्य निर्णय की अयोग्य? (Decision Scenarios)** | 5 real-life dilemmas, Good/Bad toggle, consequence analysis | Yes (5 decision checks) | Ethics, empathy, and social responsibility |
| **43** | **आग सुरक्षा कार्ड (Sort Fire Safety Cards)** | 8 illustrated cards, 2-zone sorter (Hazard vs Safe Choice) | Yes (Binary classification) | Home and school fire safety rules |
| **46** | **दिवाळी फराळ (Diwali Faral Sweet Explorer)** | 9 traditional delicacies, color match, sensory taste tags | Yes (Full platter check) | Culinary vocabulary, sensory appreciation, and culture |
| **47** | **प्रकाश विरुद्ध अंधार (Light vs. Darkness Diya)** | 10 moral situations (Orange/Gray Diya toggles) + Diya designer | Yes (10 situation check) | Value distinction and aesthetic design |
| **48** | **चित्राची हुबेहूब प्रत करा (Copy Picture on Grid)** | 3 geometric grid puzzles (Duck, Elephant, Bull) with point connect | Yes (Vertex coordinate match) | Spatial geometry, precision drafting, and focus |
| **49** | **दिवाळी चित्र पूर्ण करा (Complete Diwali Symmetry)** | Bilateral symmetry mirror drawing (Diya, Kandil, Rangoli) | Yes (Bilateral symmetry check) | Geometric symmetry, balance, and artistic motor skills |
| **50** | **जोड्या जुळवा व गहाळ भाग शोधा (Double Challenge)** | Part A: Object associations; Part B: Spot the missing feature | Yes (9 visual checks) | Attention to detail and functional object associations |
| **51** | **५ ज्ञानेंद्रिये आणि कार्य (5 Senses Maze)** | Interactive sensory conduit connecting organs to functions | Yes (5 organ-function pairings) | Human biology, sensory functions, and motor coordination |
| **52** | **चित्रातील चुका ओळखा (Spot 6 Absurdities)** | Clickable park scene, golden magnifying ring, checklists | Yes (6 mistake discovery) | Critical thinking, observation, and logic |
| **53** | **जादुई काठी (The Magic Stick Story)** | 6 comic panels, speech narration, sequencing, moral quiz | Yes (Comprehension check) | Reading comprehension and moral values (kindness) |
| **54** | **१ ते १२ अंक शब्द शोध (Numbers 1-12 Word Search)**| Interactive letter matrix, spelling words ONE through TWELVE | Yes (12 hidden words check) | Number names, spelling, and pattern recognition |
