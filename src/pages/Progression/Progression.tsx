import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuBarProgression from '../.././component/MenuBar/MenuBarProgression'
import '../.././assets/styles/app.scss'
import s from '.././Service/Service.module.scss'
import sProgression from './Progression.module.scss'
import {
  faChevronRight,
  faMagnifyingGlass,
  faCaretRight,
  faCaretLeft,
  faCircle
} from '@fortawesome/free-solid-svg-icons'
import DateInput from '../.././component/DateInput/DateInput'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import DropdownService from '../.././component/DropdownService/DropdownService'
import DropdownStatus from '../.././component/DropdownStatus/DropdownStatus'
import DropdownPowerSupply from '../.././component/DropdownPowerSupply/DropdownPowerSupply'

const Progression = () => {
  return (
    <div className='Container'>
      <MenuBarProgression />
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p>Cấp số</p>
            <p>
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
            <p>Danh sách cấp số</p>
          </div>
          <NavAvatar />
        </div>
        <div className={s.listDevice}>
          <p className={s.listContent}>Quản lý cấp số</p>
          <div className={sProgression.inputDevice}>
            <div className={sProgression.serviceName}>
              <p>Tên dịch vụ</p>
              <DropdownService />
            </div>
            <div className={sProgression.status}>
              <p>Tình trạng</p>
              <DropdownStatus />
            </div>
            <div className={sProgression.powerSupply}>
              <p>Nguồn cấp</p>
              <DropdownPowerSupply />
            </div>
            <div className={sProgression.choseDate}>
              <p>Chọn thời gian</p>
              <DateInput />
            </div>
            <div className={sProgression.keyWord}>
              <p>Từ khóa</p>
              <div className={s.inputContainer}>
                <input placeholder='Nhập từ khóa' className={s.search} type='text' />
                <FontAwesomeIcon className={s.iconSearch} style={{ color: '#FF7506' }} icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </div>
        <table className='table table-bordered table-sm'>
          <thead className={s.thead}>
            <tr>
              <th scope='col'>STT</th>
              <th scope='col'>Tên khách hàng</th>
              <th scope='col'>Tên dịch vụ</th>
              <th scope='col'>Thời gian cấp</th>
              <th scope='col'>Hạn sử dụng</th>
              <th scope='col'>Trạng thái</th>
              <th scope='col'>Nguồn cấp</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2010001</td>
              <td>Lê Huỳnh Ái Vân</td>
              <td>Khám tim mạch</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td className={sProgression.iconContainer}>
                <FontAwesomeIcon className={sProgression.waiting} icon={faCircle} />
                Đang chờ
              </td>
              <td>Kiosk</td>
              <td>
                <Link to='/'>Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010002</td>
              <td>Huỳnh Ái Vân</td>
              <td>Khám sản - Phụ khoa</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td className={sProgression.iconContainer}>
                <FontAwesomeIcon className={sProgression.isUse} icon={faCircle} />
                Đã sử dụng
              </td>
              <td>Kiosk</td>
              <td>
                <Link to='/'>Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010003</td>
              <td>Lê Ái Vân</td>
              <td>Khám răng hàm mặt</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td className={sProgression.iconContainer}>
                <FontAwesomeIcon className={sProgression.waiting} icon={faCircle} />
                Đang chờ
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to='/'>Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010004</td>
              <td>Nguyễn Ái Vân</td>
              <td>Khám tai mũi họng</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td className={sProgression.iconContainer}>
                <FontAwesomeIcon className={sProgression.waiting} icon={faCircle} />
                Đang chờ
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to='/'>Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010005</td>
              <td>Trần Thị Ái Vân</td>
              <td>Khám tai hô hấp</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td className={sProgression.iconContainer}>
                <FontAwesomeIcon className={sProgression.waiting} icon={faCircle} />
                Đang chờ
              </td>
              <td>Kiosk</td>
              <td>
                <Link to='/'>Chi tiết</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={s.pagination}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCaretLeft} />
            </li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>...</li>
            <li>10</li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Progression
