import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </StrictMode>,
)
