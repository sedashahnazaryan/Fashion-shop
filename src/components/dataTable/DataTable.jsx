import{Table,Icon} from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import "./DataTable.css";
import {List,Image,Button} from "semantic-ui-react";


function DataTable({ list }) {
  return (
    <List divided verticalAlign="middle">
      {list && list.map((item) => {
        return (
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <Image
              avatar
              className="product-icon"
              src={item.product.img[0]?.imagePath || productImg}
            />
             <List.Content>  
             <List horizontal>
             <List.Content > {item.orderStatus}                         
              {/* <List.Header>{item.product.name} </List.Header> */}
              {/* {item.product.price} */}
              </List.Content>
              </List>
            </List.Content>
         </List.Item>
        );
      })}
    </List>
  );
}
        
 export default DataTable;