import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
const lower2 = word.toLowerCase();
return lower2.charAt(0).toUpperCase() + lower2.slice(1);
    }
  return (
    <div style={{height : '50px'}}>
    { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
</div>}
</div>
  )
}

export default Alert
