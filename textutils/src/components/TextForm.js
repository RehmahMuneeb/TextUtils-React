import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    console.log("upper case was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase!" , "success")
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const lower = () => {
    let mytext = text.toLowerCase();
    setText(mytext);
    props.showalert("Converted to lowercase!" , "success")
  };
  const clear =()=>{
    let newtext = ""
    setText(newtext);
    props.showalert("Text Cleared" , "success")
  }
   const Reversed =()=>{
    let splitword= text.split("")
    let reverseword = splitword.reverse("")
    let joinedword =reverseword.join("")
    let newtext = joinedword
    setText(newtext);
    props.showalert("Text Reversed" , "success")
   }
   const copy =()=>{
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value) ;
    document.getSelection().removeAllRanges()
    props.showalert("Text Copied" , "success")
   }
   const extraspaces=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra Spaces Removed" , "success")
   }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2 className="mb-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="mybox"
          rows="6"
          style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
        Convert to upperCase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={lower}>
        Convert to lowerCase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clear}>
        Clear Text
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={Reversed}>
        Reverse Text
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copy}>
        Copy Text
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extraspaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{
         return element.length !== 0
      }).length} <b>words</b> and {text.length} <b>characters</b></p>
      <p> {0.008 * text.split(" ").filter((element)=>{
         return element.length !== 0
      }).length} <b>Minutes Read</b></p>
      {/* aik min mn max 125 words parh skte hain yani 1/125 = 0.008 seconds ab hm hr word ki length ko 0.008 k sth * kr dein gy tu hmare pass time aa jaye ga k hm ne kitne time mn aik word parha h */}
      <h2> Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
