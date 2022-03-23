import { Grid, GridItem, Heading } from "@chakra-ui/react"
import React, { useContext } from "react"
import { MainContext } from "../context/MainContext"
import LineChart from "./LineChart"

const GraphicalDisplay = () => {
    const { context } = useContext(MainContext)
    return (
        <Grid gap={2}>
            <GridItem>
                <Heading size="md">Results:</Heading>
            </GridItem>
            <GridItem>
                <LineChart
                    title="Savings over time"
                    xAxisData={context.result.xAxis}
                    yAxisData={context.result.yAxis}
                    xLabel="Years"
                    yLabel="Amount"
                />
            </GridItem>
        </Grid>
    )
}

export default GraphicalDisplay
