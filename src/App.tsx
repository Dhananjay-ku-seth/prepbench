import { useMemo, useState } from "react";
import { TOPICS, REFERENCE, GENERATORS, type Question } from "./topics";

type DIBar = { label: string; value: number };

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genDIQuestion(): { bars: DIBar[]; prompt: string; answer: number; tolerance: number } {
  const labels = ["Product A", "Product B", "Product C", "Product D", "Product E"];
  const n = randInt(4, 5);
  const bars: DIBar[] = labels.slice(0, n).map((label) => ({ label, value: randInt(10, 100) }));
  const total = bars.reduce((s, b) => s + b.value, 0);
  const target = bars[randInt(0, bars.length - 1)];
  const pct = (target.value / total) * 100;
  return { bars, prompt: `What percentage of the total does "${target.label}" represent? (nearest whole number)`, answer: Math.round(pct), tolerance: 1 };
}

export default function App() {
  const [topicId, setTopicId] = useState(TOPICS[0].id);
  const [tab, setTab] = useState<"reference" | "practice">("reference");
  const [question, setQuestion] = useState<Question | null>(null);
  const [diQuestion, setDiQuestion] = useState<ReturnType<typeof genDIQuestion> | null>(null);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [streak, setStreak] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);

  const topic = TOPICS.find((t) => t.id === topicId)!;
  const cards = REFERENCE[topicId] ?? [];
  const isDI = topicId === "di";
  const maxStreak = useMemo(() => streak, [streak]);

  function newQuestion() {
    setInput("");
    setFeedback(null);
    if (isDI) {
      setDiQuestion(genDIQuestion());
      setQuestion(null);
    } else {
      setQuestion(GENERATORS[topicId]());
      setDiQuestion(null);
    }
  }

  function selectTopic(id: string) {
    setTopicId(id);
    setTab("reference");
    setQuestion(null);
    setDiQuestion(null);
    setFeedback(null);
    setInput("");
  }

  function startPractice() {
    setTab("practice");
    newQuestion();
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const val = parseFloat(input);
    if (Number.isNaN(val)) return;
    const active = isDI ? diQuestion : question;
    if (!active) return;
    const ok = Math.abs(val - active.answer) <= active.tolerance;
    setAttempted((a) => a + 1);
    if (ok) {
      setCorrect((c) => c + 1);
      setStreak((s) => s + 1);
      setFeedback("correct");
    } else {
      setStreak(0);
      setFeedback("wrong");
    }
  }

  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  return (
    <div className="app">
      <header>
        <div className="mark">📐</div>
        <div>
          <h1>PREPBENCH</h1>
          <p>Aptitude shortcuts &amp; practice — 9 topics, instant feedback, no sign-up needed</p>
        </div>
        <div className="badges">
          <a className="cta" href="#get-pdf">📄 Get the Cheat Sheet PDF</a>
        </div>
      </header>

      <div className="layout">
        <nav className="topic-list">
          {TOPICS.map((t) => (
            <button key={t.id} className={"topic-btn" + (t.id === topicId ? " on" : "")} onClick={() => selectTopic(t.id)}>
              <span className="topic-name">{t.name}</span>
              <span className="topic-blurb">{t.blurb}</span>
            </button>
          ))}
        </nav>

        <div className="panel">
          <div className="seg">
            <button className={tab === "reference" ? "on" : ""} onClick={() => setTab("reference")}>Reference</button>
            <button className={tab === "practice" ? "on" : ""} onClick={startPractice}>Practice</button>
          </div>

          {tab === "reference" && (
            <div className="cards">
              {cards.map((c, i) => (
                <div key={i} className="ref-card">
                  <span className="ref-title">{c.title}</span>
                  <span className="ref-formula">{c.formula}</span>
                  <span className="ref-note">{c.note}</span>
                </div>
              ))}
            </div>
          )}

          {tab === "practice" && (
            <div className="practice">
              <div className="stats-row">
                <div className="stat"><span className="stat-label">Streak</span><span className="stat-val">{maxStreak}</span></div>
                <div className="stat"><span className="stat-label">Accuracy</span><span className="stat-val">{accuracy}%</span></div>
                <div className="stat"><span className="stat-label">Attempted</span><span className="stat-val">{attempted}</span></div>
              </div>

              {isDI && diQuestion && (
                <div className="di-chart">
                  {diQuestion.bars.map((b, i) => (
                    <div key={i} className="di-bar-wrap">
                      <div className="di-bar" style={{ height: `${b.value}px` }} />
                      <span className="di-bar-label">{b.label}</span>
                      <span className="di-bar-val">{b.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <p className="question">{isDI ? diQuestion?.prompt : question?.prompt}</p>

              <form className="answer-form" onSubmit={submit}>
                <input
                  autoFocus
                  type="number"
                  step="any"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Your answer"
                />
                <button type="submit" className="submit-btn">Check</button>
                <button type="button" className="ghost" onClick={newQuestion}>↺ New Question</button>
              </form>

              {feedback === "correct" && <p className="feedback correct">✓ Correct!</p>}
              {feedback === "wrong" && (
                <p className="feedback wrong">
                  ✕ Not quite — the answer was {(isDI ? diQuestion?.answer : question?.answer)?.toFixed(isDI ? 0 : 2)}
                  {!isDI && question?.unit ? ` ${question.unit}` : ""}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div id="get-pdf" className="pdf-strip">
        <div>
          <span className="pdf-title">PrepBench Cheat Sheets — all 9 topics, one PDF</span>
          <span className="pdf-sub">Dense reference tables, no prose — print it, keep it open in a second tab, or revise from it the night before an exam.</span>
        </div>
        <a className="cta" href="#" onClick={(e) => e.preventDefault()} title="Payment page coming soon">Get the PDF (coming soon)</a>
      </div>

      <footer>All formulas are standard aptitude-exam shortcuts. Practice questions are generated fresh each time — no static question bank.</footer>
    </div>
  );
}
