import React from 'react'
import Style from './RatioPieChart.module.less'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
} from 'recharts'
import useRaitoPieData from './useRaitoPieData'

const index = () => {
    const [RatioPieData] = useRaitoPieData()

    return (
        <ResponsiveContainer width="30%" height="100%">
            <BarChart data={RatioPieData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="gender" height={40}>
                    <Label
                        value="男女比例占比"
                        offset={0}
                        position="insideBottom"
                    />
                </XAxis>
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalCount" fill="#8884d8" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default index
