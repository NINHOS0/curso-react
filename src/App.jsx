import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route index path="/" Component={Home}></Route>
          <Route path="/company" Component={Company}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/newproject" Component={NewProject}></Route>
          <Route path="/project/:id" Component={Project}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
