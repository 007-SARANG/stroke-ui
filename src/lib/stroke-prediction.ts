import type { StrokeAnalysisInput } from "@shared/schema";

export interface StrokePredictionResult {
  riskScore: number;
  riskLevel: string;
  riskFactors: Array<{
    factor: string;
    impact: string;
    score: number;
  }>;
  recommendations: string[];
  confidence: number;
}

export async function predictStroke(data: StrokeAnalysisInput): Promise<StrokePredictionResult> {
  const response = await fetch("https://stroke-final.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch stroke prediction");
  }

  return response.json();
}

export async function getAnalytics() {
  const response = await fetch("https://stroke-final.onrender.com/analytics");
  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }
  return response.json();
}
