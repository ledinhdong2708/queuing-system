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
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import AuthRoute from './component/AuthRoute/AuthRoute'

// export interface IApplicationProps {}

initializeApp(config.firebaseConfig)

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgotpass' element={<SetPass />} />
        <Route path='/resetpass' element={<ResetPass />}></Route>
        <Route
          path='/personalinformation'
          element={
            <AuthRoute>
              <PersonalInformation />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/device'
          element={
            <AuthRoute>
              <Device />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/device/add-device'
          element={
            <AuthRoute>
              <AddDevice />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/service'
          element={
            <AuthRoute>
              <Service />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/progression'
          element={
            <AuthRoute>
              <Progression />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/report'
          element={
            <AuthRoute>
              <Report />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/device/detail-device'
          element={
            <AuthRoute>
              <DetailDevice />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/device/update-device'
          element={
            <AuthRoute>
              <UpdateDevice />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/service/add-service'
          element={
            <AuthRoute>
              <AddService />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/service/detail-service'
          element={
            <AuthRoute>
              <DetailService />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/service/detail-service/update-list-service'
          element={
            <AuthRoute>
              <UpdateListService />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/progression/add-progression'
          element={
            <AuthRoute>
              <AddProgression />
            </AuthRoute>
          }
        ></Route>
        <Route
          path='/progression/detail-progression'
          element={
            <AuthRoute>
              <DetailProgression />
            </AuthRoute>
          }
        ></Route>
      </Routes>
    </div>
  )
}
export default App
