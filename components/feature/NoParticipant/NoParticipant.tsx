import { Card, CardContent } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

export function NoParticipants() {
  return (
    <Card className="w-full border border-none shadow-none">
      <CardContent className="flex flex-col items-center justify-center py-10">
        <UserPlus className="h-20 w-20 text-muted-foreground mb-4" />
        <h3 className="text-2xl font-semibold mb-2">No Participants</h3>
        <p className="text-muted-foreground text-center max-w-sm">
          There are currently no participants. Start by adding participants to
          your list.
        </p>
      </CardContent>
    </Card>
  );
}
