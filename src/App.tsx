import './App.css';
import About from './pages/About';
import Skills from './pages/Skills';
import Future from './pages/Future';

/**
 * Namaste!
 * I am Piyush
 * I am a full stack web developer
 *
 */
function App() {
  return (
    <>
      <header className="sticky top-0">
        <button>dark theme button</button>
      </header>
      <main className="font-hubot">
        <header className="px-52 flex h-screen w-full bg-zinc-950 justify-center items-center">
          <h1 className="text-6xl">Hi!, I am Piyush Kinge</h1>
        </header>
        <About />
        <Skills />
        <Future />
      </main>
      <footer>Built with ❤️ in India!</footer>
    </>
  );
}

export default App;
