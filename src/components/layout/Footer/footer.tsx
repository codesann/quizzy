import { cn } from '@/utils/cn';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer
      className={cn('py-4 bg-muted w-full', {
        'fixed bottom-0 left-0 right-0': pathname === '/',
      })}
    >
      <p className="text-xs text-center text-muted-foreground">
        Copyright © {new Date().getFullYear()} - All right reserved by Codesann
      </p>
    </footer>
  );
};

export default Footer;
