import MainLayout from '@/layouts/main-layout';
import QuizCapitalCityOfIndonesia from '@/data/quiz/indonesian-capital-city.json';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { Option } from '@/types/quiz';
import { cn } from '@/utils/cn';
import { Progress } from '@/components/ui/progress';
// import DialogResult from '@/components/dialog-result';

const PlayPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerActive, setAnswerActive] = useState<null | number>(null);
  const [answerSelect, setAnswerSelect] = useState<Option>({} as Option);
  const [disableNext, setDisableNext] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [progress, setProgress] = useState(0);
  const [answer, setAnswer] = useState({
    correct: 0,
    wrong: 0,
  });

  useEffect(() => {
    // Update progress based on the current question index
    setProgress(((questionIndex + 1) / QuizCapitalCityOfIndonesia.questions.length) * 100);
  }, [questionIndex]);

  const handleSelectQuestion = (value: Option, index: number) => {
    setAnswerSelect({
      label: value.label,
      isCorrect: value.isCorrect,
    });
    setAnswerActive(index);
  };

  const handleNextQuestion = () => {
    if (answerActive === null) {
      alert('Please select an answer!');
      return;
    }

    // Update correct or wrong answer count
    if (answerSelect.isCorrect) {
      setAnswer((prev) => ({
        ...prev,
        correct: prev.correct + 1,
      }));
    } else {
      setAnswer((prev) => ({
        ...prev,
        wrong: prev.wrong + 1,
      }));
    }

    // Proceed to the next question
    setDisableNext(true);
    setCheckAnswer(true);
    setTimeout(() => {
      setQuestionIndex((prev) => prev + 1);
      setAnswerActive(null);
      setDisableNext(false);
      setCheckAnswer(false);
    }, 1000);
  };

  // console.log(progress);

  return (
    <MainLayout>
      {/* <Back /> */}

      <div className="w-full flex items-center justify-between mb-6 mt-2">
        <span className="text-muted-foreground text-sm">
          Question {questionIndex + 1}/{QuizCapitalCityOfIndonesia.questions.length}
        </span>

        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <CheckCircledIcon width={20} height={20} color="green" />
            <span className="text-[#008000]">{answer.correct}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">{answer.wrong}</span>
            <CrossCircledIcon width={20} height={20} color="red" />
          </div>
        </div>
      </div>

      <Progress value={progress} />

      <p className="my-6 text-xl font-bold">
        {QuizCapitalCityOfIndonesia.questions[questionIndex].text}
      </p>
      <div className="flex flex-col gap-3">
        {QuizCapitalCityOfIndonesia.questions[questionIndex].options.map((value, i) => {
          const key = String.fromCharCode(65 + i); // A, B, C, ...

          return (
            <Button
              onClick={() => handleSelectQuestion(value, i)}
              variant={
                answerActive === i
                  ? `${!answerSelect.isCorrect && checkAnswer ? 'destructive' : 'default'}`
                  : 'outline'
              }
              key={i}
              className={cn('w-full justify-start py-7 gap-2', {
                'bg-green-500 hover:bg-green-500/90 text-primary-foreground hover:text-primary-foreground':
                  value.isCorrect && checkAnswer,
              })}
            >
              <div
                className={cn(
                  'h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors',
                  {
                    'bg-inherit text-primary-foreground border hover:inherit': answerActive === i,
                  },
                  {
                    'border border-input bg-inherit hover:bg-inherit hover:text-accent-foreground':
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

        <Button onClick={handleNextQuestion} disabled={disableNext} className="w-fit mx-auto mt-4 gap-2">
          <span>Next</span> <ArrowRightIcon />
        </Button>

        {/* <DialogResult answer={answer} quizlength={QuizCapitalCityOfIndonesia.questions.length} /> */}
      </div>
    </MainLayout>
  );
};

export default PlayPage;
