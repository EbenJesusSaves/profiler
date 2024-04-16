import { Aboutme } from "@/components/home/Aboutme";
import { SparklesPreview } from "@/components/home/Sparkles";
import { TextRevealCardPreview } from "@/components/home/TextCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SparklesPreview />
      <TextRevealCardPreview />
      <Aboutme />
    </main>
  );
}
