import { Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { defaultContext, MainContext } from '../context/MainContext'
import GraphicalDisplay from '../graphics'
import Inputs from '../inputs'
import Updates from '../updates'

const Main = () => {
    const [context, setContext] = useState(defaultContext)

    return (
        <MainContext.Provider value={{ context, setContext }}>
            <Heading pb={5}>Compound interest calculator</Heading>
            <Inputs />
            <GraphicalDisplay />
            <Updates />
        </MainContext.Provider>
    )
}

export default Main
