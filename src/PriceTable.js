
function PriceTable({data}){

   const {title, price, rate, noOfUsers, storage,
         noOfPublicProjects, access, noOfPrivateProjects,
          support, noOfDomains, report} = {...data};
         
    return(
<section className="pricing py-5">
  <div className="container">
    <div className="col-lg-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                <h6 className="card-price text-center">{price}<span className="period">{rate}</span></h6>
                <hr/>
                <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{noOfUsers}</strong>
                </li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{noOfPublicProjects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{access}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{noOfPrivateProjects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{support}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{noOfDomains}</strong> Free
                    Subdomains</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{report}</li>
                </ul>
                <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>   
            </div>
         </div>
    </div>
  </div>
</section>
    )

}

export default PriceTable;