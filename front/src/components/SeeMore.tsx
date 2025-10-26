import type { SeeMoreProps } from "../interface";

export const SeeMore = ({ isOpen, toggle, id }: SeeMoreProps) => {
  return (
    <button
      onClick={() => toggle(id)}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {isOpen ? "See Less" : "See More"}
    </button>
  );
};
