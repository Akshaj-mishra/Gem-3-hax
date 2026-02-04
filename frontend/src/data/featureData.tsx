// src/data/featureData.tsx
import React from 'react';
import { Brain, Sparkles, ShieldCheck, BarChart3 } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'glass' | 'primary' | 'code';
  gridClass: string;
  details?: string; // Important for the Full Features page!
  tags?: string[];
}

export const featuresData: Feature[] = [
  {
    id: "ai-multimodal",
    title: "Multimodal Gemini 3",
    description: "Analyze video, slides, and student questions simultaneously for deep context.",
    details: "Our multimodal engine processes visual data from lecture slides while simultaneously transcribing audio and cross-referencing external academic databases in real-time.",
    icon: <Brain size={32} />, // Note: We handle colors in the FeatureCard wrapper now!
    variant: 'glass',
    gridClass: "md:col-span-8",
    tags: ["Video: Active", "Audio: Sync", "Gemini 3 Flash"],
  },
  {
    id: "smart-summaries",
    title: "Instant Recap",
    description: "Generate comprehensive study guides the second the lecture ends.",
    details: "Utilizing long-context windowing, we compress 60-minute lectures into 5-minute actionable summaries and flashcards.",
    icon: <Sparkles size={32} />,
    variant: 'primary',
    gridClass: "md:col-span-4",
    tags: ["Context: 1M+", "Auto-Flashcards"],
  },
  {
    id: "privacy",
    title: "Privacy First",
    description: "FERPA and GDPR compliant data anonymization for all student records.",
    details: "Zero-knowledge processing ensures that student PII (Personally Identifiable Information) never hits our training sets.",
    icon: <ShieldCheck size={32} />,
    variant: 'glass',
    gridClass: "md:col-span-4",
    tags: ["FERPA", "SOC2 Type II"],
  },
  {
    id: "ai-logic", 
    title: "Teacher API",
    description: "Automate grading and attendance with our simple SDK.",
    details: "A robust set of endpoints allowing educational institutions to hook into our grading logic and automated attendance systems.",
    icon: <BarChart3 size={32} />,
    variant: 'code',
    gridClass: "md:col-span-8",
    tags: ["RESTful", "Webhooks"],
  }
];
