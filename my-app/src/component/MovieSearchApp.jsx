import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebound from "../Hooks/UseDebound";
import LoadingSkeleton from "./loading/LoadingSkeleton";

// https://api.themoviedb.org/3/movie/157336?api_key=fa825ee09840f8cdebb90ff7d067f462
// https://api.themoviedb.org/3/search/movie?query=''&api_key=fa825ee09840f8cdebb90ff7d067f462
// https://image.tmdb.org/t/p/original/${data.poster_path}
const MovieSearchApp = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const queryDebound = useDebound(query, 500);
  const [loading, setLoading] = useState(true);
  console.log(queryDebound);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${queryDebound}&api_key=fa825ee09840f8cdebb90ff7d067f462`
      );
      //   console.log(response.data);
      if (response.data.results) {
        setMovie(response.data.results);
        // console.log(movie);
        setLoading(false);
      }
    }
    fetchData();
  }, [queryDebound]);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className=" w-full p-5 rounded-lg border border-purple-500 shadow-xl"
          placeholder="Search movie"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {!loading && Array.isArray(movie) && movie.length ? (
          movie.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))
        ) : (
          <p>No movie found</p>
        )}
        {/* {movie.length > 0 &&
          movie.map((item) => <MovieItem key={item.id}></MovieItem>)} */}
      </div>
    </div>
  );
};

const MovieItemLoading = () => {
  return (
    <div className="bg-white p-3 shadow-md rounded-2xl flex flex-col">
      <div className="h-[297px]">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="16px"
        ></LoadingSkeleton>
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-lg text-black font-semibold mb-4">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <p className="text-[#999] text-sm mb-6 !leading-relaxed">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </p>
        <div className="flex item-center gap-x-3 mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6671 4.02447C11.7719 3.70201 12.2281 3.70201 12.3329 4.02447L13.7175 8.28602C13.7644 8.43023 13.8988 8.52786 14.0504 8.52786H18.5313C18.8703 8.52786 19.0113 8.96173 18.737 9.16102L15.1119 11.7948C14.9892 11.8839 14.9379 12.0419 14.9847 12.1861L16.3694 16.4477C16.4742 16.7701 16.1051 17.0383 15.8308 16.839L12.2057 14.2052C12.0831 14.1161 11.9169 14.1161 11.7943 14.2052L8.16918 16.839C7.89488 17.0383 7.52581 16.7701 7.63059 16.4477L9.01525 12.1861C9.06211 12.0419 9.01078 11.8839 8.88811 11.7948L5.26301 9.16102C4.98871 8.96173 5.12968 8.52786 5.46874 8.52786H9.9496C10.1012 8.52786 10.2356 8.43023 10.2825 8.28602L11.6671 4.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M9.03301 19.0001L9 19.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.0296 19.1981L14.9966 20.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.0314 19.0991L11.9653 21.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton width="50px" height="100%"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};
const MovieItem = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-white p-3 shadow-md rounded-2xl flex flex-col">
      <div className="h-[297px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-lg text-black font-semibold mb-4">{data.title}</h3>
        <p className="text-[#999] text-sm mb-6 !leading-relaxed">
          {data.overview}
        </p>
        <div className="flex item-center gap-x-3 mt-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6671 4.02447C11.7719 3.70201 12.2281 3.70201 12.3329 4.02447L13.7175 8.28602C13.7644 8.43023 13.8988 8.52786 14.0504 8.52786H18.5313C18.8703 8.52786 19.0113 8.96173 18.737 9.16102L15.1119 11.7948C14.9892 11.8839 14.9379 12.0419 14.9847 12.1861L16.3694 16.4477C16.4742 16.7701 16.1051 17.0383 15.8308 16.839L12.2057 14.2052C12.0831 14.1161 11.9169 14.1161 11.7943 14.2052L8.16918 16.839C7.89488 17.0383 7.52581 16.7701 7.63059 16.4477L9.01525 12.1861C9.06211 12.0419 9.01078 11.8839 8.88811 11.7948L5.26301 9.16102C4.98871 8.96173 5.12968 8.52786 5.46874 8.52786H9.9496C10.1012 8.52786 10.2356 8.43023 10.2825 8.28602L11.6671 4.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
            <path
              d="M9.03301 19.0001L9 19.9995"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15.0296 19.1981L14.9966 20.1975"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.0314 19.0991L11.9653 21.098"
              stroke="#FFB86C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
