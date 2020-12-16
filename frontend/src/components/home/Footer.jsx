import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


// =====================================================================
// Footer - only visible in login page
const FooterPagePro = () => {
  return (
    <MDBFooter color="cyan" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com" >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic" href="https://twitter.com">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic" href="https://www.google.com">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic" href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic" href="https://www.instagram.com">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic" href="https://www.pinterest.com">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}

export default FooterPagePro;
