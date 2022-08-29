import logo from "./logo.svg";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Calendar from "./pages/Calendar"
import ColorPicker from './pages/ColorPicker'
import Customers from './pages/Customers'
import Ecommerce from './pages/Ecommerce'
import Editor from './pages/Editor'
import Employees from './pages/Employees'
import Kanban from './pages/Kanban'
import Orders from './pages/Orders'
// import {Calendar,ColorPicker,Customers,Ecommerce,Editor,Employees,Kanban,Orders} from '../src/pages'
// import {Area,Line,Bar,ColorMapping,Pie,Pyramid,Stacked,Financial} from "../src/pages/charts"
import Area from './pages/charts/Area'
import Line from './pages/charts/Line'
import Bar from './pages/charts/Bar'
import ColorMapping from './pages/charts/ColorMapping'
import Pie from './pages/charts/ColorMapping'
import Pyramid from './pages/charts/Pyramid'
import Stacked from './pages/charts/Stacked'
import Financial from './pages/charts/Financial'
import "./App.css";
import {useStateContext} from './contexts/ContextProvider'
function App() {
  const {activeMenu}= useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-pg">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent content="Settings" position="fixed">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0  dark:bg-secondary-dark-bg"><Sidebar /></div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? ` md:ml-72` : `flex-2`
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
             < Navbar/>
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              {/* <Route path='/' element={<Ecommerce/>} /> */}
              <Route path='/ecommerce' element={<Ecommerce/>}  />
              {/* Pages */}
              <Route path='/order' element={<Orders/>} />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customer' element={<Customers/>} />
              {/* Apps */}
              <Route path='/kanban' element={<Kanban/>} />
              <Route path='/editor' element={<Editor/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/color-picker' element={<ColorPicker/>} />
              {/* Charts */}
              <Route path='/line' element={<Line/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/area' element={<Area/>} />
              <Route path='/financial' element={<Financial/>} />
              <Route path='/color-mapping' element={<ColorMapping/>} />
              <Route path='/pyramid' element={<Pyramid/>} />
              <Route path='/stacked' element={<Stacked/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
