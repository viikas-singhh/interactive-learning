import type { WorksheetMetadata } from '../types';

export const WORKSHEETS_LIST: WorksheetMetadata[] = [
  {
    id: 'p20-my-diwali',
    pageNumber: 20,
    title: 'My Diwali Reflections',
    marathiTitle: 'माझी दिवाळी',
    category: 'Values & Ethics',
    gradeLevel: 'All Ages',
    description: 'Celebrate Diwali by reflecting on preparation, family, decorations, and your most cherished festival memory.',
    estimatedTime: '10 mins',
    icon: 'Sparkles',
    hasAutoGrading: false,
    activityTypes: ['Reflection', 'Creative Writing', 'Stickers'],
    badge: {
      title: 'Festive Luminary',
      icon: '🪔',
      description: 'Shared personal Diwali joys and traditions.'
    }
  },
  {
    id: 'p21-nature-toran',
    pageNumber: 21,
    title: 'Nature Diwali Toran Maker',
    marathiTitle: 'निसर्गाचे तोरण',
    category: 'Art & Creativity',
    gradeLevel: 'Ages 6-12',
    description: 'Design a sustainable eco-friendly doorway garland using mango leaves, marigolds, roses, and flower seeds.',
    estimatedTime: '8 mins',
    icon: 'Leaf',
    hasAutoGrading: true,
    activityTypes: ['Eco Craft', 'Drag & Drop', 'Creative Pattern'],
    badge: {
      title: 'Eco Artisan',
      icon: '🌿',
      description: 'Created a nature-inspired toran with 3 leaf types and 2 flowers.'
    }
  },
  {
    id: 'p22-rangoli-challenge',
    pageNumber: 22,
    title: 'Festive Rangoli Designer',
    marathiTitle: 'माझी रांगोळी',
    category: 'Art & Creativity',
    gradeLevel: 'All Ages',
    description: 'Color the festive floral rangoli! Meet the challenge by using at least 5 different colors to make your pattern shine.',
    estimatedTime: '10 mins',
    icon: 'Palette',
    hasAutoGrading: true,
    activityTypes: ['Coloring', 'Pattern Making', 'Mosaic Art'],
    badge: {
      title: 'Rangoli Master',
      icon: '🎨',
      description: 'Used 5+ harmonious festive colors to complete the rangoli.'
    }
  },
  {
    id: 'p29-piggy-bank',
    pageNumber: 29,
    title: 'My Education Responsibility',
    marathiTitle: 'माझ्या शिक्षणाची जबाबदारी',
    category: 'Financial Literacy',
    gradeLevel: 'Ages 9-14',
    description: 'Set up your DIY piggy bank (Gullak), calculate one month of real educational expenses, and establish your target.',
    estimatedTime: '12 mins',
    icon: 'PiggyBank',
    hasAutoGrading: true,
    activityTypes: ['Budgeting', 'Math Calculator', 'Goal Setting'],
    badge: {
      title: 'Young Economist',
      icon: '💰',
      description: 'Calculated monthly school expenses and set up a Gullak.'
    }
  },
  {
    id: 'p30-journey-february',
    pageNumber: 30,
    title: 'Journey to February Savings Tracker',
    marathiTitle: 'माझी फेब्रुवारीकडे वाटचाल',
    category: 'Financial Literacy',
    gradeLevel: 'Ages 9-14',
    description: 'Track weekly savings over 4 months (Nov-Feb), select where money came from, and reflect on financial discipline.',
    estimatedTime: '15 mins',
    icon: 'TrendingUp',
    hasAutoGrading: true,
    activityTypes: ['Financial Ledger', 'Multi-select', 'Reflection'],
    badge: {
      title: 'Disciplined Saver',
      icon: '📈',
      description: 'Tracked 4-month savings journey and reflected on money habits.'
    }
  },
  {
    id: 'p36-jungle-safari',
    pageNumber: 36,
    title: 'Creative Writing: Jungle Safari',
    marathiTitle: 'जंगल सफारी कथा',
    category: 'Language & Stories',
    gradeLevel: 'Ages 7-14',
    description: 'Write an imaginative story about exploring the jungle with friends, spotting elephants and tigers, and crossing rivers.',
    estimatedTime: '15 mins',
    icon: 'Compass',
    hasAutoGrading: false,
    activityTypes: ['Story Writing', 'Word Bank', 'Creative Expression'],
    badge: {
      title: 'Wild Storyteller',
      icon: '🦁',
      description: 'Penned an exciting jungle exploration narrative.'
    }
  },
  {
    id: 'p37-science-hunt',
    pageNumber: 37,
    title: 'Science in My House Hunt',
    marathiTitle: 'घरातील विज्ञान शोध',
    category: 'Science & Nature',
    gradeLevel: 'Ages 7-14',
    description: 'Turn your home into a science laboratory! Find magnets, electricity, evaporation, sound, reflections, pushes, and pulls.',
    estimatedTime: '12 mins',
    icon: 'FlaskConical',
    hasAutoGrading: true,
    activityTypes: ['Scavenger Hunt', 'Physics in Daily Life', 'Observations'],
    badge: {
      title: 'Junior Scientist',
      icon: '🔬',
      description: 'Identified 15+ real-world scientific principles at home.'
    }
  },
  {
    id: 'p38-observe-home',
    pageNumber: 38,
    title: 'Observe & Draw Your Home',
    marathiTitle: 'घर निरीक्षण व चित्रकला',
    category: 'Observation & Logic',
    gradeLevel: 'Ages 6-12',
    description: 'Observe 4 rooms in your home: Living Room, Kitchen, Bedroom, and Bathroom. Draw and place objects in the correct room.',
    estimatedTime: '10 mins',
    icon: 'Home',
    hasAutoGrading: true,
    activityTypes: ['Drawing Canvas', 'Item Placement', 'Spatial Observation'],
    badge: {
      title: 'Home Architect',
      icon: '🏡',
      description: 'Mapped and decorated all 4 essential household spaces.'
    }
  },
  {
    id: 'p39-circle-values',
    pageNumber: 39,
    title: 'Circle 3 of Your Values',
    marathiTitle: 'माझी ३ जीवनमूल्ये',
    category: 'Values & Ethics',
    gradeLevel: 'All Ages',
    description: 'Select exactly 3 core values (Kindness, Honesty, Courage, etc.), recount real actions where you showed them, and reflect on feelings.',
    estimatedTime: '10 mins',
    icon: 'HeartHandshake',
    hasAutoGrading: true,
    activityTypes: ['Value Selection (Max 3)', 'Action Description', 'Emotional Reflection'],
    badge: {
      title: 'Heart of Gold',
      icon: '💖',
      description: 'Practiced and reflected on your top 3 core values.'
    }
  },
  {
    id: 'p40-problem-solution',
    pageNumber: 40,
    title: 'Problem & Solution Analysis',
    marathiTitle: 'समस्या आणि उपाय',
    category: 'Science & Nature',
    gradeLevel: 'Ages 8-14',
    description: 'Read informative passages on Deforestation and Soil Erosion. Extract the key problems and environmental solutions.',
    estimatedTime: '10 mins',
    icon: 'HelpCircle',
    hasAutoGrading: true,
    activityTypes: ['Reading Comprehension', 'Cause & Effect', 'Text Extraction'],
    badge: {
      title: 'Earth Guardian',
      icon: '🌍',
      description: 'Solved environmental issues for deforestation and soil erosion.'
    }
  },
  {
    id: 'p41-energy-leak-detector',
    pageNumber: 41,
    title: 'Energy Leak Detector',
    marathiTitle: 'माझी ऊर्जा आणि गळती',
    category: 'Values & Ethics',
    gradeLevel: 'Ages 9-16',
    description: 'Identify what fills your energy bucket and diagnose 5 quiet mental leaks that drain your focus and peacefulness.',
    estimatedTime: '12 mins',
    icon: 'BatteryCharging',
    hasAutoGrading: false,
    activityTypes: ['Emotional Well-being', 'Interactive Bucket', 'Self-Awareness'],
    badge: {
      title: 'Mindful Dynamo',
      icon: '⚡',
      description: 'Plugged your emotional leaks and identified energy boosters.'
    }
  },
  {
    id: 'p42-decision-scenarios',
    pageNumber: 42,
    title: 'Is It a Good Decision?',
    marathiTitle: 'योग्य निर्णय की अयोग्य?',
    category: 'Values & Ethics',
    gradeLevel: 'Ages 8-14',
    description: 'Analyze 5 real-life school and family scenarios. Weigh the possible consequences and judge whether each action is a good decision.',
    estimatedTime: '12 mins',
    icon: 'Scale',
    hasAutoGrading: true,
    activityTypes: ['Decision Making', 'Consequence Chart', 'Ethics Evaluation'],
    badge: {
      title: 'Wise Judge',
      icon: '⚖️',
      description: 'Evaluated social consequences across all 5 decision scenarios.'
    }
  },
  {
    id: 'p43-fire-safety',
    pageNumber: 43,
    title: 'Sort the Fire Safety Cards',
    marathiTitle: 'आग सुरक्षा कार्ड वर्गीकरण',
    category: 'Observation & Logic',
    gradeLevel: 'Ages 6-12',
    description: 'Classify 8 illustrated cards into "Fire Hazard" or "Safe Choice" to learn how to keep home and school fire-safe.',
    estimatedTime: '8 mins',
    icon: 'Flame',
    hasAutoGrading: true,
    activityTypes: ['Card Sorting', 'Safety Rules', 'Binary Classification'],
    badge: {
      title: 'Safety Hero',
      icon: '🧯',
      description: 'Sorted all 8 fire cards accurately without a single spark.'
    }
  },
  {
    id: 'p46-diwali-faral',
    pageNumber: 46,
    title: 'Diwali Faral Sweet Explorer',
    marathiTitle: 'दिवाळी फराळ चव आणि रंग',
    category: 'Art & Creativity',
    gradeLevel: 'All Ages',
    description: 'Explore 9 traditional festive sweets and savory treats (Chakli, Karanji, Kaju Katli). Record their golden colors and delicious taste profiles.',
    estimatedTime: '10 mins',
    icon: 'UtensilsCrossed',
    hasAutoGrading: true,
    activityTypes: ['Culinary Exploration', 'Color Matching', 'Sensory Vocabulary'],
    badge: {
      title: 'Master Confectioner',
      icon: '🍩',
      description: 'Described colors and flavors of 9 authentic Diwali delicacies.'
    }
  },
  {
    id: 'p47-light-vs-darkness',
    pageNumber: 47,
    title: 'Light vs Darkness Diya Sorting',
    marathiTitle: 'प्रकाश विरुद्ध अंधार दिवा',
    category: 'Values & Ethics',
    gradeLevel: 'Ages 6-12',
    description: 'Read 10 moral situations. Light up the Diya in glowing Orange for positive actions or Smoky Gray for negative actions, then design your custom Diya!',
    estimatedTime: '10 mins',
    icon: 'Sun',
    hasAutoGrading: true,
    activityTypes: ['Moral Sorting', 'Diya Decoration', 'Light Animation'],
    badge: {
      title: 'Beacon of Light',
      icon: '✨',
      description: 'Kindled light for honesty and kindness, overcoming darkness.'
    }
  },
  {
    id: 'p48-copy-picture',
    pageNumber: 48,
    title: 'Copy the Picture on the Grid',
    marathiTitle: 'चित्राची हुबेहूब प्रत करा',
    category: 'Observation & Logic',
    gradeLevel: 'Ages 7-14',
    description: 'Carefully replicate geometric line-art drawings on grid paper: Duck, Elephant, and Bull head vertex-by-vertex.',
    estimatedTime: '12 mins',
    icon: 'Grid',
    hasAutoGrading: true,
    activityTypes: ['Grid Drawing', 'Vertex Connect', 'Visual Symmetry'],
    badge: {
      title: 'Precision Drafter',
      icon: '📐',
      description: 'Replicated all 3 intricate geometric drawings on the grid.'
    }
  },
  {
    id: 'p49-complete-picture',
    pageNumber: 49,
    title: 'Complete the Diwali Symmetry',
    marathiTitle: 'दिवाळी चित्र पूर्ण करा',
    category: 'Art & Creativity',
    gradeLevel: 'Ages 6-12',
    description: 'Draw the missing right half of the Diya, Akash Kandil, and Rangoli using bilateral symmetry drawing and tracing.',
    estimatedTime: '10 mins',
    icon: 'Sparkle',
    hasAutoGrading: true,
    activityTypes: ['Symmetry Drawing', 'Pattern Tracing', 'Color Fill'],
    badge: {
      title: 'Symmetry Wizard',
      icon: '🪄',
      description: 'Completed the mirrored halves of all 3 festival symbols.'
    }
  },
  {
    id: 'p50-double-challenge',
    pageNumber: 50,
    title: 'Match It Right & Circle Missing Part',
    marathiTitle: 'जोड्या जुळवा व गहाळ भाग शोधा',
    category: 'Observation & Logic',
    gradeLevel: 'Ages 5-10',
    description: 'Top: Match everyday items (Drum, Coat, Table, Broom). Bottom: Inspect pictures (Car, Fish, Flower, House, Cat) and find what part is missing!',
    estimatedTime: '8 mins',
    icon: 'CheckCheck',
    hasAutoGrading: true,
    activityTypes: ['Object Association', 'Missing Feature Spotting', 'Click to Select'],
    badge: {
      title: 'Hawk Eyes',
      icon: '🦅',
      description: 'Matched all pairs and spotted all missing cartoon parts.'
    }
  },
  {
    id: 'p51-senses-maze',
    pageNumber: 51,
    title: '5 Senses Path Finder',
    marathiTitle: '५ ज्ञानेंद्रिये आणि कार्य',
    category: 'Science & Nature',
    gradeLevel: 'Ages 5-10',
    description: 'Help Eyes, Nose, Tongue, Ears, and Hands find what they do through the interactive sensory maze!',
    estimatedTime: '8 mins',
    icon: 'Eye',
    hasAutoGrading: true,
    activityTypes: ['Maze Navigation', 'Sensory Matching', 'Human Biology'],
    badge: {
      title: 'Sensory Explorer',
      icon: '👀',
      description: 'Mapped all 5 sense organs to their wonderful superpowers.'
    }
  },
  {
    id: 'p52-spot-mistakes',
    pageNumber: 52,
    title: 'Find What is Wrong in This Picture!',
    marathiTitle: 'चित्रातील चुका ओळखा',
    category: 'Observation & Logic',
    gradeLevel: 'Ages 5-12',
    description: 'Inspect the park scene carefully. There are 6 silly, upside-down mistakes hiding in plain sight. Can you click and reveal them all?',
    estimatedTime: '10 mins',
    icon: 'Search',
    hasAutoGrading: true,
    activityTypes: ['Picture Scavenger Hunt', 'Error Spotting', 'Click to Uncover'],
    badge: {
      title: 'Master Detective',
      icon: '🕵️',
      description: 'Discovered all 6 sneaky absurdities in the picnic scene.'
    }
  },
  {
    id: 'p53-magic-stick',
    pageNumber: 53,
    title: 'The Magic Stick Story & Moral',
    marathiTitle: 'जादुई काठी कथा व शिकवण',
    category: 'Language & Stories',
    gradeLevel: 'Ages 6-12',
    description: 'Read the inspiring story of Arun and his 3 wishes. Arrange the comic panels in order and reflect on why kindness is the real magic.',
    estimatedTime: '10 mins',
    icon: 'Wand2',
    hasAutoGrading: true,
    activityTypes: ['Comic Sequencing', 'Moral Comprehension', 'Story Reflection'],
    badge: {
      title: 'Kindness Champion',
      icon: '⭐',
      description: 'Sequenced the story and internalized the power of selfless deeds.'
    }
  },
  {
    id: 'p54-word-search',
    pageNumber: 54,
    title: 'Numbers 1-12 Word Search',
    marathiTitle: '१ ते १२ अंक शब्द शोध',
    category: 'Language & Stories',
    gradeLevel: 'Ages 6-12',
    description: 'Find all number words from ONE to TWELVE hidden horizontally, vertically, and diagonally in the colorful letter grid.',
    estimatedTime: '12 mins',
    icon: 'Binary',
    hasAutoGrading: true,
    activityTypes: ['Word Search', 'Spelling Practice', 'Number Names'],
    badge: {
      title: 'Word Search Sleuth',
      icon: '🔤',
      description: 'Located all 12 hidden number words in the puzzle grid.'
    }
  }
];

export const CATEGORIES_LIST = [
  'All',
  'Art & Creativity',
  'Values & Ethics',
  'Science & Nature',
  'Financial Literacy',
  'Observation & Logic',
  'Language & Stories'
] as const;
