# DPIAs, Privacy Risk Assessment & Incident Response

**Contents**
1. DPIA template and how to run one
2. Risk register — the standard risks for an AI edtech platform, with mitigations
3. Incident response playbook — K-12 student data breach
4. Breach notification obligations
5. Common audit findings to design against

---

## 1. DPIA template and how to run one

A Data Protection Impact Assessment is a documented analysis of how a feature processes student data, what could go wrong, and what's been done about it. FERPA doesn't require one. Districts increasingly ask for one anyway, and a **DPIA library** — one per module — is one of the most credible artifacts a small vendor can put in front of a procurement reviewer. It converts a compliance chore into sales collateral.

### When to run one

Trigger a DPIA when a feature or change:
- Processes student PII at any volume;
- Involves profiling, predictive analytics, or informs high-stakes decisions (placement, intervention, discipline);
- Combines data across systems (SIS + LMS + assessment + behavior);
- Introduces a new sub-processor or external API — **including any new LLM provider or model**;
- Migrates infrastructure, or opens a new state with different law;
- Follows an incident or a near miss.

### The template

Fill every section. Write "not applicable, because…" rather than leaving a blank — a district reviewer reads blanks as gaps.

```
DPIA — [MODULE NAME]                     DRAFT — ATTORNEY REVIEW REQUIRED
Version [N] · [DATE] · Owner: Michelle Marshall, The Rooted Learner LLC

1. PROJECT OVERVIEW
   - What the module does, in plain language
   - The specific educational purpose it serves
   - Who uses it (teacher / admin / student / parent) and how
   - Districts or states in scope

2. DATA INVENTORY
   Table: Field | Category (identity / academic / behavioral / health /
   family / demographic / operational) | Source (SIS, LMS, teacher entry,
   student input, generated) | Why it is strictly necessary | Retention
   - Flag anything that is "nice to have" — then delete it from the design

3. DATA FLOW MAP
   - Entry points, transformations, storage locations, exit points
   - Every system boundary crossed, including API calls to third parties
   - Where data is at rest and in which jurisdiction
   - Diagram if possible; prose if not

4. LEGAL BASIS AND APPLICABLE LAW
   - FERPA exception relied on (usually school official, §99.31(a)(1))
   - COPPA pathway (school consent) and what notice supports it
   - State statutes for each state in scope
   - PPRA if any non-academic collection
   - Contractual obligations from district DPAs that exceed statute

5. NECESSITY AND PROPORTIONALITY
   - For each data category: is it strictly necessary for the stated
     educational purpose? What breaks if it's removed?
   - Data minimization decisions made and fields dropped

6. ACCESS AND ROLES
   - Who can see student-level data, in what role, and why that
     constitutes a legitimate educational interest
   - Internal access (including Michelle's own admin access)
   - Sub-processor access

7. RISK ANALYSIS
   Table: Risk | Likelihood (L/M/H) | Impact (L/M/H) | Score |
   Mitigation | Residual risk
   Use §2 below as the starting list; add module-specific risks

8. MITIGATIONS AND CONTROLS
   - Technical (encryption, RBAC, logging, suppression thresholds,
     model configuration, retention automation)
   - Process (approval workflows, review cadence, training)
   - Contractual (DPA clauses, sub-processor flow-down)

9. AI-SPECIFIC ANALYSIS  [if the module uses a model]
   - Which model/provider, and its data-handling terms
   - Exact prompt payload — what student data reaches the model
   - Training-on-inputs status and retention setting
   - Are outputs about students maintained? (If yes: they are education
     records — say how they're handled)
   - Human-in-the-loop design for any consequential output
   - Bias considerations, especially for multilingual learners
   - Log handling and scrubbing

10. STAKEHOLDER CONSULTATION
    - District privacy/IT contacts consulted
    - Educators consulted (they surface real classroom workarounds)
    - Counsel review status

11. DECISION LOG
    - What was changed as a result of this DPIA
    - Features limited or dropped
    - Residual high risks accepted, and why

12. REVIEW SCHEDULE
    - Next scheduled review; triggers for early review
```

### Running it

Steps 2 and 3 are where the real work is and where most vendors fail — regulators repeatedly find edtech providers cannot fully explain what they collect, where it flows, and how long it's kept. Do the data map first and honestly; everything downstream depends on it.

---

## 2. Risk register — standard risks with mitigations

Starting list for any module touching student data. Score likelihood × impact and prioritize; anything high/high needs a mitigation before launch, not after.

| # | Risk | Typical cause | Mitigation |
|---|---|---|---|
| 1 | Unauthorized access to student records | Over-broad roles, shared admin accounts, permissive API scopes | RBAC with least privilege; per-user accounts; scoped API keys; quarterly access review |
| 2 | PII leakage into LLM prompts | Convenience — passing the whole record instead of the needed field | Structural field allowlist at the boundary, not prompt instructions; automated payload tests |
| 3 | PII persisted in model or application logs | Default logging of full request/response | Scrub at write time; short log retention; test that scrubbing actually works |
| 4 | Data used beyond the disclosed purpose | Product improvement, benchmarking, marketing case studies | Written purpose limitation; separate environments for public content vs. district data; explicit authorization before any secondary use |
| 5 | Re-identification of "anonymous" analytics | Small subgroups, free text, longitudinal linkage | n<10 suppression with complementary suppression; no free-text export; documented method |
| 6 | Sub-processor mishandling | Vendor added without vetting; no flow-down terms | Sub-processor register; contractual flow-down; review before adding any new service |
| 7 | Over-collection | Ingesting whole SIS records because the integration allows it | Field-level ingestion allowlist; DPIA §5 justification per field |
| 8 | Indefinite retention | No deletion logic ever written | Configurable retention; automated deletion; verified purge on termination |
| 9 | Failure to delete on contract end | Manual process, forgotten | Termination runbook with deletion certificate to the district |
| 10 | Bias in AI recommendations against multilingual learners | Training data and prompt design not tested on the population the business exists to serve | Test outputs across EL/non-EL, IEP/non-IEP; human review required for consequential outputs; document testing |
| 11 | Credential compromise | No MFA, weak secrets management | MFA everywhere; secrets manager; rotate keys; no credentials in code or repos |
| 12 | Misconfigured cloud storage | Default-public buckets, exposed endpoints | Infrastructure review; automated scanning; deny-by-default |
| 13 | Student work incorporated into products | Convenient exemplars from real classrooms | Absolute rule: fabricate or license exemplars; never harvest |
| 14 | Directory-opt-out not honored | Opt-out lives in the SIS, not synced downstream | Ingest opt-out flags; suppress accordingly; don't rely on directory info for product function at all |
| 15 | Michelle's own HCPSS students' data entering the system | Piloting in her own classroom | Do not pilot in HCPSS. See SKILL.md §4 |

---

## 3. Incident response playbook — K-12 student data breach

`DRAFT — ATTORNEY REVIEW REQUIRED`. Print this and keep it somewhere retrievable when systems are down.

### Phase 0 — Immediately (first hour)

- **Preserve everything.** Suspend log rotation and any auto-deletion. Snapshot affected systems. Do not "clean up." Issue an internal litigation hold in writing, even to yourself.
- **Start a written timeline.** Time, what was observed, who was notified, what was done. Contemporaneous notes matter enormously later.
- **Do not notify anyone externally yet** except counsel. Early speculative statements to districts become the record.
- **Contact counsel today.** Many contractual notice windows are 24–72 hours; some state statutes are tighter. Counsel may also establish privilege over the investigation.

### Phase 1 — Triage and containment (first 24 hours)

- Determine whether the incident is **ongoing**. Stop the bleeding first: revoke credentials, disable the affected integration, take the endpoint offline.
- Scope it: which systems, which districts, which students, which fields, what time window.
- Determine whether data was **accessed** versus merely **exposed** — the distinction drives notification obligations.
- Assign one person as incident lead (Michelle) and one point of contact per affected district.

### Phase 2 — Assessment (24–72 hours)

- Confirm the categories of information involved. Names plus academic records is one analysis; anything touching SSNs, health information, or financial data is a materially different one.
- Determine the cause: credential compromise, misconfiguration, sub-processor incident, insider error, malicious actor.
- Check each affected district's **contractual notification clause** — timing, format, recipient, and what information they require. These vary and they control.
- Check **state breach notification statutes** for every state where affected students reside — not just Maryland.

### Phase 3 — Notification

Notify in this order, on counsel's guidance:
1. **Affected districts**, per contract terms. Districts, not parents — the district holds the relationship with families and generally controls parent notification. Offering to draft parent-facing language is helpful; sending it yourself usually is not.
2. **Sub-processors and providers** if the incident originates or propagates through them.
3. **Regulators** where required by state law.
4. **Insurer** — cyber liability carriers typically require prompt notice as a condition of coverage.

What the district notice should contain: what happened, when it was discovered, what data was involved, which of their students, what has been done to contain it, what is being done to prevent recurrence, and a named contact. Do not speculate about cause before the investigation supports it.

### Phase 4 — Remediation and postmortem

- Fix the root cause, not the symptom.
- Update the relevant DPIA with the newly identified risk and the corrective action.
- Blameless written postmortem. Retain it — evidence of corrective action materially changes how regulators and districts respond.
- Re-run the tabletop with the new scenario.

### Tabletop it once, before you need it

Two hours, once a year, with a made-up scenario: "an API key was committed to a public repo three weeks ago." Walk the phases. The point is finding out that you don't know who your cyber insurance contact is *before* it matters.

---

## 4. Breach notification obligations

Three separate layers, and the strictest controls:

1. **Contractual.** Almost always the tightest — 24 to 72 hours to notify the district is standard in district DPAs and in the NDPA. Read the actual clause in each executed agreement; do not assume they match.
2. **State statute.** Maryland's Personal Information Protection Act (Comm. Law §14-3501 et seq.) governs breaches of personal information for Maryland residents, with notification required as soon as reasonably practicable after the investigation concludes and an outer limit measured in days, not months. Other states differ — New York Ed. Law §2-d has its own regime with short timelines and specific content requirements. Verify current text for each affected state at the time of the incident.
3. **FERPA.** FERPA itself has **no breach notification requirement**. This surprises people. The obligation arrives through the contract and state law. It does not mean a FERPA-adjacent breach is low-stakes — it means the consequences are contractual and reputational rather than regulatory.

**Practical rule:** treat the shortest applicable window as the deadline and work backward. If a district contract says 24 hours from discovery, the assessment phase does not get to run for a week first — notify within the window with what is known, and supplement as the investigation develops. Counsel should confirm the framing.

---

## 5. Common audit findings to design against

These are the recurring failures across edtech privacy audits. Each one is cheap to avoid at design time and expensive to fix later.

- **Incomplete data flow mapping and records of processing.** Nearly universal finding. It undermines every other artifact — you cannot write a credible DPIA or answer a security questionnaire without it.
- **Over-collection.** Ingesting whole SIS records because the integration makes it easy, collecting broad telemetry "for later."
- **Vague data-use language.** "We may use data to improve our services" or "for any lawful purpose" in a privacy policy or contract. Auditors flag it and it breaks both the FERPA school-official framing and the COPPA educational-purpose limitation. Write narrow, education-specific purpose language.
- **Weak sub-processor management.** No register, no flow-down terms, vendors added without review.
- **Poor access control and traceability.** Shared admin accounts, no per-user audit trail, inability to reconstruct who saw what.
- **No retention or deletion logic.** Data kept forever by default.
- **Untested incident response.** A plan that has never been exercised.
- **Ad hoc training and no internal audit cadence.** For a one-person company this means: schedule it, document that you did it, keep the record.

### Take to counsel
- Review of the incident response plan against the notification clauses in actually-executed district agreements.
- Which state breach notification statutes apply given the client footprint, and their timelines.
- Whether cyber liability insurance is warranted at current scale, and what coverage limits and notice conditions apply.
- Whether the DPIA should be conducted under attorney-client privilege for higher-risk modules.