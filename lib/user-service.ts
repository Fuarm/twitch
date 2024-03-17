import { db } from "@/lib/db";

export const getUserByUsername = (username: string) => {
  return db.user.findUnique({
    where: { username },
    select: {
      id: true,
      externalUserId: true,
      username: true,
      bio: true,
      imageUrl: true,
      stream: {
        select: {
          id: true,
          isLive: true,
          isChatDelayed: true,
          isChatEnabled: true,
          isChatFollowersOnly: true,
          thumbnailUrl: true,
          name: true,
        }
      },
      _count: {
        select: { followedBy: true }
      }
    }
  });
}

export const getUserById = (id: string) => {
  return db.user.findUnique({
    where: { id },
    include: { stream: true }
  });
}