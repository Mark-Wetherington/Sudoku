import Title from "./Components/Title";
import Game from "./Components/Game/Game";

function App() {
  return (
    <>
      <Title />
      <Game />
    </>
  );
}

export default App;

/* To Do:
Refactor block with nth-child pseudo class
Make it look nice
Add submission and reset modals
Make stateful attempt array  ->  <Cell ... onChange={(value) => handleAttempt(idx, value)}>
Move cell style logic to Cell.js
Add tests
Add loading
*/
