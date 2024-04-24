import * as echarts from 'echarts';
import { useEffect, useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../../App';
import 'echarts/theme/dark';
import { fetchPieChart } from '../../../lib/data-service';

export const usePieChart = (id) => {
    const theme = useContext(ThemeContext);
    const pieChartRef = useRef()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (theme === 'dark') {
            pieChartRef.current = echarts.init(document.getElementById('pie-chart'), 'dark');
        } else {
            pieChartRef.current = echarts.init(document.getElementById('pie-chart'));
        }
        fetchPieChart(id).then(data => {
            setLoaded(true)
            pieChartRef.current.setOption({
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
        })
        return () => {
            pieChartRef.current.dispose();
        };
    }, [theme])

    return [loaded]
}