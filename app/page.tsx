let Pontos = 0
export default function Home() {
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
      <button id="dois">
        +1 ponto
      </button>

    
    
    
    </div>
  )

}
