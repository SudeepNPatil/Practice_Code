import React from 'react';

function Component1() {
  const [count, setCount] = useState(0);

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

    { id: 11, name: 'Hardik', role: 'All-rounder' },
    { id: 12, name: 'Jadeja', role: 'All-rounder' },
    { id: 13, name: 'Axar', role: 'All-rounder' },

    { id: 14, name: 'Pant', role: 'Wicket Keeper' },
    { id: 15, name: 'KL Rahul', role: 'Wicket Keeper' },
  ]);

  const [selected, setselected] = useState([]);

  return (
    <div className="mx-20">
      <h1 className="text-2xl font-bold pl-10">Team selection</h1>
      <div className="py-4 rounded-lg mx-10 bg-gray-200"></div>
      <div className="grid grid-cols-2 gap-10 mx-10 mt-6 ">
        <div className="h-auto w-full border col rounded-xl p-5">
          <h1 className="text-2xl font-bold pl-10 pb-5">
            Panal 1 : Avaleble Players
          </h1>

          <table className="w-full border-separate border-spacing-y-5">
            <tr className="w-full ">
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

            {players.map((player) => {
              return (
                <>
                  <tr key={player.id} className="border-b w-full text-center ">
                    <td>{player.name}</td>
                    <td>{player.role}</td>

                    <button className="py-2 px-4  rounded-xl bg-blue-500 text-white">
                      Add
                    </button>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
        <div className="bg-red-300 h-52 w-full border rounded-xl"></div>
      </div>
    </div>
  );
}
