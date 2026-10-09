# Monash Prep Course

A free, self-paced course that gets a VCE student ready for first-year engineering or computer science at Monash. It runs in the browser, saves progress, and has an optional AI tutor. There is no server and no account.

**It covers:** maths from Methods 1/2 up to the Specialist bridging topics, physics from Units 1/2 up to 3&4, and first-year previews (circuits, statics, Python, discrete maths, matrices, signals). About 38 lessons, roughly a 29-hour course.

## Quick start

**For the parent or teacher (one-off, about 15 minutes):**

1. Upload this folder to a GitHub repository and turn on GitHub Pages (see section 1).
2. Optional: get an OpenRouter API key for the AI tutor (section 2).
3. Have the student sit the two starting-point tests (section 3).
4. Get a personal plan made, by the course's AI tutor or an AI of your choice (section 4).

**For the student, every day:**

1. Open the course link. Do the lesson under "Next up".
2. Read each step, try the Quick check, then take the quiz at the end.
3. Stuck? Ask the AI tutor, or press **Explain this more simply**.
4. Aim for 30–45 minutes, 5 days a week.

## Contents

1. [Put it online](#1-put-it-online-github-pages)
2. [Using the course](#2-using-the-course)
3. [Starting-point tests](#3-starting-point-tests)
4. [Getting a personal plan made](#4-getting-a-personal-plan-made)
5. [Lesson IDs](#5-lesson-ids)
6. [Privacy](#6-privacy)
7. [Troubleshooting and FAQ](#7-troubleshooting-and-faq)

## What is in the folder

| File | What it is |
|---|---|
| `index.html` | The course: lessons, quizzes, module tests, final exam, AI tutor |
| `course.js` | All lesson and quiz content |
| `test.html` | Starting-point test, Part 1 (sections A–F) |
| `test2.html` | Starting-point test, Part 2 (sections G–L). A separate test, not an add-on |
| `plan-prompt.txt` | A ready-made prompt to paste into any AI to get a plan |
| `img/` | Lesson diagrams |

A personal plan file (for example `student-plan.json`) is **not** part of this folder. See section 4.

## 1. Put it online (GitHub Pages)

1. Create a GitHub repository and upload the contents of this folder, so `index.html` is at the top level.
2. In the repository go to **Settings → Pages**, choose the main branch and the root folder, and save.
3. After a minute the course is live at `https://<your-username>.github.io/<repo-name>/`.
4. To update later, upload the new files over the old ones. Keep the **same address** so saved progress carries over.

The tests are at `.../test.html` and `.../test2.html`, and the course links to both.

Do not put a student's name, results or API key in the repository. It is public.

## 2. Using the course

- **Lessons** are in the left column, grouped into modules. Each lesson is a series of steps, simple first and then deeper: Level 1 foundation, Level 2 core, Level 3 stretch (more than you need). Common mistakes appear inside the steps.
- **Quick checks** in each step reveal an answer when clicked.
- **Working space:** every step and quiz question has an optional drawing box. It is scratch only. It is not marked or saved.
- **Quizzes** end each lesson, and scores show as percentages. A **module test** follows each module, and a **final exam** covers everything.
- **Mistakes tab:** common errors. **Formulas tab:** a formula sheet.
- **Progress report** shows everything the AI tutor knows about the student.
- **Starting quiz:** a built-in 30-minute quiz that marks each lesson green (likely known) or red (focus here). Use it if no plan has been made.
- **Backup:** **Settings → Export progress** saves a file. **Import** restores it, for example on another device.

### The AI tutor (optional)

The tutor uses OpenRouter, which has free models.

1. Create an OpenRouter account and make an API key. Set a spending limit on it and use it only for this course.
2. In the course click **Settings**, paste the key, and optionally change the model. The default is `anthropic/claude-sonnet-4.5`. A free model works but is text-only.
3. Open any lesson and ask a question. The tutor knows the current lesson and step, quiz results, mistakes, any plan, and any notes entered in Settings.
4. Buttons: **Explain this more simply**, **Give me a hint**, **Give me an example question**, **Clear chat**.

The key is stored only in that browser and sent only to openrouter.ai. When the student chats, the lesson context, results and any notes in Settings are sent to OpenRouter with the question, so leave out anything private.

## 3. Starting-point tests

These find out what the student already knows. They are separate from the course. They are not pass-or-fail.

| Test | Covers | Time |
|---|---|---|
| Part 1 (`test.html`) | Basics, lines and trig, Methods skills, Methods 3&4, Specialist-style topics, physics | about 2 hours |
| Part 2 (`test2.html`) | Physics basics, Physics 3&4, Specialist bridging, programming and discrete maths, circuits and statics, linear algebra and sequences | about 2.5 hours |

**Tips for the student**

- Enter a first name, then work through the questions in order. Each question has a drawing box for working and a box for the answer. Typing key steps is optional.
- **Tick "Not learned yet" freely** for anything never taught. That is useful information, not failure. Please do not guess.
- Use a tablet, or a mouse or trackpad, for the drawing.
- Progress saves automatically, so the test can be done over several sittings.
- At the end: **Copy my results**, and download the section images (one picture per section).

## 4. Getting a personal plan made

A plan turns the generic course into one for a specific student. It adds a badge to every lesson, a "why this matters" note, a recommended order, a roadmap with phases, links to what he already knows, and instructions for the AI tutor.

There are two ways to get one. Use whichever suits you.

### Way A: let the course's AI tutor make it (easiest)

1. The student sits Part 1 and/or Part 2 **in the same browser** as the course. At the end of each test, the **➡️ Go to the course** button opens it.
2. In the course, add the OpenRouter key in **Settings** (section 2).
3. In the left column press **🤖 Make my plan with the AI tutor**.
4. Add any extra notes (topics he missed, grades, what helps him learn) and press **Make my plan**.
5. After about a minute the plan loads and the badges, roadmap and "Next up" box appear. Press **Remake my plan** later to update it.

The course reads the saved test answers, "Not learned yet" ticks and timings itself. If the tests were done on another device, paste the copied results into the box instead.

A free model cannot see handwriting, and smaller models can mark less reliably. If the plan looks off, use a stronger model in Settings or use Way B.

### Way B: use an AI of your choice

Any chatbot works (ChatGPT, Claude, Gemini or another). An AI that can read images can also use the handwriting.

1. The student sits the tests. At the end of each: **Copy my results**, and download the section images.
2. Open `plan-prompt.txt` in this folder and paste all of it into the AI. It already lists every lesson and the exact plan format.
3. Fill in the "things the tests cannot show" line, paste the copied results, and attach the images if the AI can read them.
4. The AI replies with JSON. Save it as `student-plan.json` (a plain text file with that name).
5. In the course open **Settings → Import plan file** and choose it.

If a plan has a mistake, ask the AI to fix it and re-import.

If no AI is available, the course still works as is. Use its built-in starting quiz.

### What is in a plan file

A plan is a JSON file. Only `status` is required. All other fields are optional.

```json
{
  "name": "Student",
  "summary": "One or two sentences shown in the plan box.",
  "daily": "30–45 minutes, 5 days a week",
  "tests": "Plain-text summary of test results and mistakes, read by the AI tutor.",
  "tutor": "How the tutor should teach this student.",
  "order": ["cl", "f1", "tr", "chain"],
  "status": { "f1": "skim", "tr": "focus", "mo": "new", "cx": "core", "py": "untested", "th": "optional" },
  "why": { "tr": "Short note shown at the top of that lesson." },
  "bridge": { "cx": "How this lesson links to something he already knows." },
  "phases": [
    { "name": "Phase 1 · Now to exams", "ids": ["cl", "tr"], "note": "Light work." }
  ]
}
```

| Status | Badge | Meaning |
|---|---|---|
| `skim` | ⏩ | Already knows it. A "go straight to the quiz" button appears |
| `focus` | 🎯 | Needs real work |
| `core` | 📌 | Do properly |
| `new` | 🆕 | Not yet taught to him, so taught from scratch |
| `untested` | ❓ | Not tested yet |
| `optional` | ◌ | Not essential |

**How the site uses the plan.** It is a fixed file. Nothing is rewritten by an AI. The page reads it and shows the badges, notes, roadmap and "Next up" box, and the Next button follows the plan order. The text parts (`tests`, `tutor`, `bridge`) are passed to the AI tutor as background.

### Updating a plan

When the student does more work or sits another test, press **Remake my plan** in the course, or give the new results to an AI and re-import the file. A new plan replaces the old one. Completed lessons and scores are not affected.

## 5. Lesson IDs

Use these short codes in plan files.

**Foundations · start here if anything feels rusty**

| ID | Lesson |
|---|---|
| `f1` | Algebra and equations: the starting point |
| `f2` | Lines, Pythagoras and right-angled trigonometry |
| `f3` | Physics starter: motion, forces, energy, waves and electricity |

**Your error clinic · quick wins**

| ID | Lesson |
|---|---|
| `cl` | Error clinic: slips that cost marks |

**Module 1 · Maths foundations**

| ID | Lesson |
|---|---|
| `fn` | Functions and transformations |
| `tr` | Circular functions: sin, cos, tan and the unit circle |
| `chain` | Derivatives and the chain rule |
| `tc` | Calculus with sin, cos, tan and e |
| `int` | Integration as area |
| `prob` | Probability and the normal curve |

**Module 2 · Specialist-style maths**

| ID | Lesson |
|---|---|
| `cx` | Complex numbers |
| `vec` | Vectors and the dot product |
| `de` | Differential equations and the RC circuit |

**Specialist bridging pack**

| ID | Lesson |
|---|---|
| `sp1` | Specialist: trig identities, reciprocal and inverse trig |
| `sp2` | Specialist: integration techniques |
| `sp3` | Specialist: implicit differentiation, related rates and volumes |
| `sp4` | Specialist: polynomials and rational functions |
| `sp5` | Specialist: complex numbers II (polar, roots, the plane) |
| `sp6` | Specialist: mechanics, kinematics and vectors |

**Module 3 · Physics for engineers**

| ID | Lesson |
|---|---|
| `mo` | Motion and projectiles |
| `fo` | Forces, circular motion and gravity |
| `el` | Electric and magnetic fields |
| `ind` | Physics: electromagnetic induction |
| `wv` | Waves, light and quantum |
| `re` | Special relativity |
| `th` | Thermal physics: heat, temperature and gases |

**Module 4 · Engineering at Monash**

| ID | Lesson |
|---|---|
| `ci` | Circuits for engineers: Ohm, Kirchhoff and dividers |
| `st` | Statics: forces and moments |
| `ci2` | Circuits II: op-amps and Thévenin |
| `st2` | Statics II: beams and equilibrium |

**Module 5 · Computer science at Monash**

| ID | Lesson |
|---|---|
| `py` | Python and algorithms |
| `dm` | Discrete maths: logic, sets, counting and induction |
| `ds` | Data structures, sorting and Big-O |

**Module 6 · First-year maths and signals preview**

| ID | Lesson |
|---|---|
| `la` | Linear algebra: matrices and eigenvalues |
| `ta` | Taylor series and small-angle approximations |
| `mv` | Several variables: partial derivatives and gradients |
| `sq` | Sequences, series and proof |
| `sg` | Signals, filters and Fourier |

## 6. Privacy

- A plan file has the student's name and results in it. Keep it out of the repository. Import it through Settings, which stores it only in that browser.
- Progress, plan, API key and chat live in the browser (localStorage). They are not shared with anyone, except what is sent to OpenRouter when the tutor is used.
- Clearing browser data erases progress. Export a backup regularly.
- Tests also save in the browser. Making a plan sends the results to OpenRouter (Way A) or to whichever AI you paste them into (Way B), so do that only if you are comfortable with it.

## 7. Troubleshooting and FAQ

**Maths shows as `$...$`.** The maths library loads from the internet. Check the connection.

**"Make my plan" says no results found.** The tests were done in a different browser or address. Paste the copied results into the box, or sit the tests in the same browser.

**The tutor does not reply.** Check the key, the model name, and OpenRouter credits. An error such as "exceed your available credits" means the key has run out.

**Progress is gone.** It is tied to the address and browser. Use the same address, or import a backup.

**A test will not save.** The browser is blocking storage, for example in a private window. Use a normal window.

**Does he need to redo anything after an update?** No. Upload the new files to the same address and his progress stays. A plan only adds badges and notes.

**Does he have to do both tests?** No. Part 1 alone gives a rough picture. Part 2 covers what Part 1 did not reach.

**What if he was away for a lot of the content?** Say so in the notes box (or in the prompt) when you ask for the plan. Blank answers and "Not learned yet" ticks are then treated as new content, not low ability.

**Dark mode.** The course follows the device setting. The tests always stay light.

**Can I change the content?** Lessons and quizzes are in `course.js`. Keep a backup of the original before editing.
