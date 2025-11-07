
import './App.css'

import Component from './return_type'
import State from './return_type/states'

function App() {

  return (
    <>
      <Component name="sanya" age={20} >
        <div>hello</div> {/*//child of Component */}
      </Component>
      <State/>
    <div>React & Typescript</div>
    </>
  )
}

export default App
