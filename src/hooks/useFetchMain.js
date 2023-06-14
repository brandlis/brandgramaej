import { useEffect, useState } from "react";

export function useFetchMain() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCharacter = () => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((pj) => setData(pj.results))
      .catch((err) => err);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return { data, loading };
}
