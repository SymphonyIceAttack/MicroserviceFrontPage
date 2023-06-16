import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpScheduleManagementFormDataType } from '../types'
export type DataType = ReadHpScheduleManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: '排班ID',
        dataIndex: 'scheduleId',
    },
    {
        title: '医生ID',
        dataIndex: 'doctorId',
    },
    {
        title: '护士ID',
        dataIndex: 'nurseId',
    },
    {
        title: '日期',
        dataIndex: 'scheduleDate',
    },
    {
        title: '时间段',
        dataIndex: 'timeSlot',
    },
    {
        title: '操作',
        dataIndex: 'scheduleId',
        align: 'center',
        render: (value, record) => (
            <Space>
                <Button
                    icon={<EditFilled />}
                    type="link"
                    onClick={() => {
                        editeFunc(value, record)
                    }}>
                    修改
                </Button>
                <Button
                    icon={<DeleteColumnOutlined />}
                    type="link"
                    onClick={() => {
                        deleteFunc(value, record)
                    }}>
                    删除
                </Button>
            </Space>
        ),
    },
]
