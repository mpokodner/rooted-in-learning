/**
 * DRAFT COPY — owner review required
 * Public Phase 1 strings. Claims tests scan this file.
 */

import { COMPANY_NAME, PRODUCT_NAME } from "@/config/site";

export const copy = {
  home: {
    heroTitle: `${PRODUCT_NAME} helps teachers regroup students from what they can actually do — not from a single score.`,
    heroLead:
      "A standards-aligned grouping companion for elementary ELA. Built with teachers, for the classroom they already have.",
    problemTitle: "A composite score is not a grouping plan.",
    problemBody:
      "When every student in a band gets the same passage, small groups stay too large and instruction stays too general. Teachers already know this. The missing piece is a way to see the next instructional move without extra meetings.",
    howTitle: "See the standard. Form the group. Teach the next step.",
    closeTitle: "Request a conversation",
    closeBody: `If you lead assessment, ELA, or multilingual learning, we will walk through how ${PRODUCT_NAME} would sit beside the tools you already use.`,
  },
  aligned: {
    title: `${PRODUCT_NAME}`,
    lead: "Turn assessment evidence into instructional groups teachers can use this week.",
    notice: "AssessAlign is now AlignED.",
    whatTitle: "What it is",
    whatBody: `${PRODUCT_NAME} is teacher-facing software that helps elementary ELA teams form small groups from item-level evidence, using the standards they already teach.`,
    notTitle: "What it is not",
    notBody:
      "It is not a screener, not a replacement for your assessment vendor, and not a student-facing product. Students do not log in.",
  },
  partner: {
    title: "For schools and districts",
    lead: `Partnership starts with a conversation about your data, your agreement, and whether ${PRODUCT_NAME} belongs in the stack.`,
    dpa: "We will walk through your data-protection agreement. We do not claim a pre-signed standard DPA on this page.",
    price: null as string | null,
  },
  educators: {
    title: "For educators",
    lead: "Classroom-ready thinking, a teacher toolkit, and — when it is ready — a grouping kit you can download.",
    groupingSoon: "The grouping kit is coming soon.",
    tpt: "Shop classroom resources on Teachers Pay Teachers.",
  },
  insights: {
    title: "Insights",
    lead: "Field notes from inside the work — diagnosis, grouping, and what actually holds up in a classroom.",
  },
  about: {
    title: "About",
    lead: `${COMPANY_NAME} is built by a classroom educator. The work starts with diagnosis, not a pitch.`,
    story:
      "Michelle Van Slyke has spent three decades in K–8 classrooms and leadership. This company exists because grouping from a single score kept failing the students in front of her.",
  },
  contact: {
    title: "Request a conversation",
    lead: "Tell us who you are and what you are trying to solve. We read every note.",
    routes: {
      district: "School or district conversation",
      educator: "Educator or classroom question",
      press: "Press or partnership",
    },
  },
  footer: {
    blurb: `${COMPANY_NAME} builds teacher-facing tools and resources so grouping decisions can match the standard in front of the child.`,
  },
} as const;
