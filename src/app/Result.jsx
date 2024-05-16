const Result = ({results}) => {
    console.log(results);
  return (
    results.map((movie) => <div>
        <h2>{movie?.title || movie?.name || movie?.original_title || movie?.original_name }</h2>
    </div>
    )
  )
}
export default Result