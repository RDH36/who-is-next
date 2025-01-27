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
import { type Settings, settingsSchema } from "../types/participant";

export function SettingsForm() {
  const form = useForm<Settings>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      rotationInterval: 7,
      startDate: new Date(),
    },
  });

  function onSubmit(data: Settings) {
    toast({
      title: "Paramètres mis à jour",
      description: `Intervalle de rotation : ${
        data.rotationInterval
      } jours, Date de début : ${data.startDate.toLocaleDateString()}`,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[50%]"
      >
        <FormField
          control={form.control}
          name="rotationInterval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rotation interval (days)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseInt(e.target.value, 10))
                  }
                />
              </FormControl>
              <FormDescription>
                The number of days between each round of participation
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                />
              </FormControl>
              <FormDescription>The start date of the rotation</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save settings</Button>
      </form>
    </Form>
  );
}
