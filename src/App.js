import './App.css';
import { useBarChart } from './hooks/use-bar-chart';
import { usePieChart } from './hooks/use-pie-chart';
import { useSheet } from './hooks/use-sheet';
import { Chart, ChartContainer, Container, Sheet } from './styles';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  useBarChart()
  usePieChart()
  const { rows, columns } = useSheet()

  return (
    <Container>
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
              paginationModel: { page: 0, pageSize: 3 },
            },
          }}
        />
      </Sheet>
    </Container>
  );
}

export default App;
