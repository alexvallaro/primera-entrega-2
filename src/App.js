import './App.css';
import itemListContainer from './components/itemListContainer'
import navBar from './components/navBar';


function App() {
  return (
    <div className='App'>
      <main>
      <navBar />
      <itemListContainer greeting={"Libreria, el libro"} />            
      </main>   
    </div>
  );
}

export default App;
