import { FC } from 'react';

const CategoryFilters: FC<ICategoryFilters> = ({ title, isActive = false }) => {
  return (
    <p
      className={`${isActive ? 'bg-cornflower-blue text-white' : 'bg-ghost-white text-cornflower-blue'} flex flex-col justify-center rounded-xl px-4 font-semibold md:py-2 md:text-sm lg:px-6 lg:py-3 lg:text-base`}
    >
      {title}
    </p>
  );
};
export default CategoryFilters;
