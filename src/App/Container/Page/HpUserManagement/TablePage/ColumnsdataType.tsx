import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpUserManagementFormDataType } from '../types'
export type DataType = ReadHpUserManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: '用户ID',
        dataIndex: 'userId',
    },
    {
        title: '用户名',
        dataIndex: 'username',
    },
    {
        title: '角色',
        dataIndex: 'role',
    },
    {
        title: '操作',
        dataIndex: 'userId',
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
