import React, { useEffect, useState } from 'react';
import './App.css';
import * as mtz from 'moment-timezone';

const timeZones = mtz.tz.names();
const defaultFormat = 'h:mm:ss a';

function App() {

  const [selectedLocale, setSelectedLocale] = useState<string>('America/Sao_Paulo');
  const [time, setTime] = useState<string>();

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocale(event.currentTarget.value);
  };

  useEffect(() => {
    const to = setTimeout(() => {
      setTime(mtz.tz(selectedLocale).format(defaultFormat));
    }, 1000);

    return () => clearTimeout(to);
  }, [time]);

  useEffect(() => {
    setTime(mtz.tz(selectedLocale).format(defaultFormat));
  }, [selectedLocale])

  return (
    <div className="App">
      <h1>
        {time}
      </h1>
      <select onChange={selectChangeHandler} value={selectedLocale}>
        {timeZones.map((timeZone, index) => <option key={index} value={timeZone}>{timeZone}</option>)}
      </select>
    </div>
  );
}

export default App;
