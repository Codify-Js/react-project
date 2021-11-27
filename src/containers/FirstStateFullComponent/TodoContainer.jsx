import React from 'react'
import InputComponent from '../../components/Header/InputComponent';
import  './TodoContainer.css'

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    // default state values
    this.state = {
      inputValue: '',
      list: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleAdd() {
    if (this.state.inputValue === '') {
      return;
    }
    this.setState((state) => ({
      list: [...state.list, state.inputValue],
      inputValue: ''
    }));
  }

  render() {
    const todoList = this.state.list;

    const itemElem = (item, index) => (
      <div key={index}>
        <span>{index + 1}{' '}</span>
        <span>{item}</span>
      </div>
    )

    return (
      <div>
      
        <InputComponent value={this.state.inputValue} onChange={this.handleInputChange} />
        <b className="b">ToDo List</b>
        <button disabled={!this.state.inputValue} onClick={this.handleAdd} className="btn">Add</button>
        <hr/>
        {todoList.map((item, index) => itemElem(item, index))}
      </div>
    )
  }
}
