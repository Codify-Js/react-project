import React from 'react'
import InputComponent from '../../components/Header/InputComponent';

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

  calc(e) {
    console.log('RUN', e);
  }

  handleAdd() {
    if (this.state.inputValue === '') {
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }

  render() {
    console.log('thisState', this.state);
    const todoList = this.state.list;

    const itemElem = (item, index) => (
      <div key={index}>
        <span>{index + 1}{' '}</span>
        <span>{item}</span>
      </div>
    )

    const handleClick = (event) => {
      this.setState({inputValue: event.target.value});
    }

    return (
      <div>
      
        <InputComponent value={this.state.inputValue} onChange={handleClick} />
        <button disabled={!this.state.inputValue} onClick={this.handleAdd}>Add</button>
        <button onClick={(e) => this.calc(e)}>A+B</button>
        <hr/>
        <b>Todo List</b>
        {todoList.map((item, index) => itemElem(item, index))}
      </div>
    )
  }
}
