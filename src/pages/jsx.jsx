export default function Jsx() {
    const Titulo = <h1>Jsx é um conceito central.</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return(
        <div>
            {Titulo}
            {subtitulo()}
        </div>
    )
}