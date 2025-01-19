interface QuestionHeaderProps {
  title: string;
  description: string;
}

export function QuestionHeader({ title, description }: QuestionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 max-w-xl mx-auto">{description}</p>
    </div>
  );
}
