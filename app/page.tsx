import { FaPlay } from "react-icons/fa";



export default function Home() {
  return (
    <div className="w-full h-screen flex items-center text-center justify-center">
      <h1 className="text-[100px] items-center font-[url('https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap')]">Jogo da Velha</h1>
      <div className="flex justify-center ">
        <a className="flex justify-center items-center no-underline text-black text-[100px] mt-[10px] p-[30px] w-fit rounded-[60%] hover:scale-[130%] hover:bg-[rgb(177, 177, 177)]" href="./jogo"><FaPlay /></a>
      </div>
    </div>
  )
}
