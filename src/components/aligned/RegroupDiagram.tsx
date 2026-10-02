"use client";

import { useEffect, useId, useRef, useState } from "react";
import "./regroup.css";

type Student = { id: string; label: string; x1: number; y1: number; x2: number; y2: number };

const STUDENTS: Student[] = [
  { id: "a", label: "Student A", x1: 40, y1: 70, x2: 40, y2: 210 },
  { id: "b", label: "Student B", x1: 90, y1: 70, x2: 90, y2: 210 },
  { id: "c", label: "Student C", x1: 140, y1: 70, x2: 280, y2: 210 },
  { id: "d", label: "Student D", x1: 190, y1: 70, x2: 330, y2: 210 },
  { id: "e", label: "Student E", x1: 240, y1: 70, x2: 520, y2: 210 },
  { id: "f", label: "Student F", x1: 290, y1: 70, x2: 70, y2: 260 },
];

export default function RegroupDiagram() {
  const titleId = useId();
  const nodesRef = useRef<SVGGElement | null>(null);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const root = nodesRef.current;
      if (!root) return;
      const dots = root.querySelectorAll<SVGCircleElement>("circle[data-regroup]");
      dots.forEach((dot, i) => {
        const student = STUDENTS[i];
        if (!student) return;
        dot.setAttribute("cx", String(reduce ? student.x2 : student.x1));
        dot.setAttribute("cy", String(reduce ? student.y2 : student.y1));
      });
      if (reduce) return;
      const anims: Animation[] = [];
      dots.forEach((dot, i) => {
        const student = STUDENTS[i];
        if (!student) return;
        const anim = dot.animate(
          [
            { cx: String(student.x1), cy: String(student.y1) },
            { cx: String(student.x2), cy: String(student.y2) },
          ],
          { duration: 1400, delay: i * 80, fill: "forwards", easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
        );
        anims.push(anim);
      });
      return () => {
        anims.forEach((a) => a.cancel());
      };
    } catch (error) {
      console.error("RegroupDiagram", { error });
    }
  }, [replayKey]);

  return (
    <figure className="regroup">
      <svg viewBox="0 0 640 340" role="img" aria-labelledby={`${titleId}-title ${titleId}-desc`}>
        <title id={`${titleId}-title`}>From one score to instructional groups</title>
        <desc id={`${titleId}-desc`}>
          Six unlabeled students move from a single score-based cluster into three instructional groups using Grade 5 Maryland College and Career Ready codes RL.5.1, W.5.1, and L.5.4.
        </desc>
        <rect x="16" y="16" width="608" height="100" rx="12" fill="#f0ede7" />
        <text x="32" y="46" fill="#5c6b4a" fontSize="14" fontFamily="Inter, sans-serif">
          One score, one group
        </text>
        <rect x="16" y="170" width="200" height="150" rx="12" fill="#faf7f2" stroke="#e8ded0" />
        <text x="32" y="198" fill="#1a1a1a" fontSize="13" fontFamily="Newsreader, Georgia, serif">
          RL.5.1 — quote accurately
        </text>
        <rect x="232" y="170" width="180" height="150" rx="12" fill="#faf7f2" stroke="#e8ded0" />
        <text x="248" y="198" fill="#1a1a1a" fontSize="13" fontFamily="Newsreader, Georgia, serif">
          W.5.1 — opinion writing
        </text>
        <rect x="428" y="170" width="196" height="150" rx="12" fill="#faf7f2" stroke="#e8ded0" />
        <text x="444" y="198" fill="#1a1a1a" fontSize="13" fontFamily="Newsreader, Georgia, serif">
          L.5.4 — word meaning
        </text>
        <g ref={nodesRef}>
          {STUDENTS.map((student) => (
            <circle key={student.id} data-regroup cx={student.x2} cy={student.y2} r="10" fill="#5c6b4a">
              <title>{student.label}</title>
            </circle>
          ))}
        </g>
      </svg>
      <figcaption>
        Illustrative grouping only. No student records.{" "}
        <button type="button" onClick={() => setReplayKey((n) => n + 1)}>
          Replay
        </button>
      </figcaption>
    </figure>
  );
}
