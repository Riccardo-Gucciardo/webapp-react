import Header from "./components/Header"
import DefaultLayout from "./Layouts/DefaultLayout"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FilmPage from "./pages/FilmPage"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path="/" Component={HomePage}/>
        <Route path="/movies/:id" Component={FilmPage}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App 
