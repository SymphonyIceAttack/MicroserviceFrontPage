import React, { Suspense, useEffect, useState } from 'react'
import Style from './Jxgl.module.less'
import FilterForm from './FilterForm'
import CRUDbuttonList from './CRUDbuttonList'
import TablePage from './TablePage'
import CreateDialog from './CreateDialog'
import CreateModalHook from './hook/CreateModalHook'
import { useCustomFetch } from './hook/useCustomFetcher'

import type { FilterFormType } from './FilterForm'

type Props = {}

const index = (props: Props) => {
    const [data, setData] = useState(null)
    const [FilterParams, setFilterParams] = useState<FilterFormType>(null)
    const res = useCustomFetch(FilterParams) //

    //TODO getALLList
    const [isModalShow, setisModalShow] = CreateModalHook()
    const [isEdite, setisEdite] = useState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [selectRowKey, setSelectRowKey] = useState<React.Key | null>(null)

    return (
        <div className={`${Style.Jxgl}`}>
            {/* 这个是顶部的筛选模块 */}
            <FilterForm
                saveFilterParams={(FilterParams) => {
                    setFilterParams(FilterParams)
                }}
            />
            {/* 这个是Table的增删改查 */}
            <CRUDbuttonList
                openModal={() => {
                    setisModalShow(true)
                }}
                SelectedRowKeys={selectedRowKeys}
            />
            {/* 这个是table本身 */}
            <TablePage
                data={res == null ? [] : res}
                SelectedRowKeys={selectedRowKeys}
                saveSelectedRowKeys={(SelectedRowKeys) => {
                    setSelectedRowKeys(SelectedRowKeys)
                }}
                SetSeletRowKey={(selectrowkey) => {
                    setSelectRowKey(selectrowkey)
                }}
                SetModal={(isModalShow) => {
                    setisModalShow(isModalShow)
                }}
                SetEdite={(isEdite) => {
                    setisEdite(isEdite)
                }}
            />
            {/* 这个是弹出框 */}
            <CreateDialog
                selectRowKey={selectRowKey}
                isModalShow={isModalShow}
                isEdite={isEdite}
                SetEdite={(isEdite) => {
                    setisEdite(isEdite)
                }}
                SetModal={(isModalShow) => {
                    setisModalShow(isModalShow)
                }}
            />
        </div>
    )
}

export default index
