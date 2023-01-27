import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`container my-3 alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.typ}: </strong>{props.alert.msg}
</div>
  )
}
