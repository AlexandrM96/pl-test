import GuestHouse from "@/components/ GuestHouse/GuestHouse";
import ComfortFood from "@/components/ComfortFood/ComfortFood";
import MadameRoche from "@/components/MadameRoche/MadameRoche";

export default function Home() {
  return (
    <main className={'container'}>
      <MadameRoche/>
      <GuestHouse/>
      <ComfortFood/>
    </main>
  );
}
