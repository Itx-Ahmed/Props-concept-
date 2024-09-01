import './App.css';
import CompA from './Components/CompA';
import Customer from './Components/Customer';

 import Props from './Props';

 

function App() {
  return (
    <div className="App">
      <h1>Props In React</h1>
      <Props name="Ahmed"
             age={26}
             Education="Bs  Degree"
             replacement="Mohammad Essa"
           
      
       
     />
     <CompA/>
     <Customer name="Afnan khan" age={26}
     occupation="Teacher"
     />
  
     
    </div>
     
  );
}

export default App;
