import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpDoctorManagementFormDataType } from '../types'
export type DataType = ReadHpDoctorManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: 'ID',
        dataIndex: 'doctorId',
    },
    {
        title: '名称',
        dataIndex: 'fullName',
    },
    {
        title: '专业',
        dataIndex: 'specialty',
    },
    {
        title: '资质',
        dataIndex: 'qualification',
    },
    {
        title: '操作',
        dataIndex: 'doctorId',
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
