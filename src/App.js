import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ParticlesBg from 'particles-bg'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <a
          href="https://github.com/wirato/homepage"
          target="_blank"
        >
          <Button className="button" variant="dark">Code GitHub</Button>{' '}
        </a>
      </header>
    </div>
    <ParticlesBg type="cobweb" bg={true} />
  </>
  );
}

export default App;
