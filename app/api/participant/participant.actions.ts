"use server";

import prisma from "@/lib/prisma/prisma";
import { Participant } from "@/types/participant";

export const addParticipant = async (participant: Participant) => {
  const add = await prisma.participant.create({
    data: participant,
  });

  return add;
};
