import { useState } from "react";

function App() {
  const [banned, setBanned] = useState(false);
  const [score, setScore] = useState(12);
  const [count, setCount] = useState(0);
  const [val, setVal] = useState({ name: "Ankit", isBanned: false });

  // const setClick = () => {
  //   setBanned(!banned);
  // };

  return (
    <div>
      <div className="p-4 border">
        <h1>banned: {banned.toString()}</h1>
        <button
          onClick={() => setBanned(!banned)}
          className="px-3 py-2 rounded bg-sky-500 text-sm mt-2 text-white"
        >
          Ban Karo
        </button>
      </div>
      {/* another use case */}
      <div className="p-4 border">
        <h1>Score: {score}</h1>
        <button
          onClick={() => setScore(120)}
          className="px-3 py-1 rounded bg-sky-500 text-sm mt-2 text-white"
        >
          Set Score
        </button>
      </div>

      {/* another use case */}
      <div className="p-4 border">
        <h1>Count: {count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 rounded bg-sky-500 text-sm mt-2 text-white"
        >
          Increase Count
        </button>
      </div>

      {/* another use case */}
      <div className="p-4 border">
        <h1>Name: {val.name}</h1>
        <h1>isBanned: {val.isBanned.toString()}</h1>
        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className="px-3 py-1 rounded bg-sky-500 text-sm mt-2 text-white"
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default App;
