import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <nav className="py-3 border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-4xl w-full mx-auto px-4 flex justify-between">
        <Button
          size="sm"
          variant="ghost"
          className="rounded-sm border-[1.5px] border-primary border-r-4 border-b-4 shadow-sm text-base font-bold"
        >
          Quizzy
        </Button>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
