"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type Participant, participantSchema } from "../types/participant";

export function AddParticipantForm() {
  const form = useForm<Participant>({
    resolver: zodResolver(participantSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  function onSubmit(data: Participant) {
    toast({
      title: "Participant ajouté",
      description: `${data.name} (${data.email}) a été ajouté avec succès.`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>Le nom du participant</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>L'adresse email du participant</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Ajouter le participant</Button>
      </form>
    </Form>
  );
}
