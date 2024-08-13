"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function BooksLayout({ children }) {
  const router = useRouter();
  const textKeyword = useRef(null);

  const handleSearch = () => {
    router.push(`/books/${textKeyword.current.value}`);
  };

  return (
    <>
      <form className="mt-2 mb-4">
        <input
          type="text"
          ref={textKeyword}
          className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 forcus: bg-white forcus:outline-none forcus: border-red-500"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-509"
        >
          検索
        </button>
        <hr />
        {children}
      </form>
    </>
  );
}
