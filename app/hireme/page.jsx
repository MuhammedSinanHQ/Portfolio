"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HireMe = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to contact page
    router.push("/contact");
  }, [router]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <p className="text-xl text-white/60">Redirecting to Contact page...</p>
    </div>
  );
};

export default HireMe;
