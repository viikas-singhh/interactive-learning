export interface QuizQuestion {
  id: string;
  question: string;
  marathiQuestion: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticlePageData {
  pageNumber: number;
  title: string;
  marathiTitle: string;
  section: string;
  categoryTag: string;
  quickSummary: string;
  marathiParagraphs: string[];
  englishSummary: string;
  keyTakeaways: string[];
  funFactOrMoral?: string;
  image?: ArticleImage;
  quiz: QuizQuestion[];
}

export const ARTICLE_PAGES_CONTENT: Record<number, ArticlePageData> = {
  // Page 1
  1: {
    pageNumber: 1,
    title: 'Becoming a Celebrity Through Good Deeds',
    marathiTitle: 'चांगल्या कामातूनसुद्धा सेलिब्रिटी होता येतं!',
    section: 'संपादकीय',
    categoryTag: 'संपादकीय',
    quickSummary: 'Editorial on how selfless service, uplifting children, and societal impact make someone a true hero.',
    marathiParagraphs: [
      'आजच्या काळात सेलिब्रिटी म्हटले की आपल्या डोळ्यांसमोर चित्रपट अभिनेते, क्रिकेटपटू किंवा सोशल मीडियावरील स्टार्स येतात. प्रसिद्धी मिळवण्यासाठी मोठा व्यासपीठ किंवा प्रसिद्धीची यंत्रणा आवश्यक असते असे आपल्याला वाटते.',
      'पण समाजासाठी चांगले काम करणारी, मुलांचे भविष्य घडवणारी आणि शिक्षणव्यवस्थेत बदल घडवणारी माणसेही लोकांच्या मनावर राज्य करू शकतात का? या प्रश्नाचे उत्तर पुण्यात सिद्धेश लोकरे यांच्या कार्यक्रमात अनुभवायला मिळाले.',
      'रात्री १० वाजता कार्यक्रम संपल्यानंतर सिद्धेश लोकरे यांच्यासोबत छायाचित्र काढण्यासाठी लोकांची तासभर रांग लागली होती. लोकांना केवळ मनोरंजन आवडते असे नाही, तर विचार करायला लावणारी आणि चांगले काम करण्याची प्रेरणा देणारी माणसेही मनापासून आवडतात.',
      'प्रसिद्धी तुम्हाला लोकांपर्यंत पोहोचवते, पण तुमचे सत्कर्म लोकांच्या मनापर्यंत पोहोचते!'
    ],
    englishSummary: 'Being a true celebrity is not limited to movie stars or cricketers. Real icons are people who dedicate themselves to helping society, transforming schools, and uplifting children.',
    keyTakeaways: [
      'प्रसिद्धी तात्पुरती असते, पण चांगले कार्य लोकांच्या मनात कायमचे घर करते.',
      'समाजातील चांगल्या कामांमुळे जीवनाला खरी दिशा मिळते.',
      'लोकांच्या मनावर राज्य करायचे असेल तर सेवेचा आणि ज्ञानाचा मार्ग निवडा.'
    ],
    funFactOrMoral: 'प्रसिद्धीच्या मागे धावण्यापेक्षा प्रसिद्ध होण्यासारखे चांगले काम करा!',
    quiz: [
      {
        id: 'q1-1',
        question: 'Who can truly rule people\'s hearts permanently?',
        marathiQuestion: 'खऱ्या अर्थाने लोकांच्या मनावर कायमचे राज्य कोण करू शकते?',
        options: [
          'फक्त सोशल मीडिया स्टार्स',
          'समाजासाठी निस्वार्थपणे चांगले काम करणारी माणसे',
          'केवळ श्रीमंत व्यक्ती',
          'फक्त चित्रपट अभिनेते'
        ],
        correctAnswerIndex: 1,
        explanation: 'समाजासाठी केलेले चांगले काम आणि लोकांच्या आयुष्यात आणलेला बदल लोकांच्या मनापर्यंत पोहोचतो.'
      },
      {
        id: 'q1-2',
        question: 'What is the main golden thought of this editorial?',
        marathiQuestion: 'या संपादकीय लेखाचा मुख्य सुविचार कोणता आहे?',
        options: [
          '"प्रसिद्धी तुम्हाला लोकांपर्यंत पोहोचवते, पण तुमचे कार्य मनापर्यंत पोहोचते!"',
          '"पैसा म्हणजेच सर्वकाही"',
          '"केवळ मनोरंजन करणे हाच जीवनाचा उद्देश आहे"',
          '"प्रयत्न न करता प्रसिद्धी शोधा"'
        ],
        correctAnswerIndex: 0,
        explanation: 'चांगले कार्य थेट लोकांच्या हृदयात स्थान निर्माण करते.'
      }
    ]
  },

  // Page 2
  2: {
    pageNumber: 2,
    title: 'Education Leaders: Transforming Tomorrow',
    marathiTitle: 'शिक्षण क्षेत्रातील दीपस्तंभ',
    section: 'संपादकीय',
    categoryTag: 'संपादकीय',
    quickSummary: 'Stories of visionary educators: Dattatray Ware Guruji, Ranjitsinh Disale (Global Teacher Prize), Sonam Wangchuk, and Kiran Bir Sethi.',
    marathiParagraphs: [
      'शिक्षण क्षेत्रात काम करणाऱ्या व्यक्तींचे योगदान खूप मोठे असते, कारण शिक्षणाचे काम अनेकदा प्रसिद्धीपासून दूर, शांतपणे सुरू असते.',
      'दत्तात्रेय वारे गुरुजी यांनी पुणे जिल्ह्यातील वाबळेवाडी आणि नंतर जालिंदर नगर येथील जिल्हा परिषद शाळेत आधुनिक तंत्रज्ञान व लोकसहभागातून आंतरराष्ट्रीय स्तरावर सन्मान मिळवून दिला.',
      'रणजितसिंह डिसले यांनी परितेवाडी शाळेत पाठ्यपुस्तकात QR कोड तंत्रज्ञान सुरू केले, ज्यामुळे विद्यार्थ्यांना डिजिटल साहित्य मिळाले. २०२० मध्ये त्यांना मानाचा "Global Teacher Prize" मिळाला.',
      'यजुवेंद्र महाजन यांनी दीपस्तंभ फाउंडेशनद्वारे दिव्यांग व वंचित विद्यार्थ्यांना उच्च शिक्षण दिले. सोनम वांगचुक यांनी लडाखमध्ये SECMOL द्वारे स्थानिक परिस्थितीशी जोडलेले शिक्षण दिले, तर किरण बिर सेठी यांनी "Design for Change" द्वारे मुलांना सामाजिक समस्या सोडवण्याची संधी दिली.'
    ],
    englishSummary: 'Inspiring educators like Dattatray Ware, Ranjitsinh Disale (Global Teacher Prize winner), Sonam Wangchuk, and Kiran Bir Sethi transformed education by combining innovation with deep empathy.',
    keyTakeaways: [
      'रणजितसिंह डिसले गुरुजींनी पुस्तकात QR कोड आणून २०२० चा जागतिक पुरस्कार मिळवला.',
      'दत्तात्रेय वारे गुरुजींनी ग्रामीण शाळेला जागतिक दर्जा मिळवून दिला.',
      'शिक्षणाचा खरा उद्देश मुलांना स्वावलंबी आणि विचारशील बनवणे आहे.'
    ],
    funFactOrMoral: 'शिक्षक हेच राष्ट्राचे खरे शिल्पकार असतात!',
    quiz: [
      {
        id: 'q2-1',
        question: 'Who won the Global Teacher Prize in 2020 for introducing QR codes in textbooks?',
        marathiQuestion: '२०२० मध्ये पाठ्यपुस्तकात QR कोड सुरू केल्याबद्दल Global Teacher Prize कोणाला मिळाला?',
        options: ['दत्तात्रेय वारे', 'सोनम वांगचुक', 'रणजितसिंह डिसले', 'यजुवेंद्र महाजन'],
        correctAnswerIndex: 2,
        explanation: 'रणजितसिंह डिसले गुरुजींनी परितेवाडी शाळेतून QR कोड तंत्रज्ञानाची क्रांती घडवून जागतिक पुरस्कार पटकावला.'
      },
      {
        id: 'q2-2',
        question: 'Who pioneered experiential learning in Ladakh through SECMOL?',
        marathiQuestion: 'लडाखमध्ये SECMOL द्वारे स्थानिक पर्यावरणावर आधारित शिक्षण कोणी विकसित केले?',
        options: ['सोनम वांगचुक', 'किरण बिर सेठी', 'सिद्धेश लोकरे', 'श्रीनिवास बुरा'],
        correctAnswerIndex: 0,
        explanation: 'सोनम वांगचुक यांनी प्रत्यक्ष अनुभवावर आणि स्थानिक पर्यावरणावर आधारित शिक्षण सुरू केले.'
      }
    ]
  },

  // Page 3
  3: {
    pageNumber: 3,
    title: 'Nation Building & Values',
    marathiTitle: 'राष्ट्रनिर्मिती आणि मूल्ये',
    section: 'संपादकीय',
    categoryTag: 'संपादकीय',
    quickSummary: 'Character building is the bedrock of national progress. Nurturing self-discipline, curiosity, and empathy in children.',
    marathiParagraphs: [
      'राष्ट्रनिर्मिती म्हणजे केवळ मोठ्या इमारती उभारणे किंवा आर्थिक प्रगती साधणे नव्हे; तर जबाबदार, संवेदनशील आणि समाजासाठी योगदान देणारी माणसे घडवणे होय.',
      'सारथी फाउंडेशनच्या "MAN MAKING - NATION BUILDING" या विचारसरणीचा हाच मूळ गाभा आहे. मुलांमध्ये चांगल्या सवयी, स्वयंशिस्त, आत्मविश्वास, जिज्ञासा, संवादकौशल्य आणि नेतृत्वगुण विकसित व्हावेत.',
      'पुण्यातील APAAR कार्यक्रमातून हाच मोलाचा विचार मिळाला: प्रसिद्धीच्या मागे धावण्यापेक्षा प्रसिद्ध होण्यासारखे काम करा. एखाद्या विद्यार्थ्याचा आत्मविश्वास वाढवणे आणि त्याला स्वावलंबी बनवणे हीच खरी देशसेवा आहे.'
    ],
    englishSummary: 'True nation-building begins with building strong moral character in youth: self-discipline, honesty, empathy, and leadership.',
    keyTakeaways: [
      'केवळ इमारती नव्हे, तर सुसंस्कृत नागरिक घडवणे म्हणजे राष्ट्रनिर्मिती.',
      'स्वतःच्या प्रगतीसोबत इतरांच्या आयुष्यात सकारात्मक योगदान द्या.',
      'प्रसिद्धीच्या मागे धावण्याऐवजी सत्कर्म आणि ज्ञान संपादन करा.'
    ],
    funFactOrMoral: 'चांगल्या माणसांच्या पायावरच बलशाली राष्ट्र उभे राहते.',
    quiz: [
      {
        id: 'q3-1',
        question: 'What is the true foundation of nation building?',
        marathiQuestion: 'खरी राष्ट्रनिर्मिती कशामध्ये सामावलेली आहे?',
        options: [
          'केवळ टोलेजंग इमारती बांधणे',
          'जबाबदार, संवेदनशील आणि मूल्यवान माणसे घडवणे',
          'फक्त पैसा जमा करणे',
          'केवळ सोशल मीडियावर प्रसिद्ध होणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'जबाबदार व चारित्र्यसंपन्न नागरिक घडवणे हाच देशाच्या विकासाचा खरा पाया आहे.'
      },
      {
        id: 'q3-2',
        question: 'What is Sarthi Foundation\'s guiding motto?',
        marathiQuestion: 'सारथी फाउंडेशनचा मुख्य मार्गदर्शक विचार कोणता आहे?',
        options: [
          '"MAN MAKING - NATION BUILDING"',
          '"Money Making - Profit Building"',
          '"Exam Scoring - Marks Building"',
          '"Only Fame and Followers"'
        ],
        correctAnswerIndex: 0,
        explanation: '"माणूस घडवणे म्हणजेच राष्ट्र उभारणी करणे" (Man Making - Nation Building) ही मूळ भूमिका आहे.'
      }
    ]
  },

  // Page 4
  4: {
    pageNumber: 4,
    title: 'Index & Eco Flowers Upcycling',
    marathiTitle: 'अंतरंग (अनुक्रमणिका) व पर्यावरण संदेश',
    section: 'अंतरंग',
    categoryTag: 'अंतरंग',
    quickSummary: 'Complete table of contents of the 64-page workbook, plus eco-friendly ways to reuse used puja flowers.',
    marathiParagraphs: [
      'या ६४ पानांच्या दिवाळी विशेषांकामध्ये मुलांसाठी, शिक्षकांसाठी आणि पालकांसाठी विविध ज्ञानात्मक व रंजक विभागांची रचना केली आहे.',
      'यामध्ये उद्योग जगत, शिल्पकार (शिक्षकांसाठी), गार्डनर (पालकांसाठी), आरोग्यम्, दिवाळी विशेष, टिनेजर्स, किलबिल, रियल हिरोज, आणि अध्यात्म अशा ८ समृद्ध दालनांचा समावेश आहे.',
      'पर्यावरणपूरक संदेश: पूजेनंतर सुकलेल्या फुलांचे काय करावे? ही फुले कचऱ्यात फेकण्याऐवजी किंवा नदीत प्रदूषण करण्याऐवजी त्यापासून कंपोस्ट सेंद्रिय खत, नैसर्गिक धूप अगरबत्ती, नैसर्गिक रंग, आणि सुगंधी तेल तयार करून निसर्गाचे रक्षण करता येते!'
    ],
    englishSummary: 'Table of contents spanning industry, teaching, parenting, health, Diwali arts, real heroes, and spirituality, along with practical tips to upcycle puja flowers into natural fertilizer.',
    keyTakeaways: [
      'पुस्तकात जीवनोपयोगी ८ विविध विभागांची मांडणी केली आहे.',
      'विद्यार्थी, पालक आणि शिक्षकांसाठी समृद्ध मार्गदर्शन.',
      'सुकलेल्या फुलांपासून सेंद्रिय खत व अगरबत्ती बनवून पर्यावरण रक्षण.'
    ],
    funFactOrMoral: 'कचऱ्यातूनही निसर्गाची समृद्धी तयार करता येते!',
    quiz: [
      {
        id: 'q4-1',
        question: 'Which section of the book is specially designed for parents?',
        marathiQuestion: 'या पुस्तिकेत पालकांसाठी विशेष मार्गदर्शन कोणत्या विभागात दिले आहे?',
        options: ['गार्डनर (पालकांसाठी)', 'उद्योग जगत', 'किलबिल', 'शिल्पकार'],
        correctAnswerIndex: 0,
        explanation: "'गार्डनर' हा विभाग पालकांसाठी मुलांच्या संगोपनाचे सुंदर मार्गदर्शन करतो."
      },
      {
        id: 'q4-2',
        question: 'How can dry puja flowers be eco-friendly reused?',
        marathiQuestion: 'पूजेच्या सुकलेल्या फुलांचा पर्यावरणासाठी काय सुंदर पुनर्वापर करता येतो?',
        options: [
          'नदी किंवा तलावात फेकून देणे',
          'कंपोस्ट सेंद्रिय खत व नैसर्गिक अगरबत्ती बनवणे',
          'प्लास्टिक पिशवीत बांधून कचऱ्यात फेकणे',
          'जाळून धूर करणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'सुकलेल्या फुलांपासून पोषक खत व अगरबत्ती बनवून निसर्गाचा सन्मान राखला जातो.'
      }
    ]
  },

  // Page 5
  5: {
    pageNumber: 5,
    title: 'Junior Editors Reflections',
    marathiTitle: 'ज्युनियर एडिटर्सचे मनोगत',
    section: 'ज्युनियर एडिटर्स',
    categoryTag: 'ज्युनियर एडिटर्स',
    quickSummary: 'Student editors Shreyas, Sanchita, and Shreyas share their learnings on creativity, modern AI tools, and responsibility.',
    marathiParagraphs: [
      'श्रेयश आळंद यांनी लिहिले की, ज्युनियर एडिटर म्हणून काम करताना स्वतःचे विचार मांडणे, वेळेचे व्यवस्थापन, आणि सर्जनशीलता वापरण्याचे महत्त्व समजले.',
      'संचिता ताला यांनी सांगितले की, संपादन करताना कॉम्प्युटर आणि मोबाईल AI टूल्सची माहिती मिळाली व त्यांची कार्यपद्धती समजली. आपल्या चुका ओळखून त्या सुधारण्याची मौल्यवान संधी मिळाली.',
      'माजी विद्यार्थी श्रेयश वंगा यांनी लिहिले की, दहावीनंतरच्या जगात पाठ्यपुस्तकापलीकडे संयम, शांतता, आणि साध्या शब्दांत विचार मांडणे किती आवश्यक आहे, हे या उपक्रमातून शिकायला मिळाले.'
    ],
    englishSummary: 'Junior editors share their transformative journey of compiling this issue: mastering computer AI tools, meeting deadlines, taking ownership, and expressing thoughts simply.',
    keyTakeaways: [
      'नवीन तंत्रज्ञान व AI टूल्सचा विधायक वापर शिकणे.',
      'स्वतःच्या चुका ओळखून त्या सुधारण्याचा आत्मविश्वास.',
      'पाठ्यपुस्तकापलीकडील संयम, शांतता आणि संवाद कौशल्य.'
    ],
    funFactOrMoral: 'जबाबदारी स्वीकारल्याने मुलांचा आत्मविश्वास दुप्पट वाढतो!',
    quiz: [
      {
        id: 'q5-1',
        question: 'What modern tools did junior editor Sanchita Tala explore?',
        marathiQuestion: 'ज्युनियर एडिटर संचिता ताला यांनी संपादन करताना प्रामुख्याने कोणती आधुनिक साधने हाताळली?',
        options: [
          'कॉम्प्युटर आणि मोबाईल AI टूल्स',
          'केवळ टेलिव्हिजन',
          'केवळ खेळणी',
          'कॅल्क्युलेटर'
        ],
        correctAnswerIndex: 0,
        explanation: 'संचिता यांनी कॉम्प्युटर आणि मोबाईल AI टूल्सच्या साह्याने संपादन कौशल्ये शिकली.'
      },
      {
        id: 'q5-2',
        question: 'According to Shreyas Vanga, what is most valuable beyond textbooks?',
        marathiQuestion: 'श्रेयश वंगा यांच्या मते पाठ्यपुस्तकापलीकडे कोणते कौशल्य सर्वात जास्त उपयोगी पडते?',
        options: [
          'संयम, शांतता आणि साध्या शब्दांत विचार मांडणे',
          'केवळ परीक्षेत घोकंपट्टी करणे',
          'वादविवाद घालून जिंकणे',
          'इतरांवर हुकूम चालवणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'संयम, शांतता आणि प्रभावी साधे विचार हेच जीवनात खरोखर उपयोगी पडतात.'
      }
    ]
  },

  // Page 6
  6: {
    pageNumber: 6,
    title: 'Gen Z in Textile Industry',
    marathiTitle: 'जेनझी ब्रेनस्टॉर्मिंग: सोलापूर टेक्स्टाईल',
    section: 'उद्योग जगत',
    categoryTag: 'उद्योग जगत',
    quickSummary: 'Young entrepreneurs brainstorm the future of Solapur textiles: digital visibility, e-commerce, and brand storytelling.',
    marathiParagraphs: [
      'सोलापूरचा वस्त्रोद्योग चादर, टॉवेल आणि पारंपारिक उत्पादनांसाठी ओळखला जातो. परंतु बदलत्या बाजारपेठेत तरुण पिढीच्या नाविन्यपूर्ण विचारांची नितांत गरज आहे.',
      'तरुण उद्योजकांच्या ब्रेनस्टॉर्मिंग बैठकीत सोशल मीडिया, व्हिडिओ कंटेंट, B2B डिजिटल प्लॅटफॉर्म्स आणि ई-कॉमर्सद्वारे सोलापूरच्या उत्पादनांची डिजिटल दृश्यमानता (Visibility) वाढवण्यावर भर देण्यात आला.',
      'केवळ जुन्या उत्पादनांवर अवलंबून न राहता व्हॅल्यू-अॅडेड उत्पादने आणि आधुनिक जीवनशैलीला अनुरूप डिझाइन्स विकसित केली पाहिजेत. "सोलापूर टेक्स्टाईल" ही केवळ भौगोलिक ओळख न राहता गुणवत्ता आणि विश्वासाचा ब्रँड बनली पाहिजे.'
    ],
    englishSummary: 'Gen Z entrepreneurs discuss revitalizing Solapur’s traditional textile industry through digital marketing, B2B e-commerce, modern lifestyle designs, and strong brand identity.',
    keyTakeaways: [
      'पारंपारिक व्यवसायाला डिजिटल मार्केटिंगची जोड देणे.',
      'केवळ चादर-टॉवेलपुरते मर्यादित न राहता आधुनिक डिझाइन्स तयार करणे.',
      'विश्वास आणि गुणवत्तेचे प्रतीक असलेली ब्रँड ओळख निर्माण करणे.'
    ],
    funFactOrMoral: 'परंपरा जपताना परिवर्तनाचा स्वीकार करणे हीच प्रगती!',
    quiz: [
      {
        id: 'q6-1',
        question: 'How can Solapur’s textile industry expand to global markets today?',
        marathiQuestion: 'सोलापूरच्या वस्त्रोद्योगाला आधुनिक युगात मोठी बाजारपेठ मिळवण्यासाठी काय आवश्यक आहे?',
        options: [
          'डिजिटल मार्केटिंग, ई-कॉमर्स आणि सोशल मीडियाचा प्रभावी वापर',
          'कारखाने बंद करणे',
          'केवळ जुन्या पद्धतींवर विसंबून राहणे',
          'गुणवत्ता कमी करणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'डिजिटल प्लॅटफॉर्म्स आणि ई-कॉमर्समुळे उत्पादने थेट जागतिक ग्राहकांपर्यंत पोहोचतात.'
      },
      {
        id: 'q6-2',
        question: 'What vision was highlighted for "Solapur Textile"?',
        marathiQuestion: '"सोलापूर टेक्स्टाईल" ही कशाचे प्रतीक बनली पाहिजे असा विचार मांडला?',
        options: [
          'फक्त एका शहराचे नाव',
          'गुणवत्ता आणि विश्वासाचे ब्रँड प्रतीक',
          'केवळ स्वस्त मालाचे केंद्र',
          'जुनाट पद्धतींचे केंद्र'
        ],
        correctAnswerIndex: 1,
        explanation: 'उत्कृष्ट दर्जा आणि ब्रँड व्हॅल्यू ग्राहकांचा दीर्घकालीन विश्वास जिंकून देते.'
      }
    ]
  },

  // Page 7
  7: {
    pageNumber: 7,
    title: 'Worker Dignity & Modern Business',
    marathiTitle: 'कामगारांची प्रतिष्ठा आणि आधुनिक व्यवसाय',
    section: 'उद्योग जगत',
    categoryTag: 'उद्योग जगत',
    quickSummary: 'Dignity of labor, empowering women from bidi rolling into textiles, modern logistics, and corporate governance.',
    marathiParagraphs: [
      'कामगारांना केवळ मजूर न मानता उद्योगाच्या यशातील महत्त्वाचे भागीदार मानले पाहिजे. "Identity आणि Dignity of Labour" मुळे कामगारांचा सन्मान वाढतो आणि पुढील पिढीलाही काम करण्याचे प्रोत्साहन मिळते.',
      'विडी उद्योगातील महिलांना विव्हिंग, वॉर्पिंग, स्टिचिंग आणि डिजिटल सपोर्टचे कौशल्य प्रशिक्षण देऊन वस्त्रोद्योगात स्थिर रोजगाराच्या नव्या संधी उपलब्ध करून देण्याचा ऐतिहासिक मुद्दा मांडण्यात आला.',
      'कौटुंबिक व्यवसायाचा विस्तार करण्यासाठी डेटा आणि तज्ज्ञांचे मार्गदर्शन घेऊन कॉर्पोरेट मॅनेजमेंट अंगीकारले पाहिजे, तसेच एकत्रित वाहतुकीतून लॉजिस्टिक्सचा खर्च कमी केला पाहिजे.'
    ],
    englishSummary: 'Promoting dignity of labor, retraining women from bidi making into high-skill textile production, adopting modern logistics, and transitioning from family business to corporate structure.',
    keyTakeaways: [
      'प्रत्येक श्रमिकाला आदर आणि योग्य मोबदला मिळायला हवा.',
      'महिलांना कौशल्य प्रशिक्षण देऊन आर्थिक स्वावलंबन देणे.',
      'आधुनिक व्यवस्थापन आणि डेटाच्या आधारे व्यावसायिक निर्णय घेणे.'
    ],
    funFactOrMoral: 'श्रमाचा सन्मान करणे हीच खऱ्या प्रगतीची पहिली पायरी आहे.',
    quiz: [
      {
        id: 'q7-1',
        question: 'How should industrial workers be viewed in modern times?',
        marathiQuestion: 'उद्योगामध्ये कामगारांकडे कोणत्या दृष्टिकोनातून पाहिले पाहिजे?',
        options: [
          'केवळ स्वस्त मजूर म्हणून',
          'उद्योगाच्या यशातील महत्त्वाचे भागीदार (Dignity of Labour)',
          'यंत्रासारखे काम करणारे',
          'दुर्लक्षित घटक'
        ],
        correctAnswerIndex: 1,
        explanation: 'कामगारांना प्रतिष्ठा आणि भागीदार मानल्याने उद्योगाची गुणवत्ता व प्रगती वाढते.'
      },
      {
        id: 'q7-2',
        question: 'Which group was proposed to receive skill training in weaving and stitching?',
        marathiQuestion: 'विव्हिंग आणि स्टिचिंगचे प्रशिक्षण देऊन कोणत्या घटकाला स्थिर रोजगाराची संधी दिली जाऊ शकते?',
        options: [
          'विडी उद्योगातील कष्टकरी महिलांना',
          'केवळ परदेशी कामगारांना',
          'लहान बालकांना',
          'कोणालाही नाही'
        ],
        correctAnswerIndex: 0,
        explanation: 'महिलांना कौशल्याधारित प्रशिक्षण दिल्यास त्यांना शाश्वत आणि चांगला रोजगार मिळतो.'
      }
    ]
  },

  // Page 8
  8: {
    pageNumber: 8,
    title: 'Teacher-Parent Dialogue: Cooperation over Conflict',
    marathiTitle: 'पालकांशी संवाद : विरोध नाही, सहकार्य हवे!',
    section: 'शिल्पकार',
    categoryTag: 'शिल्पकार',
    quickSummary: 'Guiding teachers and parents to partner with mutual empathy and specific feedback rather than blame.',
    marathiParagraphs: [
      'शाळेत शिक्षक आणि पालक यांची भूमिका वेगळी असली तरी दोघांचे ध्येय एकच असते - मुलाचा सर्वांगीण व आनंदी विकास.',
      'जेव्हा शिस्तीचा किंवा वर्तनाचा प्रश्न येतो, तेव्हा शिक्षकांनी लगेच "तुमच्या मुलाचीच चूक होती" असे म्हणण्याऐवजी आधी पालकांचे म्हणणे शांतपणे ऐकून घ्यावे.',
      'शिस्त म्हणजे मुलाला घाबरवणे नव्हे; तर योग्य आणि अयोग्य यातील फरक समजावणे होय.',
      'इतर मुलांशी तुलना करणे टाळावे. "गेल्या दोन आठवड्यांत चार वेळा गृहपाठ अपूर्ण होता" असे नेमके निरीक्षण शांतपणे सांगणे संवादाला सकारात्मक दिशा देते.'
    ],
    englishSummary: 'Teachers and parents share one sacred goal: the child’s thriving. By listening first, avoiding negative comparisons, and citing objective observations, true cooperation is born.',
    keyTakeaways: [
      'शिक्षक आणि पालक हे एकमेकांचे सहकारी आहेत, प्रतिस्पर्धी नव्हे.',
      'इतर विद्यार्थ्यांशी तुलना केल्याने मुलांचा आत्मविश्वास कमी होतो.',
      'शिस्त म्हणजे भीती दाखवणे नसून योग्य दिशा दाखवणे आहे.'
    ],
    funFactOrMoral: 'संवाद दोन्ही बाजूंनी झाला तरच मुलाचा मार्ग सुकर होतो!',
    quiz: [
      {
        id: 'q8-1',
        question: 'What is the common goal of both teachers and parents?',
        marathiQuestion: 'शिक्षक आणि पालक या दोघांचे एकच सामाईक ध्येय कोणते असते?',
        options: [
          'एकमेकांवर चुका काढणे',
          'मुलाचा सर्वांगीण, सुरक्षित आणि आनंदी विकास',
          'मुलाला जास्त शिक्षा करणे',
          'फक्त स्पर्धा जिंकणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'दोघांचेही ध्येय मुलाची प्रगती आणि कल्याण हेच असते.'
      },
      {
        id: 'q8-2',
        question: 'What should teachers strictly avoid when discussing a student’s progress?',
        marathiQuestion: 'मुलाच्या प्रगतीबद्दल बोलताना शिक्षकांनी काय टाळले पाहिजे?',
        options: [
          'इतर मुलांशी तुलना करणे',
          'नेमकी उदाहरणे देणे',
          'पालकांचे म्हणणे ऐकून घेणे',
          'शांतपणे बोलणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'तुलना केल्याने मुलाच्या मनावर नकारात्मक परिणाम होतो; त्याऐवजी स्वतःच्या प्रगतीवर भर द्यावा.'
      }
    ]
  },

  // Page 9
  9: {
    pageNumber: 9,
    title: 'Constructive Dialogue for Child Growth',
    marathiTitle: 'संवाद दोन्ही बाजूंनी: दोष नाही, उपाय!',
    section: 'शिल्पकार',
    categoryTag: 'शिल्पकार',
    quickSummary: 'Transforming difficult parent-teacher conversations into solution-focused partnerships for the child.',
    marathiParagraphs: [
      'कठीण प्रसंगी शिक्षकांनी स्वतःला एकच प्रश्न विचारावा: "मला हा संवाद जिंकायचा आहे की मुलाला मदत करायची आहे?"',
      'चांगले नाते फक्त समस्या निर्माण झाल्यावर तयार होत नाही. मुलाने वर्गात काही चांगले केले की पालकांना कौतुकाचा छोटासा संदेश पाठवला तरी विश्वास कित्येक पटीने वाढतो.',
      'कमी गुण मिळाल्यावर केवळ तक्रार करण्याऐवजी, "मुलाला विषय समजतो आहे, पण सोडवताना घाई होते; आपण दोघे मिळून पुढील दोन आठवडे त्यावर काम करूया" असा उपाय शोधणारा संवाद अधिक प्रभावी ठरतो.'
    ],
    englishSummary: 'Ask: "Do I want to win this argument or help the child?" Praising positive efforts early creates a bedrock of trust for navigating later challenges.',
    keyTakeaways: [
      '"मला संवाद जिंकायचा आहे की मुलाला मदत करायची आहे?" हा विचार ठेवा.',
      'चांगल्या प्रयत्नांचे वेळीच कौतुक केल्याने पालक आणि शिक्षकांत विश्वास वाढतो.',
      'दोष दाखवण्यापेक्षा उपायांवर एकत्र काम करणे जास्त परिणामकारक ठरते.'
    ],
    funFactOrMoral: 'विरोध नाही, संवाद! दोष नाही, उपाय!',
    quiz: [
      {
        id: 'q9-1',
        question: 'What question should a teacher reflect upon during a tense discussion?',
        marathiQuestion: 'पालकांशी कठीण संवादात शिक्षकांनी स्वतःला कोणता प्रश्न विचारावा?',
        options: [
          '"मी हा वाद कसा जिंकू?"',
          '"मला हा संवाद जिंकायचा आहे की मुलाला मदत करायची आहे?"',
          '"पालकांना कशी शिक्षा करू?"',
          '"मुलाला वर्गाबाहेर कसे काढू?"'
        ],
        correctAnswerIndex: 1,
        explanation: 'संवाद मुलाच्या मदतीसाठी आहे, जिंकण्यासाठी नाही, हे लक्षात ठेवल्याने मार्ग निघतो.'
      },
      {
        id: 'q9-2',
        question: 'How can teachers cultivate lasting trust with parents proactively?',
        marathiQuestion: 'पालकांशी दीर्घकालीन विश्वास निर्माण करण्यासाठी शिक्षकांनी कोणती कृती करावी?',
        options: [
          'मुलाने केलेल्या चांगल्या कामाचेही कौतुक वेळेवर कळवणे',
          'केवळ तक्रारी आल्यावरच बोलणे',
          'पालकांच्या फोनकडे दुर्लक्ष करणे',
          'नेहमी इतर मुलांचेच कौतुक करणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'छोट्या चांगल्या गोष्टींची माहिती दिल्याने सकारात्मक विश्वासाचे नाते तयार होते.'
      }
    ]
  },

  // Page 10
  10: {
    pageNumber: 10,
    title: 'Gurukul Values vs Modern Classroom Skills',
    marathiTitle: 'गुरुकुलातील संस्कार आणि आजच्या वर्गातील कौशल्ये',
    section: 'शिल्पकार',
    categoryTag: 'शिल्पकार',
    quickSummary: 'Synthesizing ancient character values with modern 21st-century digital competencies.',
    marathiParagraphs: [
      'पूर्वी गुरुकुलात ज्ञानासोबत संयम, कष्ट, जबाबदारी, स्वावलंबन आणि संस्कार यांना सर्वोच्च स्थान होते. आज वर्गखोल्या बदलल्या आहेत, विद्यार्थ्यांच्या हातात मोबाईल आणि इंटरनेट आले आहे.',
      'आज इंटरनेटमुळे काही सेकंदांत हवी ती माहिती मिळते. पण माहिती मिळणे म्हणजे खरी समज किंवा प्रगती नव्हे!',
      'कोणती माहिती योग्य आहे, तिची सत्यता कशी तपासायची आणि तिचा जबाबदारीने वापर कसा करायचा, हे शिकवणे आजच्या शिक्षकांचे खरे आव्हान आहे.',
      'जुन्या काळातील गुरुकुल मूल्यांची आजच्या वेळेचे नियोजन, संवादकौशल्य, टीमवर्क आणि डिजिटल साक्षरता या आधुनिक कौशल्यांशी योग्य सांगड घातली पाहिजे.'
    ],
    englishSummary: 'While digital tools provide rapid access to raw data, true education fosters discernment: verifying facts, thinking critically, and embodying timeless values.',
    keyTakeaways: [
      'इंटरनेटवर माहिती मिळते, पण खरी समज शिक्षकांच्या मार्गदर्शनातून येते.',
      'माहितीची सत्यता पडताळण्याची आणि योग्य वापराची सवय लावा.',
      'गुरुकुलातील संस्कार आणि आधुनिक कौशल्यांची सांगड घालणे आवश्यक आहे.'
    ],
    funFactOrMoral: 'शिक्षण म्हणजे फक्त माहिती देणे नव्हे, तर चांगला माणूस घडवणे!',
    quiz: [
      {
        id: 'q10-1',
        question: 'In the digital era, what is the crucial distinction about information?',
        marathiQuestion: 'आजच्या डिजिटल युगात माहिती मिळणे म्हणजे नक्की काय नव्हे?',
        options: [
          'वेळ वाचणे',
          'खरी समज किंवा ज्ञान वाढणे नव्हे',
          'मोबाईल वापरणे',
          'इंटरनेट जोडणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'माहितीचा योग्य अर्थ, सत्यता आणि वापर समजणे म्हणजेच खरी बुद्धिमत्ता.'
      },
      {
        id: 'q10-2',
        question: 'What is the primary challenge facing modern educators today?',
        marathiQuestion: 'आजच्या शिक्षकांसमोरील खरे आव्हानात्मक काम कोणते आहे?',
        options: [
          'जुने संस्कार सोडून फक्त कॉम्प्युटर शिकवणे',
          'पारंपारिक संस्कार आणि आधुनिक कौशल्ये यांची योग्य सांगड घालणे',
          'इंटरनेटवर बंदी घालणे',
          'विद्यार्थ्यांना प्रश्न न विचारू देणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'संस्कार आणि २१ व्या शतकातील कौशल्ये एकत्र नांदवणे हेच खरे शिक्षण आहे.'
      }
    ]
  },

  // Page 11
  11: {
    pageNumber: 11,
    title: 'Guiding Future Generations',
    marathiTitle: 'संस्कार आणि कौशल्ये यांची सांगड',
    section: 'शिल्पकार',
    categoryTag: 'शिल्पकार',
    quickSummary: 'Mentoring children to think critically, learn from setbacks, and stand confidently on their own feet.',
    marathiParagraphs: [
      'तंत्रज्ञान कधीही शिक्षकाची जागा घेऊ शकत नाही, तर शिक्षण अधिक प्रभावी करण्यासाठी ते वापरले पाहिजे. शिक्षक-विद्यार्थी नाते नेहमी केंद्रस्थानी राहिले पाहिजे.',
      'चांगला शिक्षक सुरुवातीला विद्यार्थ्याचा हात धरून चालवतो, पण योग्य वेळी तो हात सोडून त्याला स्वतःच्या पायावर उभे राहण्याची संधी देतो.',
      '"मी स्वतः विचार करू शकतो, प्रयत्न करू शकतो आणि चूक झाली तर पुन्हा शिकू शकतो" - हा आत्मविश्वास विद्यार्थ्यामध्ये निर्माण करणे हेच खरे शिक्षण आहे.',
      'कौशल्ये असावीत, पण त्या कौशल्यांना योग्य दिशा देण्यासाठी संस्कार आवश्यक आहेत. आत्मविश्वास असावा, पण अहंकार नसावा!'
    ],
    englishSummary: 'A great teacher gradually guides learners toward self-reliance. True learning reframes mistakes as stepping stones to wisdom.',
    keyTakeaways: [
      'तंत्रज्ञान हे शिकण्याचे साधन आहे, ते शिक्षकाची जागा घेऊ शकत नाही.',
      'चुकांकडे अपयश म्हणून न पाहता शिकण्याची नवी संधी माना.',
      'आत्मविश्वास बाळगा, परंतु अहंकार पूर्णपणे टाळा.'
    ],
    funFactOrMoral: 'संस्कार आणि कौशल्ये हातात हात घालून पुढे जातील, तेव्हाच शिक्षण पूर्ण होईल!',
    quiz: [
      {
        id: 'q11-1',
        question: 'What is the true sign of an empowered student?',
        marathiQuestion: 'विद्यार्थ्यामध्ये कोणता खरा आत्मविश्वास निर्माण होणे म्हणजेच खरे शिक्षण आहे?',
        options: [
          '"मी स्वतः विचार करू शकतो, प्रयत्न करू शकतो आणि चुकांतून पुन्हा शिकू शकतो!"',
          '"मी कधीही चूक करत नाही"',
          '"मला शिक्षकांची गरज नाही"',
          '"मी सर्वात श्रेष्ठ आहे"'
        ],
        correctAnswerIndex: 0,
        explanation: 'चुका स्वीकारून पुन्हा नव्या उमेदीने शिकण्याची क्षमता हीच स्वावलंबनाची ताकद आहे.'
      },
      {
        id: 'q11-2',
        question: 'What should accompany our skills to keep us grounded?',
        marathiQuestion: 'आपल्या कौशल्यांना योग्य दिशा देण्यासाठी कशाची आवश्यकता असते?',
        options: [
          'अहंकार आणि गर्व',
          'चांगले संस्कार आणि नम्रता',
          'इतरांना कमी लेखणे',
          'केवळ पैशाची हाव'
        ],
        correctAnswerIndex: 1,
        explanation: 'कौशल्यांसोबत संस्कार असल्यासच माणूस समाजासाठी उपयुक्त ठरतो.'
      }
    ]
  },

  // Page 12
  12: {
    pageNumber: 12,
    title: 'Exam Stress or Preparation Power?',
    marathiTitle: 'परीक्षेचा ताण की तयारीची ताकद?',
    section: 'गार्डनर',
    categoryTag: 'गार्डनर',
    quickSummary: 'Transforming exam dread into organized, confident preparation through small steps and positive trust.',
    marathiParagraphs: [
      'परीक्षा जवळ आली की घरात भीतीचे आणि चिंतेचे वातावरण तयार होते. पण पालकांनी एक प्रश्न स्वतःला विचारावा: आपण मुलाला परीक्षेसाठी तयार करत आहोत की परीक्षेची भीती मनात भरवत आहोत?',
      'दबाव भीतीचा नको, तर विश्वासाचा असावा! "तुला ९०% पेक्षा कमी मिळाले तर बघ" असे धमकावण्याऐवजी, "तुझ्या क्षमतेनुसार प्रामाणिक प्रयत्न कर, आपण मिळून तयारी करूया" असे सांगितल्यास मुलाला अपयशाची भीती वाटत नाही.',
      'मोठा अभ्यास पाहून मूल घाबरते. ५ धडे एकदम करण्याऐवजी आज फक्त २ गणिते सोडवूया असे छोटे लक्ष्य ठेवल्यास काम सहज वाटते आणि मुलाला स्वतःची प्रगती जाणवते.'
    ],
    englishSummary: 'Replace fearful threats with loving faith. Co-create structured routines, break hefty revisions into mini-goals, and watch confidence soar.',
    keyTakeaways: [
      'दबाव भीतीचा नव्हे, तर विश्वासाचा आणि तयारीचा असावा.',
      'अभ्यासाचे मोठे डोंगर लहान-लहान टप्प्यांत विभागून पूर्ण करा.',
      'मुलाला वेळापत्रक बनवण्यात स्वतः सहभागी करून घ्या.'
    ],
    funFactOrMoral: 'लहान उद्दिष्टे पूर्ण केल्याने मोठा आत्मविश्वास निर्माण होतो!',
    quiz: [
      {
        id: 'q12-1',
        question: 'How should parents encourage children before exams?',
        marathiQuestion: 'परीक्षेच्या काळात पालकांनी मुलांशी कसा संवाद साधावा?',
        options: [
          '"९०% नाही मिळाले तर घरात येऊ नको!"',
          '"प्रामाणिक प्रयत्न कर, आपण मिळून व्यवस्थित तयारी करूया!"',
          'इतर हुशार मुलांशी तुलना करून ओरडणे',
          'सर्व खेळ आणि आनंद पूर्णपणे बंद करणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'विश्वासाचे आणि सहकार्याचे शब्द मुलांच्या मनावरील भीती दूर करतात.'
      },
      {
        id: 'q12-2',
        question: 'What is the best way to tackle a huge study syllabus?',
        marathiQuestion: 'मोठा अभ्यास समोर असताना भीती न वाटण्यासाठी काय करावे?',
        options: [
          'अभ्यासाचे छोटे छोटे टप्पे पाडून दररोज नियमित सोडवणे',
          'एकाच रात्रीत सर्व धडे वाचण्याचा प्रयत्न करणे',
          'अभ्यास सोडून टीव्ही पाहणे',
          'नशिबावर सोडून देणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'मोठे काम छोट्या तुकड्यांत विभागल्याने ते सोपे वाटते आणि प्रगती दिसते.'
      }
    ]
  },

  // Page 13
  13: {
    pageNumber: 13,
    title: 'Supporting Children: Effort Over Marks',
    marathiTitle: 'गुणांपेक्षा प्रयत्न महत्त्वाचे!',
    section: 'गार्डनर',
    categoryTag: 'गार्डनर',
    quickSummary: 'Why restful sleep, zero unhealthy comparisons, and celebrating earnest efforts matter more than mere marks.',
    marathiParagraphs: [
      'परीक्षेच्या काळात अभ्यासासाठी झोप कमी करणे पूर्णपणे चुकीचे आहे. झोप ही शिकण्याचा आणि स्मरणशक्ती मजबूत करण्याचा अत्यंत महत्त्वाचा भाग आहे. थकलेल्या मेंदूकडून चांगली एकाग्रता अपेक्षित करणे कठीण असते.',
      'गुण महत्त्वाचे आहेत, पण ते मुलापेक्षा मोठे नाहीत! एक परीक्षा मुलाची संपूर्ण बुद्धिमत्ता किंवा भवितव्य ठरवत नाही.',
      'इतर मुलांशी तुलना करणे टाळा; त्याऐवजी कालच्या मुलाशी आजच्या मुलाची तुलना करा - "मागच्या आठवड्यात तुला हे अवघड वाटत होते, आज तू स्वतः सोडवलेस!" अशा शब्दांतून प्रयत्नांचे कौतुक करा.'
    ],
    englishSummary: 'Sleep is essential for memory consolidation. Never evaluate a child’s entire worth based on test marks; celebrate their perseverance and personal progress.',
    keyTakeaways: [
      'मेंदूच्या स्मरणशक्तीसाठी पुरेशी झोप आणि विश्रांती अत्यावश्यक आहे.',
      'एक परीक्षा मुलाची संपूर्ण बुद्धिमत्ता ठरवू शकत नाही.',
      'इतरांशी तुलना करण्याऐवजी स्वतःच्या कालच्या प्रयत्नांशी तुलना करा.'
    ],
    funFactOrMoral: 'प्रयत्नांचे कौतुक केल्याने मुले संकटांना न घाबरता सामोरी जातात!',
    quiz: [
      {
        id: 'q13-1',
        question: 'Why is adequate sleep essential during exams?',
        marathiQuestion: 'परीक्षेच्या काळात पुरेशी शांत झोप घेणे का आवश्यक आहे?',
        options: [
          'वेळ वाया घालवण्यासाठी',
          'मेंदूची स्मरणशक्ती व एकाग्रता मजबूत करण्यासाठी',
          'अभ्यास टाळण्यासाठी',
          'आळस वाढवण्यासाठी'
        ],
        correctAnswerIndex: 1,
        explanation: 'विश्रांतीमुळे मेंदू ताजातवाना राहून वाचलेले व्यवस्थित आठवते.'
      },
      {
        id: 'q13-2',
        question: 'Whom should a student be compared with to build healthy self-esteem?',
        marathiQuestion: 'मुलाचा आत्मविश्वास वाढवण्यासाठी त्याची तुलना कोणाशी करावी?',
        options: [
          'शेजारच्या सर्वाधिक गुण मिळवणाऱ्या मुलाशी',
          'मुलाच्या स्वतःच्या कालच्या प्रयत्नांशी आणि प्रगतीशी',
          'वर्गातील सर्व मुलांशी',
          'कोणाशीही चर्चा न करता गप्प राहावे'
        ],
        correctAnswerIndex: 1,
        explanation: 'स्वतःच्या कालच्या प्रगतीशी तुलना केल्याने सकारात्मक विकासाची वृत्ती वाढते.'
      }
    ]
  },

  // Page 14
  14: {
    pageNumber: 14,
    title: 'When to Hold Hands and When to Let Go?',
    marathiTitle: 'हात धरायचा कधी, आणि सोडायचा कधी?',
    section: 'गार्डनर',
    categoryTag: 'गार्डनर',
    quickSummary: 'Fostering independence in kids just like teaching bicycle riding—knowing when to support and when to release.',
    marathiParagraphs: [
      'मूल पहिल्यांदा चालायला शिकते तेव्हा आपण त्याचा हात घट्ट धरतो. पण नंतर तो स्वतः चालू लागतो. जर आपण कायम हात धरून ठेवला, तर तो स्वतःच्या पायावर कसा उभा राहणार?',
      'शाळेची बॅग भरणे, गृहपाठ करणे किंवा छोट्या अडचणी सोडवणे सुरुवातीला शिकवावे. पण मदतीचा अर्थ मुलाचे काम स्वतः करून देणे असा नाही. मदत म्हणजे मुलाला काम शिकवणे; त्याची जागा घेणे नव्हे!',
      'मुलाने प्रश्न विचारला तर लगेच उत्तर देण्याऐवजी, "तुला काय वाटते?" असा प्रतिप्रश्न विचारल्यास त्याच्या विचारशक्तीला चालना मिळते.'
    ],
    englishSummary: 'Loving parenting means scaffolding skills early, then stepping back so children experience the joy of independent problem solving.',
    keyTakeaways: [
      'मदत करणे म्हणजे काम शिकवणे, मुलाचे काम स्वतः करून देणे नव्हे.',
      'लहान वयापासून स्वतःचे निर्णय स्वतः घेण्याची सवय लावा.',
      'तयार उत्तरे देण्याऐवजी विचार करायला शिकवा.'
    ],
    funFactOrMoral: 'आपण दिलेला सर्वात मोठा आधार म्हणजे मुलांना स्वतःच्या पायावर उभे राहण्याची ताकद देणे!',
    quiz: [
      {
        id: 'q14-1',
        question: 'What is the true meaning of helping a child?',
        marathiQuestion: 'मुलाला खरी मदत करणे म्हणजे नक्की काय?',
        options: [
          'त्याचे सर्व काम आपणच करून देणे',
          'त्याला काम शिकवून स्वावलंबी बनवणे',
          'त्याला कोणतीही अडचण येऊ न देणे',
          'त्याचे गृहपाठ स्वतः लिहिणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'काम शिकवणे आणि मुलाला स्वतः सक्षम करणे हीच खरी मदत ठरते.'
      },
      {
        id: 'q14-2',
        question: 'When a child asks a question, what response best encourages critical thinking?',
        marathiQuestion: 'मुलाने अडचण विचारल्यावर त्याच्या विचारशक्तीला चालना देण्यासाठी काय विचारावे?',
        options: [
          '"तुला काही समजत नाही"',
          '"तुला याबद्दल काय वाटते? आपण काय करू शकतो?"',
          'लगेच स्वतःच सर्व काम करून मोकळे होणे',
          'प्रश्न विचारण्यास मनाई करणे'
        ],
        correctAnswerIndex: 1,
        explanation: '"तुला काय वाटते?" विचारल्याने मुलाचा मेंदू स्वतः विचार करू लागतो.'
      }
    ]
  },

  // Page 15
  15: {
    pageNumber: 15,
    title: 'The Sweet Fruit of Self-Reliance',
    marathiTitle: 'स्वावलंबनाची गोड फळे',
    section: 'गार्डनर',
    categoryTag: 'गार्डनर',
    quickSummary: 'Letting children make safe mistakes, learn from natural consequences, and develop lifelong resilience.',
    marathiParagraphs: [
      'हात सोडणे म्हणजे मुलाला एकटे सोडणे नव्हे; तर त्याच्या क्षमतेवर आणि संस्कारांवर विश्वास ठेवणे आहे.',
      'मुलांना सुरक्षित मर्यादेत चुका करण्याची मुभा द्यावी. प्रत्येक चूक वाईट नसते; काही चुका पुस्तकांपेक्षा जास्त शिकवतात. वस्तू विसरणे, वेळेचे चुकीचे नियोजन होणे या अनुभवांमधून मुले जबाबदारी शिकतात.',
      'मुलाला आधाराची गरज असते तेव्हा हात धरावा, पण जेव्हा तो चालू शकतो तेव्हा त्याला स्वतःच्या पायावर उभे राहण्याची संधी द्यावी. हात धरताना असो वा सोडताना, त्याच्यावरचा विश्वास मात्र कधीही सोडू नये.'
    ],
    englishSummary: 'Allowing safe missteps teaches accountability far better than lectures. Unconditional trust gives kids the inner courage to bounce back from any setback.',
    keyTakeaways: [
      'सुरक्षित मर्यादेत केलेल्या लहान चुकांमधून मुले मौल्यवान धडे शिकतात.',
      'स्वातंत्र्य म्हणजे नियम नसणे नव्हे, तर जबाबदारीने निर्णय घेणे होय.',
      'मुलांच्या क्षमतेवर कायम अतूट विश्वास ठेवा.'
    ],
    funFactOrMoral: 'हात धरताना असो किंवा सोडताना, विश्वास मात्र कधीही सोडू नका!',
    quiz: [
      {
        id: 'q15-1',
        question: 'What does "letting go of hand" truly signify in parenting?',
        marathiQuestion: '"हात सोडणे" या संकल्पनेचा खरा अर्थ काय आहे?',
        options: [
          'मुलाला वाऱ्यावर सोडून देणे',
          'मुलाच्या क्षमतेवर विश्वास ठेवून त्याला स्वावलंबी बनवणे',
          'मुलाशी बोलणे बंद करणे',
          'मुलाकडे दुर्लक्ष करणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'विश्वास ठेवून निर्णय घेण्याची मुभा देणे म्हणजेच स्वावलंबन शिकवणे.'
      },
      {
        id: 'q15-2',
        question: 'What valuable lesson do children learn from small, safe mistakes?',
        marathiQuestion: 'लहानसहान चुकांमधून मुलांना काय शिकायला मिळते?',
        options: [
          'भीती आणि असुरक्षितता',
          'जबाबदारीची जाणीव आणि स्वतःचे नियोजन',
          'कामे सोडून देणे',
          'खोटे बोलणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'चुका ही शिकण्याची आणि सुधारणा करण्याची नैसर्गिक प्रक्रिया असते.'
      }
    ]
  },

  // Page 16
  16: {
    pageNumber: 16,
    title: 'Fruit or Juice: Which is Healthier?',
    marathiTitle: 'फळ की ज्यूस? आरोग्यासाठी योग्य निवड',
    section: 'आरोग्यम्',
    categoryTag: 'आरोग्यम्',
    quickSummary: 'Nutritional comparison: why whole fruit with dietary fiber is vastly superior to packaged fruit drinks.',
    marathiParagraphs: [
      'आजकाल बाजारात फ्रूट ज्यूस, फ्रूट ड्रिंक, शेक आणि स्मूदी यांची मोठी विविधता आहे. पण फळ खाणे जास्त चांगले की ज्यूस पिणे?',
      'संपूर्ण फळ खाल्ल्यामुळे शरीराला नैसर्गिक फायबर (तंतूमय घटक), जीवनसत्त्वे आणि खनिजे मिळतात. फायबर पचनासाठी आवश्यक असून त्यामुळे पोट भरल्याची भावना राहते.',
      'ज्यूस काढताना फायबर निघून जाते आणि फळातील नैसर्गिक साखर वेगाने शरीरात शोषली जाते. शिवाय बाजारातील अनेक "Fruit Drinks" मध्ये केवळ साखर, पाणी, रंग आणि फ्लेवर्स असतात, खरा रस खूप कमी असतो!'
    ],
    englishSummary: 'Whole fruits contain essential dietary fiber that regulates sugar absorption and aids digestion. Commercial juice boxes often lack fiber and contain heavy added sugar.',
    keyTakeaways: [
      'ज्यूस पिण्याऐवजी ताजे संपूर्ण फळ खाण्याला सर्वोच्च प्राधान्य द्या.',
      'फळांमधील फायबरमुळे पचन चांगले राहते आणि साखर नियंत्रित राहते.',
      'पॅकबंद बाटलीवर "Fruit Drink" लिहिले असल्यास त्यातील घटकांची खात्री करा.'
    ],
    funFactOrMoral: 'फळाच्या नावावर नाही, तर त्यातील पोषण आणि फायबरवर विश्वास ठेवा!',
    quiz: [
      {
        id: 'q16-1',
        question: 'Why is eating whole fruit much healthier than drinking juice?',
        marathiQuestion: 'ज्यूस पिण्यापेक्षा ताजे संपूर्ण फळ खाणे आरोग्यासाठी का अधिक चांगले असते?',
        options: [
          'कारण त्यात भरपूर फायबर (तंतूमय घटक) असते जे ज्यूसमध्ये नष्ट होते',
          'कारण फळ खायला कमी वेळ लागतो',
          'कारण ज्यूसमध्ये चव नसते',
          'कारण फळात पाणी नसते'
        ],
        correctAnswerIndex: 0,
        explanation: 'फायबर पचनास मदत करते आणि रक्तातील साखर एकदम वाढू देत नाही.'
      },
      {
        id: 'q16-2',
        question: 'What is commonly found in packaged "Fruit Drinks"?',
        marathiQuestion: 'बाजारातील पॅकबंद "Fruit Drink" मध्ये प्रामुख्याने काय असते?',
        options: [
          '१००% शुद्ध फळांचा रस',
          'पाणी, साखर, रंग आणि फ्लेवर्स (खरा रस अल्प प्रमाणात)',
          'केवळ औषधी घटक',
          'भरपूर फायबर'
        ],
        correctAnswerIndex: 1,
        explanation: 'अनेक पॅकबंद पेयांमध्ये फळांचे प्रमाण कमी आणि अतिरिक्त साखर जास्त असते.'
      }
    ]
  },

  // Page 17
  17: {
    pageNumber: 17,
    title: 'Reading Labels & Natural Hydration',
    marathiTitle: 'लेबल वाचण्याची सवय आणि पाण्याचे महत्त्व',
    section: 'आरोग्यम्',
    categoryTag: 'आरोग्यम्',
    quickSummary: 'Decoding food packaging labels for hidden sugars and caffeine, and choosing plain water as the supreme drink.',
    marathiParagraphs: [
      'खाद्यपदार्थ आणि शीतपेये खरेदी करताना पाकिटावरील "Ingredients" आणि "Nutrition Information" वाचण्याची सवय मुलांमध्ये व पालकांमध्ये विकसित झाली पाहिजे. केवळ आकर्षक जाहिरातींना भुलू नये.',
      'एनर्जी ड्रिंक्स आणि फ्लेवर्ड ड्रिंक्समध्ये साखर व कॅफिनचे प्रमाण खूप जास्त असते, जे वाढत्या वयातील मुलांच्या आरोग्यासाठी आणि झोपेसाठी अपायकारक ठरू शकते.',
      'तहान भागवण्यासाठी साधे, स्वच्छ पाणी हाच सर्वात सोपा आणि आरोग्यदायी पर्याय आहे. तहान लागल्यावर वारंवार गोड पेये पिण्याची गरज नसते.'
    ],
    englishSummary: 'Cultivate the habit of checking ingredient labels for hidden sugar and high caffeine. Plain water is the simplest, most powerful fuel for a healthy mind and body.',
    keyTakeaways: [
      'अन्नाच्या पाकिटावरील घटक (Ingredients) व साखरेचे प्रमाण वाचायला शिका.',
      'एनर्जी ड्रिंक्समधील हानिकारक अतिरिक्त साखर आणि कॅफिन टाळा.',
      'तहान लागल्यावर गोड पेयांऐवजी साधे पाणी पिण्याची सवय ठेवा.'
    ],
    funFactOrMoral: 'साधे पाणी हेच निसर्गाचे सर्वोत्तम आणि परिपूर्ण ऊर्जा पेय आहे!',
    quiz: [
      {
        id: 'q17-1',
        question: 'What is the most important habit when buying packaged foods or drinks?',
        marathiQuestion: 'पॅकबंद खाद्यपदार्थ किंवा पेये खरेदी करताना कोणती सवय महत्त्वाची आहे?',
        options: [
          'केवळ आकर्षक वेष्टन आणि जाहिराती पाहणे',
          'पाकिटावरील घटक (Ingredients) आणि साखरेचे प्रमाण वाचणे',
          'सर्वात स्वस्त वस्तू घेणे',
          'मित्रांचे अनुकरण करणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'लेबल वाचल्याने अस्वास्थ्यकर साखर आणि रसायने टाळता येतात.'
      },
      {
        id: 'q17-2',
        question: 'What is the best and healthiest choice to quench everyday thirst?',
        marathiQuestion: 'दैनंदिन जीवनात तहान भागवण्यासाठी सर्वोत्तम पेय कोणते आहे?',
        options: [
          'एनर्जी ड्रिंक',
          'साधे स्वच्छ पाणी',
          'सोडा आणि रंगीत शीतपेये',
          'साखरयुक्त चहा'
        ],
        correctAnswerIndex: 1,
        explanation: 'पाणी शरीराला उत्तम हायड्रेट ठेवते आणि विषारी घटक बाहेर टाकते.'
      }
    ]
  },

  // Page 18
  18: {
    pageNumber: 18,
    title: 'Why Our Mind Loves To-Do Lists',
    marathiTitle: 'आपल्या मनाला To-Do List का आवडते?',
    section: 'आरोग्यम्',
    categoryTag: 'आरोग्यम्',
    quickSummary: 'Psychology of the Zeigarnik effect: why unfinished tasks linger in memory and how lists liberate the brain.',
    marathiParagraphs: [
      'दिवसाची सुरुवात होताच अनेक कामे डोक्यात फिरू लागतात: अभ्यास, प्रोजेक्ट, मित्राला फोन, घराची स्वच्छता. मानसशास्त्रानुसार, अर्धवट राहिलेले काम मेंदू वारंवार आठवत राहतो (Zeigarnik Effect).',
      '"To-Do List" म्हणजे दिवसभरात करायच्या कामांची साधी यादी. ही यादी कागदावर लिहिल्याने मेंदूवरील ताण तात्काळ कमी होतो आणि मनाला शांतता मिळते.',
      'यादीमुळे कामांना योग्य क्रम (Priority) देणे सोपे जाते - आधी गणिताचा गृहपाठ, मग विज्ञानाचा अभ्यास, आणि नंतर खेळासाठी वेळ!'
    ],
    englishSummary: 'Psychology reveals that open loops (uncompleted tasks) drain subconscious energy. Offloading tasks to paper instantly quiets the mind and boosts productivity.',
    keyTakeaways: [
      'कामे डोक्यात ठेवण्याऐवजी कागदावर लिहिल्याने मानसिक ताण कमी होतो.',
      'महत्त्वाच्या कामांना योग्य प्राधान्यक्रम (Priority) ठरवणे सोपे जाते.',
      'एक वेळी एकाच गोष्टीवर पूर्ण लक्ष केंद्रित करता येते.'
    ],
    funFactOrMoral: 'मनात गोंधळ साठवण्यापेक्षा तो कागदावर उतरवून शांत व्हा!',
    quiz: [
      {
        id: 'q18-1',
        question: 'Why do unfinished tasks continuously pop up in our thoughts?',
        marathiQuestion: 'अर्धवट राहिलेली कामे आपल्या डोक्यात पुन्हा पुन्हा का येतात?',
        options: [
          'कारण मेंदूला काम पूर्ण झालेले आवडते (झेगार्निक इफेक्ट)',
          'कारण आपण आळशी असतो',
          'कारण आपल्याला अभ्यास करायचा नसतो',
          'कारण मेंदू काम विसरू इच्छितो'
        ],
        correctAnswerIndex: 0,
        explanation: 'काम पूर्ण होईपर्यंत मेंदू त्याबद्दल सूचना देत राहतो, याला मानसशास्त्रात झेगार्निक इफेक्ट म्हणतात.'
      },
      {
        id: 'q18-2',
        question: 'What is the key benefit of writing a daily To-Do List?',
        marathiQuestion: 'रोजच्या कामांची To-Do List बनवल्याने मनाला कोणता मोठा फायदा होतो?',
        options: [
          'कामे आपोआप पूर्ण होतात',
          'डोक्यातील ताण कमी होतो आणि कामांचा स्पष्ट क्रम ठरवता येतो',
          'अभ्यास न करता चांगले गुण मिळतात',
          'अधिक वेळ झोपता येते'
        ],
        correctAnswerIndex: 1,
        explanation: 'कागदावर नियोजन मांडल्याने मेंदूला शांती मिळते आणि लक्ष एकाग्र होते.'
      }
    ]
  },

  // Page 19
  19: {
    pageNumber: 19,
    title: 'One Task at a Time: Joy of Small Steps',
    marathiTitle: 'एका वेळी एकच काम करा',
    section: 'आरोग्यम्',
    categoryTag: 'आरोग्यम्',
    quickSummary: 'The dopamine boost of ticking off tasks, keeping daily goals realistic, and setting tomorrow’s list at night.',
    marathiParagraphs: [
      '"To-Do List" मधील पूर्ण झालेल्या कामासमोर टिक (Tick mark) केल्यावर मेंदूला विलक्षण समाधान आणि आनंद मिळतो. यामुळे पुढचे काम करण्यासाठी नवी ऊर्जा मिळते.',
      'यादी करताना एकाच दिवशी २५ कामे लिहून स्वतःवर ताण आणू नका. दिवसासाठी ३ ते ५ सर्वात महत्त्वाची कामे निवडून ती मनापासून पूर्ण करा.',
      'दिवसाच्या शेवटी दुसऱ्या दिवशी करायची कामे लिहून ठेवल्यास रात्री झोपताना "उद्या काय करायचे?" हा विचार मनात येत नाही आणि शांत, गाढ झोप लागते.'
    ],
    englishSummary: 'Checking off completed items rewards the brain. Limit tasks to 3-5 high-impact goals per day, and draft tomorrow’s plan before sleeping for sweet dreams.',
    keyTakeaways: [
      'प्रत्येक टिकमार्कसोबत काम पूर्ण झाल्याचे समाधान आणि नवी ऊर्जा मिळते.',
      'अवास्तव मोठी यादी बनवू नका; मोजकी आणि खरी महत्त्वाची कामे करा.',
      'रात्री झोपण्यापूर्वी उद्याची कामे लिहिल्याने शांत झोप लागते.'
    ],
    funFactOrMoral: 'एका वेळी एक पाऊल टाका, आणि कामासोबतच मनाच्या विश्रांतीलाही महत्त्व द्या!',
    quiz: [
      {
        id: 'q19-1',
        question: 'How many primary tasks should a student prioritize each day to avoid overwhelm?',
        marathiQuestion: 'ताण टाळण्यासाठी आणि कामे पूर्ण करण्यासाठी एका दिवसात साधारण किती मुख्य कामे ठरवावीत?',
        options: [
          '२५ ते ३० कामे',
          '३ ते ५ अत्यंत महत्त्वाची कामे',
          '५० कामे',
          'एकही काम नाही'
        ],
        correctAnswerIndex: 1,
        explanation: '३ ते ५ महत्त्वाची कामे निवडल्यास लक्ष विचलित न होता ती पूर्ण होतात.'
      },
      {
        id: 'q19-2',
        question: 'What is the advantage of preparing tomorrow’s list before sleeping at night?',
        marathiQuestion: 'रात्री झोपण्यापूर्वी उद्याच्या कामांची यादी तयार केल्याचा कोणता फायदा होतो?',
        options: [
          'उद्याच्या चिंतेपासून मन मुक्त होते आणि शांत झोप लागते',
          'सकाळी उशिरा उठता येते',
          'अभ्यास करणे बंद होते',
          'कामे आपोआप होतात'
        ],
        correctAnswerIndex: 0,
        explanation: 'नियोजन तयार असल्याने मेंदू शांत होतो आणि गाढ झोप लागते.'
      }
    ]
  },

  // Page 23
  23: {
    pageNumber: 23,
    title: 'Diwali Wishes: From Postcards to Forwarded',
    marathiTitle: 'दिवाळीच्या शुभेच्छा: पोस्टकार्डपासून फॉरवर्डेडपर्यंत!',
    section: 'दिवाळी विशेष',
    categoryTag: 'दिवाळी विशेष',
    quickSummary: 'Nostalgic journey of sending handwritten Diwali greeting cards via post versus instant WhatsApp forwards.',
    marathiParagraphs: [
      'आज व्हॉट्सअॅपवर दोन सेकंदांत "शुभ दीपावली" ५० लोकांना पाठवता येते. पण पूर्वीच्या काळात दिवाळीच्या शुभेच्छा पाठवणे म्हणजे एक कौटुंबिक सोहळा असायचा!',
      'दिवाळी जवळ आली की बाजारात जाऊन सुंदर शुभेच्छापत्रे निवडणे, नातेवाईक आणि मित्रांसाठी स्वतःच्या हस्ताक्षरात प्रेमळ शब्द लिहिणे, आणि पोस्टाच्या पेटीत टाकणे - यात खरा जिव्हाळा होता.',
      'तेव्हा पोस्टमन हाच खरा "Delivery Status" असायचा. दारात टपाल आले की घरातील प्रत्येकाचे डोळे पत्रांकडे लागायचे, कारण त्यात केवळ कागद नसून आपल्या माणसांचे प्रेम असायचे.'
    ],
    englishSummary: 'Handwritten postcards involved time, care, and heartfelt emotion. Contrasted with instant forwards, personal effort is what truly makes a greeting unforgettable.',
    keyTakeaways: [
      'स्वतःच्या हस्ताक्षरात लिहिलेल्या शब्दात खरी आपुलकी आणि प्रेम असते.',
      'पोस्टकार्ड निवडणे आणि पाठवणे हा एक सुंदर कौटुंबिक संस्कार होता.',
      'तंत्रज्ञान कितीही वेगवान झाले तरी नात्यांमधील ओलावा जपणे महत्त्वाचे आहे.'
    ],
    funFactOrMoral: 'शब्दांमधील वेळ आणि आपुलकीच नात्यांना घट्ट बांधून ठेवते!',
    quiz: [
      {
        id: 'q23-1',
        question: 'What made traditional handwritten Diwali greeting cards so special?',
        marathiQuestion: 'जुन्या काळातील दिवाळीच्या शुभेच्छापत्रांमध्ये कोणता खास गोडवा असायचा?',
        options: [
          'स्वतःच्या हस्ताक्षरातील आपुलकी, वेळ आणि मनःपूर्वक विचार',
          'त्यांची किंमत खूप जास्त असायची',
          'ते इंग्रजीत असायचे',
          'त्यात कोणताही मजकूर नसायचा'
        ],
        correctAnswerIndex: 0,
        explanation: 'स्वतःच्या हाताने लिहिलेल्या शब्दांमध्ये समोरच्या व्यक्तीबद्दलचे खरे प्रेम जाणवते.'
      },
      {
        id: 'q23-2',
        question: 'Who was considered the real "Delivery Status" in those nostalgic days?',
        marathiQuestion: 'जुन्या काळात शुभेच्छापत्र पोहोचल्याचा खरा "Delivery Status" कोण असायचा?',
        options: ['पोस्टमन काका', 'मोबाईल स्क्रीन', 'ई-मेल', 'टेलिव्हिजन'],
        correctAnswerIndex: 0,
        explanation: 'पोस्टमन आल्यावरच घरात शुभेच्छापत्रे पोहोचल्याचा आनंद साजरा व्हायचा.'
      }
    ]
  },

  // Page 24
  24: {
    pageNumber: 24,
    title: 'Connecting Hearts in Modern Times',
    marathiTitle: 'मनापासून आठवण जास्त महत्त्वाची',
    section: 'दिवाळी विशेष',
    categoryTag: 'दिवाळी विशेष',
    quickSummary: 'Why writing two heartfelt words in your own handwriting is worth more than a hundred generic forwarded messages.',
    marathiParagraphs: [
      'आज दिवाळीच्या दिवशी मोबाईलवर शेकडो शुभेच्छांचे मेसेजेस, जीआयएफ आणि व्हिडिओ येतात. अनेकदा आपण ते न उघडताच पुढे निघून जातो.',
      'शुभेच्छा देणाऱ्यांची संख्या वाढली आहे, पण प्रत्येक संदेशासाठी आपण मनापासून वेळ देतो का? शेवटी दिवाळीच्या शुभेच्छा किती लोकांना पाठवल्या यापेक्षा कोणाला मनापासून आठवले हे जास्त महत्त्वाचे आहे.',
      'पुढच्या वेळी फॉरवर्ड आलेला मेसेज तसाच पुढे ढकलण्याऐवजी स्वतःच्या शब्दांत "शुभ दीपावली!" एवढेच लिहून बघा; त्या दोन शब्दांची किंमत आणि गोडवा कित्येक पटीने वाढेल.'
    ],
    englishSummary: 'Digital notifications pile up, but a warm, genuine note stands out instantly. Cherish relationships with personal thoughtfulness rather than bulk forwards.',
    keyTakeaways: [
      'फॉरवर्ड केलेल्या शेकडो मेसेजेसपेक्षा स्वतःचे दोन साधे शब्द जास्त गोड असतात.',
      'नात्यांमध्ये संख्येपेक्षा मनापासूनची भावना अधिक मोलाची असते.',
      'सणांच्या निमित्ताने संवाद साधून जुन्या आठवणींना उजाळा द्या.'
    ],
    funFactOrMoral: 'किती लोकांना शुभेच्छा पाठवल्या यापेक्षा कोणाला मनापासून आठवले हे जास्त महत्त्वाचे!',
    quiz: [
      {
        id: 'q24-1',
        question: 'What is more meaningful than a forwarded generic message?',
        marathiQuestion: 'शेकडो फॉरवर्ड केलेल्या मेसेजेसपेक्षा काय अधिक मनाला स्पर्श करते?',
        options: [
          'स्वतःच्या शब्दांत दिलेली साधी आणि मनापासूनची शुभेच्छा',
          'सर्वात मोठा व्हिडिओ पाठवणे',
          'ग्रुपवर मेसेज टाकणे',
          'कोणालाही शुभेच्छा न देणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'आपल्या स्वतःच्या शब्दात लिहिलेली शुभेच्छा खरी आपुलकी दर्शवते.'
      },
      {
        id: 'q24-2',
        question: 'What is the true essence of celebrating festivals with loved ones?',
        marathiQuestion: 'सण साजरे करताना नात्यांमध्ये सर्वात महत्त्वाचे काय असते?',
        options: [
          'फक्त भेटवस्तूंची देवाणघेवाण',
          'मनापासून आठवण ठेवणे आणि प्रेमळ संवाद जपणे',
          'सोशल मीडियावर फोटो टाकणे',
          'पटाके वाजवणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'सणांचे खरे सौंदर्य एकमेकांबद्दल असलेल्या प्रेमात आणि आपुलकीत असते.'
      }
    ]
  },

  // Page 25
  25: {
    pageNumber: 25,
    title: 'Why is Gen Z So Impatient?',
    marathiTitle: 'GenZ इतकी अधीर का आहे? त्वरित परिणामांचा काळ',
    section: 'टिनेजर्स',
    categoryTag: 'टिनेजर्स',
    quickSummary: 'Understanding instant results in the digital age of smartphones, algorithms, and 10-second videos.',
    marathiParagraphs: [
      'व्हिडिओ सुरू होण्यास दोन सेकंद लागले तरी आपण तो बदलतो. ऑनलाईन ऑर्डर दोन दिवसांत न आल्यास अस्वस्थता वाटते. आजची युवा पिढी आधीपेक्षा अधिक अधीर का झाली आहे?',
      'युनेस्कोच्या अभ्यासानुसार तरुणांना केवळ "अधीर" किंवा "आळशी" म्हणणे चुकीचे आहे. सततचे नोटिफिकेशन्स, ऑटो-प्ले आणि अल्गोरिदम यामुळे मेंदूला प्रत्येक गोष्ट लगेच मिळण्याची सवय लागली आहे.',
      'परंतु वास्तविक जीवनात कोणतीही कला, कौशल्य, अभ्यास किंवा करिअर एका रात्रीत घडत नाही. जीवनातील मौल्यवान गोष्टींसाठी वेळ, संयम आणि सातत्यपूर्ण परिश्रमांची आवश्यकता असते.'
    ],
    englishSummary: 'Fast-loading apps and instant notifications condition young brains to expect immediate payoffs. Yet true mastery in life takes steady patience and dedication.',
    keyTakeaways: [
      'डिजिटल वेगवान साधनांमुळे त्वरित परिणामांची अपेक्षा निर्माण होते.',
      'वास्तविक जगातील मोठे यश एका रात्रीत साध्य होत नाही.',
      'कौशल्ये शिकण्यासाठी आणि नातेसंबंध टिकवण्यासाठी वेळेची गरज असते.'
    ],
    funFactOrMoral: 'वेगवान जगात संयम हेच सर्वात मोठे सामर्थ्य आहे!',
    quiz: [
      {
        id: 'q25-1',
        question: 'Why do teenagers and youth often feel restless when waiting for results?',
        marathiQuestion: 'आजच्या पिढीत अधीरता वाढण्याचे मुख्य कारण काय आहे?',
        options: [
          'डिजिटल प्लॅटफॉर्म्स आणि त्वरित निकाल देणाऱ्या अॅप्सची सवय',
          'खूप जास्त अभ्यास करणे',
          'कष्ट करण्याची सवय',
          'पुस्तके जास्त वाचणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'स्क्रीनवर प्रत्येक गोष्ट सेकंदात मिळण्याची सवय मेंदूमध्ये अधीरता निर्माण करते.'
      },
      {
        id: 'q25-2',
        question: 'What is required to achieve real success and mastery in life?',
        marathiQuestion: 'जीवनातील कोणत्याही महत्त्वाच्या क्षेत्रात यश मिळवण्यासाठी काय आवश्यक आहे?',
        options: [
          'केवळ शॉर्टकट आणि नशीब',
          'वेळ, संयम आणि सातत्यपूर्ण प्रामाणिक कष्ट',
          'सोशल मीडियावरील लाईक्स',
          'घाईगडबडीने निर्णय घेणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'सखोल ज्ञान आणि टिकाऊ यश केवळ सातत्यपूर्ण परिश्रमांमुळेच प्राप्त होते.'
      }
    ]
  },

  // Page 26
  26: {
    pageNumber: 26,
    title: 'Cultivating Patience and Real Growth',
    marathiTitle: 'संयम आणि सातत्य यांचे महत्त्व',
    section: 'टिनेजर्स',
    categoryTag: 'टिनेजर्स',
    quickSummary: 'Practical strategies to build patience, manage digital distraction, and harmonize speed with deep focus.',
    marathiParagraphs: [
      'तंत्रज्ञान पूर्णपणे सोडून देणे हा उपाय नाही; तर तंत्रज्ञानाचा वापर आपल्या सुविधेसाठी करायचा की त्याचा गुलाम व्हायचे, हा विवेक बाळगणे गरजेचे आहे.',
      'संयम विकसित करण्यासाठी अभ्यास करताना फोनचे अनावश्यक नोटिफिकेशन्स बंद ठेवा. मोठ्या ध्येयांचे लहान तुकडे करा आणि दररोज काही वेळ शांतपणे एकाच कामावर मन एकाग्र करा.',
      'कधी वेगाने चालायचे आणि कधी थांबून संयम बाळगायचा, हे समजणे हेच २१ व्या शतकातील सर्वात मोठे जीवनकौशल्य आहे. चांगल्या गोष्टी घडण्यासाठी वेळ लागतो!'
    ],
    englishSummary: 'We do not need to reject technology, but master it by setting intentional screen boundaries, silencing study interruptions, and learning the fine art of waiting.',
    keyTakeaways: [
      'अभ्यासाच्या वेळी मोबाईल नोटिफिकेशन्स बंद ठेवल्यास एकाग्रता वाढते.',
      'तंत्रज्ञानाचा वापर गरजेनुसार करा, त्याचे गुलाम होऊ नका.',
      'चांगल्या आणि शाश्वत गोष्टींसाठी संयमाने वाट पाहायला शिका.'
    ],
    funFactOrMoral: 'काही चांगल्या गोष्टींसाठी वाट पाहणे शिकणे हेच खरे शहाणपण आहे!',
    quiz: [
      {
        id: 'q26-1',
        question: 'What is a practical action to avoid distractions while studying?',
        marathiQuestion: 'अभ्यास करताना एकाग्रता टिकवण्यासाठी कोणता व्यावहारिक उपाय सुचवला आहे?',
        options: [
          'फोनचे अनावश्यक नोटिफिकेशन्स बंद ठेवणे',
          'गाणी मोठ्या आवाजात ऐकणे',
          'एकाच वेळी पाच कामे करणे',
          'सतत चॅटिंग करणे'
        ],
        correctAnswerIndex: 0,
        explanation: 'नोटिफिकेशन्स बंद ठेवल्याने लक्ष वारंवार विचलित होत नाही.'
      },
      {
        id: 'q26-2',
        question: 'What is the most crucial skill in a hyper-fast modern world?',
        marathiQuestion: 'या वेगाने धावणाऱ्या जगात सर्वात महत्त्वाचे जीवनकौशल्य कोणते आहे?',
        options: [
          'सर्व गोष्टी घाईघाईत पूर्ण करणे',
          'कधी वेगाने चालायचे आणि कधी संयम बाळगायचा हे समजणे',
          'तंत्रज्ञान पूर्ण बंद करणे',
          'कोणावरही विश्वास न ठेवणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'गती आणि संयम यांचा समतोल साधल्यास जीवनात स्थिरता व यश मिळते.'
      }
    ]
  },

  // Page 32
  32: {
    pageNumber: 32,
    title: 'Witty Thoughts: House, Home and Humour',
    marathiTitle: 'रोचक-खोचक: घराची गम्मत व सुंदर विचार',
    section: 'रोचक-खोचक',
    categoryTag: 'रोचक-खोचक',
    quickSummary: 'Clever wordplay on house types, power cuts bringing families together without Wi-Fi, and hard work over luck.',
    marathiParagraphs: [
      'घरांची गम्मत: हौसेने बांधलेले HOUSE, होम-हवन चालते ते HOME, हवा खेळती ती HAVELI, भिंतीला कान असतात ते MAKAN, माणसांचे हाल होतात ते MAHAL, शांत झोप येते ती ZOPDI, आणि ज्या घराचे हप्ते फेडून-फेडून लोक आडवे होतात त्याला म्हणतात FLAT!',
      'लाईट गेल्यावर काय होते? वीज मंडळाचा विनोदी पण विचार करायला लावणारा संदेश: "Connecting People by Disconnecting Power!" - कारण वीज गेली आणि वायफाय बंद झाले की घरातील सर्व माणसे एकत्र बसून एकमेकांशी मनापासून बोलू लागतात.',
      'नशिबावर विश्वास ठेवण्यापेक्षा स्वतःच्या प्रामाणिक कष्टावर विश्वास ठेवा. शरीराची काळजी संपत्तीपेक्षा जास्त करा, कारण शरीर बिघडल्यावर संपत्ती कामाला येत नाही!'
    ],
    englishSummary: 'Playful humor exploring house names, the funny reality of power cuts reuniting families without Wi-Fi, and the timeless wisdom of putting health and hard work first.',
    keyTakeaways: [
      'स्क्रीन बंद झाल्यावरच घरातील खरा कौटुंबिक संवाद सुरू होतो.',
      'नशिबावर अवलंबून न राहता स्वतःच्या कष्टावर आणि मेहनतीवर विश्वास ठेवा.',
      'आरोग्य हीच माणसाची सर्वात मौल्यवान संपत्ती आहे.'
    ],
    funFactOrMoral: 'Don\'t believe in luck. Believe in Hard Work!',
    quiz: [
      {
        id: 'q32-1',
        question: 'What humorous benefit happens during a sudden home power cut?',
        marathiQuestion: 'घरातील वीज गेल्यावर (Power Cut) कुटुंबात कोणती चांगली गोष्ट घडते?',
        options: [
          'सर्वजण आपापल्या खोलीत निघून जातात',
          'वायफाय बंद झाल्यामुळे कुटुंब एकत्र बसून गप्पा मारू लागते',
          'मुले बाहेर पळून जातात',
          'कोणीही कोणाशी बोलत नाही'
        ],
        correctAnswerIndex: 1,
        explanation: 'स्क्रीन आणि वायफाय बंद पडताच संपूर्ण कुटुंब एकत्र येऊन संवाद साधते.'
      },
      {
        id: 'q32-2',
        question: 'Why should we take care of our physical health more than money?',
        marathiQuestion: 'शरीराची काळजी संपत्तीपेक्षा जास्त का घेतली पाहिजे?',
        options: [
          'कारण पैसे खर्च होतात',
          'कारण शरीर बिघडल्यानंतर संपत्तीही त्याची हिफाजत करू शकत नाही',
          'कारण डॉक्टर रागवतात',
          'कारण खेळणे बंद होते'
        ],
        correctAnswerIndex: 1,
        explanation: 'आरोग्य उत्तम असेल तरच आयुष्यातील आनंदाचा उपभोग घेता येतो.'
      }
    ]
  },

  // Page 33
  33: {
    pageNumber: 33,
    title: 'Every Problem Has a Solution',
    marathiTitle: 'प्रत्येक समस्येला उत्तर असते!',
    section: 'रोचक-खोचक',
    categoryTag: 'रोचक-खोचक',
    quickSummary: 'Mathematics teaches hope: every problem has a solution. Lord Krishna’s serenity through supreme sacrifices.',
    marathiParagraphs: [
      'गणित आपल्याला आनंद कसा जोडायचा किंवा दुःख कसे वजा करायचे हे कदाचित शिकवणार नाही; परंतु गणित जीवनाचा एक महान नियम शिकवते: "Every PROBLEM has a SOLUTION!"',
      'भगवान श्रीकृष्णांनी आयुष्यात जेवढ्या गोष्टी सोडल्या तेवढ्या इतर कोणालाही सोडाव्या लागल्या नाहीत. जन्मदाती आई-वडील, नंद-यशोदा, मित्र, राधा, गोकुळ, मथुरा - आयुष्यभर त्याग करूनही कृष्ण नेहमी स्थिर आणि आनंदी राहिले. संकटातही स्थिर राहण्याची हीच खरी शिकवण आहे.',
      'ध्येयासाठी इतके प्रामाणिक प्रयत्न करा की जगाने वेडे म्हटले तरी चालेल; कारण वेडेच लोक इतिहास घडवतात आणि शिकलेले लोक तो वाचतात!'
    ],
    englishSummary: 'Every math equation has an answer, and every life challenge has a solution. Emulate Lord Krishna’s calm acceptance and resilience in adversity.',
    keyTakeaways: [
      'जगातील प्रत्येक समस्येला उत्तर नक्की असते, फक्त शोधण्याची दृष्टी हवी.',
      'कठीण प्रसंगातही मन शांत आणि आनंदी ठेवता येते.',
      'आपल्या ध्येयावर अढळ निष्ठा ठेवून समर्पित वृत्तीने काम करा.'
    ],
    funFactOrMoral: 'Every Problem has a Solution! अडचणींना घाबरू नका, उपाय शोधा!',
    quiz: [
      {
        id: 'q33-1',
        question: 'What foundational life lesson does mathematics teach us?',
        marathiQuestion: 'गणितातून आपल्याला जीवनासाठी कोणता सर्वात मोठा धडा मिळतो?',
        options: [
          '"Every Problem has a Solution" - प्रत्येक समस्येला उत्तर नक्की असते!',
          'समस्या कधीही सुटत नाहीत',
          'केवळ मार्क मिळवणे महत्त्वाचे आहे',
          'गणित खूप कठीण असते'
        ],
        correctAnswerIndex: 0,
        explanation: 'गणिताच्या सूत्रांप्रमाणेच जीवनातील कोणत्याही समस्येवर उपाय शोधता येतो.'
      },
      {
        id: 'q33-2',
        question: 'What inspiring attitude does Lord Krishna’s life teach us?',
        marathiQuestion: 'श्रीकृष्णांच्या जीवन चरित्रातून आपण कोणता महान गुण शिकू शकतो?',
        options: [
          'संकट आले की घाबरून पळून जाणे',
          'त्याग करूनही संकटात स्थिर, शांत आणि आनंदी राहणे',
          'इतरांशी सतत भांडत राहणे',
          'स्वतःचा स्वार्थ पाहणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'अनेक गोष्टी गमावूनही कृष्ण संकटात कधीही खचले नाहीत, तर कर्तव्य पार पाडले.'
      }
    ]
  },

  // Page 34
  34: {
    pageNumber: 34,
    title: 'Never Give Up: The Power of Effort',
    marathiTitle: 'कधीही हार मानू नका',
    section: 'रोचक-खोचक',
    categoryTag: 'रोचक-खोचक',
    quickSummary: 'Lion’s 85% hunting failure rate, Michael Jordan’s 9000 missed shots, and the hammer stroke of persistence.',
    marathiParagraphs: [
      'एका सिंहाला एक शिकार मिळवण्यासाठी दररोज ७ ते १० वेळा अपयशाला सामोरे जावे लागते. म्हणजेच सिंहाचे ८० ते ८५% प्रयत्न अपयशी ठरतात. तरीही सिंह जंगलाचा राजा का असतो? कारण त्याची हार न मानण्याची दुर्दम्य क्षमता!',
      'मायकेल जॉर्डन: "मी कारकिर्दीत ९००० पेक्षा जास्त शॉट्स चुकवले, ३०० सामने हरलो, २६ वेळा विजयाचा निर्णायक शॉट माझ्यावर सोपवला आणि मी तो चुकला. मी वारंवार अयशस्वी झालो, आणि म्हणूनच मी यशस्वी झालो!"',
      'दगडावर पडलेला शेवटचा घाव दगड फोडतो; याचा अर्थ आधीचे घाव निरुपयोगी होते असा होत नाही. सातत्यपूर्ण प्रयत्न म्हणजेच अंतिम यश!'
    ],
    englishSummary: 'Lions fail in 85% of their hunts, yet never surrender. Michael Jordan missed thousands of baskets to reach basketball immortality. The final hammer blow succeeds because of all previous blows.',
    keyTakeaways: [
      '८५% अपयश पचवूनही पुन्हा प्रयत्न करणे हाच सिंहाचा राजेशाही गुण आहे.',
      'मायकेल जॉर्डनप्रमाणे अपयशातून शिकून पुन्हा प्रयत्न करा.',
      '"मी हे करू शकेन का?" ऐवजी "मी हे करून बघेन!" असा आत्मविश्वास ठेवा.'
    ],
    funFactOrMoral: 'Success is the result of continuous effort! कधीही हार मानू नका!',
    quiz: [
      {
        id: 'q34-1',
        question: 'Why does the lion remain the King of the Jungle despite an 85% failure rate in hunting?',
        marathiQuestion: '८०-८५% शिकार अयशस्वी होऊनही सिंह जंगलाचा राजा का ठरतो?',
        options: [
          'कारण तो कधीही हार मानत नाही आणि पुन्हा प्रयत्न करतो',
          'कारण तो जंगलात सर्वात मोठा प्राणी आहे',
          'कारण तो कोणालाही घाबरवत नाही',
          'कारण तो शिकार करणे सोडून देतो'
        ],
        correctAnswerIndex: 0,
        explanation: 'वारंवार अपयश आले तरी हार न मानण्याची अफाट क्षमता सिंहाला राजा बनवते.'
      },
      {
        id: 'q34-2',
        question: 'What does the metaphor of the stone-breaking hammer teach us?',
        marathiQuestion: 'हातोड्याच्या शेवटच्या घावाने दगड फुटतो, यावरून कोणता बोध मिळतो?',
        options: [
          'फक्त शेवटचा प्रयत्न कामाचा असतो',
          'आधीचे सर्व सातत्यपूर्ण प्रयत्न मिळून शेवटी यश निर्माण करतात',
          'दगड कधीच फुटत नाही',
          'प्रयत्न करणे व्यर्थ असते'
        ],
        correctAnswerIndex: 1,
        explanation: 'आधीच्या प्रत्येक प्रयत्नाने पाया रचला जातो आणि सातत्याने अंतिम यश मिळते.'
      }
    ]
  },

  // Page 35
  35: {
    pageNumber: 35,
    title: 'Learning from Mistakes and Good Habits',
    marathiTitle: 'चांगल्या गोष्टी पेराव्याच लागतात',
    section: 'रोचक-खोचक',
    categoryTag: 'रोचक-खोचक',
    quickSummary: 'Weeds grow automatically; good habits must be cultivated. We learn most from our own mistakes.',
    marathiParagraphs: [
      'वाईट गोष्टींचे गवत जमिनीत आपोआप माजते; परंतु चांगल्या गोष्टी आणि सुंदर फुले मात्र जाणीवपूर्वक पेरावीच लागतात. मनात वाईट विचार सहज येतात, पण चांगले संस्कार प्रयत्नपूर्वक रुजवावे लागतात.',
      'आपण कसे शिकतो? सिद्धांतातून (Theory) थोडे शिकतो, सरावातून (Practice) अधिक शिकतो, पण स्वतः केलेल्या चुकांमधून (Mistakes) सर्वात जास्त सखोल ज्ञान मिळते!',
      'ज्याच्याशी बोलल्याने आनंद दुप्पट आणि दुःख अर्धे होते, तोच खरा आपला सखा असतो. या दिवाळीत घरासोबतच मनातील संशय आणि पूर्वग्रहांची स्वच्छता करूया!'
    ],
    englishSummary: 'Negativity grows effortlessly like wild weeds, but virtues require intentional cultivation. Our greatest learning happens when we reflect on and correct our own mistakes.',
    keyTakeaways: [
      'चांगल्या सवयी आणि विचार जाणीवपूर्वक अंगी बाणवावे लागतात.',
      'चुका ही शिकण्याची आणि स्वतःमध्ये सुधारणा करण्याची सर्वोच्च पायरी आहे.',
      'घराच्या स्वच्छतेसोबत मनातील नकारात्मक विचारांची स्वच्छता करा.'
    ],
    funFactOrMoral: 'चुकांमधून शिकणारा माणूसच खरा ज्ञानी बनतो!',
    quiz: [
      {
        id: 'q35-1',
        question: 'According to nature, what must be done to cultivate good habits?',
        marathiQuestion: 'निसर्गाच्या नियमाप्रमाणे चांगल्या सवयी आणि विचारांबद्दल काय करावे लागते?',
        options: [
          'त्या आपोआप वाढतात',
          'वाईट गोष्टी आपोआप वाढतात, पण चांगल्या गोष्टींची जाणीवपूर्वक पेरणी करावी लागते',
          'चांगल्या गोष्टींची गरज नसते',
          'काहीही न करता शांत बसावे'
        ],
        correctAnswerIndex: 1,
        explanation: 'जमिनीतील गवताप्रमाणे वाईट विचार सहज येतात, चांगले विचार कष्टाने जोपासावे लागतात.'
      },
      {
        id: 'q35-2',
        question: 'From what do human beings learn the deepest wisdom?',
        marathiQuestion: 'ज्ञान संपादनाच्या स्तंभांनुसार आपण सर्वात जास्त शिकवण कशातून घेतो?',
        options: [
          'केवळ पुस्तकी सिद्धांतातून (Theory)',
          'स्वतः केलेल्या चुका आणि त्यांच्या निरीक्षणातून (Mistakes)',
          'फक्त दुसऱ्यांवर अवलंबून राहून',
          'कामे करणे टाळून'
        ],
        correctAnswerIndex: 1,
        explanation: 'आपल्या चुकांमधून शिकल्याने खरी प्रगती आणि शहाणपण प्राप्त होते.'
      }
    ]
  },

  // Page 57
  57: {
    pageNumber: 57,
    title: 'Real Heroes: Captain Smit Machhar',
    marathiTitle: 'कॅप्टन स्मित मच्छार : संकटातही न डगमगणारे धैर्य',
    section: 'रियल हिरोज',
    categoryTag: 'रियल हिरोज',
    quickSummary: 'True story of Captain Smit Machhar who remained calm despite severe injuries in a cockpit emergency and saved hundreds of lives.',
    image: {
      src: '/images/articles/p57_captain_smit_machhar.png',
      alt: 'Captain Smit Machhar & flight FZ1073',
      caption: 'कॅप्टन स्मित मच्छार : संकटातही न डगमगणारे धैर्य आणि विमानाचे सुरक्षित लँडिंग (Captain Smit Machhar & FZ1073)'
    },
    marathiParagraphs: [
      '३० सप्टेंबर २०२६ रोजी flydubai च्या FZ1073 या विमानात हवेत हजारो फूट उंचावर असताना अचानक भयानक संकट निर्माण झाले. कॉकपिटमध्ये झालेल्या हल्ल्यात भारतीय कॅप्टन स्मित मच्छार गंभीर जखमी झाले.',
      'अत्यंत धोकादायक परिस्थितीत विमानाची उंची झपाट्याने कमी होत असतानाही कॅप्टन मच्छार यांनी धीर सोडला नाही. जखमी अवस्थेतही त्यांनी विमानाचे नियंत्रण सांभाळले आणि सहकाऱ्यांच्या मदतीने विमानाला सौदी अरेबियातील तबूक येथे सुरक्षित उतरवून शेकडो प्रवाशांचे प्राण वाचवले.',
      'कॅप्टन स्मित मच्छार यांची ही शौर्यगाथा सांगते की, खरे धैर्य म्हणजे भीती नसणे नव्हे; तर संकट समोर असतानाही शांत राहून योग्य कृती करण्याची क्षमता होय!'
    ],
    englishSummary: 'During an unexpected in-flight emergency, seriously wounded Captain Smit Machhar kept his focus, navigated the aircraft safely, and executed an emergency landing in Saudi Arabia, rescuing hundreds.',
    keyTakeaways: [
      'खरे शौर्य म्हणजे संकट समोर असतानाही शांत राहून योग्य कृती करणे.',
      'कठीण प्रसंगी आपले प्रशिक्षण, शिस्त आणि आत्मविश्वास कामी येतो.',
      'स्वतःच्या वेदना बाजूला ठेवून इतरांच्या सुरक्षेसाठी लढणे हाच खरा पराक्रम!'
    ],
    funFactOrMoral: 'खरे धैर्य म्हणजे भीती नसणे नव्हे, तर संकटात योग्य कृती करण्याची क्षमता!',
    quiz: [
      {
        id: 'q57-1',
        question: 'How did injured Captain Smit Machhar save hundreds of passengers on flight FZ1073?',
        marathiQuestion: 'कॅप्टन स्मित मच्छार यांनी जखमी असतानाही प्रवाशांचे प्राण कसे वाचवले?',
        options: [
          'विमानातून उडी मारून',
          'शांत राहून विमानाचे नियंत्रण सांभाळले आणि सुरक्षित आपत्कालीन लँडिंग केले',
          'घाबरून रडत बसून',
          'प्रवाशांवर ओरडून'
        ],
        correctAnswerIndex: 1,
        explanation: 'त्यांनी अत्यंत शांततेने आणि कौशल्याने परिस्थिती हाताळत सौदी अरेबियात सुरक्षित लँडिंग केले.'
      },
      {
        id: 'q57-2',
        question: 'What is the true definition of bravery demonstrated by Captain Machhar?',
        marathiQuestion: 'कॅप्टन मच्छार यांच्या कहाणीतून खऱ्या धैर्याची (Courage) कोणती व्याख्या समजते?',
        options: [
          'कधीही भीती न वाटणे',
          'भीती वाटत असतानाही संकटाच्या क्षणी शांतपणे योग्य कृती करणे',
          'संकट पाहून पळून जाणे',
          'केवळ परीक्षेत चांगले मार्क मिळवणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'संकट समोर उभे ठाकले तरी शांत राहून योग्य निर्णय घेणे हेच खरे धैर्य असते.'
      }
    ]
  },

  // Page 58
  58: {
    pageNumber: 58,
    title: 'Real Heroes: IPS Sharan Kamble',
    marathiTitle: 'कंदिलाच्या प्रकाशातून IPS अधिकारी होण्याचा प्रवास',
    section: 'रियल हिरोज',
    categoryTag: 'रियल हिरोज',
    quickSummary: 'From studying under a kerosene lamp in Tadwale village to becoming an IPS officer through sheer determination.',
    image: {
      src: '/images/articles/p58_ips_sharan_kamble.png',
      alt: 'IPS Sharan Kamble & his hardworking parents',
      caption: 'कंदिलाच्या प्रकाशातून IPS अधिकारी होण्याचा शरण कांबळे यांचा प्रेरणादायी प्रवास (IPS Sharan Kamble)'
    },
    marathiParagraphs: [
      'सोलापूर जिल्ह्यातील तडवळे या लहानशा खेड्यात जन्मलेले शरण कांबळे यांची ही अद्भूत प्रेरणादायी कहाणी आहे. त्यांचे आई-वडील रोजंदारीवर काम करून व भाजीपाला विकून संसाराचा गाडा हाकत असत.',
      'घरात विजेची सोय नसल्यामुळे शरण कांबळे रात्री रॉकेलच्या कंदिलाच्या प्रकाशात अभ्यास करत. अकरावी-बारावीसाठी दररोज सुमारे १२ किलोमीटर पायी चालत शाळेत जावे लागायचे. परंतु त्यांनी कधीही परिस्थितीला दोष दिला नाही.',
      'जिद्द, कठोर परिश्रम आणि अढळ ध्येयामुळे त्यांनी केंद्रीय लोकसेवा आयोगाची (UPSC) परीक्षा उत्तीर्ण करून भारतीय पोलीस सेवेत (IPS) अधिकारी होण्याचे स्वप्न साकार केले!'
    ],
    englishSummary: 'Raised in humble poverty in Tadwale village, walking 12 km daily and studying by the soft glow of a kerosene lamp, Sharan Kamble cracked the prestigious UPSC exams to become an IPS officer.',
    keyTakeaways: [
      'प्रतिकूल परिस्थिती कधीही स्वप्नांच्या आड येत नाही.',
      'परिस्थितीला दोष देण्याऐवजी उपलब्ध साधनांचा पुरेपूर वापर करा.',
      'कठोर परिश्रम आणि प्रामाणिकपणा माणसाला सर्वोच्च शिखरावर पोहोचवतात.'
    ],
    funFactOrMoral: 'मनातील ध्येयाचा प्रकाश कंदिलाच्या प्रकाशापेक्षा कितीतरी पटीने तेजस्वी असतो!',
    quiz: [
      {
        id: 'q58-1',
        question: 'Under what light did IPS Sharan Kamble study as a child with no home electricity?',
        marathiQuestion: 'घरात वीज नसताना शरण कांबळे यांनी लहानपणी कशाच्या प्रकाशात अभ्यास केला?',
        options: [
          'मोबाईल टॉर्चच्या प्रकाशात',
          'रॉकेलच्या कंदिलाच्या प्रकाशात',
          'रस्त्यावरील विजेच्या दिव्याखाली',
          'मेणबत्तीच्या प्रकाशात'
        ],
        correctAnswerIndex: 1,
        explanation: 'घरात वीज नसल्यामुळे त्यांनी कंदिलाच्या प्रकाशात रात्री अभ्यास करून यश मिळवले.'
      },
      {
        id: 'q58-2',
        question: 'How far did Sharan Kamble walk on foot daily for higher secondary schooling?',
        marathiQuestion: 'अकरावी आणि बारावीच्या शिक्षणासाठी शरण कांबळे दररोज किती अंतर पायी चालत जात असत?',
        options: [
          'सुमारे २ किलोमीटर',
          'सुमारे १२ किलोमीटर पायी प्रवास',
          'फक्त ५०० मीटर',
          'ते चालत जात नव्हते'
        ],
        correctAnswerIndex: 1,
        explanation: 'दररोज सुमारे १२ किमी पायी चालून त्यांनी आपल्या शिक्षणाची आवड जिवंत ठेवली.'
      }
    ]
  },

  // Page 59
  59: {
    pageNumber: 59,
    title: 'Real Heroes: Sushmita Krishnan Eco-Paper',
    marathiTitle: 'तलावातील तणापासून कागदनिर्मिती : सुष्मिता कृष्णन',
    section: 'रियल हिरोज',
    categoryTag: 'रियल हिरोज',
    quickSummary: 'Ecologist Sushmita Krishnan innovated a green process to convert lake-choking water hyacinth into handmade paper.',
    image: {
      src: '/images/articles/p59_sushmita_krishnan.png',
      alt: 'Sushmita Krishnan & eco-friendly paper from water hyacinth',
      caption: 'सुष्मिता कृष्णन : तलावातील जलपर्णी तणापासून हस्तनिर्मित पर्यावरणपूरक कागद (Sushmita Krishnan Eco-Paper)'
    },
    marathiParagraphs: [
      'तलावातील जलपर्णी ही वनस्पती सूर्यप्रकाश आणि ऑक्सिजन रोखून जलचरांना धोका निर्माण करते. त्रिची, तामिळनाडू येथील २५ वर्षीय पर्यावरण शास्त्रज्ञ सुष्मिता कृष्णन यांनी या समस्येकडे वेगळ्या दृष्टीने पाहिले.',
      'जलपर्णी कचरा मानण्याऐवजी त्यांनी त्यापासून हस्तनिर्मित पर्यावरणपूरक कागद तयार करण्याचा यशस्वी प्रयोग केला. लाकडाच्या लगद्यासाठी ६०% सोडा लागतो, तर जलपर्णीसाठी फक्त ६% सोड्याची गरज असते!',
      '१ किलो जलपर्णीपासून ३० ए-४ आकाराचे कागद तयार होतात, ज्याचा खर्च केवळ २ रुपये येतो. जगाला जी समस्या वाटते, त्यात नाविन्यपूर्ण दृष्टीने मोठी संधी शोधता येते हेच सुष्मिता यांनी दाखवून दिले.'
    ],
    englishSummary: 'Water hyacinth weed chokes waterways. 25-year-old ecologist Sushmita Krishnan devised an innovative eco-paper manufacturing method using 90% fewer chemicals than traditional wood pulp.',
    keyTakeaways: [
      'समस्येकडे कल्पकतेने पाहिल्यास त्यातून पर्यावरणासाठी सुवर्णसंधी शोधता येते.',
      'जलपर्णी कागदामुळे झाडे तोडणे टळते आणि रसायनांचा वापर ९०% कमी होतो.',
      '१ किलो तणापासून ३० दर्जेदार ए-४ कागद तयार करता येतात.'
    ],
    funFactOrMoral: 'ज्याला जग समस्या मानते, त्यातच एका मोठ्या संधीची सुरुवात दडलेली असू शकते!',
    quiz: [
      {
        id: 'q59-1',
        question: 'What eco-friendly product did Sushmita Krishnan create from invasive water hyacinth?',
        marathiQuestion: 'सुष्मिता कृष्णन यांनी तलावातील जलपर्णी या तणापासून कोणती पर्यावरणपूरक वस्तू तयार केली?',
        options: [
          'प्लास्टिकच्या बाटल्या',
          'हस्तनिर्मित पर्यावरणपूरक कागद (Eco-friendly paper)',
          'रासायनिक खते',
          'काचेच्या वस्तू'
        ],
        correctAnswerIndex: 1,
        explanation: 'त्यांनी जलपर्णीच्या लगद्यावर प्रक्रिया करून सुंदर आणि मजबूत कागद तयार केला.'
      },
      {
        id: 'q59-2',
        question: 'What is a major green advantage of water hyacinth paper over traditional wood paper?',
        marathiQuestion: 'लाकडाच्या तुलनेत जलपर्णीपासून कागद बनवण्याचा कोणता मोठा पर्यावरणीय फायदा आहे?',
        options: [
          'झाडे तोडावी लागत नाहीत आणि रासायनिक सोड्याचा वापर ६०% वरून फक्त ६% लागतो',
          'कागद काळा होतो',
          'तो पाण्यात विरघळतो',
          'त्याची किंमत खूप महाग असते'
        ],
        correctAnswerIndex: 0,
        explanation: 'केवळ ६% सोडा लागत असल्याने प्रदूषण कमी होते आणि वृक्षतोड थांबते.'
      }
    ]
  },

  // Page 60
  60: {
    pageNumber: 60,
    title: 'Real Heroes: Sarvesh Sharma Drone Innovation',
    marathiTitle: 'सर्वेशची ड्रोनभरारी',
    section: 'रियल हिरोज',
    categoryTag: 'रियल हिरोज',
    quickSummary: 'Polytechnic student Sarvesh Sharma engineered defense surveillance drones for the Indian Army, securing a ₹3.5 crore grant.',
    image: {
      src: '/images/articles/p60_sarvesh_sharma.png',
      alt: 'Sarvesh Sharma & the Rudra Edge defense drone',
      caption: 'सर्वेश शर्मा : भारतीय सैन्यासाठी पुठ्ठ्यापासून बनवलेला "रुद्र एज टी-१" ड्रोन (Sarvesh Sharma & Rudra Drone)'
    },
    marathiParagraphs: [
      'हिमाचल प्रदेशातील सर्वेश शर्मा या विद्यार्थ्याने आपल्या कल्पकतेच्या जोरावर संरक्षण क्षेत्रात भारताचे नाव उज्ज्वल केले आहे. सर्वेशचे वडील रोजंदारीवर काम करतात व आई गृहिणी आहे.',
      'हमीरपूर पॉलिटेक्निकमध्ये शिकताना त्याने पुठ्ठ्यापासून (Cardboard) बनवलेल्या ड्रोनच्या साहाय्याने आयआयटी जोधपूरच्या स्पर्धेत १० लाख रुपयांचे पारितोषिक जिंकले.',
      'त्याने भारतीय सैन्यासाठी डोंगराळ भागात टेहळणी करणारा "रुद्र एज टी-१ (स्पेक्ट्रा)" हा रडार-प्रतिरोधक ड्रोन विकसित केला. त्याच्या या प्रकल्पाला केंद्र सरकारच्या "iDEX" उपक्रमांतर्गत तब्बल ३.५ कोटी रुपयांचे अर्थसहाय्य मंजूर झाले!'
    ],
    englishSummary: 'Rising from humble beginnings in Himachal, diploma student Sarvesh Sharma created cardboard prototype drones, winning national accolades and developing military-grade tech for national security.',
    keyTakeaways: [
      'मोठ्या यशासाठी श्रीमंती नव्हे, तर कल्पकता आणि चिकाटी लागते.',
      'आपल्या तांत्रिक ज्ञानाचा उपयोग देशाच्या संरक्षणासाठी करा.',
      'आज मनात निर्माण झालेली छोटीशी कल्पना उद्या देशासाठी मोठे योगदान ठरू शकते.'
    ],
    funFactOrMoral: 'अपयश आले तरी प्रयत्न सुरू ठेवा; कल्पकता जगाला नवी दिशा देते!',
    quiz: [
      {
        id: 'q60-1',
        question: 'Which surveillance drone was designed by Sarvesh Sharma for the Indian Army?',
        marathiQuestion: 'सर्वेश शर्मा यांनी भारतीय सैन्याच्या टेहळणीसाठी कोणता प्रगत ड्रोन विकसित केला?',
        options: [
          'रुद्र एज टी-१ (स्पेक्ट्रा) / Rudra Edge T-1',
          'आकाश बाण',
          'गरुड एक्स',
          'अग्नी विंग्ज'
        ],
        correctAnswerIndex: 0,
        explanation: 'रुद्र एज टी-१ हा डोंगराळ सीमावर्ती भागात टेहळणीसाठी सैन्यदलाला मदत करतो.'
      },
      {
        id: 'q60-2',
        question: 'Under which initiative was Sarvesh’s drone project awarded a ₹3.5 crore grant?',
        marathiQuestion: 'सर्वेशच्या नाविन्यपूर्ण प्रकल्पाला कोणत्या संरक्षण उपक्रमांतर्गत ३.५ कोटींचे अर्थसहाय्य मिळाले?',
        options: [
          'iDEX (Innovations for Defence Excellence)',
          'केवळ आंतरशालेय स्पर्धा',
          'विदेशी संस्था',
          'स्थानिक बँक'
        ],
        correctAnswerIndex: 0,
        explanation: 'केंद्र सरकारच्या iDEX उपक्रमातून संरक्षण क्षेत्रातील नवकल्पनेला बळ मिळाले.'
      }
    ]
  },

  // Page 61
  61: {
    pageNumber: 61,
    title: 'Spirituality: Samudra Manthan Lessons',
    marathiTitle: 'समुद्रमंथन : नवनिर्माणाची सुरुवात मंथनातूनच होते',
    section: 'अध्यात्म',
    categoryTag: 'अध्यात्म',
    quickSummary: 'Life lessons from the mythological Samudra Manthan: poison precedes nectar, and struggle precedes true mastery.',
    image: {
      src: '/images/articles/p61_samudra_manthan.png',
      alt: 'Youth collaboration & Samudra Manthan lessons',
      caption: 'समुद्रमंथन : नवनिर्माणाची सुरुवात मंथनातूनच होते - युवा पिढीचे विचार मंथन (Samudra Manthan Youth Dialogue)'
    },
    marathiParagraphs: [
      'पुराणातील समुद्रमंथनाच्या कथेत देव आणि दानवांनी अमृतासाठी समुद्र घुसळला. परंतु मंथन सुरू झाल्यावर सर्वात आधी अमृत बाहेर आले नाही, तर अत्यंत दाहक हलाहल विष बाहेर आले. भगवान शंकरांनी ते विष कंठात धारण केले आणि त्यानंतरच १४ अमूल्य रत्ने व शेवटी अमृत प्राप्त झाले.',
      'या कथेचा आपल्या दैनंदिन जीवनाशी थेट संबंध आहे. नवनिर्माणाच्या किंवा शिक्षणाच्या प्रक्रियेत सुरुवातीलाच सुंदर निकाल मिळत नाहीत; आधी चुका, अडचणी, संघर्ष आणि अपयशाचे विष पचवावे लागते.',
      'नवीन व्यवसाय, नवीन कला किंवा अभ्यास सुरू करताना अडचणी आल्या की घाबरू नका; कारण ते अमृत मिळण्याआधीचे आवश्यक मंथन असते!'
    ],
    englishSummary: 'Before the elixir of immortality (Amrit) surfaced from the churned ocean, deadly poison (Halahal) emerged first. True growth demands facing initial struggles before tasting victory.',
    keyTakeaways: [
      'यशाच्या अमृताआधी संघर्षाचे हलाहल विष धैर्याने पचवावे लागते.',
      'नव्या गोष्टी शिकताना होणाऱ्या सुरुवातीच्या चुकांना घाबरू नका.',
      'सातत्यपूर्ण मंथनातूनच सुंदर रत्ने आणि ज्ञान बाहेर येते.'
    ],
    funFactOrMoral: 'नवनिर्माणाची खरी सुरुवात मंथनातूनच होते!',
    quiz: [
      {
        id: 'q61-1',
        question: 'What emerged first from the churning of the ocean before the sweet nectar (Amrit)?',
        marathiQuestion: 'समुद्रमंथनात अमृताच्या आधी सर्वात प्रथम काय बाहेर आले होते?',
        options: [
          'हलाहल विष (Deadly poison)',
          'सुवर्ण रत्ने',
          'पारिजात वृक्ष',
          'अमृत कलश'
        ],
        correctAnswerIndex: 0,
        explanation: 'सुरुवातीला हलाहल विष निघाले जे विश्वाच्या कल्याणासाठी भगवान शंकरांनी कंठात धारण केले.'
      },
      {
        id: 'q61-2',
        question: 'What vital lesson does this story teach students embarking on a new skill or goal?',
        marathiQuestion: 'समुद्रमंथनाच्या कथेवरून आजच्या विद्यार्थ्यांना कोणती शिकवण मिळते?',
        options: [
          'कामे करणे थांबवावे',
          'यशाच्या आधी सुरुवातीला येणाऱ्या अडचणी व संघर्ष धैर्याने पचवून पुढे जावे',
          'संकट आले की पळून जावे',
          'चुका कधीही मान्य करू नयेत'
        ],
        correctAnswerIndex: 1,
        explanation: 'कोणत्याही नवीन निर्मितीत सुरुवातीला संघर्ष येतोच, त्यावर मात केल्यावरच यश मिळते.'
      }
    ]
  },

  // Page 62
  62: {
    pageNumber: 62,
    title: 'Embracing Mistakes and Inner Growth',
    marathiTitle: 'स्वतःला चांगला माणूस बनवणे',
    section: 'अध्यात्म',
    categoryTag: 'अध्यात्म',
    quickSummary: 'Inner churning: shedding arrogance, admitting errors honestly, and evolving into a compassionate person.',
    image: {
      src: '/images/articles/p62_inner_manthan.png',
      alt: 'Inner reflection, overcoming ego, and self-transformation',
      caption: 'अंतर्मनाचे मंथन : स्वतःला एक चांगला, प्रामाणिक व संवेदनशील माणूस बनवणे (Inner Manthan & Mindfulness)'
    },
    marathiParagraphs: [
      'आजच्या युगातील सर्वात मोठी समस्या अशी आहे की आपल्याला अमृत हवे असते, पण मंथन नको असते! आपल्याला यश हवे असते, पण चुका किंवा अपयश स्वीकारण्याची तयारी नसते.',
      'मंथन म्हणजे केवळ विचार करणे नव्हे, तर स्वतःच्या चुका मान्य करणे, "मला सगळे येते" हा अहंकार सोडणे, आणि इतरांकडून नम्रपणे शिकणे होय.',
      'आपल्या आयुष्यातील सर्वात मोठी आणि सुंदर निर्मिती कोणती? जगासाठी काय मिळवले यापेक्षा या मंथनातून आपण स्वतःला किती चांगला, प्रामाणिक आणि संवेदनशील माणूस बनवले, हे सर्वात महत्त्वाचे आहे.'
    ],
    englishSummary: 'True innovation begins inside: daring to admit our mistakes, letting go of the illusion that we know everything, and shaping ourselves into humble, loving beings.',
    keyTakeaways: [
      'स्वतःच्या चुका प्रामाणिकपणे मान्य करायला शिका.',
      'अहंकार, मत्सर आणि राग या मनातील विषावर मात करा.',
      'आयुष्यातील सर्वात सुंदर निर्मिती म्हणजे स्वतःला एक चांगला माणूस बनवणे.'
    ],
    funFactOrMoral: 'स्वतःला जिंकणे हा जगातील सर्व विजयांपेक्षा श्रेष्ठ विजय आहे!',
    quiz: [
      {
        id: 'q62-1',
        question: 'What is our internal mental "poison" that must be acknowledged and cleansed?',
        marathiQuestion: 'आपल्या अंतर्मनातील "विष" कोणते असू शकते ज्यावर मात करायची असते?',
        options: [
          'अहंकार, भीती, आळस, मत्सर आणि राग',
          'खूप जास्त अभ्यास',
          'खेळणे आणि बागडणे',
          'चांगले मित्र'
        ],
        correctAnswerIndex: 0,
        explanation: 'अहंकार आणि राग हे मनातील विष असून त्यांच्यावर मात करूनच शांती मिळते.'
      },
      {
        id: 'q62-2',
        question: 'What is considered the most magnificent creation in human life?',
        marathiQuestion: 'मानवी जीवनातील सर्वात सुंदर नवनिर्मिती कोणती मानली पाहिजे?',
        options: [
          'केवळ प्रचंड संपत्ती गोळा करणे',
          'स्वतःला एक संवेदनशील, प्रामाणिक आणि चांगला माणूस बनवणे',
          'इतरांवर हुकूम चालवणे',
          'सतत जाहिराती करणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'आपल्या व्यक्तिमत्त्वाला सुसंस्कृत आणि परोपकारी बनवणे हीच खरी श्रेष्ठता आहे.'
      }
    ]
  },

  // Page 63
  63: {
    pageNumber: 63,
    title: 'Modern Kurukshetra of Relationships',
    marathiTitle: 'कलियुगातील कुरुक्षेत्रावर',
    section: 'अध्यात्म',
    categoryTag: 'अध्यात्म',
    quickSummary: 'The daily battlefield in our minds: ego vs love, convenience vs truth, and testing genuine bonds in hard times.',
    image: {
      src: '/images/articles/p63_kurukshetra_chariot.png',
      alt: 'Kurukshetra chariot and war illustration',
      caption: 'कलियुगातील कुरुक्षेत्र : विचारांचे आणि नात्यांचे अंतर्गत युद्ध (Modern Kurukshetra of the Mind)'
    },
    marathiParagraphs: [
      'महाभारत संपले, युद्धाचा कोलाहल शांत झाला. परंतु एक अस्वस्थ करणारा प्रश्न उरला: "या महासंहारात नेमके जिंकले कोण?" कारण विजयाची किंमत जर स्वतःचीच माणसे, बंधू, आणि मनाची कायमची शांतता गमावणे असेल, तर त्याला विजय म्हणायचे का?',
      'आज आपल्या हातात तलवारी किंवा धनुष्यबाण नाहीत; पण शब्दांचे टोकदार बाण, संशयाचे ढग, आणि अहंकाराच्या भिंती नक्कीच आहेत. आजचे कुरुक्षेत्र हे घराच्या चार भिंतींत आणि माणसाच्या मनात रोज लढले जाते.',
      'नात्यांची खरी परीक्षा सुखाच्या दिवसांत नव्हे, तर संकटाच्या काळात होते. नात्यात विश्वास, त्याग, आणि आदर असणे अत्यंत आवश्यक आहे.'
    ],
    englishSummary: 'The real Kurukshetra is fought daily inside human hearts between bitter ego and gracious love. Relationships are forged in sacrifice and tested in hardship.',
    keyTakeaways: [
      'आजचे कुरुक्षेत्र हे माणसाच्या मनात आणि नात्यांमधील वादात लढले जाते.',
      'नात्यांची खरी परीक्षा संकटाच्या आणि कठीण काळात विश्वासाने होते.',
      'शब्दांचे बाण वापरण्यापूर्वी विचार करा, कारण बोललेले शब्द परत घेता येत नाहीत.'
    ],
    funFactOrMoral: 'नाते रक्ताने तयार होऊ शकते, पण ते टिकवण्यासाठी विश्वास आणि त्याग लागतो!',
    quiz: [
      {
        id: 'q63-1',
        question: 'Where is the modern Kurukshetra battle fought every single day?',
        marathiQuestion: 'आजच्या कलियुगात कुरुक्षेत्राचे युद्ध प्रामुख्याने कोठे लढले जाते?',
        options: [
          'डोंगराळ भागात',
          'माणसाच्या अंतर्मनात आणि घराच्या चार भिंतींत (विचारांच्या संघर्षात)',
          'केवळ कोर्टामध्ये',
          'जंगलात'
        ],
        correctAnswerIndex: 1,
        explanation: 'अहंकार, स्वार्थ आणि प्रेमाचा संघर्ष आपल्या मनात रोज चालू असतो.'
      },
      {
        id: 'q63-2',
        question: 'When is the true strength of any relationship tested?',
        marathiQuestion: 'नात्यांची खरी परीक्षा कोणत्या काळात होते?',
        options: [
          'केवळ सुखाच्या आणि आनंदाच्या दिवसांत',
          'संकटाच्या आणि कठीण परिस्थितीत',
          'सणासुदीच्या दिवशी',
          'पार्टी करताना'
        ],
        correctAnswerIndex: 1,
        explanation: 'संकटात एकमेकांची सोबत देणे हीच नात्याची खरी ताकद दर्शवते.'
      }
    ]
  },

  // Page 64
  64: {
    pageNumber: 64,
    title: 'Winning People Over Winning Arguments',
    marathiTitle: 'नातं महत्त्वाचं की वाद?',
    section: 'अध्यात्म',
    categoryTag: 'अध्यात्म',
    quickSummary: 'True victory lies in letting go of a little ego to save a relationship and cherish human hearts.',
    marathiParagraphs: [
      'कोणतेही मोठे युद्ध अचानक पेटत नाही. ते लहान-सहान गैरसमज आणि दुखवलेल्या भावनांकडे दुर्लक्ष केल्याने तयार होते. मनात साठलेला राग संवादातून वेळेवर व्यक्त केला पाहिजे.',
      'धृतराष्ट्राचा पुत्रमोह अन्यायाला जन्म देतो, तर भीष्माची आंधळी प्रतिज्ञा अधर्माला बळ देते. यातून शिकायचे की, जर एखादी जुनी समजूत नात्यात अन्याय करत असेल तर पुनर्विचार करण्याचे धैर्य दाखवले पाहिजे.',
      'प्रत्येक वादाच्या वेळी स्वतःच्या अहंकाराला बाजूला सारून एकच प्रश्न विचारा: "मला हा युक्तिवाद जिंकायचा आहे की समोरचा माणूस जपायचा आहे?" स्वतःचा थोडासा अहंकार हरवून जर एखादे नाते टिकत असेल, तर तोच मानवी जीवनातील खरा विजय होय!'
    ],
    englishSummary: 'Arguments are cheap; human souls and precious bonds are irreplaceable. Swallowing our pride to preserve a friendship or family bond is life’s highest triumph.',
    keyTakeaways: [
      '"मला वाद जिंकायचा आहे की समोरचा माणूस जपायचा आहे?" हा प्रश्न विचारा.',
      'थोडासा अहंकार बाजूला ठेवून नाते वाचवणे हा जीवनातील खरा विजय आहे.',
      'मनात कटुता साठवून ठेवण्याऐवजी मनमोकळा आणि प्रेमळ संवाद साधा.'
    ],
    funFactOrMoral: 'स्वतःचा थोडासा अहंकार हरवून जर नाते वाचत असेल, तर तोच खरा विजय!',
    quiz: [
      {
        id: 'q64-1',
        question: 'During any heated dispute, what golden question should we ask our own ego?',
        marathiQuestion: 'कोणत्याही वादाच्या प्रसंगी स्वतःच्या अहंकाराला बाजूला सारून कोणता प्रश्न विचारावा?',
        options: [
          '"मी समोरच्याला कसे हरवू?"',
          '"मला हा युक्तिवाद जिंकायचा आहे की समोरचा माणूस जपायचा आहे?"',
          '"मी आवाज कसा मोठा करू?"',
          '"मी सूड कसा घेऊ?"'
        ],
        correctAnswerIndex: 1,
        explanation: 'नातं आणि माणूस जपणे हे क्षुल्लक युक्तिवाद जिंकण्यापेक्षा हजार पटीने श्रेष्ठ आहे.'
      },
      {
        id: 'q64-2',
        question: 'What is the greatest and most authentic victory in human relationships?',
        marathiQuestion: 'मानवी जीवनातील सर्वात मोठा आणि खरा विजय कोणता मानला आहे?',
        options: [
          'प्रत्येक वादात स्वतःचेच खरे करणे',
          'स्वतःचा थोडासा अहंकार हरवून एखादे नाते आणि माणूस वाचवणे',
          'इतरांचा अपमान करणे',
          'संवाद कायमचा तोडणे'
        ],
        correctAnswerIndex: 1,
        explanation: 'अहंकारावर मात करून प्रेम आणि नाते जपणे हाच जीवनाचा खरा विजय आहे.'
      }
    ]
  }
};

/**
 * Helper function to retrieve rich article page details with safe fallback.
 */
export function getArticlePageData(pageNumber: number): ArticlePageData {
  if (ARTICLE_PAGES_CONTENT[pageNumber]) {
    return ARTICLE_PAGES_CONTENT[pageNumber];
  }

  // Safe fallback if an unexpected page number is passed
  return {
    pageNumber,
    title: `Page ${pageNumber} Learning & Story`,
    marathiTitle: `पान क्रमांक ${pageNumber}: ज्ञान आणि संस्कार`,
    section: 'ज्ञानदर्शन',
    categoryTag: 'ज्ञानदर्शन',
    quickSummary: 'Educational insights, values, and interactive knowledge for young minds.',
    marathiParagraphs: [
      `या पानावरील ज्ञान आणि जीवनकौशल्ये मुलांच्या व्यक्तिमत्त्व विकासासाठी अत्यंत मार्गदर्शक आहेत.`,
      `शिक्षणासोबतच चांगले संस्कार, शिस्त, आणि स्वावलंबन जोपासणे हा या पाठाचा मुख्य उद्देश आहे.`
    ],
    englishSummary: `Reflect on the inspirational lesson of Page ${pageNumber} to build strong character, wisdom, and helpful habits.`,
    keyTakeaways: [
      'नियमित वाचनाने ज्ञानाची कक्षा रुंदावते.',
      'चांगल्या सवयी आणि सकारात्मक विचार आत्मसात करा.',
      'आपल्या ज्ञानाचा उपयोग इतरांना मदत करण्यासाठी करा.'
    ],
    funFactOrMoral: 'ज्ञान हीच खरी शक्ती आहे!',
    quiz: [
      {
        id: `q-fallback-${pageNumber}-1`,
        question: 'What is the primary foundation of lifelong learning?',
        marathiQuestion: 'आयुष्यभर शिकत राहण्यासाठी कशाची सर्वात जास्त गरज असते?',
        options: [
          'जिज्ञासा आणि प्रामाणिक प्रयत्न',
          'केवळ परीक्षेची भीती',
          'अभ्यास न करता वेळ घालवणे',
          'केवळ घोकंपट्टी'
        ],
        correctAnswerIndex: 0,
        explanation: 'जिज्ञासा आणि निरंतर प्रयत्न हीच प्रगतीची गुरुकिल्ली आहे.'
      },
      {
        id: `q-fallback-${pageNumber}-2`,
        question: 'How should we utilize our knowledge?',
        marathiQuestion: 'आपल्या ज्ञानाचा खरा उपयोग कसा करावा?',
        options: [
          'स्वतःच्या अहंकारासाठी',
          'समाजाची सेवा आणि इतरांच्या भल्यासाठी',
          'इतरांना त्रास देण्यासाठी',
          'ज्ञान लपवून ठेवण्यासाठी'
        ],
        correctAnswerIndex: 1,
        explanation: 'ज्ञानाचा उपयोग इतरांना मदत करण्यासाठी केल्याने जीवनाला खरा अर्थ मिळतो.'
      }
    ]
  };
}

