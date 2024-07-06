import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onAdd, onDec, onDelete, onInc, counters } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          style={{ fontSize: 15 }}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>

        <button
          onClick={onAdd}
          style={{ fontSize: 15 }}
          className="btn btn-danger btn-sm m-2"
        >
          Add
        </button>

        {counters.map((cs) => (
          <Counter
            key={cs.id}
            onDelete={onDelete}
            onInc={onInc}
            onDec={onDec}
            selected={true}
            counterObject={cs}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
