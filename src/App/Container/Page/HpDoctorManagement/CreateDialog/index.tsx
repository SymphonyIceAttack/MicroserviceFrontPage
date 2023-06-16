import React, { useMemo, useState } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { nanoid } from 'nanoid'
import { ReadHpDoctorManagementFormDataType } from '../types'
import { addUserOneRow, editUserOneRow } from '../Api'
interface Props {
    isModalShow: boolean
    isEdite: boolean
    SetModal: (isModalShow: boolean) => void
    SetEdite: (isEdite: boolean) => void
    selectRowKey: null | React.Key
}
type formDataType = Pick<
    ReadHpDoctorManagementFormDataType,
    'specialty' | 'fullName' | 'qualification'
>
const App: React.FC<Props> = ({
    isModalShow,
    SetModal,
    SetEdite,
    isEdite,
    selectRowKey,
}) => {
    const uniqueForm = useMemo(() => nanoid(), [])
    const [form] = Form.useForm<formDataType>()
    const onFinish = (value: formDataType) => {
        SetModal(false)
        SetEdite(false)
        console.log(selectRowKey)
        //TODO editeOneRow
        if (isEdite) {
            editUserOneRow({ doctorId: selectRowKey!, ...value })
        } else {
            //TODO addOneRow
            addUserOneRow({  ...value })
            console.log(value)
        }
    }

    return (
        <>
            <Modal
                title={`${!isEdite ? '新增' : '修改'}`}
                centered
                open={isModalShow}
                onCancel={() => {
                    SetModal(false)
                    SetEdite(false)
                }}
                okButtonProps={{
                    htmlType: 'submit',
                    form: uniqueForm,
                }}
                okText={'确定'}
                cancelButtonProps={{}}
                cancelText={'取消'}
                afterClose={() => {
                    form.resetFields()
                }}>
                <Form
                    preserve={false}
                    id={uniqueForm}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    style={{ maxWidth: 600, marginTop: '30px' }}>
                    <Form.Item name="fullName" rules={[{ required: true }]}>
                        <Input placeholder="请输入用户名称" />
                    </Form.Item>
                    <Form.Item name="specialty" rules={[{ required: true }]}>
                        <Input placeholder="请输入专业" />
                    </Form.Item>
                    <Form.Item
                        name="qualification"
                        rules={[{ required: true }]}>
                        <Input placeholder="请输入资质" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default App
