import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faCaretRight,
  faCaretLeft,
  faCircleLeft,
  faMagnifyingGlass,
  faCircle,
  faSquarePen
} from '@fortawesome/free-solid-svg-icons'
import MenuBarService from '../.././component/MenuBar/MenuBarService'
import s from './Service.module.scss'
import sDetail from './DetailService.module.scss'
import NavAvatar from '../.././component/NavAvatar/NavAvatar'
import '../.././assets/styles/app.scss'
import DropdownDetailService from '../.././component/DropdownDetailService/DropdownDetailService'
import DateInput from '../.././component/DateInput/DateInput'

const DetailService = () => {
  return (
    <div className='Container'>
      <MenuBarService />
      <div className={sDetail.functionButton}>
        <Link to='update-list-service' className={sDetail.updateListContainer}>
          <FontAwesomeIcon className={sDetail.iconUpdateList} icon={faSquarePen} />
          <p>Cập nhật danh sách</p>
        </Link>
        <hr />
        <Link to='/service' className={sDetail.backContainer}>
          <FontAwesomeIcon className={sDetail.iconBack} icon={faCircleLeft} />
          <p>Quay lại</p>
        </Link>
      </div>
      <div className={s.rightContainer}>
        <div className='navContainer'>
          <div className={s.leftNav}>
            <p className={sDetail.pContent}>Thiết bị</p>
            <p>
              <FontAwesomeIcon className={sDetail.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={sDetail.pContent}>Danh sách dịch vụ</p>
            <p>
              <FontAwesomeIcon className={sDetail.hyphenIcon} icon={faChevronRight} />
            </p>
            <p className={sDetail.pContent}>Chi tiết</p>
          </div>
          <NavAvatar />
        </div>
        <div className={s.listDevice}>
          <p className={s.listContent}>Quản lý dịch vụ</p>
        </div>
        <div className={sDetail.serviceInforContainer}>
          <div className={sDetail.serviceInforContainerLeft}>
            <p className={sDetail.heading}>Thông tin dịch vụ</p>
            <div className={sDetail.detailInfor}>
              <div>
                <p>Mã dịch vụ:</p>
                <span>201</span>
              </div>
              <div>
                <p>Tên dịch vụ:</p>
                <span>Khám tim mạch</span>
              </div>
              <div>
                <p>Mô tả:</p>
                <span>Chuyên các bệnh lý về tim</span>
              </div>
            </div>

            <p className={sDetail.heading}>Quy tắc cấp số</p>
            <div className={sDetail.autoBoost}>
              <p>Tăng tự động:</p>
              <input type='number' placeholder='0001' />
              <p>đến</p>
              <input type='number' placeholder='9999' />
            </div>
            <div className={sDetail.prefix}>
              <p>Prefix:</p>
              <input type='number' placeholder='0001' />
            </div>
            <div className={sDetail.reset}>
              <p>Reset mỗi ngày</p>
            </div>
            <div className={sDetail.example}>
              <p>Ví dụ: 201-2001</p>
            </div>
          </div>
          <div className={sDetail.serviceInforContainerRight}>
            <div className={s.inputDevice}>
              <div className={s.activeStatus}>
                <p>Trạng thái</p>
                <DropdownDetailService />
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
            <table className='table table-bordered table-scss'>
              <thead>
                <tr>
                  <th scope='col'>Số thứ tự</th>
                  <th scope='col'>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2010001</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.accomplished} icon={faCircle} />
                    Đã hoàn thành
                  </td>
                </tr>
                <tr>
                  <td>2010002</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.accomplished} icon={faCircle} />
                    Đã hoàn thành
                  </td>
                </tr>
                <tr>
                  <td>2010003</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.processing} icon={faCircle} />
                    Đang thực hiện
                  </td>
                </tr>
                <tr>
                  <td>2010004</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.absent} icon={faCircle} />
                    Vắng
                  </td>
                </tr>
                <tr>
                  <td>2010005</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.accomplished} icon={faCircle} />
                    Đã hoàn thành
                  </td>
                </tr>
                <tr>
                  <td>2010006</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.processing} icon={faCircle} />
                    Đang thực hiện
                  </td>
                </tr>
                <tr>
                  <td>2010007</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.absent} icon={faCircle} />
                    Vắng
                  </td>
                </tr>
                <tr>
                  <td>20100017</td>
                  <td className={sDetail.iconContainer}>
                    <FontAwesomeIcon className={sDetail.accomplished} icon={faCircle} />
                    Đã hoàn thành
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
      </div>
    </div>
  )
}
export default DetailService
