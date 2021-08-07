import styled from "styled-components";

const Head = styled.header`
    display: flex;
    flex-wrap:wrap;
    align-items: flex-start;
    justify-content:space-between;
    height:40px;
    padding: 5px 30px;
    
    .navigation{
        display:flex;
        
    }

    .navigation li{
        margin:2px;
        padding:2px;
        list-style-type:none;
    }

    .navigation li a {
        text-decoration:none;
    }
    .logo img{
    height:40px;
    
  }
`;

const Header = () =>(
    <Head>
        <div className="logo">
			<img src="" alt=""/>
		</div>
		<ul className="navigation">
			
			<li><a href="https://www.appmeuimovel.com/">Entrar</a></li>
		</ul>
	</Head>
);

export default Header;