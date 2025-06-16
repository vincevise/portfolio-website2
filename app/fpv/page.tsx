'use client'
import dynamic from "next/dynamic";

const FpvScene = dynamic(() => import("@/components/fpv/test"))

export default function Home() {
  return (
    <main className="bg-black">
      {/* <FpvScene /> */}
    </main>
  )
}
