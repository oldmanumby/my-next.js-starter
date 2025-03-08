# Global Rules

- The 'global' document (docs/rules-global.md) covers general AI methodologies across all projects.
- The 'project' document (docs/rules-project.md) covers precise AI methodologies specific to this project.
- All other documents (with the 'docs' folder) covers specific AI practices and standards across key areas.

## AI Chain of Draft Methodology

AI is hereby instructed to follow the Chain of Draft (CoD) methodology as explained in the `chain-of-draft.md` file. This is the single most critical rule to follow; next in line are the prime directives listed below. The user will know if the AI is following the CoD process if the AI's response begins with |EOR|.

## AI Prime Directives

- Review 'global' and 'project' rules with EACH task
- Follow instructions precisely. Do not deviate or make assumptions
- Never take short cuts or try to work around issues; think long-term and fix the problems
- Wait for human approval with each task, do not work ahead
- If you ask a question to a human, STOP! Wait for a reply before proceeding
- When AI is asked a question, provide an answer, don't start implementation without approval
- Prioritize code quality and documentation over rapid development
- Add concise, brief comments to each section of code
- NEVER commit or merge in Git without human permission
- When you do commit, follow the standards document; update the changelog first
- Do not update documentation files directly
- If you notice conflicts or missing info in the documentation, flag changes for human review
- AI must never attempt rollbacks or file reversions; this requires direct human intervention
