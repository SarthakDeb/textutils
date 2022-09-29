import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Upper Case Clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    // console.log("Upper Case Clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value)
  }
   const firstcaps= ()=>{
    let words = text.split(" ").map(word => {
        let frstlet = word.slice(0, 1);
        let rest = word.slice(1);
        frstlet = frstlet.toUpperCase();
        return `${frstlet}${rest}`;
    })
  setText(words.join(" "))
}
  const [text, setText] = useState('');
  return (
          <>
            <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2 className='my-3'> {props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style={props.style} value= {text} onChange ={handleOnChange}id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className = "btn btn-primary mx-2 my-3" onClick={handleUpClick}>{props.button1}</button>
            <button className = "btn btn-primary mx-2 my-3" onClick={handleLoClick}>{props.button2}</button>
            <button className = "btn btn-primary mx-2 my-3" onClick={firstcaps}>{props.button3}</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
              <h4>Summary of your text</h4>
              <p>Words {text.split(" ").length} and {text.length} Characters</p>
              <br/>
              <h6>Preview</h6>
              <p> {text} </p>
            </div>
           </> 
  )
}
