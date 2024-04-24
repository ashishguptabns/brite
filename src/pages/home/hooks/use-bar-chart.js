import * as echarts from 'echarts';
import { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../../App';
import 'echarts/theme/dark';

export const useBarChart = () => {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const barChart = echarts.init(document.getElementById('bar-chart'), theme === 'dark' ? theme : null);

        barChart.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    color: 'white' // Set text color to white
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: 'white' // Set text color to white
                }
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        });

        return () => {
            barChart.dispose();
        };
    }, [theme])
}