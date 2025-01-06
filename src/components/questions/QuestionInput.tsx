import { Button } from "@/components/ui/button";

interface QuestionInputProps {
  type: 'scale' | 'boolean' | 'text';
  questionNumber: number;
  text: string;
}

export function QuestionInput({ type, questionNumber, text }: QuestionInputProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        {questionNumber}. {text}
      </h3>
      
      {type === 'scale' && <ScaleInput />}
      {type === 'boolean' && <BooleanInput />}
      {type === 'text' && <TextInput />}
    </div>
  );
}

function ScaleInput() {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600">Low</span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Button
          key={value}
          variant="outline"
          size="sm"
          className="w-10 h-10 rounded-full bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200"
        >
          {value}
        </Button>
      ))}
      <span className="text-gray-600">High</span>
    </div>
  );
}

function BooleanInput() {
  return (
    <div className="flex space-x-4">
      <Button 
        variant="outline" 
        className="bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 px-8"
      >
        Yes
      </Button>
      <Button 
        variant="outline" 
        className="bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 px-8"
      >
        No
      </Button>
    </div>
  );
}

function TextInput() {
  return (
    <textarea
      className="w-full p-4 bg-white border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
      rows={3}
      placeholder="Your thoughts..."
    />
  );
}