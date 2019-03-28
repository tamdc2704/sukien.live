import React from 'react'

class Exam extends React.Component {
  render() {
    console.log(this.props)
    const {question, options} = this.props.data.questions[0]
    return (
      <div>
        <div className="question">{question}</div>

        <div className="options">
          <ul>
            {
              options.map(({key, text}) => <li>{`${key}) ${text}`}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Exam
