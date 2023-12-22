


//lec=12(improving dark mode)=================>
import React from 'react'
import PropTypes from 'prop-types' //(impt)
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    // bg-body-tertiary
    <nav className={`navbar navbar-expand-lg navbar  bg-${props.mode} `}>
  <div className="container-fluid" >
    <NavLink className="navbar-brand" style={{color:props.mode==='dark'?'white':'black'}} to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:props.mode==='dark'?'white':'black'}} aria-current="page" to="/">Home</NavLink>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{color:props.mode==='dark'?'white':'black'}} to="/about">{props.aboutText}</NavLink>
        </li>
      </ul>
     
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode}role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.inform}</label>
    </div>
    </div>
  </div>

</nav> 
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string
}
//default props    //if we cant pass any value to props then following default value will be shown
Navbar.defaultProps={
    title:'default-props-title',
    aboutText:'defult-props-about'
}





// //lec=12(improving dark mode)=================>
// import React from 'react'
// import PropTypes from 'prop-types' //(impt)

// export default function Navbar(props) {
//   return (
//     // bg-body-tertiary
//     <nav className={`navbar navbar-expand-lg navbar  bg-${props.mode} `}>
//   <div className="container-fluid" >
//     <a className="navbar-brand" style={{color:props.mode==='dark'?'white':'black'}} href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent" >
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
//         <li className="nav-item">
//           <a className="nav-link active" style={{color:props.mode==='dark'?'white':'black'}} aria-current="page" href="/">Home</a>

//         </li>
//         <li className="nav-item">
//           <a className="nav-link" style={{color:props.mode==='dark'?'white':'black'}} href="/">{props.aboutText}</a>
//         </li>
//       </ul>
//       {/* <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//       <input className="form-check-input" type="checkbox" onClick={props.toggleMode}role="switch" id="flexSwitchCheckDefault"/>
//       <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.inform}</label>
//     </div>
//     </div>
//   </div>

// </nav> 
//   )
// }

// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     abouttext:PropTypes.string
// }
// //default props    //if we cant pass any value to props then following default value will be shown
// Navbar.defaultProps={
//     title:'default-props-title',
//     aboutText:'defult-props-about'
// }







//lec-6(code-2->proptypes)=====================================>

// import React from 'react'
// import PropTypes from 'prop-types' //(impt)

// export default function Navbar(props) {
//   return (
//     // bg-body-tertiary
//     <nav className={`navbar navbar-expand-lg navbar  bg-${props.mode}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>

//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">{props.aboutText}</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//     </div>
//   </div>

// </nav> 
//   )
// }

// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     abouttext:PropTypes.string
// }
// //default props    //if we cant pass any value to props then following default value will be shown
// Navbar.defaultProps={
//     title:'default-props-title',
//     aboutText:'defult-props-about'
// }





     
//                           //lec-6(code-1)
// import React from 'react'

// export default function Navbar(props) {
//   return (

//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>

//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">{props.aboutText}</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>

// </nav> 
//   )
// }



