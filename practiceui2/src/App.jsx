import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const items = [
    {
      id: 'hk123',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
      imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
      title: '“Hello Kitty” Coffee Machine',
      price: '89.99',
      inStock: true,
    },
    {
      id: 'co999',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
      imageAlt: 'A black can opener',
      title: 'Safety Can Opener',
      price: '19.95',
      inStock: false,
    },
    {
      id: 'cnl333',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
      imageAlt:
        'A kid-friendly nightlight sculpted to look like a dog astronaut',
      title: 'Astro-pup Night Light',
      price: '130.00',
      inStock: true,
    },
    {
      id: 'scb777',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
      imageAlt: 'A pink backpack with a unicorn illustration',
      title: 'Magical Unicorn Backpack',
      price: '74.98',
      inStock: true,
    },
  ];

  const soldout = items.filter((item) => item.inStock === false);

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center my-10">Shoping Cart</h1>
      <table className="w-full text-center table-fixed">
        <tr className="border-b">
          <th>Title</th>
          <th>Price</th>
        </tr>

        {items.map((item) => {
          return (
            <tr key={item.id} className="border-b">
              <td>
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-24 inline-block"
                />
                <p className="inline-block pl-8">{item.title}</p>
              </td>

              <td>{item.price}</td>
            </tr>
          );
        })}
      </table>

      <h1 className="text-2xl font-bold text-center my-10"> Sold out</h1>
      <table className="w-full text-center table-fixed">
        <tr className="border-b">
          <th>Title</th>
          <th>Price</th>
        </tr>

        {soldout.map((item) => {
          return (
            <tr key={item.id} className="border-b">
              <td>
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-24 inline-block"
                />
                <p className="inline-block pl-8">{item.title}</p>
              </td>

              <td>{item.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
