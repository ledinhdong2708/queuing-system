import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const ToggleEyes = () => {
  const [visible, setVisible] = useState()
  return <FontAwesomeIcon icon={solid('user-secret')} />
}
export default ToggleEyes
