import React from 'react';
import Footer from './footer'
import Navigation from './navbar'
export default class Contact_form extends React.Component {
  render() {
    return (
      <div>

<Navigation></Navigation>
           <div className="container">
             <br /><br />
          <h2 className="text-center">Contact Form</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 pb-5">
              {/*Form with header*/}
              <form action="mail.php" method="post">
                <div className="card border-primary rounded-0">
                  <div className="card-header p-0">
                    <div className="bg-info text-white text-center py-2">
                      <h3><i className="fa fa-envelope" /> Contact </h3>
                      <p className="m-0"></p>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    {/*Body*/}
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                        </div>
                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="NAME" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                        </div>
                        <input type="email" className="form-control" id="nombre" name="email" placeholder="EMAIL" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                        </div>
                        <textarea className="form-control" placeholder="MESSAGES" required defaultValue={""} />
                      </div>
                    </div>
                    <div className="text-center">
                      <input type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2" />
                    </div>
                  </div>
                </div>
              </form>
              {/*Form with header*/}
            </div>
          </div>
        </div>
        <Footer></Footer>
          </div>
        
    );
  }
}