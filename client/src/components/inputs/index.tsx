import { Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import InputWrapper from './InputWrapper'

const Inputs = () => {
    const { setContext } = useContext(MainContext)

    const handleChange = (name: string, newValue: number) => {
        setContext((context: any) => {
            const newContext = { ...context }
            newContext.inputs[name] = newValue
            return newContext
        })
    }

    return (
        <Grid gap={2} pb={5}>
            <GridItem>
                <Heading size="md">Please enter your values below</Heading>
            </GridItem>
            <GridItem>
                <InputWrapper name="initial" label="Initial savings" defaultValue={0} onChange={handleChange} />
            </GridItem>
            <GridItem>
                <InputWrapper name="monthly" label="Monthly deposit" defaultValue={0} onChange={handleChange} />
            </GridItem>
            <GridItem>
                <InputWrapper name="rate" label="Interest rate" defaultValue={0} onChange={handleChange} />
            </GridItem>
        </Grid>
    )
}

export default Inputs
