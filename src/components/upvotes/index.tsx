import IconArrowUp from '../../assets/shared/icon-arrow-up.svg';
import { cn } from '../../utils/cn';

interface IUpvotesProps {
  upvotes: number;
  className?: string;
}

const Upvotes: React.FC<IUpvotesProps> = ({ upvotes, className }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg bg-ghost-white px-4 py-3 md:flex md:flex-col md:px-3',
        className
      )}
    >
      <img
        src={IconArrowUp}
        alt="Icon arrow up"
        className="h-2 w-2 font-light"
      />
      <p className="text-xs font-bold text-indigo-ink">{upvotes}</p>
    </div>
  );
};
export default Upvotes;
