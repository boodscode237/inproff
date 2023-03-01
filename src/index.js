import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './pages/AboutUs/AboutUs';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Register from "./pages/Register/Register";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="o-nas" element={<AboutUs />} />
                  <Route path="register" element={<Register />} />

                  {/*<Route path="functions" element={<Functions />} />*/}
                  {/*<Route path="hosting" element={<Hosting />} />*/}
                  {/*<Route path="machine-learning" element={<MachineLearning />} />*/}
                  {/*<Route path="storage" element={<Storage />} />*/}
              </Route>
          </Routes>
      </BrowserRouter>,
  </React.StrictMode>
);

