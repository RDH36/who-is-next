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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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

  const getAvatarUrl = (name: string) => {
    return `https://api.dicebear.com/6.x/fun-emoji/svg?seed=${encodeURIComponent(
      name
    )}`;
  };

  return (
    <Table className="w-[50%] m-auto mt-4">
      <TableCaption>List of participants and their host dates</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Host date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants.map((participant) => (
          <TableRow key={participant.email}>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage
                    src={getAvatarUrl(participant.name)}
                    alt={participant.name}
                  />
                  <AvatarFallback>
                    {participant.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{participant.name}</span>
              </div>
            </TableCell>
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
