import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Navss from './components/navegacion/Navss'
import Grid from './components/grid/Grid'
function App() {
  return (
    <div className="App">
      <Header />
      <Navss />
      <Hero />
      <Grid />
    </div>
  );
}

export default App;
