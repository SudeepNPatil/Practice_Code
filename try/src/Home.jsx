import { useContext } from 'react';
import { TheamContext } from './ContextAPI/TheamContext';

function Home() {
  const { state, changetheam } = useContext(TheamContext);

  return (
    <>
      <div className="flex flex-row gap-10 justify-evenly bg-gray-300 py-5 font-bold ">
        {state || ''}
        hii this is home
      </div>
    </>
  );
}

export default Home;
