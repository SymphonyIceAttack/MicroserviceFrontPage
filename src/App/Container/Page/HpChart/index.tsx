import React, { useEffect, useMemo, useState } from 'react'
import PipeContainerList from './PipeContainerList'
import TableContainer from './TableContainer'

const index = () => {
    return (
        <div>
            <PipeContainerList />
            <TableContainer />
        </div>
    )
}

export default index
