import React from 'react'

import Button from '../../components/Button/Button';
import InputComponent from '../../components/Input/InputComponent';
import CheckBoxComponent from '../../components/CheckBox/CheckboxComponent';
import { todolist } from '../../Mock/mock';

import './TodoContainer.css'


export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    // default state values
    this.state = {
      search: '',
      inputValue: '',
      list: todolist() || [],
      checkedList: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleAdd() {
    if (this.state.inputValue === '') {
      return;
    }

    this.setState((state) => {
      const newItem = {
        id: state.list.length + 1,
        title: state.inputValue
      }

      return ({
        list: [...state.list, newItem],
        inputValue: ''
      })
    });
  }

  handleDone() {

  }

  handleCheck(e, item) {
    const targetItem = this.state.list.find(listItem => listItem.id === item.id)

    if (e.target.checked) {
      this.setState((state) => ({
        checkedList: [...state.checkedList, targetItem]
      }))
    } else {
      
      this.setState((state) => {
        const updatedList = [...state.checkedList]
        updatedList.splice(updatedList.indexOf(targetItem), 1)

        return ({
          checkedList: updatedList
        })
      })
    }
  }

  render() {
    const search = this.state.search;
    
    const todoList = this.state.list.filter(item => {
      const title = item.title.toLowerCase();
      const s = search.toLowerCase();
      return title.includes(s)
    });

    const checkedList = this.state.checkedList;


    const itemElem = (item, index) => {
      return (
        <div key={item.id} className="list-block">
          <div className="list-block_text">
            <CheckBoxComponent handleCheck={(e) => this.handleCheck(e, item)} />
            <span className="text">{`${item.id}. ${item.title}`}</span>
          </div>
          <div className="list-block_actions">
            <Button text="Done" onClick={this.handleDone}/>
          </div>
        </div>
    )}

    return (
      <div className="container">
        <div className="container-header">
          <span>Todo List{' '}</span> 
          <span>All: {todoList.length}{' '}</span>
          <span>Selected: {checkedList.length}{' '}</span>
        </div>
        <div>
          <InputComponent placeholder={'Search'} value={this.state.search} onChange={this.handleSearchChange}/>
        </div>
        <InputComponent placeholder={'Title'} value={this.state.inputValue} onChange={this.handleInputChange}/>
        <Button text="Add" onClick={this.handleAdd}/>
        {todoList.map((item, index) => itemElem(item, index))}
      </div>
    )
  }
}
