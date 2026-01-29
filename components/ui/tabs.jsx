"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/* ----------------------------- ROOT ----------------------------- */

const Tabs = TabsPrimitive.Root;

/* ---------------------------- LIST ------------------------------ */

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-auto rounded-md p-1 text-primary",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

/* --------------------------- TRIGGER ---------------------------- */

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 font-medium transition-all",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/* --------------------------- CONTENT ---------------------------- */

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

/* --------------------------- EXPORT ----------------------------- */

export { Tabs, TabsList, TabsTrigger, TabsContent };
