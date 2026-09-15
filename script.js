const STORAGE_KEY = 'quiz-app-problems-v1';
const GOAL_STORAGE_KEY = 'quiz-app-daily-goal-v1';
const HISTORY_STORAGE_KEY = 'quiz-app-answer-history-v1';
const SCHOOL_STORAGE_KEY = 'quiz-app-target-schools-v1';
const MOCK_STORAGE_KEY = 'quiz-app-last-mock-result-v1';
const DEFAULT_CATEGORY = '算数';
const DEFAULT_GRADE = 1;
const DEFAULT_DIFFICULTY = 50;
const CATEGORY_OPTIONS = ['国語', '算数', '理科', '社会', '英語'];
const MOCK_SUBJECTS = ['国語', '算数', '理科', '社会'];
const CATEGORY_ALIASES = { 社会英語: '社会' };

const defaultProblems = [
  {
    id: crypto.randomUUID(),
    question: '1＋1はなんですか？',
    answer: '2',
    category: '算数',
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '3＋2はなんですか？',
    answer: '5',
    category: '算数',
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '10－4はなんですか？',
    answer: '6',
    category: '算数',
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '水が0℃になるとどのような状態になりますか？',
    answer: '氷になる',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '植物が光を使って二酸化炭素を吸い、酸素を出すはたらきを何といいますか？',
    answer: '光合成',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '物を引きつける力を何といいますか？',
    answer: '磁力',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '水は何℃で沸騰しますか？',
    answer: '100℃',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '太陽のまわりを回っている天体を何といいますか？',
    answer: '惑星',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: 'うすい塩酸に金属を入れると出る気体は何ですか？',
    answer: '水素',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '生き物の体の中で、酸素や栄養を運ぶ液体は何ですか？',
    answer: '血液',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '地球の周りを回る月は、地球のまわりを何といいますか？',
    answer: '公転',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '植物の葉で、二酸化炭素を吸うはたらきを何といいますか？',
    answer: '気孔',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '熱が水の中を移るとき、温かい水が上に、冷たい水が下に動く現象を何といいますか？',
    answer: '対流',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '地球の表面の水が蒸発し、雲になり、雨になって戻ることを何といいますか？',
    answer: '水循環',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '砂糖が水にとけることを何といいますか？',
    answer: '溶解',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '物の重さをはかる道具は何ですか？',
    answer: 'てんびん',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '光はどのように進みますか？',
    answer: 'まっすぐ進む',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '地球上の生物が生きていくうえで必要なものを何といいますか？',
    answer: '栄養',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '太陽の光が当たると、植物の葉の中で何が作られますか？',
    answer: 'でんぷん',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '物が熱せられると体積はどうなりますか？',
    answer: '大きくなる',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '地球の大気の中で、空気の重さによって生じる力を何といいますか？',
    answer: '気圧',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: 'うすい酸性の水に石灰石を入れると、どのような気体が出ますか？',
    answer: '二酸化炭素',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '動物が息を吸って酸素を体内に取り入れるはたらきを何といいますか？',
    answer: '呼吸',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '土の中の水が地面をしみこんでいくことを何といいますか？',
    answer: '浸透',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '月が満ち欠けする理由は何ですか？',
    answer: '月の見える角度が変わるため',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '太陽の熱を利用して水を蒸発させるとき、何が起こりますか？',
    answer: '水が水蒸気になる',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '物体を支え、形を保つはたらきをもつものを何といいますか？',
    answer: '骨格',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '電気を通しやすい金属はどれですか？',
    answer: '銅',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '電流が流れるときの通り道を何といいますか？',
    answer: '回路',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '植物が水や空気から取り入れたものを使って、体をつくるはたらきを何といいますか？',
    answer: '成長',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の首都はどこですか？',
    answer: '東京',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本は何という形の国ですか？',
    answer: '列島',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本で一番高い山は何ですか？',
    answer: '富士山',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '今の元号「令和」の前の元号は何ですか？',
    answer: '平成',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '鎌倉幕府を開いた人物は誰ですか？',
    answer: '源頼朝',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '江戸時代の中心となった町はどこですか？',
    answer: '江戸',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '大坂城がある都道府県はどこですか？',
    answer: '大阪府',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本で最初に鉄道が開通したのはどことどこですか？',
    answer: '東京と横浜',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本国憲法ができた年は何年ですか？',
    answer: '1947年',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '東京オリンピックが行われた年は何年ですか？',
    answer: '1964年',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の三大都市圏の一つで、首都圏に含まれる都市はどこですか？',
    answer: '東京',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の都道府県数は全部で何県ですか？',
    answer: '47県',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '明治維新の目標としてあげられる「開国」につながるきっかけとなった条約は何ですか？',
    answer: '日米和親条約',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の地方自治の中心となる役所は何といいますか？',
    answer: '市役所・町役場・村役場',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の国旗は何といいますか？',
    answer: '日の丸',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '世界遺産として有名な「白川郷」がある県はどこですか？',
    answer: '岐阜県',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の古代の都のひとつである平城京があるのはどこですか？',
    answer: '奈良',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '九州地方の代表的な県名を一つ答えなさい。',
    answer: '福岡県',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '江戸時代に商人の町として栄えた場所として有名な大阪の別名は何ですか？',
    answer: '大坂',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の主な産業の一つで、米や野菜を育てる仕事を何といいますか？',
    answer: '農業',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の国会がある場所はどこですか？',
    answer: '東京',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の三大祭りの一つとして有名な「祇園祭」はどの都道府県で行われますか？',
    answer: '京都府',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の海と陸を分ける境目として重要な地形を何といいますか？',
    answer: '海岸',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '世界で最も多くの人が使う言語のひとつで、国際交流に使われる言語は何ですか？',
    answer: '英語',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本で古代から続く学校や寺院のある地域として知られる京都の別名は何ですか？',
    answer: '都',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '明治時代に日本を近代化した人物として有名な人は誰ですか？',
    answer: '伊藤博文',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本のごみを処理する場所として使われる施設を何といいますか？',
    answer: 'ゴミ処理場',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の主要な産業の一つで、魚をとる仕事を何といいますか？',
    answer: '漁業',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本は海に囲まれた国で、これを何といいますか？',
    answer: '島国',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '日本の国の中心となる機関で、法律を作る場所はどこですか？',
    answer: '国会',
    category: '社会',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '空気中で燃えるときに必要なものは何ですか？',
    answer: '酸素',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '動物の体の中で、食べ物を細かくして栄養を取り出すはたらきを何といいますか？',
    answer: '消化',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
  {
    id: crypto.randomUUID(),
    question: '植物の茎の中で、水や栄養を運ぶはたらきをする組織は何ですか？',
    answer: '導管',
    category: '理科',
    grade: 6,
    difficulty: 60,
    stats: { attempts: 0, correct: 0 },
  },
];

const problemForm = document.getElementById('problem-form');
const questionInput = document.getElementById('question-input');
const answerInput = document.getElementById('answer-input');
const answerModeButtons = document.querySelectorAll('.answer-mode-button');
const quizAnswerModeInputs = document.querySelectorAll('input[name="quiz-answer-mode"]');
const problemAnswerInputPanel = document.getElementById('problem-answer-input-panel');
const problemAnswerChoiceFields = document.getElementById('problem-answer-choice-fields');
const choiceOptionInputs = document.querySelectorAll('.answer-choice-option');
const correctChoiceSelect = document.getElementById('correct-choice-select');
const categoryInput = document.getElementById('category-input');
const problemGradeInput = document.getElementById('problem-grade-input');
const problemDifficultyInput = document.getElementById('problem-difficulty-input');
const aiRequest = document.getElementById('ai-request');
const aiApiKeyInput = document.getElementById('ai-api-key');
const aiApiEndpointInput = document.getElementById('ai-api-endpoint');
const aiSourceUrl = document.getElementById('ai-source-url');
const aiSourceText = document.getElementById('ai-source-text');
const aiSourceImage = document.getElementById('ai-source-image');
const aiGenerateButton = document.getElementById('generate-ai');
const aiStructuredButton = document.getElementById('generate-ai-structured');
const aiGradeInput = document.getElementById('ai-grade');
const aiSubjectInput = document.getElementById('ai-subject');
const aiFieldInput = document.getElementById('ai-field');
const aiDifficultyInput = document.getElementById('ai-difficulty');
const aiDifficultyValue = document.getElementById('ai-difficulty-value');
const aiCountInput = document.getElementById('ai-count');
const aiMessage = document.getElementById('ai-message');
const formMessage = document.getElementById('form-message');
const excelFileInput = document.getElementById('excel-file-input');
const importExcelButton = document.getElementById('import-excel-button');
const excelImportMessage = document.getElementById('excel-import-message');
const excelImportProgress = document.getElementById('excel-import-progress');
const excelImportSummary = document.getElementById('excel-import-summary');
const excelImportConfirmButton = document.getElementById('excel-import-confirm-button');
const problemList = document.getElementById('problem-list');
const problemSearchInput = document.getElementById('problem-search');
const todayCategorySelect = document.getElementById('today-category-select');
const todayGradeSelect = document.getElementById('today-grade-select');
const todayDifficultySelect = document.getElementById('today-difficulty-select');
const todayRateSelect = document.getElementById('today-rate-select');
const homeView = document.getElementById('home-view');
const quizView = document.getElementById('quiz-view');
const studyView = document.getElementById('study-view');
const scoreView = document.getElementById('score-view');
const scorePage = document.getElementById('score-page');
const studyCategorySelect = document.getElementById('study-category-select');
const studyGradeSelect = document.getElementById('study-grade-select');
const studyDifficultySelect = document.getElementById('study-difficulty-select');
const studyRateSelect = document.getElementById('study-rate-select');
const studyReviewSelect = document.getElementById('study-review-select');
const studyAnswerVisible = document.getElementById('study-answer-visible');
const studyProgress = document.getElementById('study-progress');
const studyCategory = document.getElementById('study-category');
const studyQuestion = document.getElementById('study-question');
const studyAnswer = document.getElementById('study-answer');
const studyRevealButton = document.getElementById('study-reveal-button');
const studyNextButton = document.getElementById('study-next-button');
const questionText = document.getElementById('question-text');
const quizCategory = document.getElementById('quiz-category');
const answerField = document.getElementById('answer-field');
const quizAnswerInputPanel = document.getElementById('quiz-answer-input-panel');
const quizAnswerChoicePanel = document.getElementById('quiz-answer-choice-panel');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');
const todayGoalLabel = document.getElementById('today-goal-label');
const todayGoalValue = document.getElementById('today-goal-value');
const todayGoalBar = document.getElementById('today-goal-bar');
const nextButton = document.getElementById('next-button');
const openProblemSubscreenButton = document.getElementById('open-problem-subscreen');
const closeProblemSubscreenButton = document.getElementById('close-problem-subscreen');
const problemSubscreen = document.getElementById('problem-subscreen');
const restartButton = document.getElementById('restart-button');
const resetAllButton = document.getElementById('reset-all');
const goalTypeSelect = document.getElementById('goal-type-select');
const goalValueInput = document.getElementById('goal-value-input');
const saveGoalButton = document.getElementById('save-goal-button');
const goalMessage = document.getElementById('goal-message');
const toggleSchoolEditorButton = document.getElementById('toggle-school-editor');
const toggleMockEditorButton = document.getElementById('toggle-mock-editor');
const schoolEditor = document.getElementById('school-editor');
const mockEditor = document.getElementById('mock-editor');
const schoolForm = document.getElementById('school-form');
const mockForm = document.getElementById('mock-form');
const schoolList = document.getElementById('school-list');
const schoolMessage = document.getElementById('school-message');
const mockMessage = document.getElementById('mock-message');
const mockDateInput = document.getElementById('mock-date');
const copyParentReportButton = document.getElementById('copy-parent-report');
const reportMessage = document.getElementById('report-message');

let problems = loadProblems();
let currentIndex = 0;
let score = 0;
let currentSearchQuery = '';
let selectedQuizCategory = 'すべて';
let selectedQuizGrade = 'すべて';
let selectedQuizDifficulty = 'すべて';
let selectedQuizRateLimit = 'すべて';
let selectedAnswerMode = 'text';
let selectedAnswerChoiceIndex = null;
let studyIndex = 0;
let quizOrderMode = 'serial';
let quizProblemOrder = [];
let studyFilters = { category: 'すべて', grade: 'すべて', difficulty: 'すべて', rate: 'すべて', review: 'all' };
let dailyGoal = loadDailyGoal();
let answerHistory = loadAnswerHistory();
let targetSchools = loadTargetSchools();
let lastMockResult = loadLastMockResult();

function normalizeProblem(problem) {
  const mappedCategory = problem.category && CATEGORY_ALIASES[problem.category];
  const safeCategory = CATEGORY_OPTIONS.includes(problem.category)
    ? problem.category
    : CATEGORY_OPTIONS.includes(mappedCategory)
      ? mappedCategory
      : DEFAULT_CATEGORY;

  const safeGrade = Math.min(Math.max(Number(problem.grade || DEFAULT_GRADE), 1), 6);
  const safeDifficulty = Math.min(Math.max(Number(problem.difficulty || DEFAULT_DIFFICULTY), 30), 80);
  const normalizedAnswerChoices = Array.isArray(problem.answerChoices)
    ? problem.answerChoices
        .map((choice) => String(choice ?? '').trim())
        .filter(Boolean)
        .slice(0, 4)
    : [];
  const safeCorrectChoiceIndex = Number.isInteger(problem.correctChoiceIndex)
    ? Math.min(Math.max(problem.correctChoiceIndex, 0), 3)
    : 0;

  return {
    id: problem.id || crypto.randomUUID(),
    question: String(problem.question || '').trim(),
    answer: String(problem.answer || '').trim(),
    explanation: String(problem.explanation || '').trim(),
    category: safeCategory,
    grade: safeGrade,
    difficulty: safeDifficulty,
    answerType: problem.answerType === 'choice' ? 'choice' : 'text',
    answerChoices: normalizedAnswerChoices,
    correctChoiceIndex: safeCorrectChoiceIndex,
    stats: {
      attempts: Number(problem.stats?.attempts || 0),
      correct: Number(problem.stats?.correct || 0),
    },
  };
}

function loadProblems() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    const initialProblems = defaultProblems.map((problem) => normalizeProblem(problem));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProblems));
    return initialProblems;
  }

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map((problem) => normalizeProblem(problem));
    }
  } catch (error) {
    console.error('保存データの読み込みに失敗しました', error);
  }

  const fallbackProblems = defaultProblems.map((problem) => normalizeProblem(problem));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackProblems));
  return fallbackProblems;
}

function saveProblems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(problems.map((problem) => normalizeProblem(problem))));
}

function loadDailyGoal() {
  try {
    const savedGoal = JSON.parse(localStorage.getItem(GOAL_STORAGE_KEY));
    if (savedGoal && ['score', 'questions'].includes(savedGoal.type) && Number(savedGoal.value) > 0) {
      return { type: savedGoal.type, value: Number(savedGoal.value) };
    }
  } catch (error) {
    console.error('ノルマ設定の読み込みに失敗しました', error);
  }

  return { type: 'score', value: 10 };
}

function saveDailyGoal() {
  localStorage.setItem(GOAL_STORAGE_KEY, JSON.stringify(dailyGoal));
}

function loadTargetSchools() {
  try {
    const savedSchools = JSON.parse(localStorage.getItem(SCHOOL_STORAGE_KEY));
    if (Array.isArray(savedSchools)) {
      return Array.from({ length: 5 }, (_, index) => String(savedSchools[index] || '').trim());
    }
  } catch (error) {
    console.error('志望校の読み込みに失敗しました', error);
  }

  return Array(5).fill('');
}

function saveTargetSchools() {
  localStorage.setItem(SCHOOL_STORAGE_KEY, JSON.stringify(targetSchools));
}

function loadLastMockResult() {
  try {
    const savedResult = JSON.parse(localStorage.getItem(MOCK_STORAGE_KEY));
    if (savedResult && savedResult.date && savedResult.subjects) {
      const subjects = MOCK_SUBJECTS.reduce((result, subject) => {
        result[subject] = {
          score: Number(savedResult.subjects[subject]?.score || 0),
          deviation: Number(savedResult.subjects[subject]?.deviation || 0),
        };
        return result;
      }, {});
      return { date: String(savedResult.date), subjects };
    }
  } catch (error) {
    console.error('模試結果の読み込みに失敗しました', error);
  }

  return null;
}

function saveLastMockResult() {
  localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(lastMockResult));
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function loadAnswerHistory() {
  try {
    const savedHistory = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY));
    if (Array.isArray(savedHistory)) {
      return savedHistory.filter((entry) => entry.date && entry.category);
    }
  } catch (error) {
    console.error('回答履歴の読み込みに失敗しました', error);
  }

  return [];
}

function saveAnswerHistory() {
  answerHistory = answerHistory.slice(-5000);
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(answerHistory));
}

function recordAnswer(problemId, category, isCorrect) {
  answerHistory.push({ date: getLocalDateKey(), problemId, category, correct: isCorrect });
  saveAnswerHistory();
}

function getPreviousDateKey() {
  const previousDate = new Date();
  previousDate.setDate(previousDate.getDate() - 1);
  return getLocalDateKey(previousDate);
}

function getYesterdayWrongProblemIds() {
  return new Set(
    answerHistory
      .filter((entry) => entry.date === getPreviousDateKey() && entry.correct === false && entry.problemId)
      .map((entry) => entry.problemId)
  );
}

function getTodayProgress() {
  const todayEntries = answerHistory.filter((entry) => entry.date === getLocalDateKey());
  const scoreValue = todayEntries.filter((entry) => entry.correct).length;
  const questionValue = todayEntries.length;
  const currentValue = dailyGoal.type === 'score' ? scoreValue : questionValue;
  return { scoreValue, questionValue, currentValue };
}

function renderTodayGoalProgress() {
  if (!todayGoalValue || !todayGoalBar) {
    return;
  }

  const { currentValue } = getTodayProgress();
  const unit = dailyGoal.type === 'score' ? '点' : '問';
  const percentage = Math.min(Math.round((currentValue / dailyGoal.value) * 100), 100);
  todayGoalLabel.textContent = `今日のノルマ（${dailyGoal.type === 'score' ? '総合スコア' : '問題数'}）`;
  todayGoalValue.textContent = `${currentValue} / ${dailyGoal.value}${unit}`;
  todayGoalBar.style.width = `${percentage}%`;
}

function setFormMessage(text, type = 'normal') {
  formMessage.textContent = text;
  formMessage.style.color = type === 'error' ? '#d94a5d' : '#5d4a4a';
}

function setExcelImportMessage(text, type = 'normal') {
  if (!excelImportMessage) {
    return;
  }

  excelImportMessage.textContent = text;
  excelImportMessage.style.color = type === 'error' ? '#d94a5d' : '#5d4a4a';
}

function setExcelImportProgress(text) {
  if (!excelImportProgress) {
    return;
  }

  excelImportProgress.textContent = text;
  excelImportProgress.classList.toggle('hidden', !text);
}

function setExcelImportSummary(summaryHtml) {
  if (!excelImportSummary) {
    return;
  }

  excelImportSummary.innerHTML = summaryHtml;
  excelImportSummary.classList.toggle('hidden', !summaryHtml);
}

function hideExcelImportConfirmation() {
  if (excelImportConfirmButton) {
    excelImportConfirmButton.classList.add('hidden');
  }

  setExcelImportSummary('');
  setExcelImportProgress('');
}

function setAiMessage(text, type = 'normal') {
  aiMessage.textContent = text;
  aiMessage.style.color = type === 'error' ? '#d94a5d' : '#5d4a4a';
}

function normalizeText(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char) => char.normalize('NFKC'));
}

function normalizeCategory(category) {
  if (!category) {
    return DEFAULT_CATEGORY;
  }

  const trimmedCategory = String(category).trim();

  if (CATEGORY_OPTIONS.includes(trimmedCategory)) {
    return trimmedCategory;
  }

  const alias = CATEGORY_ALIASES[trimmedCategory] || CATEGORY_ALIASES[trimmedCategory.replace(/\s+/g, '')];

  if (CATEGORY_OPTIONS.includes(alias)) {
    return alias;
  }

  return DEFAULT_CATEGORY;
}

function normalizeGrade(value) {
  const gradeMatch = String(value ?? '').match(/(\d+)/);
  const parsedGrade = Number(gradeMatch ? gradeMatch[1] : value ?? DEFAULT_GRADE);

  if (!Number.isFinite(parsedGrade)) {
    return DEFAULT_GRADE;
  }

  return Math.min(Math.max(parsedGrade, 1), 6);
}

function normalizeDifficulty(value) {
  const difficultyMatch = String(value ?? '').match(/(\d+)/);
  const parsedDifficulty = Number(difficultyMatch ? difficultyMatch[1] : value ?? DEFAULT_DIFFICULTY);

  if (!Number.isFinite(parsedDifficulty)) {
    return DEFAULT_DIFFICULTY;
  }

  return Math.min(Math.max(parsedDifficulty, 30), 80);
}

function setProblemAnswerMode(mode) {
  selectedAnswerMode = mode === 'choice' ? 'choice' : 'text';
  const isChoiceMode = selectedAnswerMode === 'choice';

  problemAnswerInputPanel?.classList.toggle('hidden', isChoiceMode);
  problemAnswerChoiceFields?.classList.toggle('hidden', !isChoiceMode);

  quizAnswerModeInputs.forEach((input) => {
    input.checked = input.value === selectedAnswerMode;
  });
}

function shuffleArray(items) {
  const clonedItems = [...items];

  for (let index = clonedItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clonedItems[index], clonedItems[swapIndex]] = [clonedItems[swapIndex], clonedItems[index]];
  }

  return clonedItems;
}

function buildQuizAnswerChoices(problem, visibleProblems) {
  const correctAnswer = String(problem.answer || '').trim();
  const allChoices = [correctAnswer];

  const candidateProblems = problems.length > 0 ? problems : visibleProblems;
  const distractors = candidateProblems
    .filter((candidate) => candidate.id !== problem.id)
    .map((candidate) => String(candidate.answer || '').trim())
    .filter((candidate) => candidate && normalizeText(candidate) !== normalizeText(correctAnswer));

  const uniqueDistractors = [...new Set(distractors)];
  const selectedDistractors = shuffleArray(uniqueDistractors).slice(0, 3);

  allChoices.push(...selectedDistractors);

  const finalChoices = shuffleArray(allChoices).slice(0, 4);

  if (finalChoices.length < 4) {
    const fallbackAnswers = shuffleArray(
      candidateProblems
        .filter((candidate) => candidate.id !== problem.id)
        .map((candidate) => String(candidate.answer || '').trim())
        .filter(Boolean)
    );

    while (finalChoices.length < 4 && fallbackAnswers.length > 0) {
      const nextChoice = fallbackAnswers.shift();
      if (nextChoice && !finalChoices.some((choice) => normalizeText(choice) === normalizeText(nextChoice))) {
        finalChoices.push(nextChoice);
      }
    }
  }

  return finalChoices.slice(0, 4);
}

function renderQuizAnswerControls(problem) {
  const isChoiceMode = selectedAnswerMode === 'choice';

  quizAnswerInputPanel?.classList.toggle('hidden', isChoiceMode);
  quizAnswerChoicePanel?.classList.toggle('hidden', !isChoiceMode);

  if (isChoiceMode) {
    answerField.value = '';
    answerField.disabled = true;
    selectedAnswerChoiceIndex = null;

    const visibleProblems = getVisibleProblems();
    const choices = buildQuizAnswerChoices(problem, visibleProblems);

    quizAnswerChoicePanel.innerHTML = choices
      .map(
        (choice, index) => `
          <button type="button" class="answer-choice-button" data-choice-index="${index}">${choice}</button>
        `
      )
      .join('');

    quizAnswerChoicePanel.querySelectorAll('.answer-choice-button').forEach((button) => {
      button.addEventListener('click', () => {
        selectedAnswerChoiceIndex = Number(button.dataset.choiceIndex);

        quizAnswerChoicePanel.querySelectorAll('.answer-choice-button').forEach((candidate) => {
          const candidateIndex = Number(candidate.dataset.choiceIndex);
          candidate.classList.toggle('selected', candidateIndex === selectedAnswerChoiceIndex);
        });
      });
    });

    checkButton.disabled = false;
    return;
  }

  answerField.disabled = false;
  answerField.value = '';
  quizAnswerChoicePanel.innerHTML = '';
  selectedAnswerChoiceIndex = null;
  checkButton.disabled = false;
}

async function importProblemsFromExcel(file, onProgress = null) {
  if (!file) {
    throw new Error('Excelファイルを選んでね！');
  }

  if (typeof XLSX === 'undefined') {
    throw new Error('Excelライブラリの読み込みに失敗しました。ページを再読み込みしてね。');
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];

    if (!firstSheetName) {
      throw new Error('Excelのシートを読み取れませんでした。');
    }

    const sheet = workbook.Sheets[firstSheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      raw: false,
      defval: '',
    });

    const importedProblems = [];
    const stats = {
      totalRows: Math.max(rows.length - 1, 0),
      processedRows: 0,
      validRows: 0,
      skippedRows: 0,
      invalidRows: 0,
      blankRows: 0,
    };

    const flushProgress = async (currentIndex) => {
      if (typeof onProgress === 'function') {
        onProgress({
          ...stats,
          currentIndex,
        });
      }

      if (stats.processedRows % 25 === 0 || currentIndex >= stats.totalRows) {
        await new Promise((resolve) => window.setTimeout(resolve, 0));
      }
    };

    for (let index = 1; index < rows.length; index += 1) {
      const row = rows[index];
      stats.processedRows += 1;

      if (!Array.isArray(row) || row.length === 0) {
        stats.skippedRows += 1;
        await flushProgress(index);
        continue;
      }

      const cells = row.map((cell) => String(cell ?? '').trim());

      if (cells.every((cell) => !cell)) {
        stats.blankRows += 1;
        stats.skippedRows += 1;
        await flushProgress(index);
        continue;
      }

      const question = cells[0];
      const answer = cells[1];

      if (!question) {
        stats.invalidRows += 1;
        await flushProgress(index);
        continue;
      }

      if (!answer) {
        stats.invalidRows += 1;
        await flushProgress(index);
        continue;
      }

      importedProblems.push(
        normalizeProblem({
          id: crypto.randomUUID(),
          question,
          answer,
          category: normalizeCategory(cells[3]),
          grade: normalizeGrade(cells[2]),
          difficulty: normalizeDifficulty(cells[4]),
          stats: { attempts: 0, correct: 0 },
        })
      );

      stats.validRows += 1;
      await flushProgress(index);
    }

    return { importedProblems, stats };
  } catch (error) {
    console.error('Excelの取り込みに失敗しました', error);
    throw new Error('Excelの取り込みに失敗しました。ファイル形式を確認してね。');
  }
}

function getProblemRate(problem) {
  const attempts = Number(problem.stats?.attempts || 0);
  const correct = Number(problem.stats?.correct || 0);
  const rate = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  return { attempts, correct, rate };
}

function getFilteredProblems() {
  if (!currentSearchQuery.trim()) {
    return problems;
  }

  const normalizedQuery = normalizeText(currentSearchQuery);

  return problems.filter((problem) => {
    const searchableText = [problem.question, problem.answer, problem.category].join(' ');
    return normalizeText(searchableText).includes(normalizedQuery);
  });
}

function matchesDifficultyRange(problemDifficulty, difficultyRange) {
  if (difficultyRange === 'すべて') {
    return true;
  }

  const [rangeStart, rangeEnd] = difficultyRange.split('-').map(Number);
  const difficulty = Number(problemDifficulty);

  return difficulty >= rangeStart && difficulty <= rangeEnd;
}

function getVisibleProblems() {
  let visibleProblems = problems;

  if (selectedQuizCategory !== 'すべて') {
    visibleProblems = visibleProblems.filter((problem) => problem.category === selectedQuizCategory);
  }

  if (selectedQuizGrade !== 'すべて') {
    visibleProblems = visibleProblems.filter((problem) => Number(problem.grade) === Number(selectedQuizGrade));
  }

  if (selectedQuizDifficulty !== 'すべて') {
    visibleProblems = visibleProblems.filter((problem) => matchesDifficultyRange(problem.difficulty, selectedQuizDifficulty));
  }

  if (selectedQuizRateLimit !== 'すべて') {
    const rateLimit = Number(selectedQuizRateLimit);
    visibleProblems = visibleProblems.filter((problem) => getProblemRate(problem).rate <= rateLimit);
  }

  if (quizOrderMode === 'random') {
    const visibleIds = visibleProblems.map((problem) => problem.id).sort().join(',');
    const orderedIds = quizProblemOrder.map((problem) => problem.id).sort().join(',');
    if (visibleIds !== orderedIds) {
      quizProblemOrder = shuffleArray(visibleProblems);
    }
    return quizProblemOrder;
  }

  quizProblemOrder = visibleProblems;
  return visibleProblems;
}

function renderProblemList() {
  if (problems.length === 0) {
    problemList.innerHTML = '<li class="problem-item"><div class="problem-content"><span class="problem-text">まだ問題がありません</span></div></li>';
    return;
  }

  const filteredProblems = getFilteredProblems();

  if (filteredProblems.length === 0) {
    problemList.innerHTML = `<li class="problem-item"><div class="problem-content"><span class="problem-text">「${currentSearchQuery.trim()}」に合う問題はありません</span></div></li>`;
    return;
  }

  const groupedMarkup = CATEGORY_OPTIONS.map((category) => {
    const categoryProblems = filteredProblems.filter((problem) => problem.category === category);

    if (categoryProblems.length === 0) {
      return '';
    }

    const listItems = categoryProblems
      .map((problem, index) => {
        const { attempts, correct, rate } = getProblemRate(problem);

        return `
          <li class="problem-item">
            <div class="problem-content">
              <div class="problem-meta">
                <span class="problem-tag">${problem.category}</span>
                <span class="problem-tag">${problem.grade}年生</span>
                <span class="problem-tag">偏差値${problem.difficulty}</span>
                <span class="problem-number">${index + 1}問目</span>
              </div>
              <span class="problem-text">
                ${problem.question}
                <span class="problem-answer">（答え: ${problem.answer}）</span>
              </span>
              <span class="problem-stats">正答率 ${rate}%（${correct}/${attempts}）</span>
            </div>
            <button class="delete-button" data-delete-id="${problem.id}" type="button">削除</button>
          </li>
        `;
      })
      .join('');

    return `
      <details class="problem-category-section" open>
        <summary class="problem-group-header">
          <span>${category}</span>
          <span class="problem-group-count">${categoryProblems.length}問</span>
        </summary>
        <ul class="problem-category-list">
          ${listItems}
        </ul>
      </details>
    `;
  }).join('');

  problemList.innerHTML = groupedMarkup;
}

function getCategorySummary() {
  return CATEGORY_OPTIONS.map((category) => {
    const categoryProblems = problems.filter((problem) => problem.category === category);
    const attempts = categoryProblems.reduce((sum, problem) => sum + Number(problem.stats?.attempts || 0), 0);
    const correct = categoryProblems.reduce((sum, problem) => sum + Number(problem.stats?.correct || 0), 0);
    const rate = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
    const grade = attempts > 0 ? Math.min(100, Math.round(Math.sqrt(correct) * (rate / 100))) : 0;

    return { category, attempts, correct, rate, grade };
  });
}

function getOverallSummary() {
  const totalAttempts = problems.reduce((sum, problem) => sum + Number(problem.stats?.attempts || 0), 0);
  const totalCorrect = problems.reduce((sum, problem) => sum + Number(problem.stats?.correct || 0), 0);
  const rate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const grade = totalAttempts > 0 ? Math.min(100, Math.round(Math.sqrt(totalCorrect) * (rate / 100))) : 0;

  return {
    attempts: totalAttempts,
    correct: totalCorrect,
    rate,
    grade,
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getMockAggregate(subjects, subjectNames = MOCK_SUBJECTS) {
  const entries = subjectNames.map((subject) => subjects[subject]);
  const totalScore = entries.reduce((sum, entry) => sum + Number(entry.score || 0), 0);
  const averageDeviation = entries.length
    ? Math.round((entries.reduce((sum, entry) => sum + Number(entry.deviation || 0), 0) / entries.length) * 10) / 10
    : 0;
  return { totalScore, averageDeviation };
}

function getMockResultMarkup() {
  if (!lastMockResult) {
    return '<p class="empty-state">模試結果はまだ入力されていません。</p>';
  }

  const twoSubject = getMockAggregate(lastMockResult.subjects, ['国語', '算数']);
  const fourSubject = getMockAggregate(lastMockResult.subjects);
  const subjectRows = MOCK_SUBJECTS.map((subject) => {
    const result = lastMockResult.subjects[subject];
    return `<tr><th>${subject}</th><td>${result.score}点</td><td>偏差値${result.deviation}</td></tr>`;
  }).join('');

  return `<p class="mock-result-date">受験日：${escapeHtml(lastMockResult.date)}</p>
    <div class="mock-result-table-wrap"><table class="mock-result-table">
      <thead><tr><th>教科</th><th>点数</th><th>偏差値</th></tr></thead><tbody>${subjectRows}</tbody>
    </table></div>
    <div class="mock-aggregate-grid">
      <div><strong>2教科</strong><span>${twoSubject.totalScore}点 / 偏差値${twoSubject.averageDeviation}</span></div>
      <div><strong>4教科</strong><span>${fourSubject.totalScore}点 / 偏差値${fourSubject.averageDeviation}</span></div>
    </div>`;
}

function renderTargetSchools() {
  if (!schoolList) {
    return;
  }
  schoolList.innerHTML = targetSchools.map((school, index) => (
    `<li><span>${index + 1}志望</span><strong>${escapeHtml(school || '未入力')}</strong></li>`
  )).join('');
}

function updateScore() {
  renderScorePage();
  renderTodayGoalProgress();
}

  function renderScorePage() {
    if (!scorePage) {
      return;
    }

    renderTargetSchools();
    const summaries = getCategorySummary();
    const overall = getOverallSummary();
    const dailyRecords = Array.from({ length: 30 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - index));
      const dateKey = getLocalDateKey(date);
      const entries = answerHistory.filter((entry) => entry.date === dateKey);
      const categories = CATEGORY_OPTIONS.reduce((result, category) => {
        const categoryEntries = entries.filter((entry) => entry.category === category);
        const correct = categoryEntries.filter((entry) => entry.correct).length;
        result[category] = {
          attempts: categoryEntries.length,
          correct,
          rate: categoryEntries.length ? Math.round((correct / categoryEntries.length) * 100) : 0,
          score: correct,
        };
        return result;
      }, {});
      const correct = entries.filter((entry) => entry.correct).length;
      return {
        dateKey,
        label: `${date.getMonth() + 1}/${date.getDate()}`,
        categories,
        attempts: entries.length,
        correct,
        rate: entries.length ? Math.round((correct / entries.length) * 100) : 0,
        score: correct,
      };
    });
    const maxChartValue = Math.max(...dailyRecords.map((record) => record.attempts), 1);
    const chartWidth = 900;
    const chartHeight = 260;
    const chartPadding = { top: 20, right: 18, bottom: 34, left: 34 };
    const chartInnerWidth = chartWidth - chartPadding.left - chartPadding.right;
    const chartInnerHeight = chartHeight - chartPadding.top - chartPadding.bottom;
    const chartX = (index) => chartPadding.left + (index / (dailyRecords.length - 1)) * chartInnerWidth;
    const chartY = (value) => chartPadding.top + chartInnerHeight - (value / maxChartValue) * chartInnerHeight;
    const chartSeries = [
      ...CATEGORY_OPTIONS.map((category, index) => ({
        label: category,
        color: ['#e98989', '#e7a83f', '#4ba9b8', '#8e78c7', '#63a66d'][index],
        values: dailyRecords.map((record) => record.categories[category].attempts),
      })),
      { label: '合計', color: '#4d3a5a', values: dailyRecords.map((record) => record.attempts) },
    ];
    const chartGrid = [0, 0.5, 1].map((ratio) => {
      const y = chartY(maxChartValue * ratio);
      return `<line x1="${chartPadding.left}" y1="${y}" x2="${chartWidth - chartPadding.right}" y2="${y}" class="chart-grid-line" /><text x="${chartPadding.left - 8}" y="${y + 4}" text-anchor="end" class="chart-axis-label">${Math.round(maxChartValue * ratio)}</text>`;
    }).join('');
    const chartLines = chartSeries.map((series) => {
      const points = series.values.map((value, index) => `${chartX(index)},${chartY(value)}`).join(' ');
      const dots = series.values.map((value, index) => `<circle cx="${chartX(index)}" cy="${chartY(value)}" r="2.5" fill="${series.color}" />`).join('');
      return `<polyline points="${points}" fill="none" stroke="${series.color}" stroke-width="${series.label === '合計' ? 3 : 2}" />${dots}`;
    }).join('');
    const chartDateLabels = dailyRecords.filter((_, index) => index % 5 === 0 || index === dailyRecords.length - 1)
      .map((record) => {
        const index = dailyRecords.indexOf(record);
        return `<text x="${chartX(index)}" y="${chartHeight - 8}" text-anchor="middle" class="chart-axis-label">${record.label}</text>`;
      }).join('');
    const chartLegend = chartSeries.map((series) => `<span><i style="background:${series.color}"></i>${series.label}</span>`).join('');
    const categoryHeaders = CATEGORY_OPTIONS.map((category) => `<th colspan="4">${category}</th>`).join('');
    const categoryCells = (record) => CATEGORY_OPTIONS.map((category) => {
      const summary = record.categories[category];
      const goalRate = dailyGoal.type === 'questions'
        ? Math.round((summary.attempts / dailyGoal.value) * 100)
        : Math.round((summary.score / dailyGoal.value) * 100);
      return `<td>${summary.attempts}</td><td>${summary.rate}%</td><td>${summary.score}</td><td>${Math.min(goalRate, 999)}%</td>`;
    }).join('');

    scorePage.innerHTML = `
      <section class="mock-result-section">
        <h3>前回の模試結果</h3>
        ${getMockResultMarkup()}
      </section>
      <div class="score-overview">
        <span class="summary-label">総合スコア</span>
        <strong>${overall.grade}</strong>
        <span>${overall.correct}/${overall.attempts}問 · 正答率 ${overall.rate}%</span>
      </div>
      <div class="score-category-grid">
        ${summaries.map(({ category, correct, attempts, rate, grade }) => `
          <article class="score-category-card">
            <div class="score-category-heading"><strong>${category}</strong><span>${grade}点</span></div>
            <div class="score-meter"><span style="width: ${rate}%"></span></div>
            <small>${correct}/${attempts}問正解 · 正答率 ${rate}%</small>
          </article>
        `).join('')}
      </div>
      <section class="daily-record-section">
        <h3>直近30日の日別記録</h3>
        <p class="daily-record-note">各カテゴリの順番：問題回答量・正答率・スコア・ノルマ達成率</p>
        <div class="daily-record-table-wrap">
          <table class="daily-record-table">
            <thead><tr><th rowspan="2">日付</th>${categoryHeaders}<th colspan="4">合計</th></tr>
              <tr>${CATEGORY_OPTIONS.concat('合計').map(() => '<th>量</th><th>率</th><th>点</th><th>達成</th>').join('')}</tr></thead>
            <tbody>${dailyRecords.map((record) => `
              <tr><th>${record.label}</th>${categoryCells(record)}<td>${record.attempts}</td><td>${record.rate}%</td><td>${record.score}</td><td>${Math.min(Math.round(((dailyGoal.type === 'questions' ? record.attempts : record.score) / dailyGoal.value) * 100), 999)}%</td></tr>
            `).join('')}</tbody>
          </table>
        </div>
      </section>
      <section class="daily-chart-section">
        <h3>カテゴリ別・合計の問題回答量</h3>
        <div class="daily-chart-legend">${chartLegend}</div>
        <div class="daily-line-chart-wrap">
          <svg class="daily-line-chart" viewBox="0 0 ${chartWidth} ${chartHeight}" role="img" aria-label="直近30日の日別カテゴリ別と合計の問題回答量グラフ">
            ${chartGrid}${chartLines}${chartDateLabels}
          </svg>
        </div>
      </section>
    `;
  }

  function getReportDailyRecords() {
    return Array.from({ length: 30 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - index));
      const dateKey = getLocalDateKey(date);
      const entries = answerHistory.filter((entry) => entry.date === dateKey);
      const categories = CATEGORY_OPTIONS.map((category) => {
        const categoryEntries = entries.filter((entry) => entry.category === category);
        const correct = categoryEntries.filter((entry) => entry.correct).length;
        const attempts = categoryEntries.length;
        const goalValue = dailyGoal.type === 'questions' ? attempts : correct;
        return `${category}:${attempts}問/${attempts ? Math.round((correct / attempts) * 100) : 0}%/${Math.min(Math.round((goalValue / dailyGoal.value) * 100), 999)}%`;
      });
      const correct = entries.filter((entry) => entry.correct).length;
      const goalValue = dailyGoal.type === 'questions' ? entries.length : correct;
      return `${dateKey} 合計${entries.length}問・正答率${entries.length ? Math.round((correct / entries.length) * 100) : 0}%・ノルマ達成率${Math.min(Math.round((goalValue / dailyGoal.value) * 100), 999)}% | ${categories.join('、')}`;
    });
  }

  function buildParentReport() {
    const subjectSummary = CATEGORY_OPTIONS.map((category) => {
      const entries = answerHistory.filter((entry) => entry.category === category);
      const correct = entries.filter((entry) => entry.correct).length;
      const goalValue = dailyGoal.type === 'questions' ? entries.length : correct;
      const goalRate = Math.min(Math.round((goalValue / dailyGoal.value) * 100), 999);
      return `${category}: 取り組み量${entries.length}問、正答率${entries.length ? Math.round((correct / entries.length) * 100) : 0}%、ノルマ達成率${goalRate}%`;
    }).join('\n');
    const schoolText = targetSchools.map((school, index) => `${index + 1}志望: ${school || '未入力'}`).join('\n');
    const mockText = lastMockResult
      ? `${lastMockResult.date}\n${MOCK_SUBJECTS.map((subject) => `${subject}: ${lastMockResult.subjects[subject].score}点 / 偏差値${lastMockResult.subjects[subject].deviation}`).join('\n')}\n2教科（国語・算数）: ${getMockAggregate(lastMockResult.subjects, ['国語', '算数']).totalScore}点 / 偏差値${getMockAggregate(lastMockResult.subjects, ['国語', '算数']).averageDeviation}\n4教科: ${getMockAggregate(lastMockResult.subjects).totalScore}点 / 偏差値${getMockAggregate(lastMockResult.subjects).averageDeviation}`
      : '未入力';
    return `保護者レポート\n作成日: ${getLocalDateKey()}\n\n【志望校】\n${schoolText}\n\n【前回の模試結果】\n${mockText}\n\n【学習成果・教科別】\n${subjectSummary}\n\n【学習成果・直近30日】\n${getReportDailyRecords().join('\n')}`;
  }

  function setEditorVisibility(editor, visible) {
    editor?.classList.toggle('hidden', !visible);
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) {
      throw new Error('クリップボードへのコピーに失敗しました');
    }
  }

  function switchView(viewName) {
    const views = { home: homeView, quiz: quizView, study: studyView, score: scoreView };

    Object.entries(views).forEach(([name, view]) => {
      view?.classList.toggle('hidden', name !== viewName);
    });

    if (viewName === 'quiz') {
      showQuestion();
    }

    if (viewName === 'study') {
      showStudyQuestion();
    }

    if (viewName === 'score') {
      renderScorePage();
    }
  }

  function getStudyProblems() {
    const yesterdayWrongProblemIds = getYesterdayWrongProblemIds();

    return problems.filter((problem) => {
      if (studyFilters.category !== 'すべて' && problem.category !== studyFilters.category) {
        return false;
      }
      if (studyFilters.grade !== 'すべて' && Number(problem.grade) !== Number(studyFilters.grade)) {
        return false;
      }
      if (studyFilters.difficulty !== 'すべて' && !matchesDifficultyRange(problem.difficulty, studyFilters.difficulty)) {
        return false;
      }
      if (studyFilters.rate !== 'すべて' && getProblemRate(problem).rate > Number(studyFilters.rate)) {
        return false;
      }
      if (studyFilters.review === 'yesterday-wrong' && !yesterdayWrongProblemIds.has(problem.id)) {
        return false;
      }
      return true;
    });
  }

  function getProblemExplanation(problem) {
    return problem.explanation || `答えは「${problem.answer}」です。問題文のキーワードと答えを結びつけて覚えましょう。`;
  }

  function showStudyQuestion() {
    const studyProblems = getStudyProblems();

    if (studyProblems.length === 0) {
      studyProgress.textContent = '';
      studyCategory.textContent = 'カテゴリ';
      studyQuestion.textContent = '問題を追加してね！';
      studyAnswer.textContent = '';
      studyAnswer.classList.add('hidden');
      studyRevealButton.classList.add('hidden');
      studyNextButton.classList.add('hidden');
      return;
    }

    if (studyIndex >= studyProblems.length) {
      studyIndex = 0;
    }

    const currentProblem = studyProblems[studyIndex];
    studyProgress.textContent = `${studyIndex + 1} / ${studyProblems.length} 問`;
    studyCategory.textContent = currentProblem.category;
    studyQuestion.textContent = currentProblem.question;
    studyAnswer.innerHTML = `<strong>答え：${currentProblem.answer}</strong><p>${getProblemExplanation(currentProblem)}</p>`;
    const answerIsVisible = studyAnswerVisible?.checked === true;
    studyAnswer.classList.toggle('hidden', !answerIsVisible);
    studyRevealButton.classList.toggle('hidden', answerIsVisible);
    studyNextButton.classList.toggle('hidden', !answerIsVisible);
  }

function openProblemSubscreen() {
  if (!problemSubscreen) {
    return;
  }

  problemSubscreen.classList.remove('hidden');
  problemSubscreen.setAttribute('aria-hidden', 'false');
}

function setManagementPanel(panelName) {
  const panels = document.querySelectorAll('.management-panel');
  const tabs = document.querySelectorAll('.management-tab');

  panels.forEach((panel) => {
    const isTarget = panel.id === `${panelName === 'generation' ? 'problem-generation' : 'problem-list'}-panel`;
    panel.classList.toggle('hidden', !isTarget);
  });

  tabs.forEach((tab) => {
    const isTarget = tab.dataset.managementPanel === panelName;
    tab.classList.toggle('active', isTarget);
  });
}

function closeProblemSubscreen() {
  if (!problemSubscreen) {
    return;
  }

  problemSubscreen.classList.add('hidden');
  problemSubscreen.setAttribute('aria-hidden', 'true');
}

function showQuestion() {
  const visibleProblems = getVisibleProblems();

  if (visibleProblems.length === 0) {
    questionText.textContent = selectedQuizCategory === 'すべて'
      ? '問題を追加してね！'
      : `${selectedQuizCategory}の問題はまだないよ！`;
    quizCategory.textContent = selectedQuizCategory === 'すべて' ? 'カテゴリ' : selectedQuizCategory;
    answerField.value = '';
    answerField.disabled = true;
    checkButton.disabled = true;
    nextButton.classList.add('hidden');
    result.classList.add('hidden');
    result.classList.remove('success', 'error');
    quizAnswerChoicePanel.innerHTML = '';
    quizAnswerChoicePanel.classList.add('hidden');
    quizAnswerInputPanel?.classList.remove('hidden');
    return;
  }

  if (currentIndex >= visibleProblems.length) {
    currentIndex = 0;
  }

  answerField.disabled = false;
  checkButton.disabled = false;
  answerField.value = '';
  result.classList.add('hidden');
  result.classList.remove('success', 'error');
  nextButton.classList.add('hidden');

  const currentProblem = visibleProblems[currentIndex];
  questionText.textContent = currentProblem.question;
  quizCategory.textContent = currentProblem.category;
  renderQuizAnswerControls(currentProblem);
}

function showFinish() {
  questionText.textContent = `おつかれさま！\n${score}点でした！`;
  quizCategory.textContent = 'おしまい';
  answerField.value = '';
  answerField.disabled = true;
  checkButton.disabled = true;
  result.classList.add('hidden');
  nextButton.classList.add('hidden');
}

function checkAnswer() {
  const visibleProblems = getVisibleProblems();

  if (visibleProblems.length === 0) {
    return;
  }

  const currentProblem = visibleProblems[currentIndex];
  if (!currentProblem) {
    return;
  }

  let isCorrect = false;

  if (selectedAnswerMode === 'choice') {
    if (selectedAnswerChoiceIndex === null || selectedAnswerChoiceIndex === undefined) {
      result.textContent = '答えを選んでからこたえてね！';
      result.classList.remove('success');
      result.classList.add('error');
      result.classList.remove('hidden');
      return;
    }

    const selectedChoice = quizAnswerChoicePanel.querySelector(`[data-choice-index="${selectedAnswerChoiceIndex}"]`);
    const selectedChoiceText = selectedChoice ? selectedChoice.textContent.trim() : '';
    isCorrect = normalizeText(selectedChoiceText) === normalizeText(currentProblem.answer);
  } else {
    const userAnswer = normalizeText(answerField.value);
    const correctAnswer = normalizeText(currentProblem.answer);
    isCorrect = userAnswer === correctAnswer;
  }

  currentProblem.stats.attempts += 1;
  recordAnswer(currentProblem.id, currentProblem.category, isCorrect);

  if (isCorrect) {
    currentProblem.stats.correct += 1;
    score += 1;
    updateScore();
    renderProblemList();
    saveProblems();
    renderTodayGoalProgress();

    result.textContent = 'せいかい！すごいね！';
    result.classList.remove('error');
    result.classList.add('success');
    result.classList.remove('hidden');

    answerField.disabled = true;
    checkButton.disabled = true;

    window.setTimeout(() => {
      moveToNextQuestion();
    }, 900);

    return;
  }

  result.textContent = `ちがうよ。答えは「${currentProblem.answer}」だよ。`;
  result.classList.remove('success');
  result.classList.add('error');
  result.classList.remove('hidden');

  renderProblemList();
  saveProblems();
  renderTodayGoalProgress();
  answerField.disabled = true;
  checkButton.disabled = true;
  nextButton.classList.remove('hidden');
}

function moveToNextQuestion() {
  const visibleProblems = getVisibleProblems();
  currentIndex += 1;

  if (currentIndex >= visibleProblems.length) {
    showFinish();
    return;
  }

  showQuestion();
}

function resetQuiz() {
  currentIndex = 0;
  score = 0;
  quizProblemOrder = [];
  updateScore();
  showQuestion();
}

function inferCategoryFromPrompt(prompt) {
  const lower = prompt.toLowerCase();

  if (lower.includes('国語') || lower.includes('ことば') || lower.includes('かんじ') || lower.includes('読み')) {
    return '国語';
  }

  if (lower.includes('理科') || lower.includes('科学') || lower.includes('しぜん')) {
    return '理科';
  }

  if (lower.includes('社会') || lower.includes('しゃかい')) {
    return '社会';
  }

  if (lower.includes('英語') || lower.includes('eigo') || lower.includes('english')) {
    return '英語';
  }

  return DEFAULT_CATEGORY;
}

function extractCount(prompt) {
  const explicitCountMatch = prompt.match(/(問題数|問数|何問)\s*[:：]?\s*([0-9]+)/i);
  if (explicitCountMatch) {
    return Number(explicitCountMatch[2]);
  }

  const directMatch = prompt.match(/([0-9]+)\s*問/);
  if (directMatch) {
    return Number(directMatch[1]);
  }

  return 3;
}

function createMathQuestion(type, index, difficulty = 'ふつう') {
  const maxNumber = difficulty === 'やさしい' ? 5 : difficulty === 'むずかしい' ? 20 : 10;
  const left = Math.floor(Math.random() * maxNumber) + 1;
  const right = Math.floor(Math.random() * maxNumber) + 1;

  if (type === 'たし算') {
    return {
      question: `${left}＋${right}はなんですか？`,
      answer: String(left + right),
    };
  }

  const bigger = Math.max(left, right);
  const smaller = Math.min(left, right);

  return {
    question: `${bigger}－${smaller}はなんですか？`,
    answer: String(bigger - smaller),
  };
}

function createLanguageQuestion() {
  const words = [
    { question: '「おかし」の読み方は？', answer: 'おかし' },
    { question: '「みず」の読み方は？', answer: 'みず' },
    { question: '「えんぴつ」の読み方は？', answer: 'えんぴつ' },
  ];

  return words[Math.floor(Math.random() * words.length)];
}

function createScienceQuestion() {
  const questions = [
    { question: 'はなはなにできていますか？', answer: 'お花' },
    { question: 'おひさまはいつもどこにありますか？', answer: '空' },
    { question: 'みずはなんの色ですか？', answer: 'なし' },
  ];

  return questions[Math.floor(Math.random() * questions.length)];
}

function createSocialQuestion() {
  const questions = [
    { question: 'おうちのまわりにあるものはなんですか？', answer: '家' },
    { question: 'がっこうでお手伝いすることはなんですか？', answer: '掃除' },
    { question: 'まちの中でよく見るものはなんですか？', answer: '車' },
  ];

  return questions[Math.floor(Math.random() * questions.length)];
}

function createEnglishQuestion() {
  const questions = [
    { question: '「ありがとう」は英語でなんですか？', answer: 'thank you' },
    { question: '「おはよう」は英語でなんですか？', answer: 'good morning' },
    { question: '「学校」は英語でなんですか？', answer: 'school' },
  ];

  return questions[Math.floor(Math.random() * questions.length)];
}

function parseGeneratedProblems(rawText, fallbackCategory, fallbackGrade, fallbackDifficulty, requestedCount) {
  if (!rawText) {
    return [];
  }

  const text = rawText
    .replace(/```json|```/gi, '')
    .trim();

  let parsed = null;

  try {
    const match = text.match(/\[[\s\S]*\]/);
    parsed = JSON.parse(match ? match[0] : text);
  } catch (error) {
    console.error('AI生成結果のJSON解析に失敗しました', error);
    return [];
  }

  if (Array.isArray(parsed)) {
    return parsed
      .slice(0, requestedCount)
      .map((item) => normalizeProblem({
        id: crypto.randomUUID(),
        question: item.question,
        answer: item.answer,
        category: CATEGORY_OPTIONS.includes(item.category) ? item.category : fallbackCategory,
        grade: Number(item.grade || fallbackGrade || DEFAULT_GRADE),
        difficulty: Number(item.difficulty || fallbackDifficulty || DEFAULT_DIFFICULTY),
        stats: { attempts: 0, correct: 0 },
      }))
      .filter((item) => item.question && item.answer);
  }

  if (parsed && Array.isArray(parsed.problems)) {
    return parseGeneratedProblems(JSON.stringify(parsed.problems), fallbackCategory, fallbackGrade, fallbackDifficulty, requestedCount);
  }

  return [];
}

async function requestChatgptProblems({
  apiKey,
  endpoint,
  targetCategory,
  requestedCount,
  grade,
  difficulty,
  requestText,
}) {
  if (!apiKey || !endpoint) {
    return [];
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'あなたは小学校の教育課程要領と中学受験過去問の出題傾向を参考にしたクイズ作成アシスタントです。問題は小学生が解ける範囲に収まり、基礎・発展・応用のバランスを保ち、出題の質と一貫性を優先してください。問題文は日本語で簡潔かつ正確に、答えはひとつに絞り、誤解しにくい表現にしてください。出力は JSON 配列のみで、各要素は {"question":"問題文","answer":"答え","category":"科目","grade":学年,"difficulty":偏差値} の形式にしてください。',
          },
          {
            role: 'user',
            content: `科目: ${targetCategory}\n学年: ${grade}年生\n難易度(偏差値): ${difficulty}\n問題数: ${requestedCount}\n要望: ${requestText}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    return parseGeneratedProblems(content, targetCategory, grade, difficulty, requestedCount);
  } catch (error) {
    console.error('ChatGPTの問題生成に失敗しました', error);
    return [];
  }
}

async function generateProblemsFromRequest(prompt, categoryOverride = null, requestTextOverride = '', apiKey = '', apiEndpoint = '') {
  const trimmedPrompt = prompt.trim();

  if (!trimmedPrompt) {
    return [];
  }

  const requestText = (requestTextOverride || prompt).trim();
  const requestedCount = Math.min(Math.max(extractCount(requestText || trimmedPrompt), 1), 10);
  const targetCategory = categoryOverride || inferCategoryFromPrompt(requestText || trimmedPrompt);
  const lowerPrompt = trimmedPrompt.toLowerCase();
  const type = lowerPrompt.includes('ひき算') ? 'ひき算' : 'たし算';
  const difficultyText = lowerPrompt.includes('むずかしい')
    ? 'むずかしい'
    : lowerPrompt.includes('やさしい')
      ? 'やさしい'
      : 'ふつう';

  const grade = Number(aiGradeInput?.value || DEFAULT_GRADE);
  const difficulty = Number(aiDifficultyInput?.value || DEFAULT_DIFFICULTY);

  const chatGptGenerated = await requestChatgptProblems({
    apiKey,
    endpoint: apiEndpoint,
    targetCategory,
    requestedCount,
    grade,
    difficulty,
    requestText,
  });

  if (chatGptGenerated.length > 0) {
    return chatGptGenerated;
  }

  const generatedProblems = [];

  for (let index = 0; index < requestedCount; index += 1) {
    let generatedProblem;

    if (targetCategory === '国語') {
      generatedProblem = createLanguageQuestion();
    } else if (targetCategory === '理科') {
      generatedProblem = createScienceQuestion();
    } else if (targetCategory === '社会') {
      generatedProblem = createSocialQuestion();
    } else if (targetCategory === '英語') {
      generatedProblem = createEnglishQuestion();
    } else {
      generatedProblem = createMathQuestion(type, index, difficultyText);
    }

    generatedProblems.push(
      normalizeProblem({
        id: crypto.randomUUID(),
        question: generatedProblem.question,
        answer: generatedProblem.answer,
        category: targetCategory,
        grade,
        difficulty,
        stats: { attempts: 0, correct: 0 },
      })
    );
  }

  return generatedProblems;
}

async function extractTextFromImage(file) {
  if (!file || !window.Tesseract) {
    return '';
  }

  try {
    const result = await Tesseract.recognize(file, 'jpn+eng');
    return result.data?.text || '';
  } catch (error) {
    console.error('画像からの文字認識に失敗しました', error);
    return '';
  }
}

function stripHtml(text) {
  return String(text || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchReferenceText(url) {
  if (!url) {
    return '';
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    const plainText = stripHtml(text);
    return plainText.slice(0, 3000);
  } catch (error) {
    console.error('参考URLの読み込みに失敗しました', error);
    return '';
  }
}

async function buildAiPrompt(requestText, sourceText, sourceUrl, sourceImageFile) {
  const parts = [requestText];

  if (sourceUrl) {
    const urlText = await fetchReferenceText(sourceUrl);
    if (urlText) {
      parts.push(`参考URLの内容:\n${urlText}`);
    }
  }

  if (sourceText) {
    parts.push(`参考資料:\n${sourceText}`);
  }

  if (sourceImageFile) {
    const imageText = await extractTextFromImage(sourceImageFile);
    if (imageText) {
      parts.push(`資料画像の文字:\n${imageText}`);
    }
  }

  return parts.filter(Boolean).join('\n\n');
}

async function generateStructuredProblems({ grade, subject, field, difficulty, count, apiKey = '', apiEndpoint = '' }) {
  const requestedCount = Math.min(Math.max(Number(count) || 1, 1), 10);
  const targetCategory = subject || DEFAULT_CATEGORY;
  const difficultyLabel = Number(difficulty) >= 70
    ? 'むずかしい'
    : Number(difficulty) <= 40
      ? 'やさしい'
      : 'ふつう';

  const requestText = field
    ? `${targetCategory}の${field}分野で、${grade}年生向けの${difficultyLabel}問題を${requestedCount}問作ってください。`
    : `${targetCategory}の${grade}年生向けで、偏差値${difficulty}の${requestedCount}問を作ってください。`;

  const chatGptGenerated = await requestChatgptProblems({
    apiKey,
    endpoint: apiEndpoint,
    targetCategory,
    requestedCount,
    grade,
    difficulty,
    requestText,
  });

  if (chatGptGenerated.length > 0) {
    return chatGptGenerated;
  }

  const generatedProblems = [];

  for (let index = 0; index < requestedCount; index += 1) {
    let generatedProblem;

    if (targetCategory === '国語') {
      generatedProblem = createLanguageQuestion();
    } else if (targetCategory === '理科') {
      generatedProblem = createScienceQuestion();
    } else if (targetCategory === '社会') {
      generatedProblem = createSocialQuestion();
    } else if (targetCategory === '英語') {
      generatedProblem = createEnglishQuestion();
    } else {
      generatedProblem = createMathQuestion('たし算', index, difficultyLabel);
    }

    generatedProblems.push(
      normalizeProblem({
        id: crypto.randomUUID(),
        question: field ? `${field}の${generatedProblem.question}` : generatedProblem.question,
        answer: generatedProblem.answer,
        category: targetCategory,
        grade,
        difficulty,
        stats: { attempts: 0, correct: 0 },
      })
    );
  }

  return generatedProblems;
}

problemForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const question = questionInput.value.trim();
  const category = categoryInput.value;
  const answerType = selectedAnswerMode;
  let answer = answerInput.value.trim();
  let answerChoices = [];
  let correctChoiceIndex = 0;

  if (answerType === 'choice') {
    answerChoices = Array.from({ length: 4 }, (_, index) => {
      const input = document.getElementById(`choice-option-${index + 1}`);
      return input ? input.value.trim() : '';
    });

    if (answerChoices.some((choice) => !choice)) {
      setFormMessage('選択肢を4つ全部入れてね！', 'error');
      return;
    }

    correctChoiceIndex = Number(correctChoiceSelect.value || 0);
    answer = answerChoices[correctChoiceIndex];
  }

  if (!question || !answer) {
    setFormMessage('問題と答えを両方入れてね！', 'error');
    return;
  }

  problems.push(
    normalizeProblem({
      id: crypto.randomUUID(),
      question,
      answer,
      category,
      grade: Number(problemGradeInput?.value || DEFAULT_GRADE),
      difficulty: Number(problemDifficultyInput?.value || DEFAULT_DIFFICULTY),
      answerType,
      answerChoices,
      correctChoiceIndex,
      stats: { attempts: 0, correct: 0 },
    })
  );

  saveProblems();
  renderProblemList();
  setFormMessage('問題を追加したよ！', 'normal');
  questionInput.value = '';
  answerInput.value = '';
  choiceOptionInputs.forEach((input) => {
    input.value = '';
  });
  correctChoiceSelect.value = '0';
  setProblemAnswerMode('text');
  selectedAnswerChoiceIndex = null;
  resetQuiz();
});

problemList.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('[data-delete-id]');
  if (!deleteButton) {
    return;
  }

  const targetId = deleteButton.dataset.deleteId;
  problems = problems.filter((problem) => problem.id !== targetId);

  if (currentIndex >= problems.length) {
    currentIndex = Math.max(0, problems.length - 1);
  }

  saveProblems();
  renderProblemList();

  if (problems.length === 0) {
    currentIndex = 0;
    score = 0;
    updateScore();
    questionText.textContent = '問題を追加してね！';
    quizCategory.textContent = 'カテゴリ';
    answerField.value = '';
    answerField.disabled = true;
    checkButton.disabled = true;
    nextButton.classList.add('hidden');
    result.classList.add('hidden');
    return;
  }

  resetQuiz();
});

checkButton.addEventListener('click', checkAnswer);

answerField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

nextButton.addEventListener('click', () => {
  result.classList.add('hidden');
  nextButton.classList.add('hidden');
  moveToNextQuestion();
});

if (openProblemSubscreenButton) {
  openProblemSubscreenButton.addEventListener('click', openProblemSubscreen);
}

if (closeProblemSubscreenButton) {
  closeProblemSubscreenButton.addEventListener('click', closeProblemSubscreen);
}

if (problemSubscreen) {
  problemSubscreen.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute('data-close-subscreen')) {
      closeProblemSubscreen();
    }
  });
}

document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const viewName = button.dataset.view;

    if (viewName === 'manage') {
      openProblemSubscreen();
      return;
    }

    switchView(viewName);
  });
});

if (studyRevealButton) {
  studyRevealButton.addEventListener('click', () => {
    studyAnswer.classList.remove('hidden');
    studyRevealButton.classList.add('hidden');
    studyNextButton.classList.remove('hidden');
  });
}

if (studyNextButton) {
  studyNextButton.addEventListener('click', () => {
    studyIndex += 1;
    showStudyQuestion();
  });
}

if (studyCategorySelect) {
  studyCategorySelect.addEventListener('change', () => {
    studyIndex = 0;
    showStudyQuestion();
  });
}

restartButton.addEventListener('click', resetQuiz);

resetAllButton.addEventListener('click', () => {
  problems = [];
  currentIndex = 0;
  score = 0;
  updateScore();
  saveProblems();
  renderProblemList();
  questionText.textContent = '問題を追加してね！';
  quizCategory.textContent = 'カテゴリ';
  answerField.value = '';
  answerField.disabled = true;
  checkButton.disabled = true;
  nextButton.classList.add('hidden');
  result.classList.add('hidden');
  setFormMessage('ぜんぶ消したよ！', 'normal');
});

if (importExcelButton) {
  importExcelButton.addEventListener('click', async () => {
    const file = excelFileInput?.files?.[0];

    if (!file) {
      setExcelImportMessage('Excelファイルを選択してね。', 'error');
      return;
    }

    hideExcelImportConfirmation();
    importExcelButton.disabled = true;
    excelFileInput.disabled = true;
    setExcelImportMessage('Excelを読み込んでいます…', 'normal');
    setExcelImportProgress('');

    try {
      const { importedProblems, stats } = await importProblemsFromExcel(file, ({ processedRows, totalRows, validRows, skippedRows, invalidRows, blankRows }) => {
        const percent = totalRows > 0 ? Math.round((processedRows / totalRows) * 100) : 0;
        setExcelImportProgress(`読み込み中... ${processedRows}/${totalRows} 行を確認中（${validRows}件登録候補 / ${invalidRows}件未登録 / ${skippedRows}件スキップ）`);
        setExcelImportMessage(`Excelを取り込んでいます... ${percent}%`, 'normal');
      });

      if (!importedProblems.length) {
        setExcelImportMessage('取り込める問題が見つかりませんでした。A〜E列の内容を確認してね。', 'error');
        setExcelImportProgress('');
        return;
      }

      problems = [...problems, ...importedProblems];
      saveProblems();
      renderProblemList();
      resetQuiz();

      const summaryHtml = `
        <h4>取り込み完了</h4>
        <ul>
          <li>登録件数: ${importedProblems.length}件</li>
          <li>確認した行数: ${stats.processedRows}行</li>
          <li>空行/未使用行: ${stats.blankRows + stats.skippedRows}行</li>
          <li>未登録行: ${stats.invalidRows}行</li>
        </ul>
      `;

      setExcelImportSummary(summaryHtml);
      setExcelImportProgress('');
      setExcelImportMessage(`${importedProblems.length}件を登録しました。内容を確認したらOKを押してね。`, 'normal');

      if (excelImportConfirmButton) {
        excelImportConfirmButton.classList.remove('hidden');
      }

      excelFileInput.value = '';
    } catch (error) {
      setExcelImportProgress('');
      setExcelImportSummary('');
      setExcelImportMessage(error.message || 'Excelの取り込みに失敗しました。', 'error');
      hideExcelImportConfirmation();
    } finally {
      importExcelButton.disabled = false;
      excelFileInput.disabled = false;
    }
  });
}

if (excelImportConfirmButton) {
  excelImportConfirmButton.addEventListener('click', () => {
    hideExcelImportConfirmation();
    setExcelImportMessage('取り込みを完了しました。', 'normal');
  });
}

aiGenerateButton.addEventListener('click', async () => {
  const requestText = aiRequest.value.trim();

  if (!requestText && !aiSourceText.value.trim() && !aiSourceUrl.value.trim() && !aiSourceImage.files[0]) {
    setAiMessage('やってほしいこと、または参考資料を入力してね！', 'error');
    return;
  }

  setAiMessage('参考資料を確認して問題を作っているよ…', 'normal');

  const prompt = await buildAiPrompt(
    requestText,
    aiSourceText.value.trim(),
    aiSourceUrl.value.trim(),
    aiSourceImage.files[0]
  );

  const generatedProblems = await generateProblemsFromRequest(
    prompt,
    null,
    requestText,
    aiApiKeyInput.value.trim(),
    aiApiEndpointInput.value.trim()
  );

  if (!generatedProblems.length) {
    setAiMessage('問題を作れなかったよ。もう少し短く伝えてね。', 'error');
    return;
  }

  problems = [...problems, ...generatedProblems];
  saveProblems();
  renderProblemList();
  setAiMessage(`${generatedProblems.length}問をAIで作って追加したよ！`, 'normal');
  aiRequest.value = '';
  aiSourceUrl.value = '';
  aiSourceText.value = '';
  aiSourceImage.value = '';
  resetQuiz();
});

if (aiStructuredButton) {
  aiStructuredButton.addEventListener('click', async () => {
    const apiKey = aiApiKeyInput.value.trim();
    const apiEndpoint = aiApiEndpointInput.value.trim();

    const grade = Math.min(Math.max(Number(aiGradeInput.value) || 1, 1), 6);
    const subject = aiSubjectInput.value || '算数';
    const field = aiFieldInput.value.trim();
    const difficulty = Number(aiDifficultyInput.value || 50);
    const count = Math.min(Math.max(Number(aiCountInput.value) || 1, 1), 10);

    const generatedProblems = await generateStructuredProblems({
      grade,
      subject,
      field,
      difficulty,
      count,
      apiKey,
      apiEndpoint,
    });

    if (!generatedProblems.length) {
      setAiMessage('問題を作れなかったよ。入力を見直してね。', 'error');
      return;
    }

    problems = [...problems, ...generatedProblems];
    saveProblems();
    renderProblemList();
    setAiMessage(`${generatedProblems.length}問を${grade}年生の${subject}で生成して追加したよ！`, 'normal');
    aiRequest.value = '';
    aiCountInput.value = String(Math.min(count, 10));
    resetQuiz();
  });
}

if (problemSearchInput) {
  problemSearchInput.addEventListener('input', (event) => {
    currentSearchQuery = event.target.value;
    renderProblemList();
  });
}

quizAnswerModeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    setProblemAnswerMode(input.value || 'text');
    showQuestion();
  });
});

if (todayCategorySelect) {
  todayCategorySelect.addEventListener('change', (event) => {
    selectedQuizCategory = event.target.value;
    currentIndex = 0;
    score = 0;
    updateScore();
    showQuestion();
  });
}

if (todayGradeSelect) {
  todayGradeSelect.addEventListener('change', (event) => {
    selectedQuizGrade = event.target.value;
    currentIndex = 0;
    showQuestion();
  });
}

if (todayDifficultySelect) {
  todayDifficultySelect.addEventListener('change', (event) => {
    selectedQuizDifficulty = event.target.value;
    currentIndex = 0;
    showQuestion();
  });
}

if (todayRateSelect) {
  todayRateSelect.addEventListener('change', (event) => {
    selectedQuizRateLimit = event.target.value;
    currentIndex = 0;
    showQuestion();
  });
}

document.querySelectorAll('input[name="quiz-order-mode"]').forEach((input) => {
  input.addEventListener('change', (event) => {
    quizOrderMode = event.target.value === 'random' ? 'random' : 'serial';
    currentIndex = 0;
    quizProblemOrder = [];
    showQuestion();
  });
});

const studyFilterControls = [
  ['category', studyCategorySelect],
  ['grade', studyGradeSelect],
  ['difficulty', studyDifficultySelect],
  ['rate', studyRateSelect],
  ['review', studyReviewSelect],
];

studyFilterControls.forEach(([filterName, control]) => {
  control?.addEventListener('change', (event) => {
    studyFilters[filterName] = event.target.value;
    studyIndex = 0;
    showStudyQuestion();
  });
});

studyAnswerVisible?.addEventListener('change', showStudyQuestion);

toggleSchoolEditorButton?.addEventListener('click', () => {
  setEditorVisibility(schoolEditor, schoolEditor?.classList.contains('hidden'));
});

toggleMockEditorButton?.addEventListener('click', () => {
  setEditorVisibility(mockEditor, mockEditor?.classList.contains('hidden'));
});

schoolForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  targetSchools = Array.from({ length: 5 }, (_, index) => document.getElementById(`school-choice-${index + 1}`)?.value.trim() || '');
  saveTargetSchools();
  renderTargetSchools();
  schoolMessage.textContent = '志望校を保存しました。';
  setEditorVisibility(schoolEditor, false);
});

mockForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const subjects = MOCK_SUBJECTS.reduce((result, subject) => {
    result[subject] = {
      score: Math.max(Number(document.getElementById(`mock-score-${subject}`)?.value) || 0, 0),
      deviation: Math.max(Number(document.getElementById(`mock-deviation-${subject}`)?.value) || 0, 0),
    };
    return result;
  }, {});
  lastMockResult = { date: mockDateInput.value || getLocalDateKey(), subjects };
  saveLastMockResult();
  updateScore();
  mockMessage.textContent = '模試結果を保存しました。';
  setEditorVisibility(mockEditor, false);
});

copyParentReportButton?.addEventListener('click', async () => {
  try {
    await copyTextToClipboard(buildParentReport());
    reportMessage.textContent = '保護者レポートをクリップボードにコピーしました。';
  } catch (error) {
    reportMessage.textContent = 'コピーできませんでした。ブラウザの権限を確認してください。';
  }
});

if (saveGoalButton) {
  saveGoalButton.addEventListener('click', () => {
    const value = Math.min(Math.max(Number(goalValueInput.value) || 1, 1), 999);
    dailyGoal = { type: goalTypeSelect.value === 'questions' ? 'questions' : 'score', value };
    goalValueInput.value = String(value);
    saveDailyGoal();
    goalMessage.textContent = `${dailyGoal.type === 'score' ? '総合スコア' : '問題数'}のノルマを${value}に設定したよ！`;
    renderScorePage();
    renderTodayGoalProgress();
  });
}

if (aiDifficultyInput && aiDifficultyValue) {
  aiDifficultyInput.addEventListener('input', (event) => {
    aiDifficultyValue.textContent = event.target.value;
  });
}

document.querySelectorAll('.management-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    setManagementPanel(tab.dataset.managementPanel);
  });
});

setProblemAnswerMode(selectedAnswerMode);
goalTypeSelect.value = dailyGoal.type;
goalValueInput.value = String(dailyGoal.value);
targetSchools.forEach((school, index) => {
  const input = document.getElementById(`school-choice-${index + 1}`);
  if (input) input.value = school;
});
mockDateInput.value = lastMockResult?.date || getLocalDateKey();
MOCK_SUBJECTS.forEach((subject) => {
  const result = lastMockResult?.subjects[subject];
  const scoreInput = document.getElementById(`mock-score-${subject}`);
  const deviationInput = document.getElementById(`mock-deviation-${subject}`);
  if (scoreInput) scoreInput.value = result ? String(result.score) : '';
  if (deviationInput) deviationInput.value = result ? String(result.deviation) : '';
});
renderProblemList();
updateScore();
renderTodayGoalProgress();
switchView('home');
