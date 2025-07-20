# AI Resume Analyzer 🚀

**AI-powered resume analysis tool** that provides deep insights into your resume—such as ATS compatibility score, tone and style evaluation, and job-fit assessment for specific company roles.
[Check Out](https://ai-resume-analyzer-taupe.vercel.app/)

---

## 🔍 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running Locally](#running-locally)
  * [Production Build](#production-build)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

---

## 📌 Overview

**AI Resume Analyzer** leverages modern AI and NLP techniques to analyze your resume, returning:

* **ATS Score** – Measures how well your resume passes Applicant Tracking Systems.
* **Tone & Style Analysis** – Provides feedback on consistency, professionalism, and readability.
* **Job-fit Assessment** – Checks if your resume aligns with a specific job title and description for any target company.

Whether you’re tailoring your resume for a particular role or seeking general formatting and style improvements, this tool guides you every step of the way.

![Image](https://github.com/user-attachments/assets/6d8ec060-277a-4cc6-a5ba-252a007ea614)


---

## 🛠️ Features

* **Resume Parsing & Analysis**: Extracts sections (Experience, Education, Skills) and analyzes content.
* **ATS Compatibility Score**: Calculates a score based on keywords, formatting, and structure.
* **Tone & Style Feedback**: Evaluates writing style (e.g., formal vs. casual) and consistency.
* **Role-specific Fit Checker**: Compares resume content against a job description for relevance.
* **Interactive UI**: Real-time feedback as you upload or edit your resume.

---

## 🧰 Tech Stack

| Technology       | Role & Details                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **React**        | A popular JavaScript library for building component-based user interfaces. Enables reuse of UI components and efficient rendering via a virtual DOM. |
| **Vite**         | A fast frontend build tool and dev server that uses native ES modules. Provides instant server start and rapid hot module replacement (HMR).         |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development. Allows styling directly in your markup via class names for layout, color, spacing, and more. |
| **Zustand**      | A lightweight state-management library built on hooks. Simplifies global state handling with minimal boilerplate and built-in middleware options.    |
| **Puter.js**     | A modern AI-inference client library (hypothetical) used to send resume data to AI/NLP services, handle responses, and pipeline analyses.            |

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

* Node.js (v16+ recommended)
* npm (v8+) or Yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server with Vite:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your console). The app supports hot module replacement, so changes you make will reflect instantly.

### Production Build

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The output files will be in the `dist/` folder. You can serve them using any static-file server:

```bash
npm run serve
# or
yarn serve
```

---

## 🎯 Usage

1. **Upload Resume**: Click on "Upload" and select a `.pdf`, `.docx`, or `.txt` file.
2. **View Insights**: Automatic parsing and scoring will populate results in the dashboard.
3. **Customize Job-fit Check**: Enter a job title and paste a job description to see fit analysis.
4. **Refine & Export**: Download detailed JSON or CSV reports containing analysis metrics and suggestions.

---

## 🤝 Contributing

We welcome improvements! To contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-awesome-feature`)
3. Commit your changes (`git commit -m "Add awesome feature"`)
4. Push to your branch (`git push origin feature/my-awesome-feature`)
5. Open a Pull Request

Please follow the existing code style, write clear commit messages, and update documentation as needed.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

*Happy analyzing!*
