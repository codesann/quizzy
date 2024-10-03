import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function Back() {
  const navigate = useNavigate();

  return (
    <button className="flex items-center justify-start gap-1 mb-6 w-fit" onClick={() => navigate(-1)}>
      <ArrowLeftIcon />
      <span className="text-base font-medium">back</span>
    </button>
  );
}
