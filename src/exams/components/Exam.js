import React from 'react'

class Exam extends React.Component {
  render() {
    const {
      testData: {question, options, id},
      choose
    } = this.props
    console.log('render exam')
    return (
      <div>
        <div className="question">{question}</div>

        <div className="options">
          <ul>
            {
              options.map(({key, text}) => <li key={key} onClick={() => choose([id, key, null])}>{`${key}) ${text}`}</li>)
            }
          </ul>
        </div>
        
      </div>
    )
  }
}

export default Exam
