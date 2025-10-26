import React from "react";
import type { EventCardProps as Props } from "../interface";

const stripHtml = (html?: string) =>
  (html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const preview = (text: string, len = 160) =>
  text.length > len ? text.slice(0, len) + "…" : text;

export const EventCard: React.FC<Props> = ({ event, isOpen, toggle }) => {
  const id = event.event_id;
  const text = stripHtml(event.description);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={event.cover_url || "https://via.placeholder.com/600x400"}
        alt={event.title}
      />

      <div className="p-4 flex flex-col justify-betweenflex-1">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {event.title}
        </h2>

        <p className="text-gray-700 text-sm leading-6 whitespace-pre-wrap">
          {isOpen ? text : preview(text)}
        </p>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => toggle(id)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {isOpen ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </article>
  );
};
