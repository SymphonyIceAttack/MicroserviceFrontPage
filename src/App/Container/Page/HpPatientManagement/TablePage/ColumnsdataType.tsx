import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpPatientManagementFormDataType } from '../types'
export type DataType = ReadHpPatientManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: '患者ID',
        dataIndex: 'patientId',
    },
    {
        title: '姓名',
        dataIndex: 'fullName',
    },
    {
        title: '性别',
        dataIndex: 'gender',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '联系方式',
        dataIndex: 'contact',
    },
    {
        title: '操作',
        dataIndex: 'patientId',
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
