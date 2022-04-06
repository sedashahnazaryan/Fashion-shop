// import api  from '../../services/api';
import {getOrders,authoriseUser,getOrderByStatus} from "../../services/api";
import {useAuth0} from "@auth0/auth0-react";
import {domainName} from "../../config";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import Tabs from "../tabs/Tabs";
import {ADMIN,UNPAID} from "../../services/constants";
import DataTable from "../dataTable/DataTable";
import AddProduct from "../products/AddProduct";


function Dashboard(){
     const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
        useAuth0();
    
     const [orderList,setOrderList]=useState([]);
     const [pendingProducts, setPendingProducts] = useState([]);
     const [allProducts, setAllProducts] = useState([]);
   
        async function orderShow () {
       try {
          const token = await getAccessTokenSilently();
          let data=null;

          if (user && user[`${domainName}roles`] === ADMIN) {
            data = await getOrderByStatus(user.sub, token, UNPAID);
            setPendingProducts(data);
          }else{
           data = await getOrders(user.sub, token,UNPAID);
      
          if (data && Array.isArray(data)) {
           if(data.length!==0) setOrderList(data); 
          
          } else if (data && data.status === 401) {
           const authorised = await authoriseUser(user, token);
            
          }else{
            // console.log("hajox")
          }
        }
        } catch (error) {
          // console.log("user not authorised");
        }
      }
      useEffect(()=>{
        console.log("use effect call")
        if(user) orderShow();
        if(user){
        }
      },[user]);
      
return(
    <div className="dashboard ui container">
      
      
      {user &&
      user[`${domainName}roles`] &&
      user[`${domainName}roles`].includes("admin") ? (
        <>
           <AddProduct/>
          <Tabs pendingProducts={pendingProducts} allProducts={allProducts} />
        </>
      ) : (
      <DataTable/>
      )}
      
    </div>
            
);  
    
}
export default Dashboard;