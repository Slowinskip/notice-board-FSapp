import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Footer from './components/views/Footer/Footer'
import Header from './components/views/Header/Header'
import AdPage from './components/pages/AdPage/AdPage'
import EditAdd from './components/features/EditAdd/EditAdd'
import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import Logout from './components/pages/Logout/Logout'
import AddAds from './components/features/AddAds/AddAds'
import Search from './components/pages/Search/Search'

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ads/:id" element={<AdPage />} />
          <Route path="/ads/edit/:id" element={<EditAdd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addAds" element={<AddAds />} />
          <Route path="/search/:searchId" element={<Search />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  )
}

export default App
