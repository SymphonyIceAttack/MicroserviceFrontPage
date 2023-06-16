import React from 'react'
import Style from './PipeContainerList.module.less'
import PipeContainerItem from './PipeContainerItem'
import usePipData from './usePipData'
const index = () => {
    const [MaxSpeciaty, MaxWard, MaxPaid, MaxPending] = usePipData()
    const Cacla = <T extends any>(array: T[]) => {
        return array.length > 0 ? array : 0
    }
    return (
        <div className={`${Style.PipeContainerList}`}>
            <PipeContainerItem
                title="排班占比最大科室"
                useValue={
                    MaxSpeciaty.length > 0 ? MaxSpeciaty[0].percentage : 0
                }
            />
            <PipeContainerItem
                title="病房占用率"
                useValue={MaxWard.length > 0 ? MaxWard[0].occupancyRate : 0}
            />
            <PipeContainerItem
                title="已付款占比"
                useValue={MaxPaid.length > 0 ? MaxPaid[0].percentage : 0}
            />
            <PipeContainerItem
                title="未缴费完成占比"
                useValue={MaxPending.length > 0 ? MaxPending[0].percentage : 0}
            />
        </div>
    )
}

export default index
