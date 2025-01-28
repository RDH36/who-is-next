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
import { formatDateWithRelativeTime } from "@/lib/daysjs/days";
import { useEffect, useState } from "react";
import type { ParticipantWithDate } from "../types/participant";
import { TodayHost } from "./feature/host/Host";
import { NoParticipants } from "./feature/NoParticipant/NoParticipant";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ParticipantList() {
  const [participants, setParticipants] = useState<ParticipantWithDate[]>([]);

  const getAvatarUrl = (name: string) => {
    return `https://api.dicebear.com/6.x/fun-emoji/svg?seed=${encodeURIComponent(
      name
    )}`;
  };

  useEffect(() => {
    const participantList = async () => {
      const response = await fetch("/api/participant/getAll");
      const data = await response.json();
      setParticipants(data);
    };
    participantList();
  }, []);

  if (!participants.length) {
    return <NoParticipants />;
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-4 mt-4 gap-5">
      <TodayHost />
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
                {formatDateWithRelativeTime(participant.nextTurn)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
