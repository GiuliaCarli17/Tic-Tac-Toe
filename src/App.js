import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="text-center text-gray-500">
      <header className="items-center">        
        <h1 className='h-[15vh] mt-5 mb-7 font-bold text-2xl'>Tic Tac Toe</h1>
        <Game />
      </header>
      <footer className='text-xxs text-gray-500 absolute bottom-0 w-full mb-1'>
        Made by Giulia Carli
      </footer>
    </div>
  );
}

export default App;
