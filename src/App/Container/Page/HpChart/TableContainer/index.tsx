import React from 'react'
import Style from './TableContainer.module.less'
import PieLinerChart from './PieLinerChart'
import Table from './Table'
const index = () => {
    return (
        <div className={`${Style.TableContainer}`}>
            <Table />
            <PieLinerChart />
        </div>
    )
}

export default index
