import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'

export default function ClientePorCodigo(){
    const router = useRouter()

    return(
        <Layout titulo="Navegação dinamica">
            <div>Código = {router.query.codigo}</div>
            <div>Código = {router.query.filial}</div>
        </Layout>
    )
}