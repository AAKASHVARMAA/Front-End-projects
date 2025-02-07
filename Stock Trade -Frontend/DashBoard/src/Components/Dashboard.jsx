import { Routes, Route } from "react-router-dom"; 
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import WatchList from "./watchlist";
import { GeneralContextProvider } from "./GeneralContext";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
         <GeneralContextProvider>
              <WatchList /> 
         </GeneralContextProvider>    
      <div className="content">  
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Holdings" element={<Holdings />} />
          <Route path="/Positions" element={<Positions />} />
          <Route path="/Funds" element={<Funds />} />
          <Route path="/Apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}
