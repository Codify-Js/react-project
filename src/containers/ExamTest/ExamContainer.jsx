import React, {useState} from 'react'
import Questions from './Questions';
import Answers from './Answers';
import {Steps, Button, Form} from 'antd';
import './style.scss';

export default function ExamContainer() {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([{id: 0, value: ''}])

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value)
  }

  const handleAddNew = () => {
    setAnswers([...answers, {id: answers.length, value: ''}])
  }

  const handleAnswerChange = (e, id) => {
    const updatedAnswers = [...answers];
    const targetAnswer = updatedAnswers.find(a => a.id === id);
    const index = updatedAnswers.indexOf(targetAnswer)
    
    updatedAnswers[index].value = e.target.value

    setAnswers(updatedAnswers);
  }

  const handleRemove = (id) => {
    const updatedAnswers = [...answers];
    const filtered = updatedAnswers.filter(a => a.id !== id);
    
    setAnswers(filtered);
  }

  const steps = [
    {
      title: 'Question',
      content: <Questions value={question} onChange={handleQuestionChange}/>,
    },
    {
      title: 'Answer',
      content: <Answers 
                  answers={answers}
                  handleAddNew={handleAddNew} 
                  handleChange={handleAnswerChange}
                  onRemove={handleRemove}
                />,
    },
    {
      title: 'Congrats',
      content: <div>Congratulations !!!</div>,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = () => {
    form.submit();
  }

  const onSubmit = (values) => {
    console.log(values);
  } 

  return (
    <div className="step-container">
      <div>Current: {current}</div>
      <div className="step-container_header">
        <Steps current={current} >
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      <div className="step-container_content">
        {steps[current].content}
      </div>
      
      <div className="step-container_actions">
        {current > 0 && <Button type="primary" ghost onClick={prev}>Prev</Button>}
        {current < steps.length - 1 && <Button type="primary" onClick={next}>Next</Button>}
        {current >= steps.length - 1 && <Button type="primary" onClick={onFinish}>Finish</Button>}
      </div>
    </div>
  )
}