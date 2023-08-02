import { useEffect, useState } from "react";

export function useFetchMain() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);

  console.log(data);

  useEffect(() => {
    setLoading(true);
    async function fetchCharacter() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${nextPage}`
      );
      const data = await res.json();
      setLoading(false);
      setData(data.results);
    }

    fetchCharacter();
  }, [nextPage]);

  return { data, loading, setNextPage, nextPage };
}
