import Cointainer from "./components/Countainer"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import MainPage from "./pages/MainPage"

function App() {

  return (
    <>
    <Header />
      <Cointainer>
        <SideBar/>
        <MainPage />
       </Cointainer>
    </>
  )
}

export default App
