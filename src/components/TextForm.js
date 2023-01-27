import React, {useState} from "react";

export default function TextForm(props) {
    
    const uppercase = () => {
        let newText = text.toUpperCase()
        settext(newText)
        props.showAlert("Converted to Uppercase", "success")
    }


    const lowercase = () => {
        let newText = text.toLowerCase()
        settext(newText)
        props.showAlert("Converted to Lowercase", "success")
    }


    const clearText = () => {
        settext("")
        props.showAlert("Clear text", "success")
    }


    const copyText = () => {
        let Text = document.getElementById("myBox")
        Text.select()
        navigator.clipboard.writeText(Text.value)
        props.showAlert("Copy text", "success")
    }
    
    
    const tochange = (event)=>{
        settext(event.target.value)
    }
    
    const [text, settext] = useState("Enter text here")

    return (
        <>
        <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={tochange} 
                style={{backgroundColor:props.mode==="light"?"white":"black", color:props.mode==="dark"?"white":"black"}}>

                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={uppercase}>To uppercase</button>
            <button className="btn btn-primary mx-2" onClick={lowercase}>To lowercase</button>
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>

        <div className="container my-3">
            <h5>Your Text Summary</h5>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
        </>
    );
}
