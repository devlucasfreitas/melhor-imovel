import React from 'react';
import Header from '../../components/header';
import './home.css';
import {BiSearchAlt2} from "react-icons/bi";
import {TiLocation} from "react-icons/ti"


function Home(){
    
    return(
        <>
            <title> Meu Melhor Imóvel | Home</title>
            <Header />
            <main className="Home">
                
                <section className="painel">
                    
                        <form className="formBusca"action="">
                            <h1 className="titulo">A melhor busca para o seu melhor imóvel</h1>
                            <select name="alugaOuCompra">
                                <option value="Alugar">Alugar</option>
                                <option value="Comprar">Comprar</option>
                            </select>
                            <select name="tiposDePropriedade">
                                <option value="todos">Mostrar todos</option>
                                <option value="apartamento">Somente Apartamento</option>
                                <option value="casa">Somente Casa todos</option>
                            </select>
                            
                            <input type="text" placeholder="Digite o bairro ou cidade" />
                            <button>Enviar</button>
                        </form>
                </section>

                <section className="informacoes">
                    <h1>Por que buscar conosco? </h1>
                    <div className="cartoes">
                        <div className="card">
                            <BiSearchAlt2 style={{opacity:"50%",fill:"var(--preto)"}} size={100}/>
                            <div className="texto-card">
                                <h4>Lorem Ipsu </h4>

                                <p>Lorem ipsum dolor sit <br /> amet consectetur </p>
                            </div>
                        </div>

                        <div className="card">
                            <TiLocation style={{opacity:"50%" , fill:"var(--preto)"}} size={100}/>
                            <div className="texto-card">
                                <h4>Lorem Ipsu </h4>

                                <p>Lorem ipsum dolor sit <br /> amet consectetur </p>
                            </div>
                        </div>

                        <div className="card">
                            <BiSearchAlt2 style={{opacity:"50%",fill:"var(--preto)"}} size={100}/>
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