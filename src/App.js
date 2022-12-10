import React, { useState } from 'react';

const App = () => {
    const [temperatureValue, setTemperatureValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold");

    const changeTemperature = (type = 'increase') => {
        let newTemperature = temperatureValue;
        
        if (type === 'increase') {
            newTemperature++;
        } else
        if (type === 'decrease') {
            newTemperature--;
        }

        if (newTemperature > 30 || newTemperature < 0) return;
        
        setTemperatureColor(color(newTemperature));

        setTemperatureValue(newTemperature);
    }

    const color = (temperature) => {
        if (temperature >= 15) return 'hot'
        if (temperature <= 10) return 'cold'
    }
    return (
        <div className='app-container'>
            <div className="temperature-display-container">
                <div className={`temperature-display ${temperatureColor}`}>
                    {temperatureValue}°C
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => changeTemperature('increase')}>
                    +
                </button>
                <button onClick={() => changeTemperature('decrease')}>
                    -
                </button>
            </div>
        </div>
    )
}

export default App;