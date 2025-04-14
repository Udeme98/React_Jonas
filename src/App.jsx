import React from "react";
import UsePopcorn from "./05-usePopcorn";
import StarRating from "./05-usePopcorn/StarRating";

const App = () => {
  return (
    <div>
      {/* <UsePopcorn /> */}
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating
        maxRating={5}
        size={25}
        color="purple"
        className="test"
        defaultRating={3}
      />
    </div>
  );
};

export default App;
