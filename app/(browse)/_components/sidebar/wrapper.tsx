"use client";

import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { ToggleSkeleton } from "./toggle";
import { FollowingSkeleton } from "./following";
import { RecommendedSkeleton } from "./recommended";
import { useSidebar } from "@/hooks/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
};

export const Wrapper = ({
  children,
}: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};