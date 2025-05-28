'use client';

import { SearchBar } from "@/components/molecules/SearchBar/SearchBar";


export default function Home() {
  const handleSearch = (value: string) => {
    console.log("Search input:", value);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Mentoryab</h1>
      <SearchBar onSearch={handleSearch} debounceDelay={500} />
    </div>
  );
}
