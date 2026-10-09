# Monash Prep Course

A free, self-paced course that gets a VCE student ready for first-year engineering or computer science at Monash. It teaches maths (from Methods 1/2 up to the Specialist bridging topics), physics (Units 1/2 up to 3&4), and first-year previews (circuits, statics, Python, discrete maths, matrices). It runs in the browser, saves progress, and has an optional AI tutor.

Everything is plain HTML and JavaScript. There is no server and no account.

## What is in the folder

| File | What it is |
|---|---|
| `index.html` | The course: lessons, quizzes, module tests, final exam, AI tutor |
| `course.js` | All lesson and quiz content |
| `test.html` | Starting-point test, Part 1 (sections A–F) |
| `test2.html` | Starting-point test, Part 2 (sections G–L). A separate test, not an add-on |
| `img/` | Lesson diagrams |

A personal plan file (for example `eddie-plan.json`) is **not** part of this folder. See "Personal plans" below.

## 1. Put it online (GitHub Pages)

1. Create a GitHub repository and upload the contents of this folder (so `index.html` is at the top level).
2. In the repository go to **Settings → Pages**, choose the main branch and the root folder, and save.
3. After a minute the course is live at `https://ed13s.github.io/Course/`.
4. To update later, upload the new files over the old ones. Keep the **same address** so saved progress carries over.

Do not put a student's name, results or API key in the repository. It is public.

## 2. Using the course

- **Lessons** are in the left column, grouped into modules. Each lesson is a series of steps, simple first and then deeper (Level 1 foundation, Level 2 core, Level 3 stretch). Common mistakes appear inside the steps.
- **Quick checks** in each step reveal an answer when clicked.
- **Working space**: every step and every quiz question has an optional drawing box for working out. It is scratch only and is not marked or saved.
- **Quizzes** end each lesson. Scores show as percentages. A **module test** follows each module, and a **final exam** covers everything.
- **Mistakes tab** collects the common errors. **Formulas tab** is a formula sheet.
- **Progress report** shows everything the AI tutor knows about the student.
- Start with the **Error clinic** if a plan says so. It is short and fixes the slips that cost marks.
- Progress is stored in the browser. Use **Settings → Export progress** to back it up, and **Import** to restore it on another device.

### The AI tutor (optional)

The tutor uses OpenRouter, which has free models.

1. Create an OpenRouter account and make an API key. Set a spending limit on it and use it only for this course.
2. In the course click **Settings**, paste the key, and optionally change the model. The default is `anthropic/claude-sonnet-4.5`. A free model works but is text-only.
3. Open any lesson and ask a question. The tutor knows the current lesson and step, quiz results, mistakes, and any notes you entered in Settings.
4. Buttons: **Explain this more simply**, **Give me a hint**, **Give me an example question**, **Clear chat**.

The key is stored only in that browser and sent only to openrouter.ai. When the student chats, the lesson context, results and any notes in Settings are sent to OpenRouter with the question, so leave out anything private.

## 3. Starting-point tests

Use these to find out what the student already knows. They are separate from the course. They are not pass-or-fail.

- **Part 1** (`test.html`): basics, lines and trig, Methods skills, Methods 3&4, Specialist-style topics, physics.
- **Part 2** (`test2.html`): physics basics, Physics 3&4, Specialist bridging, programming and discrete maths, circuits and statics, linear algebra and sequences.

How to take them:

- Open the page, enter a first name, and work through the questions in order. Each question has a drawing box for working and a box for the answer. Typing key steps is optional.
- **Tick "Not learned yet" freely** for anything never taught. That is useful information, not failure. Please do not guess.
- Use a tablet, or a mouse or trackpad, for the drawing.
- Progress saves automatically. The test can be done over several sittings.
- On the last page: **Copy my results**, and download the section images (**one picture per section**).

## 4. Getting a personal plan made

A plan turns the generic course into one for a specific student. It adds a badge to every lesson, a "why this matters" note, a recommended order, a roadmap, and tells the AI tutor how to teach him.

1. The student sits Part 1 and Part 2 (and says if anything was skipped, guessed, or helped).
2. Copy the results text from each test.
3. Download the working images from each test.
4. Open a chat with a AI of your choice, attach the images, paste the results text, and say something like:

   > Here are my son's starting-point test results and working. Please mark them, then make a personal plan file for the Monash Prep Course.

   Also tell your chosen AI anything the test cannot show: topics he was absent for, guesses, help received, grades, what helps him learn.
5. The AI marks the work, then produces a file such as `student-plan.json`.
6. Import it: open the course, **Settings → Import plan file**, and choose the file.

If you do not have access to AI for whatever reason, you can still use the course as is. It also has a built-in starting quiz, which marks each lesson as likely known (green) or needing focus (red).

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

Status values:

| Value | Badge | Meaning |
|---|---|---|
| `skim` | ⏩ | Already knows it. A "go straight to the quiz" button appears |
| `focus` | 🎯 | Needs real work |
| `core` | 📌 | Do properly |
| `new` | 🆕 | Not yet taught to him, so taught from scratch |
| `untested` | ❓ | Not tested yet |
| `optional` | ◌ | Not essential |

Lesson ids are the short codes in `course.js` (for example `f1`, `tr`, `chain`, `sp1`, `mo`, `py`, `la`, `cl`).

### Updating a plan

When the student does more work or sits another test, send Claude the new results and ask it to update the plan. Import the new file in Settings, which replaces the old one. Completed lessons and scores are not affected.

## 5. Privacy

- A plan file has the student's name and results in it. Keep it out of the repository. Import it through Settings, which stores it only in that browser.
- Progress, plan, API key and chat live in the browser (localStorage). They are not shared with anyone, except what is sent to OpenRouter when the tutor is used.
- Clearing browser data erases progress. Export a backup regularly.

## 6. Troubleshooting

- **Maths shows as `$...$`:** the maths library loads from the internet. Check the connection.
- **Tutor does not reply:** check the key, the model name, and OpenRouter credits.
- **Progress is gone:** it is tied to the address and browser. Use the same address, or import a backup.
- **A test will not save:** the browser is blocking storage (for example a private window). Use a normal window.
- **Dark mode:** the course follows the device setting. The tests always stay light.
