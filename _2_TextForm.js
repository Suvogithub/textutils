
//lec==13========================================>using showAlert function

import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>
    {
        // console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Upperase done","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase done","success");
    }

    //lec-9(part only)
    const handleClearText=()=>
    {
        let textclean=" ";
        setText(textclean);
        props.showAlert("cleartext done","success");
    }
    //lec-11(subscriber's code)
    const handleCopy=()=>   
    {
    let Ctext=document.getElementById("myBox")
    Ctext.select()
    navigator.clipboard.writeText(Ctext.value)
    props.showAlert("text-copied","success");
    }
     //SUBSCRIBER'S CODE {lec-11} 
     const handleExtraSpaces=()=> 
     { 
        let newText=text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("space-handled","success");
     }

    const handleOnChange=(eventobj)=>
    {
        // console.log("on change");
        setText(eventobj.target.value);
    }

    const[text,setText]=useState("ENTER THE TEXT");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
        <div className="mb-3">        
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
         color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver LowerCase</button>
       {/* lec-9 */}
       <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
       {/* subscriber's code lec-11 */}
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>     
       {/* subscriber's code lec=11 */}
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>     
       <h1>your text summary</h1>     
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length}Minutes read</p>
       <h1>Preview</h1>
       <p>{text.length>0?text:'enter something on the textbox for preview'}</p>
   </div>
</>
  )
}











// //lec==12========================================>

// import React,{useState} from 'react'

// export default function TextForm(props) {

//     const handleUpClick=()=>
//     {
//         // console.log("uppercase was clicked");
//         let newText=text.toUpperCase();
//         setText(newText);
        
//     }
//     const handleLoClick=()=>{
//         let newText=text.toLowerCase();
//         setText(newText);
//     }

//     //lec-9(part only)
//     const handleClearText=()=>
//     {
//         let textclean=" ";
//         setText(textclean);
    
//     }
//     //lec-11(subscriber's code)
//     const handleCopy=()=>   
//     {
//     let Ctext=document.getElementById("myBox")
//     Ctext.select()
//     navigator.clipboard.writeText(Ctext.value)
//     }
//      //SUBSCRIBER'S CODE {lec-11} 
//      const handleExtraSpaces=()=> 
//      { 
//         let newText=text.split(/[ ] +/);
//         setText(newText.join(" "));
//      }

//     const handleOnChange=(eventobj)=>
//     {
//         // console.log("on change");
//         setText(eventobj.target.value);
//     }

//     const[text,setText]=useState("ENTER THE TEXT");

//   return (
//     <>
//     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
//        <h1>{props.heading}</h1>
//         <div className="mb-3">        
//          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
//          color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
//         </div>
//        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
//        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver LowerCase</button>
//        {/* lec-9 */}
//        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
//        {/* subscriber's code lec-11 */}
//         <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>     
//        {/* subscriber's code lec=11 */}
//        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//     </div>
    
//     <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>     
//        <h1>your text summary</h1>     
//        <p>{text.split(" ").length} words and {text.length} characters</p>
//        <p>{0.008*text.split(" ").length}Minutes read</p>
//        <h1>Preview</h1>
//        <p>{text.length>0?text:'enter something on the textbox for preview'}</p>
//    </div>
// </>
//   )
// }






// //lec==11(clearText  code)===============================>

// import React,{useState} from 'react'

// export default function TextForm(props) {

//     const handleUpClick=()=>
//     {
//         // console.log("uppercase was clicked");
//         let newText=text.toUpperCase();
//         setText(newText);
//     }
//     const handleLoClick=()=>{
//         let newText=text.toLowerCase();
//         setText(newText);
//     }

//     //lec-9(part only)
//     const handleClearText=()=>
//     {
//         let textclean=" ";
//         setText(textclean);
    
//     }
//     //lec-11(subscriber's code)
//     const handleCopy=()=>   
//     {
//     let Ctext=document.getElementById("myBox")
//     Ctext.select()
//     navigator.clipboard.writeText(Ctext.value)
//     }
//      //SUBSCRIBER'S CODE {lec-11} 
//      const handleExtraSpaces=()=> 
//      { 
//         let newText=text.split(/[ ] +/);
//         setText(newText.join(" "));
//      }

//     const handleOnChange=(eventobj)=>
//     {
//         // console.log("on change");
//         setText(eventobj.target.value);
//     }

//     const[text,setText]=useState("ENTER THE TEXT");

//   return (
//     <>
//     <div>
//        <h1>{props.heading}</h1>
//         <div className="mb-3">        
//          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div>
//        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
//        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver LowerCase</button>
//        {/* lec-9 */}
//        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
//        {/* subscriber's code lec-11 */}
//         <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>     
//        {/* subscriber's code lec=11 */}
//        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//     </div>
    
//     <div className="container my-3">     
//        <h1>your text summary</h1>     
//        <p>{text.split(" ").length} words and {text.length} characters</p>
//        <p>{0.008*text.split(" ").length}Minutes read</p>
//        <h1>Preview</h1>
//        <p>{text}</p>
//    </div>
// </>
//   )
// }






//                         //lec==9(clearText  code)========>

// import React,{useState} from 'react'

// export default function TextForm(props) {

//     const handleUpClick=()=>
//     {
//         // console.log("uppercase was clicked");
//         let newText=text.toUpperCase();
//         setText(newText);
//     }
//     const handleLoClick=()=>{
//         let newText=text.toLowerCase();
//         setText(newText);
//     }

//     //lec-9(part only)
//     const handleClearText=()=>
//     {
//         let textclean=" ";
//         setText(textclean);
    
//     }
//     const handleOnChange=(eventobj)=>
//     {
//         // console.log("on change");
//         setText(eventobj.target.value);
//     }

//     const[text,setText]=useState("ENTER THE TEXT");

//   return (
//     <>
//     <div>
//        <h1>{props.heading}</h1>
//         <div className="mb-3">        
//          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div>
//        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
//        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver LowerCase</button>
//        {/* lec-9 */}
//        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
//     </div>
    
//     <div className="container my-3">     
//        <h1>your text summary</h1>     
//        <p>{text.split(" ").length} words and {text.length} characters</p>
//        <p>{0.008*text.split(" ").length}Minutes read</p>
//        <h1>Preview</h1>
//        <p>{text}</p>
//    </div>
// </>
//   )
// }








//                          {/* lec-8 */}================>
//  import React,{useState} from 'react'

// export default function TextForm(props) {

//     const handleUpClick=()=>
//     {
//         // console.log("uppercase was clicked");
//         let newText=text.toUpperCase();
//         setText(newText);
//     }
//     const handleLoClick=()=>{
//         let newText=text.toLowerCase();
//         setText(newText);
//     }

//     const handleOnChange=(eventobj)=>
//     {
//         // console.log("on change");
//         setText(eventobj.target.value);
//     }

//     const[text,setText]=useState("ENTER THE TEXT");

//   return (
//     <>
//     <div>
//        <h1>{props.heading}</h1>
//         <div className="mb-3">        
//          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div>
//        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
//        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver LowerCase</button>
//     </div>
    
//     <div className="container my-3">     
//        <h1>your text summary</h1>     
//        <p>{text.split(" ").length} words and {text.length} characters</p>
//        <p>{0.008*text.split(" ").length}Minutes read</p>
//        <h1>Preview</h1>
//        <p>{text}</p>
//    </div>
// </>
//   )
// }







// //lec-7(code -2//STATE)=====================================>
// import React,{useState} from 'react'

// export default function TextForm(props) {

//     const handleUpClick=()=>
//     {
//         // console.log("uppercase was clicked");
//         let newText=text.toUpperCase();
//         setText(newText);
//     }

//     const handleOnChange=(eventobj)=>
//     {
//         // console.log("on change");
//         setText(eventobj.target.value);
//     }
//     const[text,setText]=useState("ENTER THE TEXT");

//   return (
//     <div>
//        <h1>{props.heading}</h1>
//         <div className="mb-3">        
//          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div>
//        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
//     </div>
    
//   )
// }






//lec-7(code-1)======================================>
// import React from 'react'

// export default function TextForm(props) {   
//   return (
//     <div>
//     <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <textarea className="form-control"id="myBox"rows="8"></textarea>
//        </div>
//        <button className="btn btn-primary mx-2">Convert to Uppercase</button>
//     </div>
//   )
// }
