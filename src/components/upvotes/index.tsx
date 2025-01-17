import IconArrowUp from '../../assets/shared/icon-arrow-up.svg';

const Upvotes: React.FC<{ upvotes: number }> = ({ upvotes }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-ghost-white px-4 py-2 md:w-4 md:flex-col">
      <img
        src={IconArrowUp}
        alt="Icon arrow up"
        className="h-2 w-3 font-light"
      />
      <p className="font-bold text-indigo-ink">{upvotes}</p>
    </div>
  );
};
export default Upvotes;
