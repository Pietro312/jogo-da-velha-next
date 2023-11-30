"use client"
export default function Home() {
  let pontos = 0
  function add () {
    pontos = pontos+1 
    let count = document.querySelector("#spanum")
    if(count) count.innerHTML = pontos.toString()
    console.log (pontos)
  }
  
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
      <button id="um" >
        <a id="aum" href="/">Reiniciar</a>
      </button>
      <button id="dois" onClick={add}>
        +1 ponto
      </button>
      <span id="spanum" className="text-white">
        {pontos}
      </span>

    
    
    
    </div>
  )

}
