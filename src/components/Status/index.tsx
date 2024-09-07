import { FC } from 'react';

const Status: FC<IStatus> = ({ title, count, color }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <p className="font-normal text-slate-gray">{title}</p>
      </div>

      <p className="font-bold text-slate-gray">{count}</p>
    </div>
  );
};
export default Status;
