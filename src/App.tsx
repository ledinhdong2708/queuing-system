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
import AddDevice from './pages/Device/AddDevice'
import DetailDevice from '@pages/Device/DetailDevice'
import UpdateDevice from '@pages/Device/UpdateDevice'
import AddService from '@pages/Service/AddService'
import DetailService from '@pages/Service/DetailService'
import UpdateListService from '@pages/Service/UpdateListService'
import AddProgression from '@pages/Progression/AddProgression'
import DetailProgression from '@pages/Progression/DetailProgression'

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgotpass' element={<SetPass />} />
        <Route path='/resetpass' element={<ResetPass />}></Route>
        <Route path='/personalinformation' element={<PersonalInformation />}></Route>
        <Route path='/device' element={<Device />}></Route>
        <Route path='/device/add-device' element={<AddDevice />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/progression' element={<Progression />}></Route>
        <Route path='/report' element={<Report />}></Route>
        <Route path='/device/detail-device' element={<DetailDevice />}></Route>
        <Route path='/device/update-device' element={<UpdateDevice />}></Route>
        <Route path='/service/add-service' element={<AddService />}></Route>
        <Route path='/service/detail-service' element={<DetailService />}></Route>
        <Route path='/service/detail-service/update-list-service' element={<UpdateListService />}></Route>
        <Route path='/progression/add-progression' element={<AddProgression />}></Route>
        <Route path='/progression/detail-progression' element={<DetailProgression />}></Route>
      </Routes>
    </div>
  )
}
export default App
