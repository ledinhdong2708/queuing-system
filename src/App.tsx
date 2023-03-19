import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import Login from './pages/Login/Login'
import SetPass from './pages/SetPass/SetPass'
import ResetPass from './pages/ResetPass/ResetPass'
import PersonalInformation from '@pages/PersonalInformation/PersonalInformation'

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgotpass' element={<SetPass />} />
        <Route path='/resetpass' element={<ResetPass />}></Route>
        <Route path='/personalinformation' element={<PersonalInformation />}></Route>
      </Routes>
    </div>
  )
}
export default App
