import React, { useState } from 'react';
import SignList from './components/SignList';
import SignDetail from './components/SignDetail';

function App() {
  const [selectedSign, setSelectedSign] = useState(null);

  return (
    <div className="App">
      <SignList onSelectSign={setSelectedSign} />
      {selectedSign && <SignDetail sign={selectedSign} />}
    </div>
  );
}

export default App;
