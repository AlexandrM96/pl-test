import GuestHouse from "@/components/ GuestHouse/GuestHouse";
import ComfortFood from "@/components/ComfortFood/ComfortFood";
import MadameRoche from "@/components/MadameRoche/MadameRoche";
import Image from "next/image";

export default function Home() {
  return (
    <main className={'container'}>
      <MadameRoche/>
      <GuestHouse/>
      <ComfortFood/>
    </main>
  );
}
