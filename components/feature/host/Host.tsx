"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Participant } from "@/types/participant";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TodayHost() {
  const [host, setHost] = useState("Loading...");

  useEffect(() => {
    const fetchHost = async () => {
      const response = await fetch("/api/participant/getHost");
      const host: Participant = await response.json();
      setHost(host.name);
    };
    fetchHost();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {new Date().getDay() === 1 ? "Today's host is" : "Next's host is"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-primary">
            {host}
          </h1>
        </motion.div>
      </CardContent>
    </Card>
  );
}
