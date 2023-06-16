import React, { PureComponent } from 'react'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import useMixLineData from './useMixLineData'
export type MixLineDataType = {
    specialty: string
    malePatientCount: number
    femalePatientCount: number
}
const index = () => {
    const [MixLineData] = useMixLineData()
    return (
        <div style={{ flex: '1' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={MixLineData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3 3" />
                    <XAxis dataKey="specialty" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="malePatientCount"
                        fill="#8884d8"
                        barSize={30}
                        name="男"
                    />
                    <Bar
                        dataKey="femalePatientCount"
                        fill="#82ca9d"
                        barSize={30}
                        name="女"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default index
