// src/components/ComponentsRegistry.tsx
import React, { LazyExoticComponent, FC } from "react";

export interface Section {
  id: string;
  label?: string; // The text that appears in the Navbar
  Component: LazyExoticComponent<FC<any>>;
}

const Hero = React.lazy(() => import("./Hero/Hero.tsx"));
const LandingFeatures = React.lazy(() => import("./Features/LandingFeatures.tsx"));
const Intelligence = React.lazy(() => import("./Intelligence/IntelligenceLanding.tsx"));
const About = React.lazy(() => import("./About/AboutLanding.tsx"));

export const landingSections: Section[] = [
  { id: "hero", Component: Hero }, // No label = Hidden from Nav
  { id: "features", label: "Features", Component: LandingFeatures },
  { id: "intelligence", label: "Intelligence", Component: Intelligence },
  { id: "about", label: "About", Component: About },
];

export const getIdsFromRegistry = (registry: Section[]) => 
  registry.map((section) => section.id);
