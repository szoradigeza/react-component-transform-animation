import * as styles from "./app.styled";
import { useState } from "react/cjs/react.development";

function App() {
  const [animationOne, setAnimationOne] = useState(true);
  const [animationTwo, setAnimationTwo] = useState(false);
  const [hideFirst, setHideFirst] = useState(false);

  const handleClick = () => {
    setAnimationOne(!animationOne);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Test</button>
      {!hideFirst && (
        <styles.testComponent
          animate={animationOne}
          onAnimationEnd={() => {
            setAnimationTwo(true);
            setHideFirst(true);
          }}
        >
          comp1
        </styles.testComponent>
      )}
      {hideFirst && (
        <styles.testComponentTwo animate={animationTwo}>
          comp2
        </styles.testComponentTwo>
      )}
    </div>
  );
}

export default App;
