import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const aiSkillsPath = process.env.AI_SKILLS_PATH || path.resolve(process.cwd(), "../ai-skills");
const outputDir = path.resolve(process.cwd(), "src/data");

interface SkillManifestEntry {
  slug: string;
  category: string;
  description: string;
  when_to_use: string;
  related_references: string[];
  file_path: string;
}

function extractFrontmatter(content: string): { description: string } {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return { description: "" };
  const descMatch = match[1].match(/description:\s*(.+)/);
  return { description: descMatch?.[1]?.trim().replace(/^["']|["']$/g, "") || "" };
}

function extractWhenToUse(content: string): string {
  const match = content.match(/##\s*When\s*To\s*Use\s*\n([\s\S]*?)(?=\n##|\n---|\n\*\*|$)/i);
  if (!match) return "";
  const lines = match[1].trim().split("\n").slice(0, 5);
  return lines.join(" ").replace(/^[-*]\s*/gm, "").trim().slice(0, 300);
}

function extractReadReferences(content: string): string[] {
  const refs: string[] = [];
  const regex = /Read\s+references\/([^\s\n]+)/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    refs.push(`references/${m[1]}`);
  }
  return refs;
}

function walkDir(dir: string, ext: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full, ext));
    } else if (entry.name.endsWith(ext) || ext === "*") {
      results.push(full);
    }
  }
  return results;
}

function getCategoryFromPath(filePath: string): string {
  const parts = filePath.split(path.sep);
  const commandsIdx = parts.findIndex((p) => p === "commands");
  if (commandsIdx < 0 || commandsIdx + 1 >= parts.length) return "meta";
  const folder = parts[commandsIdx + 1];
  if (folder.endsWith(".md")) return "meta";
  const categoryMatch = folder.match(/^([^(]+)/);
  return categoryMatch?.[1]?.replace(/_/g, "-").replace(/-$/, "") || folder;
}

function main() {
  if (!existsSync(aiSkillsPath)) {
    console.warn(`⚠ ai-skills repo not found at ${aiSkillsPath}`);
    console.warn("  Generating empty manifest/content files.");
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    writeFileSync(path.join(outputDir, "ai-skills-manifest.json"), "[]", "utf-8");
    writeFileSync(path.join(outputDir, "ai-skills-content.json"), "{}", "utf-8");
    return;
  }

  console.log(`Reading ai-skills from: ${aiSkillsPath}`);

  const commandsDir = path.join(aiSkillsPath, ".claude", "commands");
  const referencesDir = path.join(aiSkillsPath, "references");

  const commandFiles = walkDir(commandsDir, ".md");
  const manifest: SkillManifestEntry[] = [];

  for (const file of commandFiles) {
    const content = readFileSync(file, "utf-8");
    const relPath = path.relative(aiSkillsPath, file);
    const slug = path.basename(file, ".md");
    const category = getCategoryFromPath(file);
    const { description } = extractFrontmatter(content);
    const whenToUse = extractWhenToUse(content);
    const refs = extractReadReferences(content);

    manifest.push({
      slug,
      category,
      description,
      when_to_use: whenToUse,
      related_references: refs,
      file_path: relPath,
    });
  }

  const contentMap: Record<string, string> = {};

  for (const file of commandFiles) {
    const relPath = path.relative(aiSkillsPath, file);
    contentMap[relPath] = readFileSync(file, "utf-8");
  }

  const allRefFiles = walkDir(referencesDir, "*");
  for (const file of allRefFiles) {
    const relPath = path.relative(aiSkillsPath, file);
    contentMap[relPath] = readFileSync(file, "utf-8");
  }

  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

  writeFileSync(
    path.join(outputDir, "ai-skills-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );
  writeFileSync(
    path.join(outputDir, "ai-skills-content.json"),
    JSON.stringify(contentMap, null, 2),
    "utf-8"
  );

  const contentSizeKB = (Buffer.byteLength(JSON.stringify(contentMap)) / 1024).toFixed(1);
  console.log(`✓ Manifest: ${manifest.length} skills`);
  console.log(`✓ Content: ${Object.keys(contentMap).length} files (${contentSizeKB} KB)`);
  console.log(`✓ Output: ${outputDir}/`);
}

main();
