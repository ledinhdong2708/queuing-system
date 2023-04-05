import s from './DateInput.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date())

  const [endtDate, setEndDate] = useState(new Date())
  return (
    <div className={s.container}>
      <div className={s.dateInputContainer}>
        <FontAwesomeIcon className={s.iconDate} icon={faCalendarDays} />
        <DatePicker className={s.startDate} selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </div>
      <FontAwesomeIcon className={s.iconNext} icon={faCaretRight} />
      <div className={s.dateInputContainer}>
        <FontAwesomeIcon className={s.iconDate} icon={faCalendarDays} />
        <DatePicker className={s.startDate} selected={endtDate} onChange={(date: Date) => setEndDate(date)} />
      </div>
    </div>
  )
}
export default DateInput
