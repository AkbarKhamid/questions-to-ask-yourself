import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BaseCard } from "@/components/ui/base-card";
import { cn } from "@/lib/utils";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  className?: string;
}

export function QuestionCard({ question, className }: QuestionCardProps) {
  return (
    <BaseCard className={cn("cursor-pointer hover:scale-[1.02]", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">{question.title}</CardTitle>
        <CardDescription className="text-gray-600">{question.description}</CardDescription>
      </CardHeader>
    </BaseCard>
  );
}