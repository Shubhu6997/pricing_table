
function PriceTable({data}){

   const {title, price, rate, noOfUsers, storage,
         noOfPublicProjects, access, noOfPrivateProjects,
          support, noOfDomains, report} = {...data};
         
    return(

        <div className="card m-3 rounded">
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
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{noOfDomains}</strong></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{report}</li>
                </ul>
                <div className="d-grid">
                <a href="/" className="btn btn-primary text-uppercase">Button</a>
                </div>   
            </div>
         </div>

    )

}

export default PriceTable;