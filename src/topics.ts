export type Topic = { id: string; name: string; blurb: string };

export const TOPICS: Topic[] = [
  { id: "percentage", name: "Percentage", blurb: "x% of y, quick 10/5/1% tricks, percentage change." },
  { id: "profitloss", name: "Profit & Loss", blurb: "Profit/loss %, cost price, selling price, discount." },
  { id: "timework", name: "Time & Work", blurb: "Individual rates, combined work, efficiency ratios." },
  { id: "speed", name: "Speed, Distance & Time", blurb: "Speed formula, relative speed, average speed." },
  { id: "numbersystem", name: "Number System", blurb: "Divisibility rules, digit sums, remainders." },
  { id: "probability", name: "Probability", blurb: "Favorable/total, complement rule, independent events." },
  { id: "squarescubes", name: "Squares & Cubes", blurb: "Fast squares 11-30, cubes 6-15, difference of squares." },
  { id: "geometry", name: "Geometry", blurb: "Area, perimeter, circle formulas, Pythagorean triplets." },
  { id: "di", name: "Data Interpretation", blurb: "Reading bar charts: percentages of a rendered total." },
];

export type RefCard = { title: string; formula: string; note: string };

export const REFERENCE: Record<string, RefCard[]> = {
  percentage: [
    { title: "Percentage of a number", formula: "x% of y = (x / 100) x y", note: "20% of 150 = 30" },
    { title: "10% trick", formula: "10% = divide by 10", note: "10% of 450 = 45" },
    { title: "5% trick", formula: "5% = half of 10%", note: "5% of 200 = 10" },
    { title: "1% trick", formula: "1% = divide by 100", note: "1% of 500 = 5" },
    { title: "Percentage change", formula: "%change = (New - Old) / Old x 100", note: "100 to 120 = +20%" },
  ],
  profitloss: [
    { title: "Profit", formula: "Profit = SP - CP", note: "CP 400, SP 500 -> Profit 100" },
    { title: "Loss", formula: "Loss = CP - SP", note: "CP 500, SP 420 -> Loss 80" },
    { title: "Profit percent", formula: "Profit% = (Profit / CP) x 100", note: "Profit 100 on CP 400 = 25%" },
    { title: "10% profit trick", formula: "SP = (11/10) x CP", note: "CP 500 -> SP 550" },
    { title: "25% loss trick", formula: "SP = (3/4) x CP", note: "CP 400 -> SP 300" },
  ],
  timework: [
    { title: "Work formula", formula: "Work = Time x Efficiency", note: "5 days x 4 units/day = 20 units" },
    { title: "One-day work", formula: "If A finishes in x days, one-day work = 1/x", note: "10 days -> 1/10 per day" },
    { title: "Together (2 people)", formula: "Time = xy / (x + y)", note: "A=10d, B=15d -> 6 days together" },
    { title: "Men-days-work", formula: "M1 x D1 = M2 x D2 (same total work)", note: "10 men x 12 days = 15 men x 8 days" },
  ],
  speed: [
    { title: "Speed formula", formula: "Speed = Distance / Time", note: "120km / 2hr = 60 km/h" },
    { title: "Distance formula", formula: "Distance = Speed x Time", note: "60km/h x 4hr = 240 km" },
    { title: "Average speed (equal distances)", formula: "Avg = 2xy / (x + y)", note: "60 & 40 km/h -> 48 km/h" },
    { title: "Relative speed, same direction", formula: "Relative = |x - y|", note: "80 & 60 km/h -> 20 km/h" },
    { title: "Relative speed, opposite direction", formula: "Relative = x + y", note: "60 & 40 km/h -> 100 km/h" },
  ],
  numbersystem: [
    { title: "Divisible by 3", formula: "Sum of digits divisible by 3", note: "324 -> 3+2+4=9 -> yes" },
    { title: "Divisible by 9", formula: "Sum of digits divisible by 9", note: "729 -> 7+2+9=18 -> yes" },
    { title: "Divisible by 4", formula: "Last 2 digits divisible by 4", note: "1316 -> 16 -> yes" },
    { title: "Divisible by 11", formula: "Alternating digit sum is 0 or a multiple of 11", note: "50611 -> (5+6+1)-(0+1)=11" },
    { title: "Remainder on division by 9", formula: "Remainder = digit sum mod 9", note: "For a quick digital-root check" },
  ],
  probability: [
    { title: "Probability formula", formula: "P(E) = favorable / total", note: "3 red of 10 balls -> 0.3" },
    { title: "Complement rule", formula: "P(not E) = 1 - P(E)", note: "P(E)=0.7 -> P(not E)=0.3" },
    { title: "Independent events", formula: "P(A and B) = P(A) x P(B)", note: "1/2 x 1/3 = 1/6" },
    { title: "Either A or B", formula: "P(A or B) = P(A) + P(B) - P(A and B)", note: "0.4+0.5-0.2 = 0.7" },
  ],
  squarescubes: [
    { title: "Square formula", formula: "n^2", note: "12^2 = 144" },
    { title: "Cube formula", formula: "n^3", note: "5^3 = 125" },
    { title: "Numbers ending in 5", formula: "(x5)^2 = x(x+1) followed by 25", note: "35^2 = 1225" },
    { title: "Difference of squares", formula: "a^2 - b^2 = (a+b)(a-b)", note: "15^2-5^2 = 20x10 = 200" },
    { title: "Consecutive squares", formula: "(n+1)^2 = n^2 + 2n + 1", note: "11^2 = 10^2+21 = 121" },
  ],
  geometry: [
    { title: "Circle, pi = 22/7", formula: "Use 22/7 when radius is a multiple of 7", note: "r=7 -> exact fractions" },
    { title: "Circle area", formula: "Area = pi x r^2", note: "r=7 -> 22/7x49 = 154" },
    { title: "Circumference", formula: "C = 2 x pi x r", note: "r=7 -> 44" },
    { title: "Rectangle area/perimeter", formula: "Area = l x b, Perimeter = 2(l+b)", note: "l=8,b=5 -> Area 40, Perim 26" },
    { title: "Pythagorean triplets", formula: "3-4-5, 5-12-13, 8-15-17", note: "Common right-triangle side sets" },
  ],
  di: [
    { title: "Read the title first", formula: "Know what the chart represents before analyzing", note: "Category vs. value axis" },
    { title: "Percentage of total", formula: "% = (category value / total of all categories) x 100", note: "Sum all bars first" },
    { title: "Approximate before calculating", formula: "Round values to estimate, then refine", note: "Saves time under exam pressure" },
  ],
};

export type Question = { prompt: string; answer: number; unit?: string; tolerance: number };

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

export const GENERATORS: Record<string, () => Question> = {
  percentage: () => {
    const y = randInt(2, 20) * 50;
    const x = pick([5, 10, 15, 20, 25, 40, 50, 75]);
    return { prompt: `What is ${x}% of ${y}? (decimals allowed)`, answer: (x / 100) * y, tolerance: 0.001 };
  },
  profitloss: () => {
    const cp = randInt(2, 20) * 50;
    if (Math.random() > 0.5) {
      const pct = pick([5, 10, 20, 25, 40]);
      return { prompt: `CP is ${cp}. What is the Selling Price for a ${pct}% profit? (decimals allowed)`, answer: cp * (1 + pct / 100), tolerance: 0.001 };
    }
    // keep the selling price positive: at most cp - 10
    const sp = cp - randInt(1, Math.min(15, cp / 10 - 1)) * 10;
    const lossPct = ((cp - sp) / cp) * 100;
    return { prompt: `CP is ${cp}, SP is ${sp}. What is the loss percent (to 1 decimal)?`, answer: Math.round(lossPct * 10) / 10, tolerance: 0.05 };
  },
  timework: () => {
    const x = pick([6, 8, 10, 12, 15, 20]);
    const y = pick([10, 12, 15, 20, 24, 30]);
    const t = (x * y) / (x + y);
    return { prompt: `A finishes a job in ${x} days, B in ${y} days. Working together, how many days (to 2 decimals)?`, answer: Math.round(t * 100) / 100, tolerance: 0.011 };
  },
  speed: () => {
    if (Math.random() > 0.5) {
      const d = randInt(2, 24) * 10;
      const t = pick([1, 2, 3, 4, 5, 6]);
      return { prompt: `A car travels ${d} km in ${t} hours. What is its speed in km/h?`, answer: d / t, unit: "km/h", tolerance: 0.011 };
    }
    const s = pick([40, 50, 60, 70, 80, 90]);
    const t = pick([1, 2, 3, 4]);
    return { prompt: `A car travels at ${s} km/h for ${t} hours. What distance (km) does it cover?`, answer: s * t, unit: "km", tolerance: 0.001 };
  },
  numbersystem: () => {
    const n = randInt(100, 9999);
    const digitSum = String(n).split("").reduce((s, d) => s + Number(d), 0);
    return { prompt: `What is the remainder when ${n} is divided by 9? (digit-sum shortcut)`, answer: digitSum % 9, tolerance: 0.01 };
  },
  probability: () => {
    const red = randInt(2, 10);
    const blue = randInt(2, 10);
    const p = red / (red + blue);
    return { prompt: `A bag has ${red} red and ${blue} blue balls. What is the probability of drawing red (2 decimals)?`, answer: Math.round(p * 100) / 100, tolerance: 0.006 };
  },
  squarescubes: () => {
    if (Math.random() > 0.5) {
      const n = randInt(11, 30);
      return { prompt: `What is ${n} squared?`, answer: n * n, tolerance: 0.001 };
    }
    const n = randInt(6, 15);
    return { prompt: `What is ${n} cubed?`, answer: n * n * n, tolerance: 0.001 };
  },
  geometry: () => {
    if (Math.random() > 0.5) {
      const l = randInt(4, 20);
      const b = randInt(3, 15);
      return { prompt: `A rectangle has length ${l} and breadth ${b}. What is its area?`, answer: l * b, tolerance: 0.001 };
    }
    const r = pick([7, 14, 21, 28]);
    const area = (22 / 7) * r * r;
    return { prompt: `A circle has radius ${r} (use pi = 22/7). What is its area?`, answer: area, tolerance: 0.001 };
  },
};
