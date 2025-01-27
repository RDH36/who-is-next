"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TodayHost() {
  const [host, setHost] = useState("Loading...");

  useEffect(() => {
    const fetchHost = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setHost("Alice Dupont");
    };
    fetchHost();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Today's host is</CardTitle>
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
