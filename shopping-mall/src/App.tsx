import { useRoutes } from 'react-router-dom'
import { routes } from './routes'; // or use Vite's alias to simplify import path for nested components
import { QueryClientProvider } from 'react-query'
import { getClient } from './queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import Gnb from './components/gnb'

function App() {
    const elem = useRoutes(routes);
    const queryClient = getClient()
    return <QueryClientProvider client={queryClient}>
        <Gnb />
        {elem}
        <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider >
}

export default App;