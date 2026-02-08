// import { z } from "zod";

// import IntentAnalyzer from "../components/panels/IntentAnalyzer";
// import WorkflowDesigner from "../components/panels/WorkflowDesigner";
// import DecisionBoard from "../components/panels/DecisionBoard";
// import VisualExplainer from "../components/panels/VisualExplainer";
// import RoadmapPanel from "../components/panels/RoadmapPanel";
// import HistoryExplorer from "../components/panels/HistoryExplorer";

// export const components = [
//   {
//     name: "IntentAnalyzer",
//     description: "Summarize the user's intent and confidence",
//     component: IntentAnalyzer,
//     propsSchema: z.object({
//       intent: z.string().default(""),
//       confidence: z.number().default(0.8),
//     }),
//   },
//   {
//     name: "WorkflowDesigner",
//     description: "Generate workflow steps",
//     component: WorkflowDesigner,
//     propsSchema: z.object({
//       title: z.string().default("Workflow"),
//       steps: z.array(z.string()).default([]),
//     }),
//   },
//   {
//     name: "DecisionBoard",
//     description: "Suggest next actions",
//     component: DecisionBoard,
//     propsSchema: z.object({
//       options: z.array(z.string()).default([]),
//     }),
//   },
//   {
//     name: "VisualExplainer",
//     description: "Explain system visually in blocks",
//     component: VisualExplainer,
//     propsSchema: z.object({
//       blocks: z.array(z.string()).default([]),
//     }),
//   },
//   {
//     name: "RoadmapPanel",
//     description: "Show phased roadmap",
//     component: RoadmapPanel,
//     propsSchema: z.object({
//       phases: z.array(z.string()).default([]),
//     }),
//   },
//   {
//     name: "HistoryExplorer",
//     description: "Show related or previous ideas",
//     component: HistoryExplorer,
//     propsSchema: z.object({
//       history: z.array(z.string()).default([]),
//     }),
//   },
// ];
"use client";

import { z } from "zod";

import { IntentAnalyzer } from "@/components/panels/IntentAnalyzer";
import { FlowVisualizer } from "@/components/panels/FlowVisualizer";
import { UIMockupGallery } from "@/components/panels/UIMockupGallery";
import { SystemArchitectureMap } from "@/components/panels/SystemArchitectureMap";
import { ImpactMeter } from "@/components/panels/ImpactMeter";
import { RoadmapTimeline } from "@/components/panels/RoadmapTimeline";

export const components = [
  {
    name: "IntentAnalyzer",
    description: "Analyzes and summarizes user intent",
    component: IntentAnalyzer,
    propsSchema: z.object({
      intent: z.string().default("No intent detected"),
      confidence: z.number().default(0),
    }),
  },
  {
    name: "FlowVisualizer",
    description: "Shows flow of the idea",
    component: FlowVisualizer,
    propsSchema: z.object({
      steps: z.array(z.string()).default([]),
    }),
  },
  {
    name: "UIMockupGallery",
    description: "Displays UI mockups",
    component: UIMockupGallery,
    propsSchema: z.object({
      screens: z.array(
        z.object({
          title: z.string().default(""),
          description: z.string().default(""),
          imageUrl: z.string().default(""),
        })
      ).default([]),
    }),
  },
  {
    name: "SystemArchitectureMap",
    description: "Shows system architecture",
    component: SystemArchitectureMap,
    propsSchema: z.object({
      modules: z.array(z.string()).default([]),
    }),
  },
  {
    name: "ImpactMeter",
    description: "Scores the idea",
    component: ImpactMeter,
    propsSchema: z.object({
      impact: z.number().default(0),
      creativity: z.number().default(0),
      feasibility: z.number().default(0),
    }),
  },
  {
    name: "RoadmapTimeline",
    description: "Product roadmap",
    component: RoadmapTimeline,
    propsSchema: z.object({
      phases: z.array(
        z.object({
          title: z.string().default(""),
          description: z.string().default(""),
        })
      ).default([]),
    }),
  },
];

