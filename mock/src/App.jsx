import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [PLAYERS, setPLAYERS] = useState([
    { id: 1, name: 'Rohit', role: 'Batsman' },
    { id: 2, name: 'Virat', role: 'Batsman' },
    { id: 3, name: 'Gill', role: 'Batsman' },
    { id: 4, name: 'Surya', role: 'Batsman' },
    { id: 5, name: 'Iyer', role: 'Batsman' },

    { id: 6, name: 'Bumrah', role: 'Bowler' },
    { id: 7, name: 'Shami', role: 'Bowler' },
    { id: 8, name: 'Siraj', role: 'Bowler' },
    { id: 9, name: 'Kuldeep', role: 'Bowler' },
    { id: 10, name: 'Chahal', role: 'Bowler' },

    { id: 11, name: 'Hardik', role: 'All-rounder' },
    { id: 12, name: 'Jadeja', role: 'All-rounder' },
    { id: 13, name: 'Axar', role: 'All-rounder' },

    { id: 14, name: 'Pant', role: 'Wicket Keeper' },
    { id: 15, name: 'KL Rahul', role: 'Wicket Keeper' },
  ]);

  const [selectedplayers, setselectedplayers] = useState([]);

  const handleAdd = (prop) => {
    setselectedplayers((prev) => [...prev, prop]);
  };

  const handleremove = (prop) => {
    const newitems = selectedplayers.filter((item) => {
      if (item != prop) {
        return item;
      }
    });

    setselectedplayers(newitems);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-start mt-10">
        <h1 className="text-2xl text-gray-800 font-bold">
          Team Selection Panel
        </h1>
        <p className="text-xl text-gray-700">
          Max team size is: 11 | role limit enforced
        </p>

        <div className="flex flex-row px-10 justify-between">
          <p className="text-xl text-gray-950">Selected : {}</p>
          <div className="flex justify-around"></div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-20">
        <div className="">
          <h1 className="text-2xl font-bold">Panal 1 avaleble playars</h1>
          <table>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

            {PLAYERS.map((playar) => {
              return (
                <>
                  <tr key={playar.id} className="border-b mb-10">
                    <td>{playar.name}</td>
                    <td>{playar.role}</td>
                    {selectedplayers.includes(playar) ? (
                      <button className="bg-gray-600 text-white py-2 px-8 ">
                        Add
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdd(playar)}
                        className="bg-blue-600 text-white py-2 px-8"
                      >
                        Add
                      </button>
                    )}
                  </tr>
                </>
              );
            })}
          </table>
        </div>

        <div className="border ">
          <h1>Selected Players</h1>
          <table>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

            {selectedplayers?.map((playar) => {
              return (
                <tr key={playar.id} className="border-b mb-10">
                  <td>{playar.name}</td>
                  <td>{playar.role}</td>
                  <button
                    onClick={() => handleremove(playar)}
                    className="bg-green-600 text-white py-2 px-8"
                  >
                    remove
                  </button>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
