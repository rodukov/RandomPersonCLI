// import { Generate } from './components/generate'
import './styles/App.css'
import { Generate } from './components/generate'
function App() {
  document.title = "Generated 2 peoples"
  return (
    <div>
    <p className="welc">Human Generator</p>
    <p className="welcgg">Choice people which more likes for you</p>
    <div className="App">
        {Generate(2).map(human => {
          return <div className="FakeHuman">
            <p className="center"><img src="https://thispersondoesnotexist.com/" className="person_image" alt="this_is_human_do_not_exists"></img></p>
            <div className="data">
              {human.map(dataitem => <p className="paragraph">{dataitem}</p> )}
            </div>
          </div>
        })}
    </div>
    </div>
  );
}

export default App;
