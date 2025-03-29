import { useEffect, useRef, useState } from "react";

export function Search({ query, onSetQuery }) {
  const inputEl = useRef(null);
  useEffect(function () {
    function callback(e) {
      if (e.code === "Enter") inputEl.current.focus();
    }
    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
  }, []);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSetQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
