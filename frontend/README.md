# IntentFlow ✨

**AI-powered product workflow visualizer with generative UI, built with Tambo SDK**  

IntentFlow allows users to describe an idea in natural language and instantly generates:  
- Workflow steps  
- UI mockups  
- System architecture  
- Roadmap timelines  
- Impact scores  

It uses **[Tambo](https://www.tambo.ai/) Generative UI SDK for React** to dynamically render components based on user input. The AI decides which components to show depending on what the user wants to do — no static UI, fully adaptive.  

---

## Why Tambo?

Tambo enables developers to:  
- Build **dynamic, generative interfaces** responding to natural language input.  
- Automatically render React components chosen by AI, making UI adaptive.  
- Validate all component props with **Zod** to ensure safe AI-driven rendering.  
- Focus on logic & design while Tambo handles component selection and rendering.  

IntentFlow fully leverages Tambo to provide **adaptive visualizations** for product ideas, from conception to implementation plan.  

---

## Features

- **Intent Analyzer:** Summarizes user intent with confidence scoring.  
- **Flow Visualizer:** Shows the stepwise flow of the idea.  
- **UI Mockup Gallery:** Displays example UI screens with visuals.  
- **System Architecture Map:** Highlights modules and architecture connections.  
- **Impact Meter:** Rates impact, creativity, and feasibility.  
- **Roadmap Timeline:** Visualizes project roadmap in clear phases.  
- **Export PDF:** Download the full AI-generated thread as a PDF report.  
- **Example Input Card:** Guides users to provide ideas in the correct format.  

All components are **Tambo-enabled**, dynamically rendered based on user input.

---

## Tech Stack

- **Frontend:** Next.js 16.1+, React 18  
- **Styling:** Tailwind CSS, gradient + shadow aesthetic  
- **Animations:** Framer Motion  
- **PDF Export:** `react-to-print`  
- **AI SDK:** `@tambo-ai/react` (Tambo Generative UI)  
- **Validation:** Zod schemas  

---

## Project Structure

```text
IntentFlow/
├─ app/
│  ├─ page.tsx                 # Main page with AI input & Tambo-rendered components
│  ├─ layout.tsx               # Root layout with TamboProvider
├─ tambo/
│  └─ components.ts            # All components registered with Tambo + Zod validation
├─ components/
│  ├─ panels/
│  │  ├─ IntentAnalyzer.tsx
│  │  ├─ FlowVisualizer.tsx
│  │  ├─ UIMockupGallery.tsx
│  │  ├─ SystemArchitectureMap.tsx
│  │  ├─ ImpactMeter.tsx
│  │  └─ RoadmapTimeline.tsx
├─ public/                     # Static assets (images, icons)
├─ styles/
│  └─ globals.css              # Tailwind and custom global styles
├─ .env.local                  # Environment variables (Tambo API Key)
├─ package.json
├─ tsconfig.json
└─ next.config.js
```

> **Note:** All `panels` components are Tambo-enabled. Each component is registered in `tambo/components.ts` and validated with Zod to ensure safe AI-driven rendering.  

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd IntentFlow


2. Install dependencies:
```bash
npm install


3. Install extra packages for PDF export:
```bash
npm install react-to-print


4. Create .env.local with your Tambo API key:
```bash
NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key_here


---

### Running Locally

# Start development server
```bash
npm run dev

# Build for production
```bash
npm run build
npm run start


---

## Tambo-Specific Commands

Since this project uses the **Tambo SDK for Generative UI**, these extra steps ensure everything runs smoothly:

### Install Tambo React SDK
```bash
npm install @tambo-ai/react

### Make sure your Tambo API key is set
```bash
echo "NEXT_PUBLIC_TAMBO_API_KEY=your_api_key_here" > .env.local

### Optional: Check Tambo SDK version
```bash
npm list @tambo-ai/react

> **Tip:** Whenever you add new components or update `tambo/components.ts`, restart the dev server (`npm run dev`) to ensure Tambo picks up the changes.



---

## Usage

1. Type your idea in the input box.
2. Press **Generate** to render Tambo-powered components.
3. Click **Export PDF** to save the full AI-generated thread.
4. *(Optional)* Use the **Example Idea Card** to understand the input format.

---

## Example Idea Input

> "A patient-first healthcare appointment booking app that helps users find the right provider, see real-time availability, book/reschedule/cancel visits (in-person or telehealth), and receive timely reminders—while enabling providers to manage schedules and reduce no-shows through automated matching and notifications."

---

## Future Improvements

- **Dynamic Mockup Images**: Auto-fetch placeholder screenshots based on idea keywords.
- **Impact Visualization**: Add radar charts, progress bars, and color-coded analytics.
- **Light/Dark Mode Toggle**: Keep gradients and shadows intact for aesthetics.
- **AI Suggestion Assistant**: Provide real-time tips on improving the idea input or formatting.
- **Session Save & Share**: Save AI-generated threads and share PDF/URL links.
- **Enhanced Tambo Integration**: Conditional rendering logic for showing/hiding components depending on user intent complexity.
- **Gamification**: Award badges for creative or high-impact ideas.

---

## Links & Resources

- **Tambo SDK**: https://www.tambo.ai/
