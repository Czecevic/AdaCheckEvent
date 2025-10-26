export interface Props {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

export interface Event {
  event_id: string;
  title: string;
  description?: string | undefined;
  cover_url?: string | null;
}

export interface EventCardProps {
  event: Event;
  isOpen: boolean;
  toggle: (id: string) => void;
}

export interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export interface SeeMoreProps {
  isOpen: boolean;
  toggle: (id: string) => void;
  id: string;
}

export interface CardsProps {
  event: Event;
  isOpen: boolean;
  toggle: (id: string) => void;
}
