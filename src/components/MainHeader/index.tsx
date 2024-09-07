import AppTitle from '../../components/AppTitle';
import CategoryFilters from '../../components/CategoryFilters';
import { categories, status } from '../../utils/data';
import Status from '../Status';

const MainHeader = () => {
  return (
    <div className="my-12 hidden gap-3 md:flex lg:w-[25%] lg:flex-col">
      <div className="tablet-bg desktop-bg flex w-1/3 flex-col justify-end rounded-xl bg-slate-300 p-6 lg:w-full">
        <AppTitle />
      </div>

      <div className="flex w-1/3 flex-wrap items-start gap-2 rounded-xl bg-white p-6 lg:w-full lg:px-4">
        {categories.map(({ id, title, isActive }) => (
          <CategoryFilters key={id} title={title} isActive={isActive} />
        ))}
      </div>

      <div className="w-1/3 rounded-xl bg-white p-6 lg:w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-extrabold">Roadmap</h2>
          <a href="#" className="font-semibold text-cornflower-blue underline">
            View
          </a>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          {status.map(({ id, title, count, color }) => (
            <Status key={id} title={title} count={count} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
