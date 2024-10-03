import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { CircleCheck, Trophy, XCircleIcon } from 'lucide-react';

export default function DialogResult({
  answer,
  quizlength,
}: {
  answer: { correct: number; wrong: number };
  quizlength: number;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription asChild className="text-primary flex flex-col">
            <div className="w-full flex justify-center items-center mb-2">
              <Trophy size={80} />
            </div>
            <span className="text-2xl font-bold text-center mb-2">Your Score</span>
            <span className="text-center text-xl font-medium mb-2">
              {answer.correct}/{quizlength}
            </span>

            <Button className="w-fit mx-auto px-8 mb-6">Try Again</Button>

            <div className="flex justify-center mb-6">
              <div className="space-y-2">
                <div className="flex gap-1 items-center">
                  <CircleCheck color="green" />
                  <span>Correct Answer</span>
                </div>
                <div className="flex gap-1 items-center">
                  <XCircleIcon color="red" />
                  <span>Incorrect Answer</span>
                </div>
              </div>
            </div>

            <Button variant="link" className="text-muted-foreground">
              Select Another Quiz
            </Button>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
