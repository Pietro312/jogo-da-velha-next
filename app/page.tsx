"use client"
import { useState } from "react";

import { LuRefreshCw } from "react-icons/lu";

export default function Home() {
  let pontos = 0
  function add () {
    pontos = pontos+1 
    let count = document.querySelector("#spanum")
    if(count) count.innerHTML = pontos.toString()
    console.log (pontos)
  }
  const tabela = 1+1
  const jogador = "X"
  
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <table>
        <tbody>
          <tr>
            <td>{tabela}</td>
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
      <a id="aum"href="/"><LuRefreshCw/></a>
      <button id="dois" onClick={add}>
        +1 ponto
      </button>
      <span id="spanum" >
        {pontos}
      </span>
    </div>
  )

}
