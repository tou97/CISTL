"use client";

import { useState, useEffect } from "react";

export default function HealthCheck() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch((err) => setStatus("Error connecting to backend"));
  }, []);

  return (
    <div>
      <h1>System Health</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}
