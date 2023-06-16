import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Label,
    Text,
} from 'recharts'

type Props = {
    title: string
    useValue: number
}
const index: React.FC<Props> = ({ title, useValue }) => {
    const data = [
        { name: 'Used', value: useValue },
        { name: 'Remaining', value: 100 - useValue },
    ]

    const COLORS = ['#8884d8', '#e8e8e8']

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label>
                    {data.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                    <Label value={title} offset={0} position="center" />
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default index
