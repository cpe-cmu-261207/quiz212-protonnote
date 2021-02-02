import { useState } from "react";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  const [myCount, setMyCount] = useState(0);

  function addp(event) {
    event.preventDefault();
    var count = myCount;
    setMyCount(count + 1);
  }
  function addd(event) {
    event.preventDefault();
    var count = myCount;
    setMyCount(count - 1);
  }
  function reset(event) {
    event.preventDefault();
    setMyCount(0);
  }
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{myCount}</p>
        <button onClick={addd}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={addp}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
