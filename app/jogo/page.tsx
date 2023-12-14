"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";



export default function Home() {
  let pontos = 0
  function add() {
    pontos = pontos + 1
    let count = document.querySelector("#spanum")
    if (count) count.innerHTML = pontos.toString()
    console.log(pontos)
  }
  const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""])

  const [player, setPlayer] = useState("X")

  function mark(index: number) {
    if (table[index]) return
    table[index] = player
    setPlayer(player == "X" ? "O" : "X")
    checkWinner()
  }

  // function checkWinner() {
  //   if (table[0] == table[1] && table[1] == table[2] && table[0] != "") {
  //     if (player == "X") {
  //       document.body.style.backgroundColor = "green"
  //       alert("O X ganhou"); return
  //     }
  //     else {
  //       document.body.style.backgroundColor = "red"
  //       alert("O O ganhou"); return
  //     }
  //   }
  // }
    function checkWinner() {
      if (table[3] == table[4] && table[4] == table[5] && table[3] != "") {
        if (player == "X") {
          document.body.style.backgroundColor = "green"
          alert("O X ganhou"); return
        }
        else {
          document.body.style.backgroundColor = "red"
          alert("O O ganhou"); return
        }
      }

      if (table[6] == table[7] && table[7] == table[8] && table[6] != "") {
        if (player == "X") {
          alert("O X ganhou"); return
        }
        else {
          alert("O O ganhou"); return
        }
      }

      if (table[0] == table[3] && table[3] == table[6] && table[0] != "") {
        if (player == "X") {
          alert("O X ganhou"); return
        }
        else {
          alert("O O ganhou"); return
        }
      }

      if (table[1] == table[4] && table[4] == table[7] && table[1] != "") {
        if (player == "X") {
          alert("O X ganhou"); return
        }
        else {
          alert("O O ganhou"); return
        }
      }

      if (table[2] == table[5] && table[5] == table[8] && table[2] != "") {
        if (player == "X") {
          alert("O X ganhou"); return
        }
        else {
          alert("O O ganhou"); return
        }
      }

      if (table[0] == table[4] && table[4] == table[8] && table[0] != "") {
        if (player == "X") {
          alert("O X ganhou"); return
        }
        else {
          alert("O O ganhou"); return
        }
      }
      if (table[2] == table[4] && table[4] == table[6] && table[2] != "") {
        if (player == "X") {
          alert("O X ganhou"); return
        }
        else {
          alert("O O ganhou"); return
        }
      }
    }

    return (
      <div className="bg-stone-600 h-screen flex flex-col items-center gap-8 p-4">
        <h1 className="text-white text-[50px]">Jogo da Velha</h1>
        <table className="">
          <tbody className="flex flex-col gap-1">
            <tr className="flex gap-1 items-center">
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(0)}>{table[0]}</td>
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(1)}>{table[1]}</td>
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(2)}>{table[2]}</td>
            </tr>
            <tr className="flex gap-1">
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(3)}>{table[3]}</td>
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(4)}>{table[4]}</td>
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(5)}>{table[5]}</td>
            </tr>
            <tr className="flex gap-1">
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(6)}>{table[6]}</td>
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(7)}>{table[7]}</td>
              <td className="text-[50px] bg-white text-black h-[100px] w-[100px] text-center hover:bg-gray-500 transition cursor-pointer" onClick={() => mark(8)}>{table[8]}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row gap-[20px] text-[40px] p-[10px] items-center justify-center">
          <a className="p-[15px] rounded-[60%] no-underline text-white transition text-[50px]" href="./jogo"><LuRefreshCw /></a>
          <a className="p-[15px] rounded-[60%] no-underline text-white transition text-[60px]" onClick={add}>
            <IoMdAddCircle />
          </a>
          <a className="p-[15px] rounded-[60%] no-underline text-white transition text-[50px]" href="/"><FaHouse /></a>
        </div>
        <span id="pontos">
          {pontos}
        </span>
      </div>
    )
 }
