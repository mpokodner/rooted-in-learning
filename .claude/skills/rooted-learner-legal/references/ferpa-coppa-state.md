# Student Data Privacy — FERPA, COPPA, PPRA, State Laws

Applied to The Rooted Learner as a SaaS vendor integrating with SIS/LMS and using AI.

**Contents**
1. FERPA basics and the school-official position
2. The exceptions matrix and what each one requires
3. Disclosure recordkeeping (§99.32)
4. De-identification and why it usually fails
5. COPPA and the school-consent pathway
6. PPRA — the one people forget
7. State laws: Maryland, DC, Virginia, and selling beyond
8. AI and LLMs touching student data
9. Cross-district benchmarking dashboards — the hardest case
10. Practical compliance checklist for The Rooted Learner

---

## 1. FERPA basics and the school-official position

FERPA (20 U.S.C. §1232g; 34 CFR Part 99) binds *educational agencies and institutions* that receive U.S. Department of Education funding — not vendors directly. The Rooted Learner is never regulated by FERPA on its own. It is regulated **through the district's contract**, and that is the whole game: a FERPA problem shows up as a breach-of-contract claim, a terminated agreement, and a district that tells its peers.

Two consequences worth internalizing:

- **There is no private right of action under FERPA.** *Gonzaga University v. Doe*, 536 U.S. 273 (2002). Parents cannot sue Michelle under FERPA. They sue under state privacy statutes, consumer protection law, or the district sues under contract. So the operative documents are the contract and the state statutes, not FERPA itself.
- **Enforcement is against the district.** The Student Privacy Policy Office (SPPO) investigates, seeks voluntary compliance, and only withholds ED funding as a last resort. Practically: a district that gets an SPPO complaint because of a vendor will fix the problem by terminating the vendor.

### The school-official exception — the position to occupy

34 CFR §99.31(a)(1)(i)(B) lets a district disclose PII from education records to a contractor without consent if the contractor:

1. Performs an institutional service or function for which the district would otherwise use its own employees;
2. Is under the **direct control** of the district with respect to the use and maintenance of education records;
3. Uses the PII **only for the purposes for which the disclosure was made**; and
4. Is subject to §99.33(a) redisclosure limits — it cannot pass the data on.

The district also must have specified in its **annual FERPA notification** the criteria for who counts as a school official and what a legitimate educational interest is. Michelle can't control that, but she can ask for it during procurement — asking is a credibility signal.

**What this means for product decisions.** Three things break school-official status faster than anything else, and all three are tempting for a small SaaS:

- Using student data to **improve the product generally** (model training, benchmarking, feature development) beyond the specific district's purpose.
- **Retaining data after the engagement ends** without a documented instruction from the district.
- **Sub-processors** (hosting, analytics, an LLM API) that aren't flowed down the same restrictions.

Design so the honest answer to "do you use our students' data for anything other than serving us?" is a flat no.

---

## 2. The exceptions matrix

Baseline: no disclosure of PII from education records without written consent. Then §99.31 lists exceptions. This matrix is what a district's privacy officer is mentally checking against, and what a disclosure log has to name.

| Exception | Citation | Written agreement required? | Redisclosure | Relevance to TRL |
|---|---|---|---|---|
| School officials with legitimate educational interest | §99.31(a)(1) | Not by rule, but universally by contract | Prohibited (§99.33(a)) | **Primary position.** Everything AssessAlign/HallPass does runs here |
| Other schools where student seeks/intends to enroll | §99.31(a)(2) | No | Limited | Only if TRL ever moves records between districts |
| Authorized federal/state officials for audit or evaluation | §99.31(a)(3), §99.35 | **Yes** — must designate the receiving party and specify purpose, scope, duration, destruction | Prohibited | Relevant if a state agency wants TRL data |
| Financial aid | §99.31(a)(4) | No | Limited | Not relevant |
| **Organizations conducting studies for or on behalf of the district** | §99.31(a)(6) | **Yes** — must specify purpose, scope, duration, information disclosed; restrict use to the study; require destruction when no longer needed | Prohibited | The route for **any research or efficacy claim** TRL wants to publish |
| Accrediting organizations | §99.31(a)(7) | No | Limited | Not relevant |
| Parents of a dependent student (IRS) | §99.31(a)(8) | No | — | Not relevant to K-8 |
| Judicial order / lawfully issued subpoena | §99.31(a)(9) | No — but district must make reasonable effort to notify first | Limited | If TRL is served, **notify the district immediately**; the district usually has the right to respond |
| Health or safety emergency | §99.31(a)(10), §99.36 | No | Limited | Relevant if HallPass surfaces a safety flag — build an escalation path, don't improvise |
| Juvenile justice, per state statute | §99.31(a)(5) | Varies | Varies | Not relevant |
| Directory information (no opt-out on file) | §99.31(a)(11), §99.37 | No | — | Never rely on this for a product; opt-outs are inconsistently synced across district systems |
| De-identified data | §99.31(b) | No | — | See §4 below — harder than it sounds |

**Two operational rules that follow from the table:** the studies exception and the audit/evaluation exception are the only two that *require* a written agreement by regulation. If Michelle ever wants to publish outcome data or a case study using student-level results, that is the §99.31(a)(6) route and it needs paper *before* the data moves, not after.

---

## 3. Disclosure recordkeeping (34 CFR §99.32)

Districts must keep, with each student's education records, a record of each request for access and each disclosure of PII. Each entry names the party, and the legitimate interest they had. Exempt from logging: disclosures to the parent/eligible student, disclosures the parent consented to in writing, school officials under (a)(1), directory information, and a few others.

**The strategic point:** most districts do this badly, by hand, in a spreadsheet, when they do it at all. A product that logs disclosures automatically in §99.32-shaped fields is a genuine differentiator in procurement — it makes the district's compliance job easier rather than harder. Fields to capture:

- Timestamp, student identifier, records/fields disclosed
- Recipient (individual and organization)
- The exception relied on, named explicitly
- Stated legitimate interest or purpose
- For redisclosure scenarios, downstream parties and their interests
- Whether the disclosure was system-automated or user-initiated, and which user

Make the log exportable by the district and retained as long as the associated education records are. FERPA sets no retention schedule; districts set their own (often 5 years for temporary records, much longer for permanent ones). Build retention as a district-configurable setting rather than a hardcoded default.

---

## 4. De-identification and why it usually fails

§99.31(b) permits release of records with all PII removed, provided the district has made a reasonable determination that a student's identity is not personally identifiable **taking into account other reasonably available information**. That last clause is the trap.

Removing names and IDs is not de-identification. In a Grade 5 ELA context, re-identification risk comes from:

- **Small cell sizes.** "Three multilingual learners in Grade 5 at School X scored below proficient" identifies those three to anyone in the building.
- **Quasi-identifiers in combination.** Grade + school + EL status + IEP status + gender is frequently unique.
- **Free-text responses.** A student's written answer can identify them by content, handwriting artifacts, or voice.
- **Longitudinal linkage.** Even coded records become identifiable when tracked across time.

Practical thresholds to build in (these are conventions, not statute — districts often specify their own, and NCES guidance is the usual reference point):

- Suppress any cell with **n < 10**, and apply complementary suppression so suppressed cells can't be back-computed from row/column totals.
- Never export free-text student responses outside the district, in any form.
- If using record codes to permit linkage, the code must not be based on any student information, the key must stay with the district, and the code must not be reused across datasets.
- Document the de-identification method per dataset. "We de-identified it" is not evidence; the method is.

---

## 5. COPPA and the school-consent pathway

COPPA (15 U.S.C. §6501 et seq.; 16 CFR Part 312) applies to **operators of online services directed to children under 13**, or with actual knowledge they collect personal information from under-13s. Michelle's core product is Grade 5 ELA — squarely under 13. COPPA applies directly to her, unlike FERPA.

**The 2025 amendments matter and the deadline has passed.** The FTC finalized amendments January 16, 2025; published April 22, 2025; effective June 23, 2025; **full compliance was required by April 22, 2026** — which is behind us. Operators who haven't updated are exposed to enforcement, with civil penalties per violation in the low-$50Ks. Notably, the FTC *declined* to adopt ed-tech-specific amendments, citing anticipated FERPA rulemaking, so the school-authorization pathway continues to run on the FTC's existing guidance rather than codified rule text. **Verify current status before relying on any of this** — this area is moving.

What the amendments added that a small edtech vendor has to actually do:

- **Written information security program (WISP)** — required, not optional. Designate someone responsible, assess risks, implement safeguards, test them, and vet service providers.
- **Written data retention policy** — must be published, must state purposes and timeframes, and indefinite retention is prohibited.
- **Separate verifiable consent** before disclosing children's data to third parties for anything beyond internal operations. Blanket consent no longer covers downstream sharing.
- **Biometric identifiers** (voiceprints, facial geometry, fingerprints) are now personal information. Relevant if any product ever does read-aloud fluency capture — that is voice data on children, and it changes the analysis substantially.
- **Sub-processor accountability** — every SDK, analytics tool, and API that touches student data must be vetted and restricted.

### The school-consent pathway

Under longstanding FTC guidance, a school may consent on parents' behalf **only** where the data is used for a school-authorized educational purpose and nothing else. The school acts as the parents' agent. It is not a waiver — the operator still owes notice, security, data minimization, and parental review/deletion rights.

To rely on it, Michelle needs:
- A **direct notice to the school** describing what is collected, how it's used, categories of third parties receiving it and why, and how the school can review or delete.
- A **signed agreement** with the school or district evidencing the authorization.
- **No advertising, no profiling, no commercial use** of anything collected. Not "no ads we consider intrusive" — none.

The Edmodo action (FTC, August 2023) is the on-point precedent: an edtech platform pursued for using student data for advertising without proper consent, and for pushing the consent burden onto teachers. Do not replicate either pattern.

---

## 6. PPRA — the one people forget

The Protection of Pupil Rights Amendment (20 U.S.C. §1232h) requires parental consent or opt-out for surveys funded by ED that probe eight protected categories — political affiliations, mental health, sexual behavior, illegal behavior, critical appraisals of family members, privileged relationships, religious practices, and family income. It also restricts collecting student information for **marketing purposes**.

Relevant to The Rooted Learner in two places: any social-emotional, belonging, or student-voice survey component; and HallPass, if it ever records reasons for leaving class that touch health or behavior. Design any non-academic data collection so it is district-configurable and opt-out-able, and flag it to the district rather than letting it arrive as a surprise.

---

## 7. State laws

State student-privacy statutes are frequently **stricter than FERPA** and apply to vendors directly.

**Maryland — Ed. Article §4-131 (Student Data Privacy Act of 2015).** This is the home-state statute and it applies to The Rooted Learner as an "operator": an entity engaging with institutions under FERPA's school-official exception, under contract with a Maryland public school or local school system, providing an online service used primarily for a PreK-12 school purpose, issued at the direction of the school, and designed and marketed primarily for that purpose. AssessAlign fits all four prongs.

An operator may not knowingly:
- Engage in **targeted advertising** based on information acquired through the service;
- Use covered information to build a **profile** about a student except in furtherance of a PreK-12 school purpose;
- **Sell** student information; or
- **Disclose** covered information except under the statute's narrow permitted-disclosure list — which includes disclosure to a service provider only if the operator contractually prohibits that provider from using the information for any purpose other than performing the contracted service.

The statute preserves use of information for maintaining, developing, supporting, improving, or diagnosing the service itself — which is the narrow lane for legitimate product telemetry. Keep it narrow and documented; "improving the service" is exactly the phrase auditors flag when it's doing too much work.

**Beyond Maryland.** Selling across the DMV and outward means layering:
- **Virginia** — student data privacy provisions in the Code of Virginia plus the VCDPA for non-student data.
- **DC** — its own student data provisions plus general consumer privacy.
- **New York — Ed. Law §2-d** is the strictest in the country and the one most likely to break a template DPA. It requires a Parents' Bill of Rights appended to every contract, a Data Security and Privacy Plan, adoption of the NIST Cybersecurity Framework, and specific breach notification timelines. If a New York district ever calls, budget real time.
- **California — SOPIPA** and **Illinois — SOPPA** (which requires public posting of contracts and has notification requirements) are the other two that materially change vendor obligations.
- **Maryland Online Data Privacy Act** governs non-student personal data (teacher accounts, newsletter subscribers, site visitors) with strong data-minimization requirements. Check applicability thresholds and exemptions — small businesses may fall outside, but confirm rather than assume.

**Practical approach:** rather than tracking fifty regimes, adopt the **Student Data Privacy Consortium's National Data Privacy Agreement (NDPA)** as the baseline template. Many districts already use it, state-specific exhibits handle local law, and showing up with NDPA-compatible paper shortens procurement dramatically. This is a genuine time-saver for a one-person business.

---

## 8. AI and LLMs touching student data

This is where The Rooted Learner's product is distinctive and where its exposure concentrates.

**The default rule to design around: student PII should never leave the district's boundary into a general-purpose LLM API.** If it must, every one of these has to be true and documented:

- The **LLM provider is a named sub-processor** in the district agreement, flowed down the same restrictions.
- The provider's commercial terms confirm **no training on inputs or outputs** and define retention. Verify the current terms rather than relying on marketing pages — this is a contract term that changes.
- **Zero-data-retention or equivalent** is enabled where available.
- The **prompt payload is minimized** — send the response text needed for scoring, not the student record. An AI tutor does not need home address, IEP status, disciplinary history, or free/reduced-lunch status, and those fields should be structurally excluded from context, not merely omitted by prompt instruction.
- **Outputs are treated as education records** — an AI-generated recommendation about a student, once maintained, is directly related to that student and is an education record. It is subject to inspection, amendment requests, and disclosure logging like anything else. This surprises people and is worth stating explicitly to districts, because it demonstrates that Michelle understands the regime better than the vendors she's competing with.
- **Logs are scrubbed.** Prompt and response logs are the most common accidental PII store in an AI product. Decide retention deliberately and enforce it.

**The architectural recommendation:** separate environments. Public content generation (passages, items, print packs — no student data, full AI use) runs on entirely different infrastructure and credentials from district-instance processing (student responses, scoring, recommendations — restricted models, restricted retention). Being able to draw that boundary on one slide answers half a security questionnaire.

**Automated decisions.** If AI output drives placement, intervention assignment, or anything consequential, expect districts to ask about bias testing and human review. Keep a human in the loop by design and say so — "teacher-facing recommendation, never an automated placement" is both the safer legal posture and the better product story.

---

## 9. Cross-district benchmarking dashboards — the hardest case

This is the product idea most likely to create a serious problem, so work through it carefully whenever it comes up.

**The core issue:** District A's student data was disclosed to Michelle under District A's school-official exception, for District A's purposes. Using it to generate comparative insight for District B is a **use beyond the purpose of the disclosure** and, if it's identifiable, an unauthorized redisclosure under §99.33(a). School-official status does not aggregate across clients.

**What makes it workable, if anything does:**

1. **Explicit contractual authorization from every contributing district**, naming aggregate benchmarking as a permitted purpose, with the right to withdraw. Silence in the DPA is a no.
2. **Genuine de-identification before aggregation**, applying §4 above — suppression thresholds, complementary suppression, no free text, documented method.
3. **No district-identifiable comparisons without consent.** "Your district vs. peers" where peers are named or inferable from a small pool is a disclosure about District A to District B. Anonymize the comparison set and require a minimum number of contributing districts before any comparison renders.
4. **Small-N logic on both dimensions** — subgroup *and* district. Grade 5 EL students in a small district is a re-identifiable cell.
5. **Consider the §99.31(a)(6) studies route instead** if the purpose is research or efficacy claims, with proper written agreements and destruction terms.
6. **Check state law separately** — Maryland's profiling prohibition and other states' provisions may constrain this even where FERPA and the contracts allow it.

**The honest framing for Michelle:** benchmarking is a legitimately valuable feature and also the single most likely thing to end a district relationship if done casually. If it's going to exist, it should be built with district authorization from the first contract rather than retrofitted after the data has already accumulated under narrower terms — retrofitting means going back to signed clients and asking permission to use data already collected, which is a bad conversation.

---

## 10. Compliance checklist for The Rooted Learner

Grouped by when it actually blocks something.

### Before the first district contract is signed
1. Public **privacy policy** and **terms of service** covering FERPA school-official positioning, COPPA school-consent pathway, data categories, retention, deletion, sub-processors, and security.
2. **COPPA direct notice to schools** — updated for the 2025 amendments, not a pre-2025 template.
3. **Written information security program (WISP)** — required by the amended COPPA Rule and asked for in nearly every district security review.
4. **Written data retention and deletion policy** with stated purposes and timeframes.
5. **Sub-processor register** — hosting, database, email, analytics, LLM provider, payments. Name each, note what data it touches, confirm flow-down terms.
6. **DPA template** — NDPA-aligned, so districts recognize it.
7. **Data flow map** — where student data enters, moves, is stored, and leaves. Incomplete data mapping is the most common finding in edtech privacy audits, and it makes every other artifact impossible to produce credibly.

### Before the first real student record enters the system
8. **Role-based access control**, per-user accounts, no shared admin logins.
9. **Encryption** in transit and at rest.
10. **Audit logging** of who accessed which student records when, exportable by the district.
11. **§99.32-shaped disclosure logging** where the product mediates disclosures.
12. **Configurable retention and deletion** per district, plus verified deletion on contract termination.
13. **DPIA completed** for the module — see `dpia-and-incident-response.md`.
14. **Incident response plan** written and tabletop-tested once.

### Ongoing
15. Re-run the DPIA when data flows change materially.
16. Annual review of privacy policy, retention policy, WISP, and sub-processor register.
17. Track state-law changes for every state with an active client.
18. Keep the compliance evidence file current — it is the sales asset, not just the audit defense.

### Take to counsel
- Review of the privacy policy, ToS, and DPA template before they go public.
- Whether the LLM provider's current commercial terms satisfy school-official flow-down.
- Whether AssessAlign's intended telemetry falls inside Maryland §4-131's "maintaining, developing, supporting, improving, or diagnosing" carve-out.
- Whether benchmarking as designed is permissible under FERPA and Maryland law with district authorization, and what that authorization clause must say.