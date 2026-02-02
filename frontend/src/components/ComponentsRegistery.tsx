// src/components/ComponentsRegistry.tsx
import React, { LazyExoticComponent, FC } from "react";

// Define the shape for a Section to keep TypeScript happy
export interface Section {
  id: string;
  Component: LazyExoticComponent<FC<any>>;
}

/**
 * Lazy-load Section Components.
 * This ensures the browser only downloads the code for these sections
 * when the landing page is actually being viewed.
 */
const Hero = React.lazy(() => import("./Hero/Hero.tsx"));
const LandingFeatures =  React.lazy(() => import ("./Features/LandingFeatures.tsx"));
/**
 * Primary registry array. 
 * The order here determines the render order on the landing page.
 */
export const sections: Section[] = [
  { id: "hero", Component: Hero },
  { id: "landingfeature", Component: LandingFeatures },
];

/**
 * Derived IDs for use in Navbars or Intersection Observers.
 */
export const SECTION_IDS = sections.map((section) => section.id);
