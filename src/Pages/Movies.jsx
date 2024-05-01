import React, { useCallback, useEffect, useState } from "react";

import Rows from "../Components/Data/Row";
import { useStatStyles } from "@chakra-ui/react";

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://movies-api14.p.rapidapi.com/home";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "932cd347acmshe2de3d5a01ef416p107551jsn1010a0bd3184",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  const fetchData = useCallback(async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setMoviesData(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {moviesData.length > 0 && (
        <div style={{ marginTop: "20px", position: "relative"}} className="movie__rows" >
          <Rows
            title="Trending Now"
            movies={moviesData[0].movies}
            loading={loading}
          />
          <Rows
            title="ZEE5 ORIGINALS"
            movies={moviesData[3].movies}
            isLargeRow
            loading={loading}
          />
          <Rows
            title="Top Rated"
            movies={moviesData[5].movies}
            loading={loading}
          />
          <Rows
            title="New Movies"
            movies={moviesData[1].movies}
            loading={loading}
          />
          <Rows
            title="Animation Movies"
            movies={moviesData[2].movies}
            loading={loading}
          />
          <Rows
            title="Family Time"
            movies={moviesData[4].movies}
            loading={loading}
          />
          <Rows
            title="Sci-Fi Movies"
            movies={moviesData[8].movies}
            loading={loading}
          />
          <Rows
            title="Documentaries"
            movies={moviesData[9].movies}
            loading={loading}
          />
        </div>
      )}
    </>
  );
}
