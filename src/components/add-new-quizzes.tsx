import { PlusIcon } from '@radix-ui/react-icons';

const AddNewQuizzes = () => {
  return (
    <div className="border border-r-4 border-b-4 rounded-lg p-2 cursor-pointer">
      <div className="w-full h-full flex justify-center items-center gap-2">
        <PlusIcon className="text-muted-foreground" />
        <p className="text-sm text-muted-foreground font-medium">Add a new Quiz</p>
      </div>
    </div>
  );
};

export default AddNewQuizzes;
