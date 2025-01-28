import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/participant/getHost:
 *   get:
 *     summary: Retrieves the next host participant
 *     description: Fetches all participants from database and returns the next scheduled host based on nextTurn date
 *     responses:
 *       200:
 *         description: Successfully retrieved next host
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Participant'
 *       404:
 *         description: No future host found
 *
 * @returns {Promise<Participant | undefined>} The next scheduled host participant or undefined if no future host is found
 * @throws {PrismaClientKnownRequestError} When database query fails
 */
export async function GET() {
  const participants = await prisma.participant.findMany();
  const now = new Date();
  const sortedParticipants = participants.sort((a, b) => {
    return new Date(a.nextTurn).getTime() - new Date(b.nextTurn).getTime();
  });

  const host = sortedParticipants.find((participant) => {
    return new Date(participant.nextTurn).getTime() > now.getTime();
  });

  return NextResponse.json(host);
}
