import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const selectedTopic = useSelector((state) => state.topic)
  const [testTitles, setTestTitles] = useState("cargando...");

  useEffect(() => {
    // Si aun no se carga topico
    if (selectedTopic.length === 0) {
      setTestTitles("Selecciona un tema")
    // Si el topico tiene sourceList
    } else if (selectedTopic.length === 1 & selectedTopic[0].length > 1) {
      setTestTitles(selectedTopic[0].map(item => item.title))
    // Si el topico NO tiene sourcelist
    } else if (selectedTopic.length === 1 & selectedTopic[0].length === 1) {
      setTestTitles(selectedTopic[0])
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
