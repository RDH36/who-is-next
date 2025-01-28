import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/participant/getAll:
 *   get:
 *     summary: Retrieves all participants
 *     description: Fetches a list of all participants from the database
 *     responses:
 *       200:
 *         description: A list of participants successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Participant'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 body:
 *                   type: string
 *                   example: Internal server error
 */
export async function GET() {
  try {
    const participants = await prisma.participant.findMany();
    return NextResponse.json(participants);
  } catch (error) {
    return { status: 500, body: "Internal server error", error };
  }
}
