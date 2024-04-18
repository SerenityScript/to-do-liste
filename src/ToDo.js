import { Component } from "react";
import Swal from 'sweetalert2';
import iconTrash from './trash.png';
import iconCheck from './check.png';

export class ToDo extends Component {
  state = {
    userInput: '',
    toDoList: [],
  }

  onChangeEvent(e) {
    this.setState({ userInput: e })
  }

  addItem(input) {
    if (input === '') {
      Swal.fire("Was ist die nächste Aufgabe?");
    }
    else {
    let listArray = this.state.toDoList;
      listArray.push(input);
    this.setState({ toDoList: listArray, userInput: '' })}
  }

  deleteItem(index) {
    let listArray = this.state.toDoList;
    listArray.splice(index, 1);
    this.setState({ toDoList: listArray });
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="FormCont">
        <div className="Input">
          <input type="text"
            placeholder="neue Aufgabe..."
            onChange={(e) => { this.onChangeEvent(e.target.value) }}
            value={this.state.userInput}
          />
          <button className="Add" onClick={() => this.addItem(this.state.userInput)}>+</button>
        </div>
        <ul>
          {this.state.toDoList.map((item,index) => (
            <li key={index} onClick={this.crossedWord} >
              <img  src={iconCheck} alt="icon" width='20px' />
              {item}
              <button className="DeleteBTN" onClick={() => this.deleteItem(index)} >
                <img src={iconTrash} alt="icon" width='15px' />
              </button>
            </li>
          ))}
        </ul>
      </form>
    )
  }
}