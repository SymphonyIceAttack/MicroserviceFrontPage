import { useState } from 'react'

export default (): [typeof isModalShow, typeof setisModalShow] => {
    const [isModalShow, setisModalShow] = useState(false)
    return [isModalShow, setisModalShow]
}
