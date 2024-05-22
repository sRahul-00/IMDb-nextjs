import Result from "@/app/Result";

const API_KEY = process.env.API_KEY;
const SearchPage = async ({params}) => {
    console.log(params);
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();

    const results = data.results;

    console.log(data);
    console.log(results);

  return (
    <div>
        {
            results && results.length === 0 && <h1>No Results Found</h1>
            
        }
        {
            results && <Result results = {results} />
        }
    </div>
  )
}
export default SearchPage