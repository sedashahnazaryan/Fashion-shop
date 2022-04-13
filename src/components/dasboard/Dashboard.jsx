// import api  from '../../services/api';
import {getOrders,authoriseUser,getOrderByStatus,getAllOrders, getProducts,changeOrderStatus,imgUpdate} from "../../services/api";
import {useAuth0} from "@auth0/auth0-react";
import {domainName} from "../../config";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import Tabs from "../tabs/Tabs";
import {ADMIN,UNPAID} from "../../services/constants";
import DataTable from "../dataTable/DataTable";
import AddProduct from "../products/AddProduct";
import { set } from "react-hook-form";
import { Table, Icon, Message } from "semantic-ui-react";
import DataTableForUsers from "../dataTable/DataTableForUsers";


   

function Dashboard() {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
  const [orderList, setOrderList] = useState([]);
  const [adminData, setAdminData] = useState({});
  const [responseInfo, setResponseInfo] = useState("");

  async function orderShow() {
    try {
      const token = await getAccessTokenSilently();
      let data = null;
      // console.log("user",user);
      if (user && user[`${domainName}roles`].includes(ADMIN)) {
        const dataResult = await Promise.all([
          getProducts(),
          getAllOrders(user.sub, token, UNPAID),
        ]);
        console.log("dataResult", dataResult);
        if (dataResult && dataResult[1] && dataResult[1].status === 401) {
          const authorised = await authoriseUser(user, token);
        } else {
          setAdminData((adminData) => ({
            ...adminData,
            allProducts: dataResult[0],
            pendingProducts: dataResult[1],
          }));
          console.log("adminData", adminData);
        }
      } else {
        data = await getOrders(user.sub, token);
        console.log("user as a user ",user);
        console.log("data",data);
        if (data && Array.isArray(data)) {
          if (data.length !== 0) setOrderList(data);
        } else if (data && data.status === 401) {
          const authorised = await authoriseUser(user, token);
        } else {
          console.log("paka");
        }
      }
    } catch (error) {
      console.log("user not authorised");
    }
  }

  useEffect(() => {
    if (user || responseInfo.length > 0) orderShow();
  }, [user, responseInfo]);
  const { pendingProducts, allProducts } = adminData;

  async function changeStatus(status, order_id) {
    try {
      const token = await getAccessTokenSilently();
      const changeResult = await changeOrderStatus(
        user.sub,
        token,
        order_id,
        status
      );
      orderShow();//I put this function call
      console.log("changeResult", changeResult);
    } catch (error) {
      console.log("sxal es arel");
    }
  }

  async function uploadImg(file, productId) {
    try {
      const token = await getAccessTokenSilently();
      const responseImg = await imgUpdate(productId, file, token, user.sub);
      console.log(responseImg);

      if (responseImg.httpStatus && responseImg.httpStatus === "OK") {
        setResponseInfo(responseImg.message);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }

    console.log("file", file);
  }

  function handleDismiss() {
    setResponseInfo("");
  }
  console.log("adminData", adminData);
  return (
    <div className="dashboard ui container">
      {responseInfo.length > 0 ? (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        ""
      )}
      {user &&
      user[`${domainName}roles`] &&
      user[`${domainName}roles`].includes(ADMIN) ? (
        <>
          <AddProduct setResponseInfo={setResponseInfo} />
          <Tabs
            uploadImg={uploadImg}
            pendingProducts={pendingProducts}
            allProducts={allProducts}
            changeStatus={changeStatus}
          />
        </>
      ) : (
        <DataTableForUsers list={orderList} />
      )}
    </div>
  );
}
export default Dashboard;