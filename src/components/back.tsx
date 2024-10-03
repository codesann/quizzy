import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function Back() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-1 items-center cursor-pointer mb-6 w-fit" onClick={() => navigate(-1)}>
      <ArrowLeftIcon />
      <span className="text-base font-medium">back</span>
    </div>
  );
}
