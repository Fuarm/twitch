import Link from "next/link";
import { User } from "@prisma/client";

import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";

interface ResultCardProps {
  data: {
    user: User,
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
}

export const ResultCard = ({
  data: { user, isLive, name, thumbnailUrl },
}: ResultCardProps) => {
  return (
    <Link href={`/${user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={thumbnailUrl}
          fallback={user.imageUrl}
          isLive={isLive}
          username={user.username}
        />
        <div className="flex gap-x-3">
          <UserAvatar
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-blue-500">
              {name}
            </p>
            <p className="text-muted-foreground">
              {user.username}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24"/>
        </div>
      </div>
    </div>
  );
};