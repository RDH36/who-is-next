"use client";

import { AddParticipantForm } from "@/components/AddParticipantForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Plus, Settings } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Next.js logo"
              width={32}
              height={32}
              priority
            />
            Who&apos;s the host?
          </Link>
          <Link href="/docs" className="text-sm underline">
            Api docs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">
                Add participant <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New participant</DialogTitle>
              </DialogHeader>
              <AddParticipantForm />
            </DialogContent>
          </Dialog>
          <Link href="/setting">
            <Settings />
          </Link>
        </div>
      </div>
    </nav>
  );
}
