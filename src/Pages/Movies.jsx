import React, { useCallback, useContext, useEffect, useState } from "react";

import Rows from "../Components/Data/Row";
import { useStatStyles } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { addMovies } from "../Context/AuthContext/Action";

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(AuthContext);

  const url = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "932cd347acmshe2de3d5a01ef416p107551jsn1010a0bd3184",
      "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
    },
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const data = result.slice(100);
      console.log("API Response:", data);

      // Some RapidAPI movie APIs wrap data in `movies` or similar property

      setMoviesData(data);
      dispatch(addMovies(data));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const fetchData = async() => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=100", {
  //       headers: {
  //         "projectID" : "80bobsy2tlw7"
  //       }
  //     });
  //     const result = await response.json();
  //     console.log(result.data);
  //     setMoviesData(result.data);
  //     dispatch(addMovies(result.data));

  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setLoading(false);
  // }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {moviesData.length > 0 && (
        <div
          style={{ marginTop: "20px", position: "relative" }}
          className="movie__rows"
        >
          <Rows
            title="Trending Now"
            movies={moviesData.slice(0, 10)}
            loading={loading}
          />
          <Rows
            title="ZEE5 ORIGINALS"
            movies={moviesData.slice(10, 20)}
            isLargeRow
            loading={loading}
          />
          <Rows
            title="Top Rated"
            movies={moviesData.slice(20, 30)}
            loading={loading}
          />
          <Rows
            title="New Movies"
            movies={moviesData.slice(30, 40)}
            loading={loading}
          />
          <Rows
            title="Animation Movies"
            movies={moviesData.slice(40, 50)}
            loading={loading}
          />
          <Rows
            title="Family Time"
            movies={moviesData.slice(50, 60)}
            loading={loading}
          />
          <Rows
            title="Sci-Fi Movies"
            movies={moviesData.slice(60, 70)}
            loading={loading}
          />
          <Rows
            title="Documentaries"
            movies={moviesData.slice(70, 80)}
            loading={loading}
          />
        </div>
      )}
    </>
  );
}
