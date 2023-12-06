"use client"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";




export default function Home() {
  let pontos = 0
  function add() {
    pontos = pontos + 1
    let count = document.querySelector("#spanum")
    if (count) count.innerHTML = pontos.toString()
    console.log(pontos)
  }


  const tabela = 1 + 1
  const jogador = "X"

  return (
    <div>
      <h1>Jogo da Velha</h1>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr> <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div id="icones">
        <a id="aum" href="./JOgo"><LuRefreshCw /></a>
        <a id="dois" onClick={add}>
          <IoMdAdd />
        </a>
        <a id="casinha" href="./Capa"><FaHouse /></a>
      </div>
      <span id="spanum">
        {pontos}
      </span>
    </div>
  )

}
