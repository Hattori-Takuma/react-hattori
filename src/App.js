import './App.css';

function App() {
  const clickMe = () => {
    window.alert('Hello world')
  }

  return (   
  
     <div>
       <button onClick={clickMe}>
         Hello World
       </button>
     </div> 
  );
}



export default App;
