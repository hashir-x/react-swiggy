import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100' style={{backgroundColor:"rgb(2, 5,12"}}>
        <div className='w-75 d-flex justify-content-around pt-5 pb-5'>
          <div>
            <div className='d-flex align-items-center'>
              <img width={"30px"} style={{zIndex:"1"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAACVCAYAAABSOXQiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTEwLTAyVDEyOjQ1OjU5KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEwLTAyVDEyOjQ1OjU5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMC0wMlQxMjo0NTo1OSswNTozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMTk3YjE1Mi1lZmQ0LTVlNGUtOTRjMS00NWE3ZGIzYTM0OGMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWRkODQ3YS1mNzBiLTIxNDYtYWI3Zi0wMGVkMmEyNTIzZTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNjIyNWVhNi00YzI4LWE2NDYtYjYyYy05MGQ2MDUzYTE2MWYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ2MjI1ZWE2LTRjMjgtYTY0Ni1iNjJjLTkwZDYwNTNhMTYxZiIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0wMlQxMjo0NTo1OSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMTk3YjE1Mi1lZmQ0LTVlNGUtOTRjMS00NWE3ZGIzYTM0OGMiIHN0RXZ0OndoZW49IjIwMjMtMTAtMDJUMTI6NDU6NTkrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz79u6ZfAAAMlUlEQVR4nO2dX0xUVx7HT8FMRmWnnVUYYngYIYFhLbQUs5BWNq0xsoqJUH2RbcAHxQf/YdPYoLGr3co+tNXwoCYSk1LbKX1QoDZqYkAUxBnXDJa6zGgy3HGZB3SAWYYZZuY6w9kHL+uIA3Pvuefec+/M+SS/B+Ccc3/3fjl/7vnzu29ACAFFXaSRdoAiHCqaCqGiqRAqmgqhoqkQKpoKoaKpECqaCqGiqRAqmgpZQtoBnFRWVuaXlpauzc7Ozs7MzMxctmzZsti/z8zMzPj9/ump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" alt="" />
              <h3 className='fw-bolder mt-1 ms-2'>Swiggy</h3>
            </div>
            <p>&#169; 2023 Bundl Technologies <br /> Pvt .Ltd</p>
          </div>
          <div style={{color:"rgb(158, 158, 158)"}}>
            <h5 style={{color:"white"}}>Compny</h5>
            <p>About</p>
            <p>Careers</p>
            <p>Teams</p>
            <p>Swiggy One</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Genie</p>
          </div>
          <div style={{color:"rgb(158, 158, 158)"}}>
            <h5 style={{color:"white"}}>Contact us</h5>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
            <h5 className='mt-5 test-light'>Legal</h5>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>
          <div style={{color:"rgb(158, 158, 158)"}}>
            <h5 style={{color:"white"}}>We deliver to:</h5>
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>
            <button style={{padding:"10px",background:"transparent",color:"rgb(158, 158, 158)",border:"1px solid rgba(196, 198, 202, 0.1)",borderRadius:"20px"}}>589 Cities
            <i className='ms-5 fa-solid fa-angle-down'></i>
            </button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Footer