/**
 * File: app/providers.tsx
 * Function: Client Providers
 * Purpose: Wraps the application with client-side context providers, specifically for theme management (dark/light mode).
 * Linked to: 
 * - app/layout.tsx (Used to wrap the root layout children)
 */

"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
}
