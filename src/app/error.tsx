"use client";
import { ErrorBoundaryApp } from "@/common/components/errorBoundary/ErrorBoundary";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorBoundaryApp name={error.name} message={error.message} handelReset={() => reset()} />;
}
