import Quiz from '@/data/quiz/indonesian-capital-city.json';
import { Checkbox } from './components/ui/checkbox';
import { useState } from 'react';
import { Option } from './types/quiz';
import { Button } from './components/ui/button';

function App() {
  const [checkboxActive, setCheckboxActive] = useState<null | number>(null);
  const [answer, setAnswer] = useState<Option>({} as Option);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [answerText, setAnswerText] = useState('');

  const checkAnswerUser = (answer: Option) => {
    if (answer.isCorrect) {
      setAnswerText('Benar');
    } else {
      setAnswerText('Salah');
    }
  };

  return (
    <>
      <p>{Quiz.questions[0].text}</p>
      <div className="flex gap-4 my-2">
        {Quiz.questions[0].options.map((item: Option, i) => {
          let key: string;
          switch (i) {
            case 0:
              key = 'A';
              break;
            case 1:
              key = 'B';
              break;
            case 2:
              key = 'C';
              break;
            default:
              key = 'E';
              break;
          }

          return (
            <label
              key={i}
              onClick={() => setCheckboxActive(i)}
              htmlFor={`terms ${i}`}
              className="flex items-center space-x-2"
            >
              <Checkbox
                id={`terms ${i}`}
                checked={checkboxActive == i}
                onCheckedChange={() => setAnswer({ label: item.label, isCorrect: item.isCorrect })}
              />
              <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                {key}. {item.label}
              </span>
            </label>
          );
        })}
      </div>

      <Button
        onClick={() => {
          checkAnswerUser(answer);
          setCheckAnswer(true);
        }}
      >
        check answer
      </Button>

      {checkAnswer && <p>Jawaban anda: {answerText}</p>}
    </>
  );
}

export default App;
