import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faMagnifyingGlass,
  faCaretRight,
  faCaretLeft,
  faSquarePlus
} from '@fortawesome/free-solid-svg-icons'
import MenuBar from '../.././component/MenuBar/MenuBar'
import '../.././assets/styles/app.scss'
import s from './Device.module.scss'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import DropdownActive from '../.././component/DropdownActive/DropdownActive'
import DropdownConnect from '../.././component/DropdownConnect/DropdownConnect'

const Device = () => {
  return (
    <div className='Container'>
      <div className={s.addDevice}>
        <FontAwesomeIcon className={s.iconAdd} icon={faSquarePlus} />
        <p>Thêm thiết bị</p>
      </div>
      <MenuBar />
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p>Thiết bị</p>
            <p>
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
            <p>Danh sách thiết bị</p>
          </div>
          <NavAvatar />
        </div>
        <div className={s.listDevice}>
          <p className={s.listContent}>Danh sách thiết bị</p>
          <div className={s.inputDevice}>
            <div className={s.activeStatus}>
              <p>Trạng thái hoạt đông</p>
              <DropdownActive />
            </div>
            <div className={s.connectionStatus}>
              <p>Trạng thái kết nối</p>
              <DropdownConnect />
            </div>
            <div className={s.keyWord}>
              <p>Từ khóa</p>
              <div className={s.inputContainer}>
                <input className={s.search} type='text' />
                <FontAwesomeIcon className={s.iconSearch} style={{ color: '#FF7506' }} icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </div>
        <table className='table table-bordered table-sm'>
          <thead className={s.thead}>
            <tr>
              <th scope='col'>Mã thiết bị</th>
              <th scope='col'>Tên thiết bị</th>
              <th scope='col'>Địa chỉ IP</th>
              <th scope='col'>Trạng thái hoạt động</th>
              <th scope='col'>Trạng thái kết nối</th>
              <th scope='col'>Dịch vụ sử dụng</th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Ngưng hoạt động</td>
              <td>Mất kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Hoạt động</td>
              <td>Kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Hoạt động</td>
              <td>Mất kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Ngưng hoạt động</td>
              <td>Kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Hoạt động</td>
              <td>Mất kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Hoạt động</td>
              <td>Kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Ngưng hoạt động</td>
              <td>Kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Hoạt động</td>
              <td>Kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>192.168.1.10</td>
              <td>Hoạt động</td>
              <td>Mất kết nối</td>
              <td>
                <p>Khám tim mạch, Khám mắt...</p>
                <a href='/device'>Xem thêm</a>
              </td>
              <td>
                <a href='/device'>Chi tiết</a>
              </td>
              <td>
                <a href='/device'>Cập nhật</a>
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
export default Device
