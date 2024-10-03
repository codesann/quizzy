import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const naviagate = useNavigate();
  return (
    <MainLayout classname="flex flex-col justify-center items-center space-y-2">
      <div className="text-3xl sm:text-5xl font-bold text-center">
        Welcome to <span className="text-muted-foreground italic">Quizzy</span>, the fun quiz app! Test
        what you know. Start now and join the fun!
      </div>
      <div className="text-muted-foreground text-sm">Are you ready to answer the quiz?</div>
      <Button onClick={() => naviagate('/quiz')}>Get started</Button>
    </MainLayout>
  );
};

export default HomePage;
