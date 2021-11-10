import React from 'react';
import Header from '../../components/header';
import './home.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";


function Home() {

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title> Meu Melhor Imóvel | Home</title>
            <Header />
            <main className="Home">

                <section className="painel">

                        <h1 className="titulo">A melhor busca para o seu <br />melhor imóvel</h1>

                        <div><button onClick={ativaMenu} className="btnFormBusca ">Começar a Busca</button></div>

                        <div className="selecaoBox ">
                            <select name="alugaOuCompra">
                                <option value="Alugar">Alugar</option>
                                <option value="Comprar">Comprar</option>
                            </select>
                            <select name="tiposDePropriedade">
                                <option value="todos">Mostrar todos</option>
                                <option value="apartamento">Somente Apartamento</option>
                                <option value="casa">Somente Casa</option>
                            </select>
                            <select name="estado">
                                <option value="SP">SP</option>
                            </select>
                            <select name="cidade">
                                <option value="SAO PAULO">São Paulo</option>
                            </select>
                            <select name="bairro">
                                <option value="JARDINS">Jardins</option>
                            </select>

                            <button className="btnBusca">Buscar</button>
                        </div>

                </section>


                <section className="preco-medio">

                    <div className="preco-aluguel"><h1>Preço Médio de aluguel</h1></div>

                    <div className="bloco-precos">
                        <div className="cards sp">
                            <h2>São paulo</h2>
                            <h3>R$ 3.476</h3>
                        </div>
                        <div className="cards rj">
                            <h2>Rio de Janeiro</h2>
                            <h3>R$ 1.808</h3>
                        </div>
                        <div className="cards pr">
                            <h2>Curitiba</h2>
                            <h3>R$ 1.205</h3>
                        </div>
                    </div>
                </section>

                <section className="informacoes">
                    <h1>Por que buscar conosco? </h1>
                    <div className="cartoes">
                        <div className="card">
                            <BiSearchAlt2 style={{ opacity: "50%", fill: "var(--preto)" }} size={100} />
                            <div className="texto-card">
                                <h4>Lorem Ipsu </h4>

                                <p>Lorem ipsum dolor sit <br /> amet consectetur </p>
                            </div>
                        </div>

                        <div className="card">
                            <TiLocation style={{ opacity: "50%", fill: "var(--preto)" }} size={100} />
                            <div className="texto-card">
                                <h4>Lorem Ipsu </h4>

                                <p>Lorem ipsum dolor sit <br /> amet consectetur </p>
                            </div>
                        </div>

                        <div className="card">
                            <BiSearchAlt2 style={{ opacity: "50%", fill: "var(--preto)" }} size={100} />
                            <div className="texto-card">
                                <h4>Lorem Ipsu </h4>

                                <p>Lorem ipsum dolor sit <br /> amet consectetur </p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <p>Meu Melhor Imovél &copy; 2021</p>
                </footer>

            </main>
        </>
    );
}
export default Home;

const ativaMenu = () => {
    document.getElementsByClassName("btnFormBusca").className.toggle('btnOff');
}
