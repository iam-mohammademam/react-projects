import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Todo from "./Todo/Todo";
import WeatherApp from "./WeatherApp/WeatherApp";
import Bmi from "./Bmi/Bmi";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/todo" element={<Todo/>} />
        <Route path="/weather" element={<WeatherApp/>} />
        <Route path="/bmi" element={<Bmi/>} />
      </Routes>
    </Router>
  );
};

export default App;
