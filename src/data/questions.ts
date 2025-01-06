export interface Question {
  id: string;
  title: string;
  description: string;
  category: 'career' | 'relationships' | 'lifestyle' | 'finance';
  questions: {
    text: string;
    type: 'scale' | 'boolean' | 'text';
  }[];
}

export const questions: Question[] = [
  {
    id: 'quit-job',
    title: 'Should I Quit My Job?',
    description: 'Evaluate your current job satisfaction and career prospects',
    category: 'career',
    questions: [
      { text: 'How fulfilled do you feel in your current role?', type: 'scale' },
      { text: 'Do you have growth opportunities?', type: 'boolean' },
      { text: 'What\'s your stress level at work?', type: 'scale' },
    ]
  },
  {
    id: 'buy-house',
    title: 'Should I Buy a House?',
    description: 'Assess your readiness for homeownership',
    category: 'finance',
    questions: [
      { text: 'How stable is your income?', type: 'scale' },
      { text: 'Do you have a down payment saved?', type: 'boolean' },
      { text: 'How long do you plan to stay in the area?', type: 'text' },
    ]
  },
  {
    id: 'marriage',
    title: 'Am I Ready for Marriage?',
    description: 'Reflect on your relationship and readiness for commitment',
    category: 'relationships',
    questions: [
      { text: 'How aligned are your future goals?', type: 'scale' },
      { text: 'Do you trust each other completely?', type: 'boolean' },
      { text: 'What are your concerns about marriage?', type: 'text' },
    ]
  },
  {
    id: 'career-change',
    title: 'Should I Change Careers?',
    description: 'Evaluate your desire for a career transition',
    category: 'career', 
    questions: [
      { text: 'How passionate are you about your current field?', type: 'scale' },
      { text: 'Do you have skills for a new career?', type: 'boolean' },
      { text: 'What\'s driving your desire to change?', type: 'text' },
    ]
  },
  // Add more questions as needed
];