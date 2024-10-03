import AddNewQuizzes from '@/components/add-new-quizzes';
import Back from '@/components/back';
import CardQuizzes from '@/components/card-quizzes';
import MainLayout from '@/layouts/main-layout';

const QuizPage = () => {
  return (
    <MainLayout>
      <Back />
      <div className="font-bold">All Quizzes</div>

      <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <CardQuizzes href={`/quiz/play`} />
        <AddNewQuizzes />
      </div>
    </MainLayout>
  );
};

export default QuizPage;
