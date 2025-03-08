# AI Chain of Draft Workflow

This project utilizes the following methodology to improve efficiency and the cost (in tokens) for a coding project. The AI is hereby instructed to follow the appropriate prompting template (see below) or technique in ALL responses, whether the user prompts in the correct manner or not.

**Chain of Draft** (CoD), a prompting strategy inspired by how humans naturally solve problems - by jotting down minimal notes rather than verbose explanations. This contrasts with traditional Chain of Thought (CoT) prompting which produces detailed step-by-step reasoning but consumes significant tokens and increases latency. The researchers tested CoD against CoT across various reasoning tasks and found:

- Similar or better accuracy compared to Chain of Thought
- Token usage reduced by up to 92.4%
- Latency reduced by 48-76%

**To apply CoD in prompts:**

Instead of asking for detailed explanations, request minimal draft reasoning. Suggest a word limit per reasoning step (e.g., 5 words). Use this prompt template:

"Think step by step, but only keep a minimum draft for each thinking step, with 5 words at most. Return the answer at the end of reasoning (EOR) with the following indicator: |EOR|."

This approach could be particularly valuable for applications with latency or cost constraints while maintaining the benefits of structured reasoning.

**How It Works**

Instead of verbose reasoning, CoD encourages AIs/LLMs to generate concise, information-dense intermediate steps.

## Chain of Draft Templates

Here a comprehensive collection of Chain of Draft templates in markdown format. These templates cover a wide range of scenarios and can be easily copied and pasted into prompts.

The templates follow the key principles from the research paper:

- Each limits reasoning steps to 5 words or less
- All focus on capturing only essential information
- Each includes the |EOR| indicator to clearly mark the final answer
- The structure emphasizes minimal drafts rather than verbose reasoning

The collection includes templates for:

- General purpose problem-solving
- Math and logic problems
- Programming and technical tasks
- Business analysis and decision-making
- Writing and content creation
- Research and analysis
- Education and learning
- Project planning
- Critical thinking

Use these templates as-is or adapt them to specific needs. The beauty of the Chain of Draft approach is that it works across domains while consistently reducing token usage and improving efficiency.

# Chain of Draft Prompt Templates

## General Purpose Templates

### Basic CoD Template

```
Answer the following question using Chain of Draft reasoning. Think step by step, but keep each step to 5 words or less. After your minimal reasoning steps, provide your final answer following the |EOR| indicator.

[Your question here]
```

### Universal Problem-Solving Template

```
Solve this problem using Chain of Draft. Each reasoning step should be 5 words maximum. List your minimal steps, then provide the final answer after a |EOR| indicator.

[Problem description]
```

### Quick Analysis Template

```
Analyze this using Chain of Draft (5 words max per step). Provide your conclusion after the |EOR| indicator.

[Topic to analyze]
```

## Problem-Solving Templates

### Math Problem Template

```
Solve this math problem using Chain of Draft. Write the shortest possible calculation steps (5 words max per step). Provide final answer after |EOR| indicator.

[Math problem]
```

### Logic Puzzle Template

```
Work through this logic puzzle using Chain of Draft. For each deduction, use no more than 5 words. Provide your solution after the |EOR| indicator.

[Logic puzzle]
```

### Decision-Making Template

```
Help me decide using Chain of Draft reasoning. For each consideration, use maximum 5 words. Recommend final decision after |EOR| indicator.

[Decision to make]
```

### Troubleshooting Template

```
Troubleshoot this issue using Chain of Draft. Each diagnostic step should use 5 words or less. Provide final solution after |EOR| indicator.

[Problem description]
```

## Programming and Technical Templates

### Code Review Template

````
Review this code using Chain of Draft. Identify issues with 5 words max per item. Provide corrected code after |EOR| indicator.

```[Code block]```
````

### Algorithm Design Template

```
Design an algorithm for this problem using Chain of Draft. Each step of your algorithm should be 5 words or less. Present final algorithm after |EOR| indicator.

[Problem to solve]
```

### API Design Template

```
Design an API using Chain of Draft approach. Each endpoint/feature description: 5 words max. Provide complete API spec after |EOR| indicator.

[API requirements]
```

### Technical Architecture Template

```
Outline a technical architecture using Chain of Draft. Each component: 5 words max. Present complete architecture after |EOR| indicator.

[System requirements]
```

## Business and Professional Templates

### Business Analysis Template

```
Analyze this business scenario using Chain of Draft. Each insight should be 5 words maximum. Provide final assessment after |EOR| indicator.

[Business scenario]
```

### SWOT Analysis Template

```
Perform a SWOT analysis using Chain of Draft. Each point: 5 words max. Present final strategic recommendation after |EOR| indicator.

[Company/situation to analyze]
```

### Meeting Agenda Template

```
Create a meeting agenda using Chain of Draft. Each agenda item: 5 words max. Provide final structured agenda after |EOR| indicator.

[Meeting purpose and participants]
```

### Email Response Template

```
Draft an email response using Chain of Draft. Plan key points using 5 words max per point. Provide complete email after |EOR| indicator.

[Email to respond to]
```

## Writing and Content Templates

### Content Outline Template

```
Create a content outline using Chain of Draft. Each section: 5 words max. Provide final structured outline after |EOR| indicator.

[Content topic]
```

### Essay Structure Template

```
Structure an essay using Chain of Draft. Each paragraph purpose: 5 words max. Provide complete essay structure after |EOR| indicator.

[Essay topic]
```

### Story Plotting Template

```
Plot a story using Chain of Draft. Each plot point: 5 words max. Present final story outline after |EOR| indicator.

[Story concept]
```

### Blog Post Template

```
Plan a blog post using Chain of Draft. Each section purpose: 5 words max. Provide final blog structure after |EOR| indicator.

[Blog topic]
```

## Research and Analysis Templates

### Research Question Template

```
Develop research questions using Chain of Draft. Each thought process: 5 words max. Present final research questions after |EOR| indicator.

[Research topic]
```

### Data Analysis Template

```
Plan a data analysis using Chain of Draft. Each analytical step: 5 words max. Provide complete analysis plan after |EOR| indicator.

[Data description and goals]
```

### Literature Review Template

```
Outline a literature review using Chain of Draft. Each source contribution: 5 words max. Present final review structure after |EOR| indicator.

[Research area]
```

### Hypothesis Formation Template

```
Form a hypothesis using Chain of Draft reasoning. Each consideration: 5 words max. State final hypothesis after |EOR| indicator.

[Observation or question]
```

## Education and Learning Templates

### Concept Explanation Template

```
Explain this concept using Chain of Draft. Each key point: 5 words max. Provide final explanation after |EOR| indicator.

[Concept to explain]
```

### Study Plan Template

```
Create a study plan using Chain of Draft. Each activity: 5 words max. Present complete study schedule after |EOR| indicator.

[Subject and time frame]
```

### Learning Assessment Template

```
Assess understanding of this topic using Chain of Draft. Each knowledge check: 5 words max. Provide final assessment after |EOR| indicator.

[Topic to assess]
```

### Teaching Strategy Template

```
Develop a teaching strategy using Chain of Draft. Each teaching method: 5 words max. Present final lesson plan after |EOR| indicator.

[Topic to teach]
```

## Project Planning Templates

### Project Plan Template

```
Outline a project plan using Chain of Draft. Each step: 5 words max. Provide complete project timeline after |EOR| indicator.

[Project description]
```

### Risk Assessment Template

```
Identify project risks using Chain of Draft. Each risk factor: 5 words max. Present final risk assessment after |EOR| indicator.

[Project context]
```

### Resource Allocation Template

```
Plan resource allocation using Chain of Draft. Each resource need: 5 words max. Provide final allocation plan after |EOR| indicator.

[Project requirements]
```

### Milestone Planning Template

```
Define project milestones using Chain of Draft. Each milestone: 5 words max. Present complete milestone schedule after |EOR| indicator.

[Project scope and timeline]
```

## Critical Thinking Templates

### Argument Analysis Template

```
Analyze this argument using Chain of Draft. Each logical step: 5 words max. Provide final assessment after |EOR| indicator.

[Argument to analyze]
```

### Pros and Cons Template

```
List pros and cons using Chain of Draft. Each point: 5 words max. Provide final recommendation after |EOR| indicator.

[Option to evaluate]
```

### Root Cause Analysis Template

```
Perform root cause analysis using Chain of Draft. Each causal factor: 5 words max. Present final determination after |EOR| indicator.

[Problem to analyze]
```

### Ethical Analysis Template

```
Analyze the ethics using Chain of Draft. Each consideration: 5 words max. Provide final ethical assessment after |EOR| indicator.

[Situation with ethical dimensions]
```

## System Prompts for Ongoing Interactions

### General System Prompt

```
Use Chain of Draft reasoning by default. For each reasoning step:
1. Use maximum 5 words
2. Focus only on essential information
3. Skip explanatory text
4. Present as minimal notes
5. End with final answer after |EOR| indicator
```

### Extended System Prompt

```
When answering questions, use Chain of Draft reasoning to maximize efficiency:
1. Break down problems into minimal reasoning steps
2. Use no more than 5 words per step
3. Focus only on essential calculations, transformations, or insights
4. Present reasoning as bullet points or numbered steps
5. Include final answer after a |EOR| indicator
6. Avoid explanatory text and focus only on key information

This approach reduces token usage and increases reasoning efficiency.
```
