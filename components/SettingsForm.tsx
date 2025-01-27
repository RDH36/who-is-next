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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rotationInterval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intervalle de rotation (jours)</FormLabel>
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
                Le nombre de jours entre chaque tour de participation
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
              <FormLabel>Date de début</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                />
              </FormControl>
              <FormDescription>La date de début de la rotation</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enregistrer les paramètres</Button>
      </form>
    </Form>
  );
}
