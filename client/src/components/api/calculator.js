import { postRequest } from "./common"

const controller = "calculator"

export const calculateSavings = (initial, monthly, rate, axiosToken) => {
    return postRequest(`${controller}/savings`, { initial, monthly, rate }, axiosToken)
}