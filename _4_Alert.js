            //lec-13(capitalize 's' in success)=======================>
import React from 'react'

export default function Alert(props) {
  const capitalize =(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }

  return (
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
  )
}






      //l-13(alert and props alert)==========================>
// import React from 'react'

// export default function Alert(props) {
//   return (
//      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//          <strong>{props.alert.type}</strong>:{props.alert.msg}
//          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//     </div>
    
//   )
// }
