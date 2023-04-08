import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faMagnifyingGlass,
  faCaretRight,
  faCaretLeft,
  faCircle,
  faSquarePlus
} from '@fortawesome/free-solid-svg-icons'
import MenuBarService from '../.././component/MenuBar/MenuBarService'
import s from './Service.module.scss'
import DropdownActive from '../.././component/DropdownActive/DropdownActive'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import '../.././assets/styles/app.scss'
import DateInput from '../.././component/DateInput/DateInput'

const Service = () => {
  return (
    <div className='Container'>
      <MenuBarService />
      <Link to='/service/add-service' className={s.addDevice}>
        <FontAwesomeIcon className={s.iconAdd} icon={faSquarePlus} />
        <p>Thêm dịch vụ</p>
      </Link>
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p>Thiết bị</p>
            <p>
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
            <p>Danh sách dịch vụ</p>
          </div>
          <NavAvatar />
        </div>
        <div className={s.listDevice}>
          <p className={s.listContent}>Quản lý dịch vụ</p>
          <div className={s.inputDevice}>
            <div className={s.activeStatus}>
              <p>Trạng thái hoạt đông</p>
              <DropdownActive />
            </div>
            <div className={s.connectionStatus}>
              <p>Chọn thời gian</p>
              <DateInput />
            </div>
            <div className={s.keyWord}>
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
              <th scope='col'>Mã dịch vụ</th>
              <th scope='col'>Tên dịch vụ</th>
              <th scope='col'>Mô tả</th>
              <th scope='col'>Trạng thái hoạt động</th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Mô tả dịch vụ 1</td>
              <td>
                <FontAwesomeIcon className={s.offIcon} icon={faCircle} />
                Ngưng hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.onIcon} icon={faCircle} />
                Hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.onIcon} icon={faCircle} />
                Hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.offIcon} icon={faCircle} />
                Ngưng hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.onIcon} icon={faCircle} />
                Hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.onIcon} icon={faCircle} />
                Hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.offIcon} icon={faCircle} />
                Ngưng hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr className={s.tableTr}>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.onIcon} icon={faCircle} />
                Hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
              </td>
            </tr>
            <tr>
              <th scope='row'>KIO_01</th>
              <td>Kiosk</td>
              <td>Hoạt động</td>
              <td>
                <FontAwesomeIcon className={s.onIcon} icon={faCircle} />
                Hoạt động
              </td>
              <td>
                <Link to='detail-service' className={s.tableDetail}>
                  Chi tiết
                </Link>
              </td>
              <td>
                <Link to='update-device' className={s.tableUpdate}>
                  Cập nhật
                </Link>
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
export default Service
