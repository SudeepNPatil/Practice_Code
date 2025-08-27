import { useContext } from 'react';
import { TheamContext } from './ContextAPI/TheamContext';

function App() {
  const { state } = useContext(TheamContext);

  return (
    <>
      <div className="flex flex-row gap-10 justify-evenly bg-gray-300 py-5 font-bold ">
        <a href="/Home">Home</a>
        <a href="#">product</a>
        <a href="#">some</a>
        <a href="#">about</a>
      </div>

      <div>{state}</div>
    </>
  );
}

export default App;
