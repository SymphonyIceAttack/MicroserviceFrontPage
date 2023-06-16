import React from 'react'
import Style from './Container.module.less'
type Props = {
    children: React.ReactNode
}

const index = ({ children }: Props) => {
    return <div className={Style.Container}>{children}</div>
}

export default index
