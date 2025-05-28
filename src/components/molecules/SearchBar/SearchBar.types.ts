export type SearchBarProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
  debounceDelay?: number;
};
