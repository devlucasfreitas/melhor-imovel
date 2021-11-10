import styled from "styled-components";

const Head = styled.header`
    display: flex;
    flex-wrap:wrap;
    align-items: flex-start;
    justify-content:space-between;
    height:40px;
    padding: 5px 30px;
    
    .logo img{
    height:40px;
    
  }
`;

const Header = () =>(
    <Head>
        <div className="logo">
			<img src="" alt=""/>
		</div>
	</Head>
);

export default Header;