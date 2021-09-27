import '../App.css';
import About from './About';
import Footer from './Footer';



const Home = () => {



  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to my portfolio</h1>

      </header>

      <main>
        <About />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;