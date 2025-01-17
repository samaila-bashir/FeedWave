import IconArrowUp from '../../assets/shared/icon-arrow-up.svg';

const Upvotes: React.FC<{ upvotes: number }> = ({ upvotes }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-ghost-white px-4 py-2 md:flex-col md:px-3">
      <img
        src={IconArrowUp}
        alt="Icon arrow up"
        className="h-2 w-2 font-light"
      />
      <p className="text-xs font-semibold text-indigo-ink">{upvotes}</p>
    </div>
  );
};
export default Upvotes;
