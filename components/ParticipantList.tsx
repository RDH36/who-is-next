"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import type { ParticipantWithDate } from "../types/participant";

export function ParticipantList() {
  const [participants, setParticipants] = useState<ParticipantWithDate[]>([
    {
      name: "Alice",
      email: "alice@example.com",
      participationDate: new Date(2023, 5, 1),
    },
    {
      name: "Bob",
      email: "bob@example.com",
      participationDate: new Date(2023, 5, 8),
    },
    {
      name: "Charlie",
      email: "charlie@example.com",
      participationDate: new Date(2023, 5, 15),
    },
  ]);

  return (
    <Table className="w-[50%] m-auto mt-4">
      <TableCaption>
        Liste des participants et leurs dates de participation
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Date de participation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants.map((participant) => (
          <TableRow key={participant.email}>
            <TableCell>{participant.name}</TableCell>
            <TableCell>{participant.email}</TableCell>
            <TableCell>
              {participant.participationDate.toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
