import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Data from './components/Data';


function App() {
  return (
    <div className="App">
      <Header />
      {Data.map((val) => {
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            alt={val.alt}
            summary={val.summary}
            link={val.link}
            duration={val.duration}
            genres={val.genres}
            rating={val.rating}
            year={val.year}
          />
        );
      })}

    </div>
  );
}

export default App;
