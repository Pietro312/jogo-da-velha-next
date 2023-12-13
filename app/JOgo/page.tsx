"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";



export default function Home() {
  let pontos = 0
  function add() {
    pontos = pontos+1
    let count = document.querySelector("#spanum")
    if (count) count.innerHTML = pontos.toString()
    console.log(pontos)
  }
  const [table, setTable] = useState(["","","","","","","","",""])

  const [player, setPlayer]  = useState("X")

  function mark(index:number) {
    if(table[index]) return 
    table[index] = player
    setPlayer(player == "X" ? "O" : "X")
    checkWinner()
  }
  
  function checkWinner(){
    if(table[0] == table[1] && table[1] == table[2] && table[0] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }
    
    if(table[3] == table[4] && table[4] == table[5] && table[3] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }

    if(table[6] == table[7] && table[7] == table[8] && table[6] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }

    if(table[0] == table[3] && table[3] == table[6] && table[0] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }

    if(table[1] == table[4] && table[4] == table[7] && table[1] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }

    if(table[2] == table[5] && table[5] == table[8] && table[2] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }

    if(table[0] == table[4] && table[4] == table[8] && table[0] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }
    if(table[2] == table[4] && table[4] == table[6] && table[2] != ""){
      if(player == "X"){
      alert("O X ganhou");return}
        else{
          alert("O O ganhou");return
        }
    }
  }

  return (
    <div id="tudao">
      <h1>Jogo da Velha</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={() => mark(0)}>{table[0]}</td>
            <td onClick={() => mark(1)}>{table[1]}</td>
            <td onClick={() => mark(2)}>{table[2]}</td>
              </tr>
            <tr>
            <td onClick={() => mark(3)}>{table[3]}</td>
            <td onClick={() => mark(4)}>{table[4]}</td>
            <td onClick={() => mark(5)}>{table[5]}</td>
            </tr>
            <tr>
            <td onClick={() => mark(6)}>{table[6]}</td>
            <td onClick={() => mark(7)}>{table[7]}</td>
            <td onClick={() => mark(8)}>{table[8]}</td>
            </tr>
        </tbody>
      </table>
      <div id="icones">
        <a id="aum" href="./JOgo"><LuRefreshCw /></a>
        <a id="dois" onClick={add}>
          <IoMdAddCircle />
        </a>
        <a id="casinha" href="/"><FaHouse /></a>
      </div>
      <span id="pontos">
        {pontos}
      </span>
    </div>
  )
}
