import { useEffect, useState } from 'react';

function App() {
  const [players, setplayers] = useState([
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

    { id: 11, name: 'Hardik', role: 'Allrounder' },
    { id: 12, name: 'Jadeja', role: 'Allrounder' },
    { id: 13, name: 'Axar', role: 'Allrounder' },

    { id: 14, name: 'Pant', role: 'WicketKeeper' },
    { id: 15, name: 'KL Rahul', role: 'WicketKeeper' },
  ]);

  const [rolecount, setrolecount] = useState({});

  const [selectedplayers, setselectedplayers] = useState([]);

  const [selectedrolecount, setselectedrolecount] = useState({});

  const handleadd = (prop) => {
    setselectedplayers((prev) => [...prev, prop]);
  };

  useEffect(() => {
    const rolercount = players.reduce((initial, current) => {
      if (initial[current.role]) {
        initial[current.role]++;
      } else {
        initial[current.role] = 1;
      }

      return initial;
    }, {});
    setrolecount(rolercount);
  }, []);

  useEffect(() => {
    const rolercount = selectedplayers?.reduce((initial, current) => {
      if (initial[current.role]) {
        initial[current.role]++;
      } else {
        initial[current.role] = 1;
      }

      return initial;
    }, {});

    setselectedrolecount(rolercount);
  }, [selectedplayers]);

  const handleremove = (prop) => {
    const removedplayer = selectedplayers.filter((play) => play != prop);
    setselectedplayers(removedplayer);
  };

  console.log(rolecount);

  return (
    <div className="flex flex-col w-[85vw] mx-auto border h-auto">
      <div className="px-20 mt-10">
        <h1 className="text-2xl font-bold">Team Selection Panal</h1>
        <p className="text-gray-700 text-xl">
          Max team size : 11 | limit or enforcd
        </p>
      </div>

      <div className="py-4 bg-gray-100 rounded-lg mx-20 mt-5 flex justify-between px-5">
        <p className="text-black text-xl">
          Selected : {selectedplayers?.length + '/' + players.length}
        </p>
        <div className="flex gap-4">
          <p className="px-5 py-1 bg-white rounded-full">
            Batsman :{' '}
            {(selectedrolecount?.Batsman || 0) + '/' + rolecount?.Batsman}
          </p>
          <p className="px-5 py-1 bg-white rounded-full">
            Boller :{' '}
            {(selectedrolecount?.Bowler || 0) + '/' + rolecount?.Bowler}
          </p>
          <p className="px-5 py-1 bg-white rounded-full">
            All-rounder :{' '}
            {(selectedrolecount?.Allrounder || 0) + '/' + rolecount?.Allrounder}
          </p>
          <p className="px-5 py-1 bg-white rounded-full">
            wiketkipper :{' '}
            {(selectedrolecount?.WicketKeeper || 0) +
              '/' +
              rolecount?.WicketKeeper}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-20 px-20 mt-10">
        <div className="w-[50%] h-auto border px-5">
          <h1 className="text-black text-xl font-bold my-5 mx-10">
            Panal 1 : Avaleble Players
          </h1>
          <table className="flex flex-col">
            <tr className="flex flex-row justify-around my-2">
              <th>Nema</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

            {players.map((player) => {
              return (
                <tr
                  key={player.id}
                  className="flex flex-row justify-around items-center mt-3 border-b"
                >
                  <td>{player.name}</td>
                  <td>{player.role}</td>
                  {selectedplayers.includes(player) ||
                  selectedplayers?.length === 11 ? (
                    <td className="rounded-xl bg-gray-300 text-black px-4 py-2 cursor-not-allowed">
                      Add
                    </td>
                  ) : selectedrolecount?.Batsman === 3 &&
                    player.role === 'Batsman' ? (
                    <td className="rounded-xl bg-gray-300 text-black px-4 py-2 cursor-not-allowed">
                      Add
                    </td>
                  ) : selectedrolecount.Bowler === 3 &&
                    player.role === 'Bowler' ? (
                    <td className="rounded-xl bg-gray-300 text-black px-4 py-2 cursor-not-allowed">
                      Add
                    </td>
                  ) : (
                    <td
                      onClick={() => handleadd(player)}
                      className="rounded-xl bg-blue-500 text-white px-4 py-2 cursor-pointer"
                    >
                      Add
                    </td>
                  )}
                </tr>
              );
            })}
          </table>
        </div>

        <div className="w-[50%] h-auto border px-5">
          <h1 className="text-black text-xl font-bold my-5 mx-10">
            Panal 2 : Selected Players
          </h1>
          <table className="flex flex-col">
            <tr className="flex flex-row justify-around my-2">
              <th>Nema</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

            {selectedplayers?.map((player) => {
              return (
                <tr
                  key={player.id}
                  className="flex flex-row justify-around items-center mt-3 border-b"
                >
                  <td>{player.name}</td>
                  <td>{player.role}</td>
                  <td
                    onClick={() => handleremove(player)}
                    className="rounded-xl bg-green-500 text-white px-4 py-2 cursor-pointer"
                  >
                    remove
                  </td>
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
