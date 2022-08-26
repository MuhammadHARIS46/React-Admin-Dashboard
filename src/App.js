import logo from "./logo.svg";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icns/fi";
import { ToolTipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

import "./App.css";

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-pg">
          <div className="fixed right-4 bottom-4">
            <ToolTipComponent content="Settings" position="fixed">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </ToolTipComponent>
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
              <Route path='/' element={<Ecommerce/>} />
              <Route path='/' element={<Ecommerce/>}  />
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
