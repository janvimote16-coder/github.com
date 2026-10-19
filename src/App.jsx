import "./App.css";
function App(){
  return (
    <div className="container">
      <h1>Student Registration</h1>
      <p>Welcome to our student registration</p>
      <form>
        <input
        type="text"
        placeholder="Enter your name"
        required
        />
        
        <input
        type="email"
        placeholder="Enter your email"
        reqyired
        />
        
        <button type="submit">Register
        </button>
        
      </form>
    </div>
  )
}
export default App;