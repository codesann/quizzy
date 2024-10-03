import { useNavigate } from 'react-router-dom';
import IconsQuiz from '/icons-quiz.png';
import QuizCapitalCityOfIndonesia from '@/data/quiz/indonesian-capital-city.json';

const CardQuizzes = ({ href }: { href: string }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(href)}
      className="border border-r-4 border-b-4 rounded-lg p-2 cursor-pointer"
    >
      <div className="w-full flex justify-center items-center bg-secondary py-4">
        <img src={IconsQuiz} alt="icon quiz" />
      </div>
      <div className="mt-2">
        <p className="text-sm font-bold">Quiz Capital City of Indonesia</p>
        <p className="text-xs text-muted-foreground mt-1">
          {QuizCapitalCityOfIndonesia.questions.length} Question
          {QuizCapitalCityOfIndonesia.questions.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
};

export default CardQuizzes;
