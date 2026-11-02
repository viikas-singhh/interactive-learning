export interface PageEntry {
  pageNumber: number;
  title: string;
  marathiTitle?: string;
  section: string;
  isMainWorksheet: boolean;
  worksheetId?: string;
  summary: string;
}

export const ALL_64_PAGES: PageEntry[] = [
  {
    pageNumber: 1,
    title: 'Editorial: Becoming a Celebrity Through Good Deeds',
    marathiTitle: 'संपादकीय: चांगल्या कामातूनसुद्धा सेलिब्रिटी होता येतं!',
    section: 'संपादकीय',
    isMainWorksheet: false,
    summary: 'Editorial on how helping society and changing lives makes someone a true inspiration.'
  },
  {
    pageNumber: 2,
    title: 'Education Leaders: Transforming Tomorrow',
    marathiTitle: 'शिक्षण क्षेत्रातील दीपस्तंभ',
    section: 'संपादकीय',
    isMainWorksheet: false,
    summary: 'Stories of Dattatray Ware Guruji, Ranjitsinh Disale (Global Teacher Prize), Yajuvendra Mahajan, and Sonam Wangchuk.'
  },
  {
    pageNumber: 3,
    title: 'Nation Building & Values',
    marathiTitle: 'राष्ट्रनिर्मिती आणि मूल्ये',
    section: 'संपादकीय',
    isMainWorksheet: false,
    summary: 'Nurturing self-discipline, confidence, and genuine human values in children.'
  },
  {
    pageNumber: 4,
    title: 'Table of Contents & Index',
    marathiTitle: 'अंतरंग (अनुक्रमणिका)',
    section: 'अंतरंग',
    isMainWorksheet: false,
    summary: 'Index of all 8 sections across the 64-page magazine and workbook.'
  },
  {
    pageNumber: 5,
    title: 'Junior Editors Reflections',
    marathiTitle: 'ज्युनियर एडिटर्सचे मनोगत',
    section: 'ज्युनियर एडिटर्स',
    isMainWorksheet: false,
    summary: 'Student editors Shreyas, Sanchita, and Shreyas share their learning experiences.'
  },
  {
    pageNumber: 6,
    title: 'Gen Z in Textile Industry',
    marathiTitle: 'जेनझी ब्रेनस्टॉर्मिंग: सोलापूर टेक्स्टाईल',
    section: 'उद्योग जगत',
    isMainWorksheet: false,
    summary: 'Young minds discussing branding, digital marketing, and innovation in textiles.'
  },
  {
    pageNumber: 7,
    title: 'Empowering Workers & Modern Business',
    marathiTitle: 'कामगार प्रतिष्ठा आणि आधुनिक व्यवसाय',
    section: 'उद्योग जगत',
    isMainWorksheet: false,
    summary: 'Women employment, dignity of labour, logistics, and corporate management.'
  },
  {
    pageNumber: 8,
    title: 'Teacher-Parent Dialogue: Cooperation over Conflict',
    marathiTitle: 'पालकांशी संवाद : विरोध नाही, सहकार्य हवे!',
    section: 'शिल्पकार',
    isMainWorksheet: false,
    summary: 'How teachers and parents can work together as partners for a child’s holistic growth.'
  },
  {
    pageNumber: 9,
    title: 'Constructive Dialogue for Child Growth',
    marathiTitle: 'संवाद दोन्ही बाजूंनी: उपाय आणि विश्वास',
    section: 'शिल्पकार',
    isMainWorksheet: false,
    summary: 'Appreciating efforts, realistic problem-solving, and building trust between school and home.'
  },
  {
    pageNumber: 10,
    title: 'Gurukul Values vs Modern Classroom Skills',
    marathiTitle: 'गुरुकुलातील संस्कार आणि आजच्या वर्गातील कौशल्ये',
    section: 'शिल्पकार',
    isMainWorksheet: false,
    summary: 'Balancing digital tools with timeless values of patience, focus, and character.'
  },
  {
    pageNumber: 11,
    title: 'Guiding Future Generations',
    marathiTitle: 'संस्कार आणि कौशल्ये यांची सांगड',
    section: 'शिल्पकार',
    isMainWorksheet: false,
    summary: 'Helping children learn from mistakes, cultivate curiosity, and stand on their own feet.'
  },
  {
    pageNumber: 12,
    title: 'Exam Stress or Preparation Power?',
    marathiTitle: 'परीक्षेचा ताण की तयारीची ताकद?',
    section: 'गार्डनर',
    isMainWorksheet: false,
    summary: 'Guiding parents to replace fear of exams with trust, realistic routines, and confidence.'
  },
  {
    pageNumber: 13,
    title: 'Supporting Children During Tests',
    marathiTitle: 'गुणांपेक्षा प्रयत्न महत्त्वाचे!',
    section: 'गार्डनर',
    isMainWorksheet: false,
    summary: 'Emphasizing restful sleep, avoiding unhealthy comparisons, and celebrating effort.'
  },
  {
    pageNumber: 14,
    title: 'When to Hold Hands and When to Let Go?',
    marathiTitle: 'हात धरायचा कधी, आणि सोडायचा कधी?',
    section: 'गार्डनर',
    isMainWorksheet: false,
    summary: 'Fostering independence in children just like teaching them to ride a bicycle.'
  },
  {
    pageNumber: 15,
    title: 'Encouraging Self-Reliance',
    marathiTitle: 'स्वावलंबनाची गोड फळे',
    section: 'गार्डनर',
    isMainWorksheet: false,
    summary: 'Letting children make safe mistakes, solve their own problems, and grow confident.'
  },
  {
    pageNumber: 16,
    title: 'Fruit or Juice: Which is Healthier?',
    marathiTitle: 'फळ की ज्यूस? आरोग्यासाठी योग्य निवड',
    section: 'आरोग्यम्',
    isMainWorksheet: false,
    summary: 'Why eating whole fruits provides dietary fiber and better nourishment than bottled juice.'
  },
  {
    pageNumber: 17,
    title: 'Smart Choices for Healthy Living',
    marathiTitle: 'लेबल वाचण्याची सवय आणि पाण्याचे महत्त्व',
    section: 'आरोग्यम्',
    isMainWorksheet: false,
    summary: 'Reading nutritional labels, understanding added sugars, and staying properly hydrated.'
  },
  {
    pageNumber: 18,
    title: 'Why Our Mind Loves To-Do Lists',
    marathiTitle: 'आपल्या मनाला To-Do List का आवडते?',
    section: 'आरोग्यम्',
    isMainWorksheet: false,
    summary: 'Understanding the Zeigarnik effect and how writing down tasks frees our brain from stress.'
  },
  {
    pageNumber: 19,
    title: 'Small Steps to Peaceful Productivity',
    marathiTitle: 'एका वेळी एकच काम करा',
    section: 'आरोग्यम्',
    isMainWorksheet: false,
    summary: 'The satisfaction of ticking off tasks and giving our mind rest at the end of the day.'
  },
  {
    pageNumber: 20,
    title: 'My Diwali Reflections',
    marathiTitle: 'माझी दिवाळी',
    section: 'दिवाळी विशेष',
    isMainWorksheet: true,
    worksheetId: 'p20-my-diwali',
    summary: 'Reflect on Diwali preparation, family, decorations, and favorite moments in 4 boxes.'
  },
  {
    pageNumber: 21,
    title: 'Make a Nature Diwali Toran!',
    marathiTitle: 'निसर्गाचे तोरण',
    section: 'दिवाळी विशेष',
    isMainWorksheet: true,
    worksheetId: 'p21-nature-toran',
    summary: 'Eco-friendly doorway garland challenge using leaves, flowers, and flower seeds.'
  },
  {
    pageNumber: 22,
    title: 'Make Your Own Rangoli!',
    marathiTitle: 'माझी रांगोळी',
    section: 'दिवाळी विशेष',
    isMainWorksheet: true,
    worksheetId: 'p22-rangoli-challenge',
    summary: 'Traditional rangoli paper-fill with 5+ different festive colors challenge.'
  },
  {
    pageNumber: 23,
    title: 'Diwali Wishes: From Postcards to Forwarded',
    marathiTitle: 'दिवाळीच्या शुभेच्छा: पोस्टकार्डपासून फॉरवर्डेडपर्यंत!',
    section: 'दिवाळी विशेष',
    isMainWorksheet: false,
    summary: 'Nostalgic journey of sending handwritten Diwali postcards versus modern WhatsApp messages.'
  },
  {
    pageNumber: 24,
    title: 'Connecting Hearts in Modern Times',
    marathiTitle: 'मनापासून आठवण जास्त महत्त्वाची',
    section: 'दिवाळी विशेष',
    isMainWorksheet: false,
    summary: 'Why adding two words in your own handwriting is worth more than a hundred generic forwards.'
  },
  {
    pageNumber: 25,
    title: 'Why is Gen Z So Impatient?',
    marathiTitle: 'GenZ इतकी अधीर का आहे?',
    section: 'टिनेजर्स',
    isMainWorksheet: false,
    summary: 'Understanding instant results in the digital age of smartphones and social media.'
  },
  {
    pageNumber: 26,
    title: 'Cultivating Patience and Real Growth',
    marathiTitle: 'संयम आणि सातत्य यांचे महत्त्व',
    section: 'टिनेजर्स',
    isMainWorksheet: false,
    summary: 'Mastering the wisdom of when to move fast and when to pause and practice patience.'
  },
  {
    pageNumber: 27,
    title: 'Simple Ethical Dilemmas',
    marathiTitle: 'नैतिक निर्णय (Ethical Choices)',
    section: 'टिनेजर्स',
    isMainWorksheet: true,
    worksheetId: 'p27-ethical-dilemmas',
    summary: 'Two real-world student situations: leadership selection and part-time opportunity.'
  },
  {
    pageNumber: 28,
    title: 'Mind Traps: Cognitive Traps to Avoid',
    marathiTitle: 'मनाचे सापळे (Mind Traps)',
    section: 'टिनेजर्स',
    isMainWorksheet: true,
    worksheetId: 'p28-mind-traps',
    summary: 'Recognize common mental traps: Mind reading, Jumping to conclusions, Shoulds, Labeling.'
  },
  {
    pageNumber: 29,
    title: 'My 1-Month Education Responsibility',
    marathiTitle: 'माझ्या एका महिन्याच्या शिक्षणाची जबाबदारी',
    section: 'टिनेजर्स',
    isMainWorksheet: true,
    worksheetId: 'p29-piggy-bank',
    summary: 'Build a DIY Gullak and calculate one month of actual educational expenses.'
  },
  {
    pageNumber: 30,
    title: 'My Journey to February Savings Tracker',
    marathiTitle: 'माझी फेब्रुवारीकडे वाटचाल',
    section: 'टिनेजर्स',
    isMainWorksheet: true,
    worksheetId: 'p30-journey-february',
    summary: '4-month weekly savings ledger, savings sources, and personal reflections.'
  },
  {
    pageNumber: 31,
    title: '16 Skills Every Teenager Should Learn',
    marathiTitle: '१६ जीवन कौशल्ये',
    section: 'टिनेजर्स',
    isMainWorksheet: true,
    worksheetId: 'p31-skills-16',
    summary: '4 pillars for real life: Mental, Physical, Social, and Financial skills checklist.'
  },
  {
    pageNumber: 32,
    title: 'Witty Thoughts: House, Home and Humour',
    marathiTitle: 'रोचक-खोचक: घराची गम्मत',
    section: 'रोचक-खोचक',
    isMainWorksheet: false,
    summary: 'Humorous reflections on House vs Home vs Flat, power cuts connecting families, hard work.'
  },
  {
    pageNumber: 33,
    title: 'Every Problem Has a Solution',
    marathiTitle: 'प्रत्येक समस्येला उत्तर असते!',
    section: 'रोचक-खोचक',
    isMainWorksheet: false,
    summary: 'Inspirational thoughts on Lord Krishna, mathematics, and striving for high goals.'
  },
  {
    pageNumber: 34,
    title: 'Never Give Up: The Power of Effort',
    marathiTitle: 'कधीही हार मानू नका',
    section: 'रोचक-खोचक',
    isMainWorksheet: false,
    summary: 'Lessons from the hunting lion, Michael Jordan misses, and the final hammer stroke.'
  },
  {
    pageNumber: 35,
    title: 'Learning from Mistakes and Good Habits',
    marathiTitle: 'चांगल्या गोष्टी पेराव्याच लागतात',
    section: 'रोचक-खोचक',
    isMainWorksheet: false,
    summary: 'Learning from practice, planting positive thoughts, and cherishing true friends.'
  },
  {
    pageNumber: 36,
    title: 'Creative Writing: Jungle Safari Adventure',
    marathiTitle: 'जंगल सफारी कथा',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p36-jungle-safari',
    summary: 'Write an imaginative story about animal friends, river crossing, and tall canopy trees.'
  },
  {
    pageNumber: 37,
    title: 'Science in My House Hunt',
    marathiTitle: 'घरातील विज्ञान शोध',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p37-science-hunt',
    summary: '15 real-world physics and chemistry observations around your house.'
  },
  {
    pageNumber: 38,
    title: 'Observe and Draw Your Home!',
    marathiTitle: 'घर निरीक्षण व चित्रकला',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p38-observe-home',
    summary: 'Place furniture and draw items in Living Room, Kitchen, Bedroom, and Bathroom.'
  },
  {
    pageNumber: 39,
    title: 'Circle 3 of Your Values',
    marathiTitle: 'माझी ३ जीवनमूल्ये',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p39-circle-values',
    summary: 'Select 3 core values, recount recent actions where you showed them, and reflect.'
  },
  {
    pageNumber: 40,
    title: 'Problem and Solution Analysis',
    marathiTitle: 'समस्या आणि उपाय',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p40-problem-solution',
    summary: 'Read passages on Deforestation and Soil Erosion; extract problems and solutions.'
  },
  {
    pageNumber: 41,
    title: 'Energy Leak Detector',
    marathiTitle: 'माझी ऊर्जा आणि गळती',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p41-energy-leak-detector',
    summary: 'Water bucket energy reservoir and 5 quiet mental leaks that drain focus.'
  },
  {
    pageNumber: 42,
    title: 'Is It a Good Decision or Not?',
    marathiTitle: 'योग्य निर्णय की अयोग्य?',
    section: 'उमलताना',
    isMainWorksheet: true,
    worksheetId: 'p42-decision-scenarios',
    summary: 'Evaluate 5 school and social scenarios, weigh consequences, and judge decisions.'
  },
  {
    pageNumber: 43,
    title: 'Sort the Fire Safety Cards',
    marathiTitle: 'आग सुरक्षा कार्ड',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p43-fire-safety',
    summary: 'Sort 8 illustrated cards into Fire Hazard or Safe Choice.'
  },
  {
    pageNumber: 44,
    title: 'Weird But True! Amazing Facts',
    marathiTitle: 'आश्चर्यकारक तथ्ये (Weird But True)',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p44-weird-true',
    summary: '6 fun science facts: grey flamingos, dinosaurs vs sharks, koala fingerprints, and trees.'
  },
  {
    pageNumber: 45,
    title: 'Mindful Kids Yoga',
    marathiTitle: 'लहान मुलांसाठी योगासने',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p45-kids-yoga',
    summary: '7 health and mindfulness benefits: Focus, stress reduction, confidence, and sleep.'
  },
  {
    pageNumber: 46,
    title: 'Diwali Faral (Traditional Sweets)',
    marathiTitle: 'दिवाळी फराळ चव आणि रंग',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p46-diwali-faral',
    summary: 'Describe color and taste profile for 9 traditional festive sweets and snacks.'
  },
  {
    pageNumber: 47,
    title: 'Light vs. Darkness Diya Sorting & Challenge',
    marathiTitle: 'प्रकाश विरुद्ध अंधार दिवा',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p47-light-vs-darkness',
    summary: '10 moral situations to light orange or gray diyas, plus Diya design challenge.'
  },
  {
    pageNumber: 48,
    title: 'Copy the Picture on the Grid',
    marathiTitle: 'चित्राची हुबेहूब प्रत करा',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p48-copy-picture',
    summary: 'Geometric grid drafting of Duck, Elephant, and Bull head vertex-by-vertex.'
  },
  {
    pageNumber: 49,
    title: 'Complete the Diwali Picture (Symmetry)',
    marathiTitle: 'दिवाळी चित्र पूर्ण करा',
    section: 'बालविकास',
    isMainWorksheet: true,
    worksheetId: 'p49-complete-picture',
    summary: 'Draw the mirrored right half of Diya, Akash Kandil, and Rangoli.'
  },
  {
    pageNumber: 50,
    title: 'Match It Right & Circle the Missing Part',
    marathiTitle: 'जोड्या जुळवा व गहाळ भाग शोधा',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p50-double-challenge',
    summary: 'Top: Match pairs (Drum, Coat, Table, Broom). Bottom: Find missing parts.'
  },
  {
    pageNumber: 51,
    title: '5 Senses Maze: Find Its Function!',
    marathiTitle: '५ ज्ञानेंद्रिये आणि कार्य',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p51-senses-maze',
    summary: 'Connect Eyes, Nose, Tongue, Ears, and Hands through the sensory maze.'
  },
  {
    pageNumber: 52,
    title: 'Find What is Wrong in This Picture!',
    marathiTitle: 'चित्रातील चुका ओळखा',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p52-spot-mistakes',
    summary: 'Spot 6 silly absurdities in the picnic scene and tick off numbers 1 to 6.'
  },
  {
    pageNumber: 53,
    title: 'The Magic Stick Comic & Moral',
    marathiTitle: 'जादुई काठी कथा व शिकवण',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p53-magic-stick',
    summary: '6 comic panels on Arun’s 3 wishes, with audio speech and moral questions.'
  },
  {
    pageNumber: 54,
    title: 'Numbers 1-12 Word Search',
    marathiTitle: '१ ते १२ अंक शब्द शोध',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p54-word-search',
    summary: 'Find number words ONE to TWELVE hidden in the 11x12 letter grid.'
  },
  {
    pageNumber: 55,
    title: 'Alphabet Circle & Diwali Item Match',
    marathiTitle: 'अक्षर ओळखा व जोड्या जुळवा',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p55-alphabet-match',
    summary: 'Circle the beginning letter for Lion, Umbrella, Apple, etc. and match Diwali items.'
  },
  {
    pageNumber: 56,
    title: 'Happy Diwali Coloring Page',
    marathiTitle: 'चित्र रंगवा : शुभ दीपावली',
    section: 'किलबिल',
    isMainWorksheet: true,
    worksheetId: 'p56-diwali-coloring',
    summary: 'Color the festive celebration drawing of happy children holding a sacred diya.'
  },
  {
    pageNumber: 57,
    title: 'Real Heroes: Captain Smit Machhar',
    marathiTitle: 'कॅप्टन स्मित मच्छार : संकटातही न डगमगणारे धैर्य',
    section: 'रियल हिरोज',
    isMainWorksheet: false,
    summary: 'Inspirational story of Captain Smit Machhar saving passengers during a mid-flight crisis.'
  },
  {
    pageNumber: 58,
    title: 'Real Heroes: IPS Sharan Kamble',
    marathiTitle: 'कंदिलाच्या प्रकाशातून IPS अधिकारी होण्याचा प्रवास',
    section: 'रियल हिरोज',
    isMainWorksheet: false,
    summary: 'From studying under a small kerosene lamp to serving the nation as an IPS officer.'
  },
  {
    pageNumber: 59,
    title: 'Real Heroes: Sushmita Krishnan Eco-Paper',
    marathiTitle: 'तलावातील तणापासून कागदनिर्मिती : सुष्मिता कृष्णन',
    section: 'रियल हिरोज',
    isMainWorksheet: false,
    summary: 'Turning harmful lake weeds (water hyacinth) into eco-friendly handmade paper.'
  },
  {
    pageNumber: 60,
    title: 'Real Heroes: Sarvesh Sharma Drone Innovation',
    marathiTitle: 'सर्वेशची ड्रोनभरारी',
    section: 'रियल हिरोज',
    isMainWorksheet: false,
    summary: 'How a student from a humble background designed defense drones for border surveillance.'
  },
  {
    pageNumber: 61,
    title: 'Spirituality: Samudra Manthan Lessons',
    marathiTitle: 'समुद्रमंथन : नवनिर्माणाची सुरुवात मंथनातूनच होते',
    section: 'अध्यात्म',
    isMainWorksheet: false,
    summary: 'Every new beginning involves struggle before sweet nectar (Amrit) is attained.'
  },
  {
    pageNumber: 62,
    title: 'Embracing Mistakes and Inner Growth',
    marathiTitle: 'स्वतःला चांगला माणूस बनवणे',
    section: 'अध्यात्म',
    isMainWorksheet: false,
    summary: 'Accepting mistakes honestly, overcoming ego, and evolving into a kind human being.'
  },
  {
    pageNumber: 63,
    title: 'Modern Kurukshetra of Relationships',
    marathiTitle: 'कलियुगातील कुरुक्षेत्रावर',
    section: 'अध्यात्म',
    isMainWorksheet: false,
    summary: 'The daily battlefield in our minds between ego and genuine compassion for others.'
  },
  {
    pageNumber: 64,
    title: 'Winning People Over Winning Arguments',
    marathiTitle: 'नातं महत्त्वाचं की वाद?',
    section: 'अध्यात्म',
    isMainWorksheet: false,
    summary: 'True victory lies in letting go of a little ego to save a relationship and love people.'
  }
];
