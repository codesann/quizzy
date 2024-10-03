import Back from '@/components/back';
import MainLayout from '@/layouts/main-layout';
import QuizCapitalCityOfIndonesia from '@/data/quiz/indonesian-capital-city.json';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Option } from '@/types/quiz';
import { cn } from '@/utils/cn';

const PlayPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerActive, setAnswerActive] = useState<null | number>(null);
  const [answerSelect, setAnswerSelect] = useState<Option>({} as Option);
  const [answer, setAnswer] = useState({
    correct: 0,
    wrong: 0,
  });

  const handleSelectQuestion = (value: Option, index: number) => {
    setAnswerSelect({
      label: value.label,
      isCorrect: value.isCorrect,
    });
    setAnswerActive(index);
  };

  const handleNextQuestion = () => {
    if (answerSelect.isCorrect) {
      setAnswer((prev) => ({
        ...prev,
        correct: prev.correct + 1,
      }));
    } else if (!answerSelect.isCorrect && answerActive !== null) {
      setAnswer((prev) => ({
        ...prev,
        wrong: prev.wrong + 1,
      }));
    }
    if (answerActive === null) {
      alert('Isi jawabanya cokkkk');
      return;
    } else {
      setQuestionIndex((prev) => prev + 1);
      setAnswerActive(null);
    }
  };

  console.log(answer);

  return (
    <MainLayout>
      <Back />
      <div className="text-muted-foreground text-sm mb-4">
        Question <span>{questionIndex + 1}</span>/
        <span>{QuizCapitalCityOfIndonesia.questions.length}</span>
      </div>

      <p className="mb-4">{QuizCapitalCityOfIndonesia.questions[questionIndex].text}</p>
      <div className="flex flex-col gap-3">
        {QuizCapitalCityOfIndonesia.questions[questionIndex].options.map((value, i) => {
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
            <Button
              onClick={() => handleSelectQuestion(value, i)}
              variant={answerActive === i ? 'default' : 'outline'}
              key={i}
              className="w-full justify-start py-7 gap-2"
            >
              <div
                className={cn(
                  'h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors',
                  {
                    'bg-secondary-foreground text-primary-foreground border hover:bg-primary/90':
                      answerActive === i,
                  },
                  {
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
                      answerActive !== i,
                  }
                )}
              >
                {key}
              </div>
              <span>{value.label}</span>
            </Button>
          );
        })}

        <Button onClick={handleNextQuestion} className="w-fit mx-auto mt-4 gap-2">
          <span>Next</span> <ArrowRightIcon />
        </Button>
      </div>
    </MainLayout>
  );
};

export default PlayPage;
