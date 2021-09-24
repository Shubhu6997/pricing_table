import PriceTable from "./PriceTable";

function App() {

  const priceCard = [
    { title : "FREE",
      price : "$0",
      rate : "/month",
      noOfUsers : "Single User",
      storage : "5GB Storage",
      noOfPublicProjects : "Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProjects : "Unlimited Public Projects",
      support : "Dedicated Phone Support",
      noOfDomains : "Free Subdomain",
      report : "Monthly Status Reports"
    },
    {
      title : "PLUS",
      price : "$9",
      rate : "/month",
      noOfUsers : "5 Users",
      storage : "50GB Storage",
      noOfPublicProjects : "Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProjects : "Unlimited Public Projects",
      support : "Dedicated Phone Support",
      noOfDomains : "Free Subdomain",
      report : "Monthly Status Reports"
    },
    {
      title : "PRO",
      price : "$49",
      rate : "/month",
      noOfUsers : "Unlimited",
      storage : "150GB Storage",
      noOfPublicProjects : "Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProjects : "Unlimited Public Projects",
      support : "Dedicated Phone Support",
      noOfDomains : "Unlimited Free Subdomain",
      report : "Monthly Status Reports"
    }
  ];

  return (
    <section className="pricing py-5 m-1 bg-primary ">
      <div className="container">
        <div className = "d-flex justify-content-center">
       
          <PriceTable data = {priceCard[0]}/>
          <PriceTable data = {priceCard[1]}/>
          <PriceTable data = {priceCard[2]}/>
        
        </div>
      </div>
    </section>
  );
}

export default App;
