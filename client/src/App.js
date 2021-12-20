import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css'

function App () {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: 'flex' }}>
        <div className='item'>Item 1</div>
        <div className='item'>Item 2</div>
        <div className='item'>Item 3</div>
      </div>
    </QueryClientProvider>
  )
}

export default App
