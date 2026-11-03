import React from 'react';
import { WorksheetFrame } from './WorksheetFrame';
import { PageEntry } from '../data/allPagesData';
import { getArticlePageData } from '../data/articlePagesContent';
import { 
  BookOpen, Sparkles, CheckCircle2, XCircle, 
  HelpCircle, Award, Compass, Heart, Lightbulb, Check, RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  pageEntry: PageEntry;
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
  onComplete?: () => void;
  onReset?: () => void;
}

export const ArticlePageViewer: React.FC<Props> = ({
  pageEntry,
  data,
  onUpdate,
  isCompleted,
  onComplete,
  onReset
}) => {
  const article = getArticlePageData(pageEntry.pageNumber);
  const reaction = data.reaction || '';
  const note = data.note || '';
  const quizAnswers: Record<string, number> = data.quizAnswers || {};

  const handleReaction = (rec: string) => {
    onUpdate('reaction', rec);
  };

  const handleSelectOption = (questionId: string, optionIndex: number, correctIndex: number) => {
    const updatedAnswers = {
      ...quizAnswers,
      [questionId]: optionIndex
    };
    onUpdate('quizAnswers', updatedAnswers);

    // If correct option selected
    if (optionIndex === correctIndex) {
      // Check if all questions are answered correctly
      const allCorrect = article.quiz.every(q => {
        if (q.id === questionId) return true;
        return updatedAnswers[q.id] === q.correctAnswerIndex;
      });

      if (allCorrect) {
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {
          // ignore in environments without canvas
        }
        if (onComplete && !isCompleted) {
          onComplete();
        }
      }
    }
  };

  const totalQuestions = article.quiz.length;
  const correctCount = article.quiz.filter(q => quizAnswers[q.id] === q.correctAnswerIndex).length;
  const isQuizFinished = totalQuestions > 0 && correctCount === totalQuestions;

  const audioPrompt = `${article.marathiTitle}. ${article.quickSummary} ${article.englishSummary}`;

  return (
    <WorksheetFrame
      pageNumber={pageEntry.pageNumber}
      categoryTag={article.categoryTag || pageEntry.section}
      audioPromptText={audioPrompt}
      onReset={onReset}
    >
      <div className="space-y-6 font-friendly text-slate-900">
        {/* Title Header */}
        <div className="text-center space-y-1.5 pb-3 border-b-2 border-slate-900">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[11px] font-black uppercase tracking-wider text-amber-800">
            <span>✨</span>
            <span>{article.section}</span>
            <span>•</span>
            <span>Page {pageEntry.pageNumber}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide font-serif leading-snug">
            {article.marathiTitle}
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-600">
            {article.title}
          </p>
        </div>

        {/* Article Featured Photo / Illustration */}
        {article.image && (
          <div className="rounded-2xl border-2 sm:border-3 border-slate-900 bg-white overflow-hidden shadow-md transition-shadow hover:shadow-lg">
            <div className="relative bg-slate-900/5 flex items-center justify-center overflow-hidden max-h-[380px] sm:max-h-[440px]">
              <img
                src={article.image.src}
                alt={article.image.alt}
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain sm:object-cover object-top"
                loading="eager"
              />
              <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 text-white font-black text-[10px] sm:text-xs backdrop-blur-xs flex items-center gap-1 shadow-xs">
                <span>📸</span>
                <span>Original Archive Photo</span>
              </span>
            </div>
            {article.image.caption && (
              <div className="px-4 py-2.5 bg-slate-50 border-t-2 border-slate-900 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-amber-600 shrink-0 text-base">📌</span>
                <span className="leading-snug">{article.image.caption}</span>
              </div>
            )}
          </div>
        )}

        {/* Highlights & Lesson Banner */}
        <div className="rounded-2xl border-2 border-amber-500 bg-linear-to-r from-amber-50 to-orange-50 p-4 sm:p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-black text-sm">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Highlights & Lesson (महत्त्वाचा सारांश):</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
            {article.quickSummary}
          </p>
        </div>

        {/* Workbook Article Reader (Summarized Article) */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
              <Compass className="w-4 h-4 text-sky-600" />
              <span>लेख सारांश (Summarized Article)</span>
            </div>
            <span className="text-xs font-bold text-slate-400">
              सोप्या भाषेत मुलांसाठी
            </span>
          </div>

          {/* Marathi Paragraphs */}
          <div className="text-sm sm:text-base font-medium leading-relaxed text-slate-800 space-y-3.5">
            {article.marathiParagraphs.map((para, idx) => (
              <p key={idx} className="text-justify leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* English Summary Box */}
          <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4 space-y-1.5 mt-4">
            <div className="text-xs font-black uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
              <span>🇬🇧</span>
              <span>For Young Readers (English Summary):</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed italic">
              "{article.englishSummary}"
            </p>
          </div>

          {/* Golden Moral Quote / Proverb */}
          {article.funFactOrMoral && (
            <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3 flex items-center gap-2.5 text-xs sm:text-sm font-black text-amber-900">
              <span className="text-xl">💡</span>
              <span className="flex-1">{article.funFactOrMoral}</span>
            </div>
          )}
        </div>

        {/* Key Takeaways & Lessons */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="rounded-2xl border-2 border-slate-900 bg-slate-50 p-4 sm:p-5 shadow-xs space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>मुख्य शिकवण व बोध (Key Takeaways):</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {article.keyTakeaways.map((point, index) => (
                <div 
                  key={index}
                  className="rounded-xl border-2 border-slate-300 bg-white p-3 flex items-start gap-2 shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-xs font-bold text-slate-800 leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERACTIVE QUIZ SECTION FOR KIDS */}
        {article.quiz && article.quiz.length > 0 && (
          <div className="rounded-2xl border-4 border-indigo-600 bg-linear-to-b from-indigo-50/80 via-white to-purple-50/50 p-5 sm:p-6 shadow-md space-y-5">
            {/* Quiz Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-indigo-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-indigo-950">
                    ज्ञान चाचणी : बालमित्रांसाठी क्विझ! (Kids Quiz)
                  </h3>
                  <p className="text-xs font-bold text-indigo-700">
                    खालील प्रश्नांची उत्तरे द्या आणि स्टार मिळवा! (Answer to earn stars)
                  </p>
                </div>
              </div>

              {/* Score & Reset Controls */}
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1.5 rounded-full border-2 font-black text-xs sm:text-sm flex items-center gap-1.5 ${
                  isQuizFinished 
                    ? 'bg-emerald-400 border-emerald-800 text-slate-900 shadow-sm animate-bounce' 
                    : 'bg-white border-indigo-300 text-indigo-900'
                }`}>
                  <Award className="w-4 h-4 text-amber-600 fill-current" />
                  <span>Score: {correctCount} / {totalQuestions}</span>
                  {isQuizFinished && <span>🌟 Excellent!</span>}
                </div>

                {onReset && (
                  <button
                    type="button"
                    onClick={onReset}
                    className="px-3 py-1.5 rounded-full border-2 border-slate-900 bg-white hover:bg-rose-50 text-rose-800 font-black text-xs flex items-center gap-1 transition-all shadow-2xs active:scale-95 cursor-pointer"
                    title="Reset quiz answers for the next student"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-rose-700" />
                    <span>Reset Quiz</span>
                  </button>
                )}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {article.quiz.map((q, qIndex) => {
                const selectedOption = quizAnswers[q.id];
                const hasAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctAnswerIndex;

                return (
                  <div 
                    key={q.id}
                    className="rounded-2xl border-2 border-indigo-200 bg-white p-4 sm:p-5 shadow-xs space-y-3"
                  >
                    {/* Question Title */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs">
                          {qIndex + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-slate-900">
                          {q.marathiQuestion}
                        </h4>
                      </div>
                      <p className="text-xs font-bold text-slate-500 pl-8">
                        {q.question}
                      </p>
                    </div>

                    {/* 4 Clickable Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {q.options.map((opt, optIndex) => {
                        const isThisSelected = selectedOption === optIndex;
                        const isThisCorrect = optIndex === q.correctAnswerIndex;

                        let buttonStyle = 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-indigo-50 hover:border-indigo-300';
                        if (hasAnswered) {
                          if (isThisCorrect) {
                            buttonStyle = 'bg-emerald-100 border-emerald-600 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-300';
                          } else if (isThisSelected && !isCorrect) {
                            buttonStyle = 'bg-rose-100 border-rose-500 text-rose-950 opacity-90';
                          } else {
                            buttonStyle = 'bg-slate-50/60 border-slate-200 text-slate-400';
                          }
                        }

                        const optionLetters = ['A', 'B', 'C', 'D'];

                        return (
                          <button
                            key={optIndex}
                            type="button"
                            onClick={() => handleSelectOption(q.id, optIndex, q.correctAnswerIndex)}
                            className={`p-3 rounded-xl border-2 text-left text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${buttonStyle}`}
                          >
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                              hasAnswered && isThisCorrect 
                                ? 'bg-emerald-600 text-white' 
                                : isThisSelected && !isCorrect
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}>
                              {hasAnswered && isThisCorrect ? (
                                <Check className="w-3.5 h-3.5" />
                              ) : isThisSelected && !isCorrect ? (
                                <XCircle className="w-3.5 h-3.5" />
                              ) : (
                                optionLetters[optIndex]
                              )}
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback Explanation */}
                    {hasAnswered && (
                      <div className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm font-bold ${
                        isCorrect 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                          : 'bg-amber-50 border-amber-300 text-amber-900'
                      }`}>
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-black text-emerald-800">अचूक उत्तर! (Correct!) 🌟 </span>
                              <span>{q.explanation}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-black text-amber-800">पुन्हा प्रयत्न करा! (Try again!) 💡 </span>
                              <span>योग्य पर्याय निवडून पुन्हा प्रयत्न करा.</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Completion Banner */}
            {isQuizFinished && (
              <div className="rounded-xl border-2 border-emerald-600 bg-emerald-100 p-3.5 text-center space-y-1 shadow-xs animate-in fade-in">
                <span className="text-xl">🎉</span>
                <p className="text-sm font-black text-emerald-950">
                  खूप छान! तुम्ही सर्व प्रश्नांची अचूक उत्तरे दिली आहेत! (All Questions Answered Correctly!)
                </p>
                <p className="text-xs font-bold text-emerald-800">
                  तुम्ही या पाठातील ज्ञान उत्तमरीत्या आत्मसात केले आहे. ⭐
                </p>
              </div>
            )}
          </div>
        )}

        {/* Kid Reflection & Stamp Bar */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
              <span>💬</span>
              <span>How did this page inspire you? (तुमची प्रतिक्रिया द्या):</span>
            </span>
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                className="text-[11px] font-black text-rose-700 hover:text-rose-900 flex items-center gap-1 cursor-pointer transition-colors"
                title="Reset answers on this page for the next student"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Page</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'inspiring', emoji: '⭐', label: 'Inspiring (प्रेरणादायी)' },
              { id: 'smart', emoji: '💡', label: 'Learned something new' },
              { id: 'heart', emoji: '❤️', label: 'Heartwarming' },
              { id: 'awesome', emoji: '👍', label: 'Loved this!' }
            ].map(r => (
              <button
                key={r.id}
                type="button"
                onClick={() => handleReaction(r.id)}
                className={`px-3 py-1.5 rounded-xl border-2 text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                  reaction === r.id
                    ? 'bg-amber-400 border-slate-900 shadow-xs scale-105'
                    : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{r.emoji}</span>
                <span>{r.label}</span>
              </button>
            ))}
          </div>

          <div className="border-b-2 border-slate-300 py-1">
            <input
              type="text"
              value={note}
              onChange={(e) => onUpdate('note', e.target.value)}
              placeholder="या पाठातून तुम्हाला आवडलेला एक शब्द किंवा विचार लिहा (Write one word or sentence you liked)..."
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>
    </WorksheetFrame>
  );
};
