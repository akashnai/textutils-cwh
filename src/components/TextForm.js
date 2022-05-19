import React, {useState} from 'react'           


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
    }

    const handleTitleClick = () => {
        let newtext = text.charAt(0).toUpperCase()
setText(newtext + text.slice(1,text.length));
        console.log(newtext);
    }


    const [text,setText] = useState('Enter text here')
    // text = "new text";  //wrong way
    // setText("new text");  //correct way
  return (
      <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-success mx-2" onClick={handleTitleClick}>Title First letter</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length } and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in textbox above to preview here'}</p>
    </div>
    </>
  )
}