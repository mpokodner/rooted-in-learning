/**
 * DRAFT COPY — owner review required
 * Public Phase 1 strings. Claims tests scan this file.
 */

import { COMPANY_NAME, PRODUCT_NAME } from "@/config/site";

export const copy = {
  home: {
    heroTitle: "See where every student stands, standard by standard.",
    heroLead:
      "A standards-aligned grouping companion for grades 3–8 ELA. Built with teachers, for the classroom they already have.",
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
    whatBody: `${PRODUCT_NAME} is teacher-facing software that helps grades 3–8 ELA teams form small groups from item-level evidence, using the standards they already teach.`,
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
    lead: "Start with the Claude AI and Cowork guide, or the classroom resources already in the Teachers Pay Teachers shop. Instructional videos and paid products are on the way.",
    guideTitle: "Claude AI and Cowork",
    guideBody:
      "For classroom teachers planning with Claude. Prompt templates and classroom workflows. It is free, and it arrives by email.",
    tptTitle: "Teachers Pay Teachers",
    tpt: "Classroom resources you can use this week, from a teacher who is still in the work.",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "Instructional videos and paid products are in progress. The teacher toolkit below is ready now.",
  },
  insights: {
    title: "Blog",
    lead: "Field notes from inside the work — diagnosis, grouping, and what actually holds up in a classroom.",
  },
  about: {
    title: "About",
    lead: `${COMPANY_NAME} is built by a classroom educator. The work starts with diagnosis, not a pitch.`,
    story:
      "Michelle Pokodner brings 12+ years in grades 1–8 classrooms, with a focus in the science of reading. This company exists because grouping from a single score kept failing the students in front of her.",
  },
  forms: {
    studentNotice: "Please do not submit student information through this form.",
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
