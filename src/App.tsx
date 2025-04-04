import {useState} from "react";
import {Link, Routes, Route} from "react-router-dom";
import {About} from "./pages/About";
import {Welcome} from "./pages/Welcome";
import TestComponent from "./TestComponent.tsx";

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div>
            <h1>value = {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

            <div style={{display: 'flex', gap: 15}}>
                <Link to={'about'}>about</Link>
                <Link to={'welcome'}>welcome</Link>
            </div>

            <div>Greeting from Danil</div>

            <TestComponent>
                It's test component
            </TestComponent>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </div>
    );
};

