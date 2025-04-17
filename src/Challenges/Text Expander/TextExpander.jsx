import React from "react";
import "./textExpander.css";

function TextExpander2() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander buttonInline={false} className="box">
        Space mission have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

const TextExpander = () => {
  return <div>TODO</div>;
};

export default TextExpander;
