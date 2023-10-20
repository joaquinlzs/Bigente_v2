import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const selectedTopic = useSelector((state) => state.topic[0])
  const [testTitles, setTestTitles] = useState("Cargando...");

  useEffect(() => {
    if (!selectedTopic) {
      setTestTitles("Selecciona un tema")
    } else if (selectedTopic.length > 1) {
      setTestTitles(selectedTopic.map(item => item.title))
    } else if (selectedTopic.length === 1) {
      setTestTitles(selectedTopic)
    }
  }, [selectedTopic])

  return (
    <div className="App">
      <Header />
      <div>
        {testTitles}
      </div>
    </div>
    
  );
}

export default App;
