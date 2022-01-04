import React from 'react'


const Header = (props) => {

  return (

    <p>The course is {props.course}</p>
  )
}

const Content = (props) =>{

  return(

    <>
    <p> Part one {props.part1} </p>
    <p> Exercise one {props.exercises1} </p>
    <p> Part two {props.part2} </p>
    <p> Exercise two {props.exercises2} </p>
    <p> Part three {props.part3} </p>
    <p> Exercise three {props.exercises3} </p>
    </>

  )

}



const Total = (props) =>{

   return(

    <p> Total is {props.exercises1+props.exercises2+props.exercises3} . </p>

   ) 

}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  

  return (

    <>
    
    <Header course={course} />
    <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} 
    exercises3={exercises3} />
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    
    </>

  )


}
export default App