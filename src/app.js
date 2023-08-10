import React, {useState} from 'react'
import "./index.css"

function App(props){
   const  [result, setResult] = useState('')
   const handleClick = (e) => {
        setResult(result.concat(e.target.name))
   }

   const backspace = (e) => {
    setResult(result.slice(0, -1))
   }

   const clear = (e) => {
        setResult("")
   }

   const calculate = () => {
    try{
        if(result.length > 0){
            setResult(eval(result).toString())
        }
        else{
            setResult("")
        }
    }
    catch{
        setResult("error")
    }
      
   }

    return <> 
            <h1>Calculate</h1>
            <div className="container">
                <form action="">
                    <input type="text" value = {result} />
                </form>
                <div className="keypad">
                    <div className="row">
                        <button id= "backspace" onClick={backspace} className="operator">Clear</button>
                        <button id='clear' onClick={clear} className="operator">C</button>
                        <button name="%" onClick={handleClick} className="operator">&divide;</button>
                    </div>
                    <div className="row">
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button>
                        <button name="9" onClick={handleClick}>9</button>
                        <button name="*" onClick={handleClick} className="operator">&times;</button>
                    </div>
                    <div className="row">
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                        <button name="-" onClick={handleClick} className="operator">-</button>
                    </div>
                    <div className="row">
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                        <button name="+" onClick={handleClick} className="operator">+</button>
                    </div>
                    <div className="row">
                        <button name="." onClick={handleClick}>.</button>
                        <button name="0" onClick={handleClick}>0</button>
                        <button name="=" onClick={calculate} id='equalTo'>=</button>
                    </div>
                    
                    
                    
                    
                    
                </div>
            </div>
            
            </>
}

export default App