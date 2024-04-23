import * as echarts from 'echarts';
import { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../App';

export const useBarChart = () => {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const barChart = echarts.init(document.getElementById('bar-chart'), theme);

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
    }, [theme])
}