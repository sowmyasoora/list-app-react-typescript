import * as React from "react";

function Action (props: any) {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Pick One
      </button>
    </div>
  );
};

export default Action;
