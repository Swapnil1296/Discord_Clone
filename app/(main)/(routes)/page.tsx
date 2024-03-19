import { ModeToggle } from "@/components/mode-toggel";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-3xl font-bold text-blue-500">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
