import { ThemeContext } from '../../App';
import { useBarChart } from './hooks/use-bar-chart';
import { usePieChart } from './hooks/use-pie-chart';
import { useSheet } from './hooks/use-sheet';
import { Chart, ChartContainer, Container, Sheet, Theme } from './styles';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react'

export const Home = ({ onToggleTheme }) => {
    const theme = useContext(ThemeContext);

    useBarChart()
    usePieChart()
    const { rows, columns } = useSheet()

    return (
        <Container>
            <Theme onClick={onToggleTheme}>{theme}</Theme>
            <ChartContainer>
                <Chart id='bar-chart'></Chart>
                <Chart id='pie-chart'></Chart>
            </ChartContainer>

            <Sheet>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 4 },
                        },
                    }}
                />
            </Sheet>
        </Container>
    )
}