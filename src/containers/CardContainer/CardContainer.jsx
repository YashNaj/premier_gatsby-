import React from "react";
import "./CardContainer.scss";
import Card from "../../components/card/Card";
const CardContainer = () => {
  
return (
    <div className="card-container">
      <div className="primary-card">
      <div className="card1">
          <Card
            className="card card-1"
            title="Quality Link Building"
            iconClass="fa-solid fa-handshake icon"
            text="Why build links? Google’s algorithms are complex and always evolving, but backlinks remain an important factor in how every search engine determines which sites rank for which keywords. Building links is one of the many tactics used in search engine optimization (SEO) because links are a signal to Google that your site is a quality resource worthy of citation. Therefore, sites with more backlinks tend to earn higher rankings."
          />
        </div>
        <div className="card2">
          <Card
            className="card card-landscape "
            title="Affiliate Marketing"
            iconClass="fa-solid fa-chart-area icon"
            text="As the name suggests, involved affiliate marketing describes those who are closely tied to the product or service they’re promoting. The affiliate has tried the product themselves, trusts that it will provide a good experience and has the authority to make claims about its use. Rather than relying on pays per click, involved affiliate marketers use their personal experiences with the product in their marketing efforts, and customers can trust them as reliable sources of information.  "
          />
        </div>
        <div className="card3">
          <Card
            className="card card-landscape"
            title="Re-targeting Customers"
            iconClass="fa-solid fa-bullseye icon"
            text="The second type of lead you want to gather is a sales qualified lead (or SQL). SQLs are active leads (or inbound leads). These are people /companies that have directly engaged with your company and your sales team in some capacity. They may have requested a demo, called your sales department, or sent an email/message indicating their interest in a particular product or services"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
