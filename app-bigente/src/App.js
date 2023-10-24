import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import randomTags from './utility/tagFunction';
import '../src/styles/Cardcontainer.css';

function App() {
  const selectedTopic = useSelector((state) => state.topic[0])
  const [testTitles, setTestTitles] = useState("Cargando...");

  useEffect(() => {
    if (!selectedTopic) {
      setTestTitles("Selecciona un tema")
    } else if (selectedTopic.length > 1) {
      //setTestTitles(selectedTopic.map(item => item.title))
      setTestTitles(selectedTopic.map(item => 
      <Card 
        key={item.id}
        title={item.title}
        subreddit={item.subreddit}
        score={item.score}
        permalink={item.link}
        tags={randomTags()}
        created={item.date}

      />))
      console.log(testTitles)
    } else if (selectedTopic.length === 1) {
      setTestTitles(selectedTopic)
    }
  }, [selectedTopic, testTitles])

  return (
    <div className="App">
      <Header />
      <div className="cardscontainer">
        {testTitles}
      </div>
    </div>
    
  );
}

export default App;
