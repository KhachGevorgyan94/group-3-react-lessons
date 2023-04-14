const QuestionModal = ({closeModal})=>{
  return <div>
    <h1> Are you sure to log out from project??</h1>

    <button onClick={()=>closeModal(false)}>Cancel</button>
    <button>Accept</button>
  </div>
}
export default QuestionModal