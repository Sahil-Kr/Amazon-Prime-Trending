import React from "react";

const Navigation = (props) => {
  return (
    <div id="navigation">
      <button
        onClick={props.prev}
        data-testid="button-prev"
        disabled={props.isFirst}
      >
        Prev
      </button>
      <button
        onClick={props.restart}
        data-testid="button-restart"
        disabled={props.isFirst}
      >
        Restart
      </button>
      <button
        onClick={props.next}
        data-testid="button-next"
        disabled={props.isLast}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
