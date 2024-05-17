import Image from "next/image"
import Link from "next/link"
import { FaThumbsUp } from "react-icons/fa";

const Card = ({movie}) => {
  return (
    // {movie?.title || movie?.name || movie?.original_title || movie?.original_name }
    <div className="group cursor-pointer sm:border sm:border-slate-500 sm:m-2 rounded-lg sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-200">
        <Link href={`/movie/${movie.id}`}>
            <Image 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
            width={500} 
            height={300}
            className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300" />

            <div className="p-2">
              <p className="line-clamp-2 text-sm mt-1">{movie.overview}</p>
              <h2 className="text-lg font-bold truncate mt-2">{movie?.title || movie?.name || movie?.original_title || movie?.original_name }</h2>
            </div>

            <div className="flex items-center p-2 sm:border-none border-b-2 border-b-slate-500 mb-5">
              {movie.first_air_date || movie.release_date}
              <FaThumbsUp className="h-5 mr-1 ml-3" />
              {movie.vote_count}
            </div>
        </Link>
    </div>
  )
}
export default Card