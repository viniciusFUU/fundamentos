import Link from "next/link";
import Navegador from "../components/Navegador";
import Layout from "../components/Layout";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="rgb(255, 1, 234)" />
      <Navegador texto="JSX" destino="/jsx" cor="red" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="#c89a00" />
      <Navegador
        texto="Navegação #02"
        destino="/cliente/sp2/123"
        cor="#0004c8"
      />
      <Navegador texto="Componente com estado" destino="/estado" cor="pink" />
      <Navegador
        texto="Integração com API"
        destino="/integracao1"
        cor="green"
      />
      <Navegador texto="Conteudo estático" destino="/estatico" cor="#fa054a" />
    </div>
  );
}
