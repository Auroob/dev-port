import './App.scss';
//import BackgroundImage from './components/background/backgroundImage';
import { Introduction } from './components/introduction/introduction';
import { Projects } from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
