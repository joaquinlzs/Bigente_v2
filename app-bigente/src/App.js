import './App.css';
import Header from './components/Header'
import { useSelector } from 'react-redux';

function App() {
const selectedTopic = useSelector((state) => state.topic)
//console.log(selectedTopic)

  return (
    <div className="App">
      <Header />
      <div>
        {selectedTopic}
      </div>
    </div>
    
  );
}

export default App;
