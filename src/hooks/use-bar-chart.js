import * as echarts from 'echarts';
import { useEffect } from 'react'

export const useBarChart = () => {
    useEffect(() => {
        const barChart = echarts.init(document.getElementById('bar-chart'));

        barChart.setOption({
            title: {
                text: ''
            },
            xAxis: {
                data: ['A', 'B', 'C', 'D', 'E']
            },
            yAxis: {},
            series: [
                {
                    data: [100, 400, 500, 200, 300,],
                    type: 'bar',
                    smooth: true
                }
            ]
        });
    }, [])
}