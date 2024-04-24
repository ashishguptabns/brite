import { barChartData, columns, pieChartData, rows } from "./mock-data"

export const fetchSheet = async (id) => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res([rows, columns])
        }, 500);
    })
    return data
}

export const fetchPieChart = async (id) => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(pieChartData)
        }, 1000);
    })
    return data
}

export const fetchBarChart = async (id) => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(barChartData)
        }, 2000);
    })
    return data
}