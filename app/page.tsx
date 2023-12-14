import { FaPlay } from "react-icons/fa";
import './style.css'

export default function Home() {
  return (
      <div id="tibo">
        <h1>Jogo da Velha</h1>
        <div className="botao">
          <a href="./JOgo"><FaPlay/></a>
        </div>
      </div>
  )
}

