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
    this.setState({ inputValue: event.target.value });
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

  handleDone() {

  }

  render() {
    const todoList = this.state.list;

    const itemElem = (item, index) => (
      <div key={index} className="list-block">
        <div className="list-block_text">
          <span className="text">{`${index+1}. ${item}`}</span>
        </div>
        <div className="list-block_actions">
          <AddButton text="Done" onClick={this.handleDone}/>
        </div>
      </div>
    )

    return (
      <div className="container">
        <div className="container-header">Todo List</div>
        <InputComponent value={this.state.inputValue} onChange={this.handleInputChange}/>
        <AddButton text="Add" onClick={this.handleAdd}/>
        {todoList.map((item, index) => itemElem(item, index))}
      </div>
    )
  }
}
