import React from 'react'
import RatioPieChart from './RatioPieChart'
import AgeGroupChart from './AgeGroupChart'
import NumberOfNursesChart from './NumberOfNursesChart'
import Style from './ChartImage.module.less'
const index = () => {
    return (
        <div className={`${Style.ChartImage}`}>
            <RatioPieChart />
            <NumberOfNursesChart />
            <AgeGroupChart />
        </div>
    )
}

export default index
