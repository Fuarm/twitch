import { Skeleton } from "@/components/ui/skeleton";

import { UrlCardSkeleton } from "./_components/url-card";
import { KeyCardSkeleton } from "./_components/key-card";

const KeysLoading = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <Skeleton className="h-10 w-56" />
        <Skeleton className="h-12 w-40" />
      </div>
      <div className="space-y-4">
        <UrlCardSkeleton />
        <KeyCardSkeleton />
      </div>
    </div>
  );
};

export default KeysLoading;