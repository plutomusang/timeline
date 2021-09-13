import logo from './logo.svg';
import './App.css';
import Timenode from'./component/timenode';
function App() {
  return (
    <div className="App">
      <Timenode 
        personName="Arthur Bryan M. Santos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis scelerisque odio sit amet dictum. Etiam eget pharetra ligula. Vestibulum eget faucibus nisl. Sed in eros ornare, dapibus erat eu, commodo orci, Pellentesque." 
        timeRecieved= "08-08 Tue 3PM"
        timeReleased= "4 PM"
        documentStatus={true}
        isLastItem={false}
      />
      <Timenode 
        personName="Arthur Bryan M. Santos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis scelerisque odio sit amet dictum. Etiam eget pharetra ligula. Vestibulum eget faucibus nisl. Sed in eros ornare, dapibus erat eu, commodo orci, Pellentesque." 
        timeRecieved= "08-08 Tue 3PM"
        timeReleased= "4 PM"
        documentStatus={true}
        isLastItem={true}
      />      
    </div>
  );
}

export default App;
