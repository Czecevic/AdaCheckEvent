import { SeeMore } from "./SeeMore";
import type { CardsProps } from "../interface";

export const Cards = ({ event, isOpen, toggle }: CardsProps) => {
  // simple preview function
  const preview = (text: string, len = 160) =>
    text.length > len ? text.slice(0, len) + "…" : text;

  // simple strip HTML -> plain text (enlever <p>, <br>, etc.)
  const stripHtml = (html?: string) => (
    html === "" && (html = "données non disponibles"),
    (html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
  const id = event.event_id;
  const text = stripHtml(event.description) || "";
  return (
    <article
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      <img
        className="w-full h-48 object-cover"
        src={event.cover_url || "https://via.placeholder.com/600x400"}
        alt={event.title}
      />

      <div className="p-4 flex flex-col flex-1 justify-between">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {event.title}
        </h2>

        <p className="text-gray-700 text-sm leading-6 whitespace-pre-wrap">
          {isOpen ? text : preview(text)}
        </p>

        <div className="mt-4 flex justify-center">
          <SeeMore isOpen={isOpen} toggle={toggle} id={id} />
        </div>
      </div>
    </article>
  );
};
