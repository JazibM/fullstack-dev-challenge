import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { calculateSavings } from '../api/calculator'
import { ContextTypes, MainContext } from '../context/MainContext'

type SavingsType = {
    year: number,
    value: number
}

const Updates = () => {
    const { context, setContext } = useContext(MainContext)
    const [isLoading, setIsLoading] = useState(false)
    const timeout = useRef(0)
    const { initial, monthly, rate } = context.inputs

    useEffect(() => {
        setIsLoading(true)
        clearTimeout(timeout.current)
        const source = axios.CancelToken.source()

        timeout.current = window.setTimeout(() => {
            calculateSavings(initial, monthly, rate / 100)
                .then(response => {
                    const xAxis: Array<number> = []
                    const yAxis: Array<number> = []
                    response.data.forEach((entry: SavingsType) => {
                        xAxis.push(entry.year)
                        yAxis.push(entry.value)
                    })
                    setContext((context: ContextTypes) => ({ ...context, result: { xAxis, yAxis } }))
                })
                .catch(error => {
                    if (!axios.isCancel(error)) {
                        console.error("API error")
                    }
                })
            setIsLoading(false)
        }, 200)

        return () => source.cancel()
    }, [initial, monthly, rate, setContext])

    if (isLoading) {
        return <Spinner />
    }
    else {
        return <div style={{ display: 'none' }} />
    }
}

export default Updates
