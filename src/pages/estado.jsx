import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    //maneira básica de usar o *useState()*
    // const state = useState(0)
    // let Numero = state[0]
    // let alterarNumero = state[1]

    const [Numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(Numero + 1)
    }

    return(
        <Layout titulo="Componente com estado">
            <div>{Numero}</div>
            <button onClick={incrementar}>Incrementar um número</button>
        </Layout>
    )
}