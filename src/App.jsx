import React from "react";
import UsePopcorn from "./05-usePopcorn";
import StarRating from "./05-usePopcorn/StarRating";

const App = () => {
  return (
    <div>
      {/* <UsePopcorn /> */}
      <StarRating maxRating={10} />
    </div>
  );
};

export default App;
