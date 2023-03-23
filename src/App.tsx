import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.scss'
import Login from './pages/Login/Login'
import SetPass from './pages/SetPass/SetPass'
import ResetPass from './pages/ResetPass/ResetPass'
import PersonalInformation from '@pages/PersonalInformation/PersonalInformation'
import Device from './pages/Device/Device'
import Service from '@pages/Service/Service'
import Progression from '@pages/Progression/Progression'
import Report from '@pages/Report/Report'

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgotpass' element={<SetPass />} />
        <Route path='/resetpass' element={<ResetPass />}></Route>
        <Route path='/personalinformation' element={<PersonalInformation />}></Route>
        <Route path='/device' element={<Device />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/progression' element={<Progression />}></Route>
        <Route path='/report' element={<Report />}></Route>
      </Routes>
    </div>
  )
}
export default App
