"use client";

import { AddParticipantForm } from "@/components/AddParticipantForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [currentHost, setCurrentHost] = useState("Alice");

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Next.js logo"
            width={32}
            height={32}
            priority
          />
          Who's the host?
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">
                    add Host <Plus />{" "}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>New Host</DialogTitle>
                  </DialogHeader>
                  <AddParticipantForm />
                </DialogContent>
              </Dialog>
            </TooltipTrigger>
            <TooltipContent>
              <p>Current host: {currentHost}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
}
