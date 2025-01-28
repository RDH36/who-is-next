"use client";

import { addParticipant } from "@/app/api/participant/participant.actions";
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
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { type Participant, participantSchema } from "../types/participant";

export function AddParticipantForm() {
  const form = useForm<Participant>({
    resolver: zodResolver(participantSchema),
    defaultValues: {
      email: "",
      name: "",
      nextTurn: new Date(),
    },
  });

  async function onSubmit(data: Participant) {
    try {
      await addParticipant(data);
      toast({
        title: "Participant added",
        description: `${data.name} (${data.email}) has been added successfully.`,
      });
      form.reset();
    } catch (error) {
      console.error(error);
    }
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
              <FormDescription>The name of the participant</FormDescription>
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
              <FormDescription>The participant's email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nextTurn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={field.value.toISOString().split("T")[0]}
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                />
              </FormControl>
              <FormDescription>The start date of the rotation</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Add participant{" "}
          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
