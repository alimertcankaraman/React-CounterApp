import React, { Component } from "react";

export default class Counter extends Component {
  /* state = {
    value: this.props.counterObject.value,
    imageUrl: "https://picsum.photos/100",
    tags: ["tag1", "tag2", "tag3"],
  };*/

  styles = {
    fontSize: 13,
    fontWeight: "bold",
  };

  /* constructor() {
    super();
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }*/

  //const { imageUrl } = this.state;     <img src={imageUrl} alt="" />
  render() {
    const { onInc, onDec, onDelete, counterObject } = this.props;
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.props.counterObject.id +
            ". Count Value: " +
            this.formatCount() +
            " "}
        </span>

        <button
          onClick={() => onInc(counterObject)}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm m-2"
        >
          Inc
        </button>

        <button
          onClick={() => onDec(counterObject)}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm m-2"
        >
          Dec
        </button>

        <button
          onClick={() => onDelete(counterObject.id)}
          style={{ fontSize: 15 }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  /* {this.renderTags()}
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }
*/
  getBadgeClasses() {
    const { counterObject } = this.props;
    let classes = "badge m-2 badge-";
    classes += counterObject.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counterObject;
    return count === 0 ? "Zero" : count;
  }
}
