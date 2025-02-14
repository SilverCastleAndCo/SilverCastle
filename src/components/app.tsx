import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PathName} from '../models/enums/pathName';
import RequireAuth from "../auth/RequireAuth.tsx";
import LoginFrom from "./loginFrom/loginFrom.tsx";
import PageNotFound from "./pageNotFound/pageNotFound.tsx";
import AppLayout from "./appLayout/appLayout.tsx";


const App = () => {

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <BrowserRouter>
                <Routes>
                    <Route path={PathName.LOGIN} element={<LoginFrom/>}/>
                    <Route
                        path={PathName.APP_LAYOUT}
                        element={
                            <RequireAuth>
                                <AppLayout/>
                            </RequireAuth>
                        }
                    >
                        {/*<Route path={PathName.VPN} element={<Vpn/>}/>*/}
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
