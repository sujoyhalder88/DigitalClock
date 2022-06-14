import "./App.css";
import React, { useState } from "react";

function App() {
    let time = new Date().toLocaleTimeString();

    const [currtime, setCurrtime] = useState(time);

    const upDateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrtime(time);
    };

    setInterval(upDateTime, 1000);

    return (
        <>
            <div className="container">
                <h1>{currtime}</h1>
            </div>
        </>
    );
}

export default App;
