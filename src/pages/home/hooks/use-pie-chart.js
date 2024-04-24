import * as echarts from 'echarts';
import { useEffect } from 'react'
import { data } from '../../../lib/mock-data';
import { useContext } from 'react'
import { ThemeContext } from '../../../App';
import 'echarts/theme/dark';

export const usePieChart = () => {
    const theme = useContext(ThemeContext);
    useEffect(() => {
        const pieChart = echarts.init(document.getElementById('pie-chart'), theme === 'dark' ? theme : null);

        pieChart.setOption({
            title: {
                text: ''
            },
            tooltip: {},
            series: [
                {
                    type: 'pie',
                    data: data,
                    roseType: 'area'
                }
            ]
        });

        return () => {
            pieChart.dispose();
        };
    }, [theme])
}