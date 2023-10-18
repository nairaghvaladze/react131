import React from "react";
import  ReactDOM  from "react-dom/client";
import {BrowserRouter, Routes, Switch,  Route} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Layout from "./components/Layout";


class App extends React.Component{
    render()
    {
        return(
           <BrowserRouter>          
           <Routes>
           <switch>
            <Route index path="/" element={<Layout />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Switch>
           </Routes>
          </BrowserRouter>
        );
        
    }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
