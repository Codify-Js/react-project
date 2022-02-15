import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Form, Input, Button, Radio, Space} from 'antd'
import {getQuestions} from '../../store/selectors/selectors'

const TestForm = () => {
  const [form] = Form.useForm();
  const questions = useSelector((state) => getQuestions(state));
  const [showResults, setShowResults] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [inCorrect, setIncorrect] = useState(0)
  const [resultsText, setText] = useState('')

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 8,
    },
  };

  const onSubmit = (values) => {
    const answers = Object.values(values)
    const correctCount = answers.filter(answer => !!answer.correct).length
    const incorrectCount = answers.filter(answer => !answer.correct).length

    const percent = correctCount / questions.length * 100;

    if (percent === 100) {
      setText('Вы молодец')
    } else if (percent > 50) {
      setText('Ты среднечок')
    } else {
      setText('Ты Мешок')
    }

    setCorrect(correctCount)
    setIncorrect(incorrectCount)
    setShowResults(true)
  }

  const answerComp = answer => {
    const title = answer.title
    return <Radio value={answer}>{title}</Radio>
  }

  const handleBack = () => {
    form.resetFields();
    setShowResults(false);
  }

  if (showResults) {
    return (
      <div>
        <h1>{resultsText}</h1>
        <div>
          Correct Answers: {correct}
        </div>
        <div>
          Wrong Answers: {inCorrect}
        </div>

        <Button type="primary" onClick={handleBack}>
          Back
        </Button>
      </div>
    )
  }

  return (
    <Form {...layout} form={form} onFinish={onSubmit}>
      {questions.map(q => {
        return (
          <Form.Item name={q.title} label={q.title}>
            <Radio.Group>
              {q.answers.map(answer => answerComp(answer))}
            </Radio.Group>
          </Form.Item>
      )
      })}
       
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TestForm;