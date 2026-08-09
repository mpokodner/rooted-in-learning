import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { SkillManifest } from "@/types";

import manifestData from "@/data/ai-skills-manifest.json";
import contentData from "@/data/ai-skills-content.json";

const aiSkillsPath = process.env.AI_SKILLS_PATH;

export function getSkillsManifest(): SkillManifest[] {
  return manifestData as SkillManifest[];
}

export function getSkillContent(slugs: string[]): Record<string, string> {
  const manifest = getSkillsManifest();
  const selected = manifest.filter((s) => slugs.includes(s.slug));

  const filePaths = new Set<string>();
  for (const skill of selected) {
    filePaths.add(skill.file_path);
    for (const ref of skill.related_references) {
      filePaths.add(ref);
    }
  }

  const result: Record<string, string> = {};
  const content = contentData as Record<string, string>;

  for (const relPath of filePaths) {
    if (aiSkillsPath && existsSync(path.join(aiSkillsPath, relPath))) {
      result[relPath] = readFileSync(path.join(aiSkillsPath, relPath), "utf-8");
    } else if (content[relPath]) {
      result[relPath] = content[relPath];
    }
  }

  return result;
}
