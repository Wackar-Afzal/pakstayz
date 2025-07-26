'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // or "next/navigation" for App Router

export default function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    router.events?.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events?.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return null;
}
