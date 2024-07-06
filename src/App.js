import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters";
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (cId) => {
    console.log("Button", cId, "deleted.");

    let counters = this.state.counters.filter((c) => c.id !== cId);
    let len = counters.length;

    for (let i = 0; i < len; i++) {
      counters[i].id = i + 1;
    }

    this.setState({ counters });
  };

  handleDec = (counter) => {
    let counters = this.state.counters;
    if (counters[counter.id - 1].value === 0) return;
    counters[counter.id - 1].value--;
    this.setState({ counters });
    console.log(counters[counter.id - 1]);
  };

  handleInc = (counter) => {
    let counters = this.state.counters;
    counters[counter.id - 1].value++;
    this.setState({ counters });
    console.log(counters[counter.id - 1]);
  };

  handleAddButton = () => {
    let temp = this.state.counters;
    let len = this.state.counters.length;

    for (let i = 0; i < len; i++) {
      temp[i].id = i + 1;
    }

    temp[len] = {
      id: len + 1,
      value: 0,
    };
    this.setState({ temp: this.state.counters });
  };

  handleReset = () => {
    let len = this.state.counters.length;
    for (let i = 0; i < len; i++) this.state.counters[i].value = 0;
    this.setState(this.state.counters);
  };

  render(){
    return (
      <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(c=>c.value > 0).length} />
          <main className="container">
             <Counters onInc={this.handleInc} onDec={this.handleDec}
             onReset={this.handleReset} onDelete={this.handleDelete}
             onAdd={this.handleAddButton} counters={this.state.counters}/>
          </main>
      </React.Fragment>
      
    );
    }
}

export default App;
