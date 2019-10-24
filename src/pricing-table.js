import React from 'react';

export default class Pricing extends React.Component {
  render() {
    return (
        <div>
    <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* Free Tier */}
            <div className="col-lg-3">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">SIMPLE STATIC WEBSITE</h5>
                  <h6 className="card-price text-center">₹ 8,500/-<span className="period"><br />
SIMPLE INFORMATIVE WEBSITE</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fa fa-check" /></span><strong>5 Page Design</strong></li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Domain</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Customized Sliders</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Product Gallery</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Services Details</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Google maps</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span><strong>Website SEO</strong> Free Subdomains</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Free Hosting</li>
                  </ul>
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
         
            {/* Plus Tier */}
            <div className="col-lg-3">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">ADVANCE STATIC WEBSITE</h5>
                  <h6 className="card-price text-center">₹10,000/-
<span className="period"><br />LEAD GENERATING STATIC WEBSITE</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fa fa-check" /></span><strong>  5 Page Design</strong></li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Domain</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Customized Sliders</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Details</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Enquiry Form</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Website SEO</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Free Hosting</li>
                    <li><span className="fa-li"><i className="fa fa-times" /></span>+ More Features</li>
                  </ul><br />
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Request Details</a>
                </div>
              </div>
            </div>
            {/* Pro Tier */}
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">DYNAMIC WEBSITE
</h5>
                  <h6 className="card-price text-center">₹15,000/-

<span className="period"><br />DYNAMIC WEBSITE / ADMIN PANEL</span></h6>
                  <hr />
                  <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fa fa-check" /></span><strong>  5 Page Design</strong></li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Domain</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Customized Sliders</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Details</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Enquiry Form</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Admin Dashboard</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span> Free Hosting</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>More Features</li>
                  </ul><br />
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">E-COMMERCE WEBSITE
</h5>
                  <h6 className="card-price text-center">₹20,000/-

<span className="period"><br />ONLINE PRODUCT SELLING WEBSITE</span></h6>
                  <hr />
                  <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fa fa-check" /></span><strong>  8 Page Design</strong></li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Domain</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Customized Sliders</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Business Details</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Admin Dashboard</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span> Online Payment</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>Free Hosting</li>
                    <li><span className="fa-li"><i className="fa fa-check" /></span>More Features</li>

                  </ul><br />
                  <a href="#" className="btn btn-block btn-primary text-uppercase">Request Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
    );
  }
}

