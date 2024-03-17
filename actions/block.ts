"use server";

import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";
import { getSelf } from "@/lib/auth-service";
import { RoomServiceClient } from "livekit-server-sdk";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

export const onBlock = async (id: string) => {
  const self = await getSelf();

  const blockedUser = await blockUser(id);

  await roomService.removeParticipant(self.id, id);

  revalidatePath(`/u/${self.username}/community`);

  return blockedUser;
}

export const onUnblock = async (id: string) => {
  try {
    const self = await getSelf();

    const unblockedUser = await unblockUser(id);

    revalidatePath(`/u/${self.username}/community`);

    return unblockedUser;
  } catch (error) {
    throw new Error("Internal Error")
  }
}