import { apiUrl } from "../config";
// /import { useAuth0 } from "@auth0/auth0-react";


// export async function getData(){
//     const response=await fetch(`${apiUrl}product`);
//     const data=await response.json();
//     return data;
// }
export async function getProducts(){
const response= await fetch (`${apiUrl}product`)
const data =await response.json();
return data;
}

export async function getOrders(user_id,token){
    try {
        const  response = await fetch(`${apiUrl}order/user-order`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            user_id: user_id,
          },
          
        });
      
        return await response.json();
      } catch (error) {
        console.log("sxal", error);
      }
    }
    export async function authoriseUser(user, token) {
      const { sub: id, name, email, picture } = user;
      try {
        const response = await fetch(`${apiUrl}login/signup`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=utf-8",
            user_id: user,
          },
          body: JSON.stringify({
            id,
            name,
            email,
            picture,
          }),
        });
        return response.json();
      } catch (error) {
        console.log("sxalPost", error);
      }
    }
    export async function confirmOrder(user, product, token, option) {
      const { sub: id, name, email, picture } = user;
      const {address,paymentMethod,phone} = option;
    
      const body = {
          date:new Date().valueOf(),
        user: user,
        product: product,
        count: 1,
        
        orderStatus:paymentMethod==="cash" ? "UNPAID" : "PAID",
        address:address,
        phone:phone,
    
      };
      try {
        const response = await fetch(`${apiUrl}order`, {
          method: "POST",      
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=utf-8",
            user_id: user,
          },
          body: JSON.stringify(body),
        });
        return response.json();
      } catch (error) {
        console.log("sxalPost", error);
      }
    }