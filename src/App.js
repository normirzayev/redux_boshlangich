import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Read from "./components/Read";
import ProjectReducer  from "./redux/reduces/ProjectReducer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"element={<Read />} />
          <Route path="/add" element={ <Add />} />
          <Route path="/edit/:id" element={<Edit /> } />
          <Route path="/projectData" element={<ProjectReducer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
