import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BaseCard } from "@/components/ui/base-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  index: number;
  className?: string;
}

export function QuestionCard({
  question,
  index,
  className,
}: QuestionCardProps) {
  const handleBadgeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const categoryElement = document.querySelector(
      `[data-category="${question.category}"]`
    ) as HTMLElement;
    categoryElement?.click();
  };

  return (
    <BaseCard className={cn("cursor-pointer hover:scale-[1.02]", className)}>
      <a href={`/questions/${question.id}`}>
        <CardHeader>
          <div className="mb-3" onClick={handleBadgeClick}>
            <Badge
              variant="outline"
              className="category-badge capitalize cursor-pointer hover:bg-amber-100 transition-colors"
              data-category-value={question.category}
            >
              {question.category}
            </Badge>
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {question.title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {question.description}
          </CardDescription>
        </CardHeader>
      </a>
    </BaseCard>
  );
}
