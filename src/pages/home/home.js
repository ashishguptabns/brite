import { ThemeContext } from '../../App';
import { useBarChart } from './hooks/use-bar-chart';
import { usePieChart } from './hooks/use-pie-chart';
import { useSheet } from './hooks/use-sheet';
import { Chart, ChartContainer, Container, Sheet, Theme } from './styles';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react'

export const Home = ({ onToggleTheme }) => {
    const theme = useContext(ThemeContext);

    const [barChartLoaded] = useBarChart('someId')
    const [pieChartLoaded] = usePieChart('someId')
    const { rows, cols } = useSheet('someId')

    return (
        <Container>
            <Theme onClick={onToggleTheme}>{theme}</Theme>
            <ChartContainer>
                <Chart id='bar-chart' />
                <Chart id='pie-chart' />
            </ChartContainer>

            {rows.length > 0 && <Sheet>
                <DataGrid
                    rows={rows}
                    columns={cols}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 4 },
                        },
                    }}
                />
            </Sheet>}
        </Container>
    )
}