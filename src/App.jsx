import Header from "./components/Header"
import DefaultLayout from "./Layouts/DefaultLayout"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route Component={DefaultLayout}>

        <Route path="/" Component={HomePage}/>ù
        <Route path="/books/:id" Component={BookPage}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App 
