import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';
import Lab3 from './Labs/Lab3';
import Kanbas from './Kanbas';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/labs/lab1" element={<Lab1 />} />
                <Route path="/labs/lab2" element={<Lab2 />} />
                <Route path="/labs/lab3" element={<Lab3 />} />
                <Route path="/kanbas" element={<Kanbas />} />
            </Routes>
        </Router>
    );
}
export default App;

function LandingPage() {
    return (
        <div>
            <h1>Joythish Reddy Evuri</h1>
            <p>Section 3</p>
            <ul>
                <li><a href="/labs/lab1">Lab 1</a></li>
                <li><a href="/labs/lab2">Lab 2</a></li>
                <li><a href="/labs/lab3">Lab 3</a></li>
            </ul>
            <a href="/kanbas">Kanbas Application</a>
            <p><a href="https://github.com/joythishreddye/kanbas-react-web-app">Source Code Repository</a></p>
        </div>
    );
}
