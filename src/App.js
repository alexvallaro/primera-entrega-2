import './App.css';
import itemListContainer from './components/itemListContainer'
import navBar from './components/navBar';


function App() {
  return (
    <div className='App'>
      <main>
      <navBar />
      <itemListContainer greeting={"Hola Mundo"} />            
      </main>   
    </div>
  );
}

export default App;
