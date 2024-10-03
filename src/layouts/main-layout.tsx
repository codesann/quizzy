import { cn } from '@/utils/cn';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children, classname }: { children: React.ReactNode; classname?: string }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={cn('max-w-4xl w-full mx-auto min-h-screen px-4', classname, {
        'pt-20': pathname !== '/',
      })}
    >
      {children}
    </div>
  );
};

export default MainLayout;
