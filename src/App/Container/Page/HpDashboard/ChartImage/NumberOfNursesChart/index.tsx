import React from 'react'
import Style from './NumberOfNursesChart.module.less'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
    Line,
} from 'recharts'
import useNurseData from './useNurseData'

const index = () => {
    const [NurseData] = useNurseData()
    return (
        <ResponsiveContainer width="33%" height="100%">
            <AreaChart
                data={NurseData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="specialty" height={40}>
                    <Label
                        value="各科室护士数量"
                        offset={5}
                        position="insideBottom"
                    />
                </XAxis>
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="nurseCount"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default index
