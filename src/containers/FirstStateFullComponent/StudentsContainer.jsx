import React from 'react'
import './StudentsContainer.css';
import Button from '../../components/Header/Button';
import InputNameComponent from '../../components/Header/InputNameComponent';
import InputSurnameComponent from '../../components/Header/InputSurnameComponent';
import mockStudentList from '../../mock/mockStudentList';


export default class StudentContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputNameValue:'',
            inputSurnameValue:'',
            studentFullName:'',
            studentLogo:'',
            list: mockStudentList() || [],
            cleanedList: []
        };
        this.handleInputNameChange = this.handleInputNameChange.bind(this)
        this.handleInputSurnameChange = this.handleInputSurnameChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleInputNameChange(event){
        this.setState({inputNameValue: event.target.value})
    }

    handleInputSurnameChange(event){
        this.setState({inputSurnameValue: event.target.value})
    }

    handleAdd() {
      if (this.state.inputNameValue === '') {
        alert("Required field is missing");
      } else if (this.state.inputSurnameValue === '') {
        alert("Required field is missing");
      } else {
        this.setState((state) => {
        const newStudent = {
          id: state.list.length + 1,
          fullName: `${state.inputNameValue} ${state.inputSurnameValue}`,
          logo: `${state.inputNameValue[0]}${state.inputSurnameValue[0]}`
        }

        return ({
        inputNameValue: '',
        inputSurnameValue: '',
        list: [...state.list, newStudent],
        })
        })
      }
    }

    handleDelete (event) {
      const index = parseInt(event.currentTarget.parentElement.id)
      this.setState((state)=> {
        const listToBeCleaned = [...state.list]
        listToBeCleaned.splice(index,1)
      
        return ({
          list: listToBeCleaned
        })
      
      })
  }

      render () {

          const student = (index, item) => {
            return (
            <div className="listStudent" key={index}>
              <div className="logo-name">
                  <div className="logo">{ item.logo }</div>
                  <span className="fullName">{ item.fullName }</span>
              </div>
                <Button className="button-delete" text="Remove" onClick={this.handleDelete}></Button>
            </div>
            )
          }


      return (
        <div className="student-container">
          <div className="header">
            <h1>Hogwarts School Students List</h1>
          </div>
          <hr />
          <div className="input-info">
              <InputNameComponent className="input-name" placeholder="First Name" value={this.inputNameValue} onChange={this.handleInputNameChange} />
              <InputSurnameComponent className="input-surname" placeholder="Last Name" value={this.inputSurnameValue} onChange={this.handleInputSurnameChange} />
              <Button className="button-add" text="Add" onClick={this.handleAdd}></Button>
          </div>
          <div className="listOfStudents">
              {this.state.list.map((item, index) => student (index, item))}

          </div>
         </div>
      ) 
      }
    }

