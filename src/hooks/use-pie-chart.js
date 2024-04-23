import * as echarts from 'echarts';
import { useEffect } from 'react'
import { data } from '../lib/mock-data';

export const usePieChart = () => {
    useEffect(() => {
        const pieChart = echarts.init(document.getElementById('pie-chart'));

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
    }, [])
}