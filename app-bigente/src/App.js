import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';

function App() {
const selectedTopic = useSelector((state) => state.topic)
console.log(selectedTopic[0])

  return (
    <div className="App">
      <Header />
      <div>
        {selectedTopic[0].map(item => item.title)}
      </div>
    </div>
    
  );
}

export default App;
