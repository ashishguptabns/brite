import * as echarts from 'echarts';
import { useContext, useRef, useEffect, useState } from 'react'
import { ThemeContext } from '../../../App';
import 'echarts/theme/dark';
import { fetchBarChart } from '../../../lib/data-service';

export const useBarChart = (id) => {
    const theme = useContext(ThemeContext);
    const barChartRef = useRef()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (theme === 'dark') {
            barChartRef.current = echarts.init(document.getElementById('bar-chart'), 'dark');
        } else {
            barChartRef.current = echarts.init(document.getElementById('bar-chart'));
        }

        fetchBarChart(id).then(data => {
            setLoaded(true)
            barChartRef.current.setOption({
                xAxis: {
                    type: 'category',
                    data: data.xAxis,
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
                        data: data.yAxis,
                        type: 'bar'
                    }
                ]
            });
        })
        return () => {
            barChartRef.current.dispose();
        };
    }, [theme])

    return [loaded]
}