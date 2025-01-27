import { TodayHost } from "@/components/feature/host/Host";
import { ParticipantList } from "@/components/ParticipantList";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-4 mt-4 gap-5">
      <TodayHost />
      <ParticipantList />
    </div>
  );
}
