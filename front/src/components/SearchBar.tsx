import type { SearchBarProps } from "../interface";

export const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search events..."
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
