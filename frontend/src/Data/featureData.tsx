// src/data/featuresData.tsx
import React from 'react';
import { Globe, Zap, Shield, Code2, BarChart, Lock } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'glass' | 'primary' | 'code';
  gridClass: string;
  details?: string; // For the "About" page
  tags?: string[];
}

export const featuresData: Feature[] = [
  {
    id: "global-edge",
    title: "Global Edge Network",
    description: "Deploy within 20ms of your users, anywhere in the world.",
    icon: <Globe className="text-blue-400" size={32} />,
    variant: 'glass',
    gridClass: "md:col-span-8",
    tags: ["NYC-1: 12ms", "LON-3: 18ms"],
    details: "Our network spans 100+ data centers using Anycast routing..."
  },
  {
    id: "zero-latency",
    title: "Zero Latency",
    description: "Proprietary compression that beats standard HMR.",
    icon: <Zap size={40} className="fill-white/20" />,
    variant: 'primary',
    gridClass: "md:col-span-4",
    details: "Using Brotli-11 and custom binary diffing..."
  },
  {
    id: "security",
    title: "Military Grade",
    description: "SOC2 Type II compliant infrastructure out of the box.",
    icon: <Shield className="text-emerald-400" />,
    variant: 'glass',
    gridClass: "md:col-span-4"
  },
  {
    id: "deploy",
    title: "One-Line Deploy",
    description: "Import our CLI and ship with a single command.",
    icon: <Code2 className="text-purple-400" />,
    variant: 'code',
    gridClass: "md:col-span-8"
  }
];
