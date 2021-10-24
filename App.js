import Header from './components/Header/Header';
import styled, {createGlobalStyle} from "styled-components";
import {Route} from "react-router-dom";
import LoginContainer from './components/Main/Login/LoginContainer';
import GoodsContainer from './components/Main/Goods/GoodsContainer';
import EditingContainer from './components/Main/Editing/EditingContainer';
import AdditionContainer from './components/Main/Addition/AdditionContainer';

const Div = styled.div`
`
const Main = styled.main`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;

  padding-top: 50px;
`
const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  
`

function App()  {
  
  return (
    <Div>
      <Global/>
      <Header/>
      <Main>
          <Route path="/auth" render={()=> <LoginContainer/>} />
          <Route path="/goods" render={()=> <GoodsContainer/>} />
          <Route path="/edit/:productid" render={()=> <EditingContainer/>} />
          <Route path="/add" render={()=> <AdditionContainer/>} />
      </Main>
  </Div>
  );
}

export default App;
