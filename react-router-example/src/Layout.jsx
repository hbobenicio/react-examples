import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Layout.css'

export default (props) => (

  <div className="Layout">
    { props.domToolbar }

    <div className="container-fluid LayoutNoPadding">
      <div className="row">
        <div className="col-sm-2">
          {props.domNavbar}
        </div>
        <div className="col-sm-10">
          <main className="LayoutMain">
            {props.children}
          </main>
        </div>
      </div>
    </div >
  </div>
)
