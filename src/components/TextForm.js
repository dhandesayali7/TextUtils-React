import React,{useState} from "react";



export default function TextForm(props) {

    const handleUpClick = () =>{
        //console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase !","success");
    }
    const handleLoClick = () =>{
      //console.log("Uppercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase !","success");
  }
  const handleClearClick = () =>{
    //console.log("Uppercase was clicked " + text);
    let newText = '';
    setText(newText)
    props.showAlert("All Clear !","success");
}
        const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
      let text = document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("  Copied to Clipboard  !", "success");
    }
    const handleExtraSpaces = () =>{
      let newText = text.split (/[ ]+/) ;
      setText(newText.join (''));
      props.showAlert("   Extra Spaces removed  !", "success");
    }
    const  handleItalic = ()=>{
      console.log("Italic"+ text);
      let mtext = document.getElementById('mybox');
     mtext.style.fontStyle= 'Italic';
     props.showAlert("  Italic !", "success");
    }
    const  handleBold = ()=>{
      console.log("Bold"+ text);
      let mtext = document.getElementById('mybox');
     mtext.style.fontStyle= 'Bold';
    }

const [text ,setText] = useState ("");
  
return (
  <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3" >
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',
      color:props.mode==='dark'? 'white':'#042743'}}id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove ExtraSpaces</button>
      <button className="btn btn-primary mx-2" onClick={handleItalic}> Italic</button>
      <button className="btn btn-primary mx-2" onClick={handleBold}> Bold</button>
      
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}}>
      <h3>Your text summary</h3>
      <p>
        
        {text.split(" ").length}words and {text.length}characters
        </p>
        <p>
          {0.008*text.split(" ").length} Minutes read
        </p>
        <h3 style={{color:props.mode==='dark'? 'white':'#042743'}}>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        <p>

        </p>
    </div>
    </>
  );
}
/*const  handleitalic = ()=>{
  console.log("italic"+ text);
  var mtext = document.getElementById('mybox');
 mtext.style.fontStyle= 'italic';
}
text.length>0 ? text.trim().split(" ").length : 0

*/