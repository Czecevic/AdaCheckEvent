import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { EventCard } from "./EventCard";
import { LoadMoreButton } from "./LoadMoreButton";
import type { Event } from "../interface";

const PAGE_STEP = 20;

export const EventList: React.FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [size, setSize] = useState(PAGE_STEP);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=${size}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        const list: Event[] = data.results || [];
        setAllEvents(list);
        setEvents(list);
        setHasMore(list.length >= size);
      })
      .catch(() => {
        if (!mounted) return;
        setAllEvents([]);
        setEvents([]);
        setHasMore(false);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [size]);

  useEffect(() => {
    const querySelect = query.toLowerCase();
    if (!querySelect) {
      setEvents(allEvents);
      return;
    }
    setEvents(
      allEvents.filter((e) =>
        (e.title || "").toLowerCase().includes(querySelect)
      )
    );
  }, [query, allEvents]);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));
  const handleLoadMore = () => {
    if (loading || !hasMore) return;
    setSize((prev) => prev + PAGE_STEP);
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((ev) => (
          <EventCard
            key={ev.event_id}
            event={ev}
            isOpen={expandedId === ev.event_id}
            toggle={toggle}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <LoadMoreButton
          loading={loading}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
        />
      </div>
    </div>
  );
};
