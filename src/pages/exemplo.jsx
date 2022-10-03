import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

export default function Exemplo(){
    return (
        <Layout titulo="Usando componente.">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprenda React na prática."/>
        </Layout>
    )
}