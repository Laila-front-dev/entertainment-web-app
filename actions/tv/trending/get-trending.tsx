const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { TvTrendingResponse } from "@/types";

const getTrending = async (id: number) => {
  const res = await fetch(
    `${URL}/trending/tv/day?api_key=${API_KEY}&page=${id}

    `
  );
  const posts: TvTrendingResponse = await res.json();
  return { posts };
};

export default getTrending;