import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppProvider>
)
