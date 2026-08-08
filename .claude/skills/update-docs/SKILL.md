---
name: update-docs
description: Update README.md and CLAUDE.md based on code changes since they were last committed. Requires a clean git working tree.
allowed-tools: Bash, Read, Write, Edit
disable-model-invocation: true
argument-hint: "[optional: README.md or CLAUDE.md to update only one]"
---

# Update Documentation

Update `README.md` and `CLAUDE.md` based on code changes since they were last modified.

## Pre-flight Check

**CRITICAL: Check git status first. If the working tree is dirty, stop immediately.**

```bash
git status --porcelain
```

If this outputs anything, STOP and tell the user:
> "Working tree is dirty. Please commit or stash your changes before running /update-docs."

Do NOT proceed with any documentation updates if there are uncommitted changes.

## Files to Update

Default files (unless overridden by $ARGUMENTS):

1. **CLAUDE.md** — Development guide, architecture, commands, database schema, integrations, skills, conventions
2. **README.md** — Project overview, tech stack, getting started, structure, scripts

If user provides arguments, only update the specified file(s): $ARGUMENTS

## Update Process

For each documentation file:

### 1. Find Changes Since Last Doc Commit

Get the last commit that modified this specific doc file:

```bash
git log -1 --format="%H" -- <doc-file>
```

Then find all code changes since that commit:

```bash
git diff <last-doc-commit>..HEAD --stat
git log --oneline <last-doc-commit>..HEAD
```

If there are no commits since the doc was last updated, skip that file and report "already up to date."

### 2. Analyze What Changed

Look at the commits and diffs to understand what changed. Use this mapping to determine which sections need updating:

| What changed | CLAUDE.md sections to update | README.md sections to update |
|-------------|------------------------------|------------------------------|
| New routes in `src/app/` | Project Structure, Architecture & Auth | Project Structure |
| New migration in `supabase/migrations/` | Database Schema | — |
| New API route in `src/app/api/` | Project Structure, Key Integrations | Project Structure |
| `package.json` changes | Tech Stack, Development Commands | Tech Stack, Scripts |
| New `.claude/skills/` directory | Claude Code Skills | — |
| New env vars in `.env.example` | Environment Variables | — |
| `middleware.ts` changes | Architecture & Auth | — |
| New components in `src/components/` | Project Structure | — |
| New lib files in `src/lib/` | Project Structure | — |
| Sanity schema changes in `src/sanity/` | Project Structure | — |
| Style/design changes | Conventions | — |

### 3. Read Before Writing

ALWAYS read the current content of each file before making changes:
- Understand the existing structure and formatting
- Preserve table formatting, section order, and style
- Only update sections that are actually affected by code changes
- Do not rewrite unchanged sections

### 4. Be Conservative

- Only update what actually changed
- Do not add speculative documentation
- Do not remove content unless the feature was removed
- Preserve existing examples unless they are now incorrect
- Keep the same markdown formatting style (tables, code blocks, etc.)

### 5. Specific Section Guidance

#### CLAUDE.md

- **Project Overview**: Only update if the project's purpose or scope fundamentally changed
- **Tech Stack**: Update versions and add/remove technologies
- **Development Commands**: Add new npm scripts, update changed ones
- **Project Structure**: Add new directories/route groups, update descriptions
- **Architecture & Auth**: Update auth flow, middleware tiers, client patterns
- **Database Schema**: Add new tables, update column lists, add new storage buckets
- **Key Integrations**: Add new integration flows, update existing ones
- **Environment Variables**: Add new env var groups
- **Claude Code Skills**: Add new skills, update descriptions
- **Conventions**: Add new patterns, update existing ones

#### README.md

- **Tech Stack**: Keep the one-liner-per-technology format
- **Getting Started**: Only update if setup steps changed
- **Project Structure**: Keep the abbreviated tree format
- **Scripts**: Add new npm scripts

## Output

After updating, provide a summary:

1. List each file that was updated (or "already up to date")
2. For each updated file, list the sections that were modified
3. Note any sections that might need manual review
4. Show the count of commits that were incorporated
