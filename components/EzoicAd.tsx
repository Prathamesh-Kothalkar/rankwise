"use client";
import { useEffect } from "react";

interface EzoicAdProps {
  id: number;
}

export default function EzoicAd({ id }: EzoicAdProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ezstandalone?.cmd) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone?.showAds(id);
      });
    }
  }, [id]);

  return (
    <>
        <div key={id} id={`ezoic-pub-ad-placeholder-${id}`}></div>
    </>
  );
}
