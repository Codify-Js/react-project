import React from 'react'
import AddButton from '../../components/AddButton';
import InputComponent from '../../components/Header/InputComponent';
import './TodoContainer.css'


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
      <div className='list' key={index} className="list-block">
        <span className="list-number">{index + 1}{'.'+'  '}</span>
        <span className="text-list">{item}</span>
        <button className="done-btn" onClick={this.handleDone}>Done</button>
      </div>

    )

    return (
      <div>
      <div class="header"><b>Todo List</b></div className="main-block">

      <InputComponent value={this.state.inputValue} onChange={this.handleInputChange} />
        {/* <button disabled={!this.state.inputValue} onClick={this.handleAdd} className="btn">Add</button>
        <hr/> */}
      <AddButton text="Add" onClick={this.handleAdd} />
        {todoList.map((item, index) => itemElem(item, index))}
      </div>
    )
  }
}
