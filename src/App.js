import React from "react";
import {Routes, Route,} from "react-router-dom";
import './App.css';
import { AuthPage, RootPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<RootPage />}/>
        <Route path="/auth" element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
