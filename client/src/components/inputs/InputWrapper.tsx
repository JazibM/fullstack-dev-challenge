import { Box, NumberInput, NumberInputField, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

type InputProps = {
    name: string,
    defaultValue: number,
    onChange: (name: string, value: number) => void,
    min?: number,
    max?: number,
    label?: string
}

const InputWrapper = ({ name, defaultValue, onChange, min = 0, max = Infinity, label = "" }: InputProps) => {
    const [value, setValue] = useState(defaultValue)

    const onInputChange = (_: string, newValue: number) => {
        setValue(newValue)
        if (onChange != null) {
            onChange(name, newValue)
        }
    }

    return (
        <SimpleGrid columns={2} alignItems="center">
            <Box>
                <Text>{label}</Text>
            </Box>
            <Box w="100%">
                <NumberInput value={value} onChange={onInputChange} min={min} max={max}>
                    <NumberInputField />
                </NumberInput>
            </Box>
        </SimpleGrid>
    )
}

export default InputWrapper
