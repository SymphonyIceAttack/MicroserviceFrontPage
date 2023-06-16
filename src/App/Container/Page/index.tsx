import React from 'react'
import entry from './entry'
import { Suspense } from 'react'
import { Space, Spin } from 'antd'
type Props = {}

const index = (props: Props) => {
    return (
        <Suspense
            fallback={
                <Spin
                    size={'large'}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        zIndex: 100,
                        left: '50%',
                    }}
                />
            }>
            {entry()}
        </Suspense>
    )
}

export default index
