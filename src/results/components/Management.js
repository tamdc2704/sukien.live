import React from 'react'
// import Result from './Result'

export default class Management extends React.Component {

  handleNxt = () => this.props.nextQ(1)
  handlePre = () => this.props.nextQ(-1)

  render() {
    const { currentIndex, results, data: { questions, answers } } = this.props
    console.log(results)
    return(
      <div>
        <Result answers={answers} results={results} />
        <div className="group-button">
            <button onClick={this.handlePre} disabled={currentIndex === 0}>Previous question</button>
            <button onClick={this.handleNxt} disabled={currentIndex === questions.length - 1} >Next question</button>
        </div>
      </div>
    ) 
  }
}