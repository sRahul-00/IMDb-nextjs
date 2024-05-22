import Image from "next/image"
import spinner from "../../public/spinner.svg";

const loading = () => {
  return (
    <div className="flex justify-center mt-14">
      <Image width={'450'} height={'450'} className="h-52" src={spinner} alt="loading..." />
    </div>
  )
}
export default loading