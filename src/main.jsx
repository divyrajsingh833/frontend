import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store'
import { AuthProvider } from './context/AuthProvider'
import { Toaster } from 'sonner'
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Provider store = {store}>
     <AuthProvider>
      <App />
      <Toaster/>
     </AuthProvider>
    </Provider>
   </BrowserRouter>
 
)
