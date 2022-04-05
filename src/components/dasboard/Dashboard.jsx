// import api  from '../../services/api';
import {getOrders,authoriseUser} from "../../services/api";
import {useAuth0} from "@auth0/auth0-react";
import {domainName} from "../../config";
import { useEffect, useState } from "react";
import {Table,Icon} from "semantic-ui-react";
import "./Dashboard.css";

function Dashboard(){
     const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
        useAuth0();
    
     const [adminData,setAdminData]=useState([]);
      
        async function orderShow () {
       try {
          const token = await getAccessTokenSilently();
          const data = await getOrders(user.sub, token);
      
          if (data && Array.isArray(data)) {
           if(data.length!==0) setAdminData(data); 
          
          } else if (data && data.status === 401) {
           const authorised = await authoriseUser(user, token);
            
          }else{
            // console.log("hajox")
          }
        } catch (error) {
          // console.log("user not authorised");
        }
      }
      useEffect(()=>{
        console.log("use effect call")
        if(user) orderShow();
      },[user]);
      
return(
    <div className="dashboard ui container">
      {/* it's dashboard */}
      {console.log(adminData)}
      {user &&
      user[`${domainName}roles`] &&
      user[`${domainName}roles`].includes("admin") ? (
        <>
          <button id="add product">Add New Product</button>
          <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell textAlign='right'>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell textAlign='right'>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell textAlign='right'>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </>
      ) : (
        ""
      )}
    </div>
            
);  
    
}
export default Dashboard;