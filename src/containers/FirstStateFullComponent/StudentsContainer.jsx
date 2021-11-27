import React from 'react'
import './StudentsContainer.css';
import Button from '../../components/Header/Button';
import InputNameComponent from '../../components/Header/InputNameComponent';
import InputSurnameComponent from '../../components/Header/InputSurnameComponent';

export default class StudentContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputNameValue:'',
            inputSurnameValue:'',
            studentFullName:'',
            list:[]
        };
        // const fullName = inputNameValue + inputSurnameValue
        this.handleInputNameChange = this.handleInputNameChange.bind(this)
        this.handleInputSurnameChange = this.handleInputSurnameChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    handleInputNameChange(event){
        this.setState({inputNameValue:event.target.value})
    }

    handleInputSurnameChange(event){
        this.setState({inputSurnameValue:event.target.value})
    }

    handleAdd() {
        if (this.state.inputNameValue === '' && this.state.inputSurnameValue === '') {
          alert("Type in student's name and surname");
          return;
        }
        this.setState((state) => ({
          
          inputNameValue: '',
          inputSurnameValue: '',
          list: [...state.list, state.fullName],
        }));
      }

      render (){
          const studentList = this.state.list;
          // const studentLogo = this.state.inputNameValue.charAt(0) + this.state.inputSurnameValue.charAt(0)
          // const studentFullName = this.state.inputNameValue + this.state.inputSurnameValue
          // const studentName = this.state.inputNameValue
          // const studentSurname = this.state.inputSurnameValue

          const student = (index, studentName, studentSurname) => {
            <div key={index}>
            <div>{ studentName }</div>
            <span>{ studentSurname }</span>
            </div>
          }


      return (
        <div class="student-container">
          <div class="header"><h1>Hogwarts School Students List</h1></div>
          <div class="add-new-student">
            <div class="input-info">
            <InputNameComponent class="input-name" value={this.state.inputNameValue} onChange={this.state.handleInputNameChange} />
            <InputSurnameComponent class="input-surname" value={this.state.inputSurnameValue} onChange={this.state.handleInputSurnameChange} />
            </div>
            <Button class="button-add" text="ADD" onClick={this.state.handleAdd}></Button>
          </div>
          <div>
            <ul>
              <li> {studentList.map((index, studentName, studentSurname) => student (index,studentName, studentSurname))}</li>
            </ul>
          </div>
         
        </div>

        

) 
}
}

