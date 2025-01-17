import IconComments from '../../assets/shared/icon-comments.svg';
import { cn } from '../../utils/cn';

interface ICommentsCountProps {
  total: number;
  className?: string;
}

const CommentsCount: React.FC<ICommentsCountProps> = ({ total, className }) => {
  return (
    <div className={cn('flex items-center gap-3 md:flex', className)}>
      <img src={IconComments} alt="Icon arrow up" className="h-5 w-5" />
      <p className="font-bold text-indigo-ink">{total}</p>
    </div>
  );
};
export default CommentsCount;
