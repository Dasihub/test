import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const root = createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
)
