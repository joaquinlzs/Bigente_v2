import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';

function App() {
  const selectedTopic = useSelector((state) => state.topic)
  //console.log(selectedTopic)
  let testTitles;
  if (selectedTopic.length !== 0) {
    testTitles = selectedTopic[0].map(item => item.title);
  } else if (selectedTopic.length !== 1) {
    testTitles = selectedTopic;
    console.log("Item nuevo")
    console.log(testTitles)
  } else {
    testTitles = "cargando..."
  }
  

  // {selectedTopic[0].map(item => item.title)}

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
