"use client";

import { Volume1Icon, Volume2Icon, VolumeXIcon } from "lucide-react";

import { Hint } from "@/components/hint";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface VolumeControlProps {
  onToggle: () => void;
  onChange: (value: number) => void;
  value: number;
}

export const VolumeControl = ({
  onToggle,
  onChange,
  value
}: VolumeControlProps) => {
  const isMuted = value === 0;
  const isAboveHalf = value > 50;

  let Icon = Volume1Icon;

  if (isMuted) {
    Icon = VolumeXIcon;
  } else if (isAboveHalf) {
    Icon = Volume2Icon;
  }

  const label = isMuted ? "Unmute" : "Mute";

  const handleChange = (value: number[]) => {
    onChange(value[0]);
  }

  return (
    <div className="flex items-center gap-2">
      <Hint label={label} asChild>
        <button
          className="text-white p-1.5 hover:bg-white/10 rounded-lg"
          onClick={ onToggle }
        >
          <Icon className="h-5 w-5"/>
        </button>
      </Hint>
      <Slider
        className="w-32 cursor-pointer"
        onValueChange={handleChange}
        value={[value]}
        max={100}
        step={1}
      />
    </div>
  );
}