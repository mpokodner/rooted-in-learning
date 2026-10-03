"use client";

import { useState } from "react";
import { PRODUCT_NAME } from "@/config/site";

const STANDARDS = [
  { code: "RL.5.1", label: "Quote accurately from a text", value: 82, tone: "ok" as const },
  { code: "RL.5.2", label: "Determine a theme", value: 64, tone: "mid" as const },
  { code: "RI.5.3", label: "Explain relationships between ideas", value: 51, tone: "mid" as const },
  { code: "RI.5.8", label: "Reasons and evidence", value: 38, tone: "low" as const },
];

const TABS = ["By standard", "By student group", "By item"] as const;

export default function AlignedSamplePanel() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("By standard");

  return (
    <div className="aligned-panel" aria-label={`${PRODUCT_NAME} sample grouping view`}>
      <div className="aligned-panel-sidebar">
        <p className="aligned-panel-brand">
          <span className="aligned-panel-mark" aria-hidden="true" />
          {PRODUCT_NAME}
        </p>
        <div className="aligned-panel-tabs" role="tablist" aria-label="Sample views">
          {TABS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={tab === item}
              className={tab === item ? "is-active" : ""}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="aligned-panel-sample">Sample data</p>
      </div>
      <div className="aligned-panel-body" role="tabpanel">
        <div className="aligned-panel-head">
          <div>
            <h3>Grade 5 · ELA · Unit 3 check</h3>
            <p>3 classes · 74 students</p>
          </div>
        </div>
        {tab === "By standard" ? (
          <ul className="aligned-bars">
            {STANDARDS.map((row) => (
              <li key={row.code}>
                <div>
                  <strong>{row.code}</strong>
                  <span>{row.label}</span>
                </div>
                <div className="aligned-bar-track">
                  <span className={`aligned-bar-fill aligned-bar-fill--${row.tone}`} style={{ width: `${row.value}%` }} />
                </div>
                <em>{row.value}%</em>
              </li>
            ))}
          </ul>
        ) : null}
        {tab === "By student group" ? (
          <ul className="aligned-bars">
            <li>
              <div>
                <strong>Group A</strong>
                <span>Evidence sentences · Students A–C</span>
              </div>
              <div className="aligned-bar-track">
                <span className="aligned-bar-fill aligned-bar-fill--low" style={{ width: "36%" }} />
              </div>
              <em>RI.5.8</em>
            </li>
            <li>
              <div>
                <strong>Group B</strong>
                <span>Theme · Students D–F</span>
              </div>
              <div className="aligned-bar-track">
                <span className="aligned-bar-fill aligned-bar-fill--mid" style={{ width: "61%" }} />
              </div>
              <em>RL.5.2</em>
            </li>
          </ul>
        ) : null}
        {tab === "By item" ? (
          <ul className="aligned-bars">
            <li>
              <div>
                <strong>Item 4</strong>
                <span>Which sentence best supports the claim?</span>
              </div>
              <div className="aligned-bar-track">
                <span className="aligned-bar-fill aligned-bar-fill--low" style={{ width: "34%" }} />
              </div>
              <em>34%</em>
            </li>
            <li>
              <div>
                <strong>Item 7</strong>
                <span>Quote accurately to explain the character’s choice</span>
              </div>
              <div className="aligned-bar-track">
                <span className="aligned-bar-fill aligned-bar-fill--ok" style={{ width: "79%" }} />
              </div>
              <em>79%</em>
            </li>
          </ul>
        ) : null}
        <p className="aligned-panel-note">
          RI.5.8 is below 50% across all three classes. Suggested next step: reteach with evidence sentence frames.
        </p>
      </div>
    </div>
  );
}
