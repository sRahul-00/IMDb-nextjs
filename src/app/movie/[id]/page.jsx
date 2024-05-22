import Image from "next/image";

const API_KEY = process.env.API_KEY;

const MoviePage = async ({params}) => {
    const id = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const movie = await res.json();
    // const movie = data.results;

    // console.log(movie);
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-4">
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className="rounded-lg"
            style={{maxWidth:"100%", height:"100%"}}
            />

            <div className="p-2">
              <h2 className="text-xl font-bold mt-2 mb-3">{movie?.title || movie?.name || movie?.original_title || movie?.original_name }</h2>
              <p className="text-md mt-1 mb-3">{movie.overview}</p>
                <p>
                    <span className="mr-1 font-semibold">Released Date:</span>
                    {movie.first_air_date || movie.release_date}
                </p>
                <p>
                    <span className="mr-1 font-semibold">Votes:</span>
                    {movie.vote_count}
                </p>
            </div>

        </div>
    </div>
  )
}
export default MoviePageage