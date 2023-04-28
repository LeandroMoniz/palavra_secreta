import "./GameOver.css"

export const GameOver = ({retry}) => {
  return (
    <div>
        <h1>Fim do jogo!</h1>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}
