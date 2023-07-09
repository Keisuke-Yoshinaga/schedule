import { Bars3Icon } from '@heroicons/react/24/outline';

const AppBar = () => {
  return (
    <div className="flex h-14 items-center bg-[#24292f]">
      <button>
        <Bars3Icon className="ml-4 h-6 w-6 text-gray-50"></Bars3Icon>
      </button>
      <span className="ml-4 text-gray-50 ">react-kanban-schedule</span>
    </div>
  );
};

export default AppBar;
