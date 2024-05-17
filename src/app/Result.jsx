import Card from "@/components/Card";

const Result = ({results}) => {
    // console.log(results);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4 max-w-6xl mx-auto">
        {
            results.map((movie) => <Card key={movie.id} movie={movie} />)
        }
    </div>
    )
}
export default Result