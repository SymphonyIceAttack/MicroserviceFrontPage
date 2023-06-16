import React, { PureComponent } from 'react'
import Style from './AgeGroupChart.module.less'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
} from 'recharts'
import useAgeGroup from './useAgeGroup'

const index = () => {
    const [AgeGroupData] = useAgeGroup()
    return (
        <ResponsiveContainer width="33%" height="100%">
            <LineChart
                data={AgeGroupData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageGroup" height={40}>
                    <Label
                        value="年龄段对应就诊数量"
                        offset={0}
                        position="insideBottom"
                    />
                </XAxis>
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="recordCount" stroke="#8884d8" />

                <Legend />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default index
