import React from "react";
import type { Props } from "../interface";

export const LoadMoreButton: React.FC<Props> = ({
  loading,
  hasMore,
  onLoadMore,
}) => (
  <button
    onClick={onLoadMore}
    disabled={loading || !hasMore}
    className={`mx-auto block px-4 py-2 rounded ${
      loading || !hasMore
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-green-500 text-white hover:bg-green-600"
    }`}
  >
    {loading
      ? "Chargement..."
      : hasMore
      ? "Voir plus d'événements"
      : "Plus d'événements"}
  </button>
);
