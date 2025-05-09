import React  from "react";

export default function About(props) {
//  const [myStyle,setmyStyle]= useState(   {
//     color:'white
//     backgroundColor:'black'
//    })
 let myStyle ={
  color : props.mode === 'dark'? 'white':'#042743',
  backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',

 }

  return (
    <div className="container " style={{  color : props.mode === 'dark'? 'white':'#042743'}}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             Textutils gives you a wat to analyze your text quikly and efficiently. Be it word count, character count .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant character count & word count statistics for a text .Textutils reports the number of words and characters . This it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This word counter software works in any web browsers such as Chrome , Firefox , Internet Explorer , Safari , Opera. It suits to count characters in facebook , blog , books , excel document , pdf download ,essays,etc.
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}
