import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {persistedStore, store} from "./redux/store.ts";
import {PersistGate} from "redux-persist/integration/react";
import '../styles.css';
import '../src/index.css';
import App from './components/app.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <App/>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
