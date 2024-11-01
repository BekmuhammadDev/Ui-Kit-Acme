import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {Provider} from "react-redux";
import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import {appRouter} from './router/index'
import { store } from './redux/store.config';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
  <NextUIProvider>
  <RouterProvider router={appRouter} />
  </NextUIProvider>
  </Provider>
  </StrictMode>
)
