import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Check, Star } from "lucide-react";

interface QuestionInputProps {
  type: "scale" | "boolean" | "text" | "single" | "multi" | "rating" | "likert";
  questionNumber: number;
  text: string;
  options?: string[];
}

export function QuestionInput({
  type,
  questionNumber,
  text,
  options = [],
}: QuestionInputProps) {
  const [currentValue, setCurrentValue] = useState<any>();

  useEffect(() => {
    const handleUpdateValue = (event: CustomEvent) => {
      const { questionNumber: qNum, value } = event.detail;
      if (qNum === questionNumber) {
        setCurrentValue(value);
      }
    };

    // Add event listener
    document.addEventListener(
      "update-question-value",
      handleUpdateValue as EventListener
    );

    // Cleanup
    return () => {
      document.removeEventListener(
        "update-question-value",
        handleUpdateValue as EventListener
      );
    };
  }, [questionNumber]);

  const handleChange = (newValue: any) => {
    setCurrentValue(newValue);

    const event = new CustomEvent("question-change", {
      detail: {
        questionNumber,
        value: newValue,
      },
      bubbles: true,
      composed: true,
    });

    const element = document.querySelector(
      `[data-question="${questionNumber}"]`
    );
    element?.dispatchEvent(event);
  };

  return (
    <div data-question={questionNumber}>
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        {questionNumber}. {text}
      </h3>

      {type === "scale" && (
        <ScaleInput value={currentValue as number} onChange={handleChange} />
      )}
      {type === "boolean" && (
        <BooleanInput value={currentValue as boolean} onChange={handleChange} />
      )}
      {type === "text" && (
        <TextInput value={currentValue as string} onChange={handleChange} />
      )}
      {type === "single" && (
        <SingleChoiceInput
          options={options}
          value={currentValue as string}
          onChange={handleChange}
        />
      )}
      {type === "multi" && (
        <MultiChoiceInput
          options={options}
          value={currentValue as string[]}
          onChange={handleChange}
        />
      )}
      {type === "rating" && (
        <RatingInput value={currentValue as number} onChange={handleChange} />
      )}
      {type === "likert" && (
        <LikertInput value={currentValue as number} onChange={handleChange} />
      )}
    </div>
  );
}

function ScaleInput({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) {
  return (
    <div>
      {/* Mobile layout (labels above) for sm and below */}
      <div className="sm:hidden flex flex-col space-y-2">
        <div className="flex justify-between px-2">
          <span className="text-gray-600 text-sm">Low</span>
          <span className="text-gray-600 text-sm">High</span>
        </div>
        <div className="flex w-full">
          <div className="grid w-full grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-8 h-8 aspect-square rounded-full bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 ${
                    value === num ? "bg-amber-100 text-amber-900" : ""
                  }`}
                  onClick={() => onChange?.(num)}
                >
                  {num}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout (labels inline) for sm and above */}
      <div className="hidden sm:flex items-center space-x-4">
        <span className="text-gray-600">Low</span>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className={`w-10 h-10 aspect-square rounded-full bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 ${
                  value === num ? "bg-amber-100 text-amber-900" : ""
                }`}
                onClick={() => onChange?.(num)}
              >
                {num}
              </Button>
            </div>
          ))}
        </div>
        <span className="text-gray-600">High</span>
      </div>
    </div>
  );
}

function BooleanInput({
  value,
  onChange,
}: {
  value?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
      <Button
        variant="outline"
        className={`w-full sm:w-auto bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 px-8 ${
          value === true ? "bg-amber-100 text-amber-900" : ""
        }`}
        onClick={() => onChange?.(true)}
      >
        Yes
      </Button>
      <Button
        variant="outline"
        className={`w-full sm:w-auto bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 px-8 ${
          value === false ? "bg-amber-100 text-amber-900" : ""
        }`}
        onClick={() => onChange?.(false)}
      >
        No
      </Button>
    </div>
  );
}

function TextInput({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <textarea
      className="w-full p-3 sm:p-4 bg-white border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent text-sm sm:text-base"
      rows={3}
      placeholder="Your thoughts..."
      value={value || ""}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}

function SingleChoiceInput({
  options = [],
  value,
  onChange,
}: {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <Button
          key={option}
          variant="outline"
          className={`justify-start bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 ${
            value === option ? "bg-amber-100 text-amber-900" : ""
          }`}
          onClick={() => onChange?.(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

function MultiChoiceInput({
  options = [],
  value = [],
  onChange,
}: {
  options: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
}) {
  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option];
    onChange?.(newValue);
  };

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <Button
          key={option}
          variant="outline"
          className={`justify-between bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 ${
            value.includes(option) ? "bg-amber-100 text-amber-900" : ""
          }`}
          onClick={() => toggleOption(option)}
        >
          {option}
          {value.includes(option) && <Check className="w-4 h-4 ml-2" />}
        </Button>
      ))}
    </div>
  );
}

function RatingInput({
  value,
  onChange,
  max = 5,
}: {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
}) {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: max }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`p-1 transition-colors duration-200 hover:bg-transparent active:bg-transparent focus:outline-none ${
            value && index < value ? "text-amber-400" : "text-gray-300"
          }`}
          onClick={() => onChange?.(index + 1)}
        >
          <Star
            className="w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-200"
            fill="currentColor"
          />
        </button>
      ))}
    </div>
  );
}

function LikertInput({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) {
  const options = [
    { value: 1, label: "Strongly Disagree" },
    { value: 2, label: "Disagree" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Agree" },
    { value: 5, label: "Strongly Agree" },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <Button
          key={option.value}
          variant="outline"
          className={`justify-start bg-white hover:bg-amber-100 hover:text-amber-900 border-amber-200 ${
            value === option.value ? "bg-amber-100 text-amber-900" : ""
          }`}
          onClick={() => onChange?.(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
