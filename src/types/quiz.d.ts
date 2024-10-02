export interface QuizType {
  scope: string;
  region: string;
  category: string;
  questionType: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  label: string;
  isCorrect: boolean;
}
