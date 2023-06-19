import React from 'react'
import { Space, Button } from 'antd'
import {
    ArrowsAltOutlined,
    DeleteFilled,
    EditFilled,
    DownloadOutlined,
} from '@ant-design/icons'
import { deleteUserMuRow } from '../Api'
type Props = {
    openModal: () => void
    SelectedRowKeys: React.Key[]
    setLoading: () => void
}

const index: React.FC<Props> = ({
    openModal,
    SelectedRowKeys,
    setLoading,
}: Props) => {
    return (
        <Space>
            <Button
                type="primary"
                style={{ marginRight: '10px' }}
                icon={<ArrowsAltOutlined />}
                onClick={() => {
                    openModal()
                }}>
                新增
            </Button>
            <Button
                type="primary"
                style={{ marginRight: '10px' }}
                icon={<EditFilled />}>
                修改
            </Button>
            <Button
                type="primary"
                style={{ marginRight: '10px' }}
                icon={<DeleteFilled />}
                onClick={() => {
                    //TODO deleteALLRow
                    setLoading()
                    deleteUserMuRow(SelectedRowKeys)
                }}>
                删除
            </Button>
            <Button
                type="primary"
                style={{ marginRight: '10px' }}
                icon={<DownloadOutlined />}>
                导出
            </Button>
        </Space>
    )
}

export default index
