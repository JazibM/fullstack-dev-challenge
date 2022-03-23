import React from 'react'

export type ContextTypes = {
    context: {
        inputs: {
            initial: number,
            monthly: number,
            rate: number
        },
        result: {
            xAxis: Array<number>,
            yAxis: Array<number>
        },
        triggerUpdate: number
    },
    setContext: any
}

export const defaultContext = {
    inputs: { initial: 0, monthly: 0, rate: 0 },
    result: { xAxis: [], yAxis: [] },
    triggerUpdate: 0
}

export const MainContext = React.createContext<ContextTypes>({ context: defaultContext, setContext: () => null })
