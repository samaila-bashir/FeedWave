import IconComments from '../../assets/shared/icon-comments.svg';

const CommentsCount: React.FC<{ total: number }> = ({ total }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={IconComments} alt="Icon arrow up" className="h-5 w-5" />
      <p className="font-bold text-indigo-ink">{total}</p>
    </div>
  );
};
export default CommentsCount;
