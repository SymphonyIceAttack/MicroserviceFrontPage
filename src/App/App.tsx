import React, { useState } from 'react'
import Style from './App.module.less'
import Container from './Container'
import Page from './Container/Page'

function App() {
    return (
        <div className={`${Style.App}`}>
            <Container>
                <Page />
            </Container>
        </div>
    )
}

export default App
