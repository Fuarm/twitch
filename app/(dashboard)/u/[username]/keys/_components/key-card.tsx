"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CopyButton } from "./copy-button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({
  value,
}: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">
          Stream Key
        </p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2 relative">
            <Input
              className="pr-10"
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream key"
            />
            <Button
              className="absolute right-12 w-auto"
              onClick={() => setShow(!show)}
              size="sm"
              variant="link"
            >
              {show ? <EyeIcon className="w-3 h-3" /> : <EyeOffIcon className="w-3 h-3" /> }
            </Button>
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const KeyCardSkeleton = () => {
  return (
    <Skeleton className="rounded-xl p-10 w-full" />
  );
};