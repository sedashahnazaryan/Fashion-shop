import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import { Grid,  Segment,List,Image,Dropdown,Item,Popup } from "semantic-ui-react";
import {nanoid} from "nanoid";
import logo  from "../../img/logo 1.jpg";
import "./DataTable.css";

// function PendingTable({ list, changeStatus }) {
//   const [productsByPage, setProductsByPage] = useState([]);
//   const [start, setStart] = useState(0);
//   const [result, setResult] = useState([]);
//   const pageDevider = 4;

//   useEffect(() => {
//     setProductsByPage(list.slice(start, start + pageDevider));
//   }, [start, result]);

//   useEffect(() => {
//     if (list && list.length > 0) setResult(list);
//   }, [list]);

//   function goToPage(e, data) {
//     console.log(data.activePage);
//     setStart(data.activePage * pageDevider - pageDevider);
//   }

//   return (
//     <>
//       {productsByPage &&
//         productsByPage.length > 0 &&
//         productsByPage.map((item) => {
//           console.log("item", item);
//           return (
          
//             <Item.Group >
//               <Item>
//                 <Item.Image
//                   size="tiny"
//                   src={item.product.img[0]?.imagePath || logo}
//                 />

//                 <Item.Content>
//                   <Item.Header as="a"> {item.product.name}</Item.Header>
//                   <Item.Meta></Item.Meta>
//                   <Item.Description>
//                     {/* <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
//                   </Item.Description>
//                   <Item.Extra>{item.product.description.comment} </Item.Extra>
//                 </Item.Content>
//               </Item>

//               <Item>
//                 {/* <Item.Image
//                   size="tiny"
//                   src="https://react.semantic-ui.com/images/wireframe/image.png"
//                 /> */}
                
//                 {item.orderStatus}
//                 <Item.Content>
//                   <Item.Header as="a"><Dropdown pointing="top left" text="Edit Status">
//                   <Dropdown.Menu>
//                     <Dropdown.Item
//                       onClick={() => {
//                         changeStatus("PENDING", item.id);
//                       }}
//                       text="Pending"
//                       icon="plus"
//                     />
//                     <Dropdown.Item
//                       onClick={() => {
//                         changeStatus("SENT", item.id);
//                       }}
//                       text="Sent"
//                       icon="calendar"
//                     />
//                     <Dropdown.Item
//                       onClick={() => {
//                         changeStatus("PAID", item.id);
//                       }}
//                       text="Paid"
//                       icon="calendar"
//                     />
//                     <Dropdown.Item
//                       onClick={() => {
//                         changeStatus("DONE", item.id);
//                       }}
//                       text="Done"
//                       icon="calendar"
//                     />
//                   </Dropdown.Menu>
//                 </Dropdown> </Item.Header>
//                   <Item.Meta></Item.Meta>
//                   <Item.Description>
//                 Address {item.address}
//                   </Item.Description>
//                   <Item.Extra>Phone {item.phone}</Item.Extra>
//                 </Item.Content>
//               </Item>
//             </Item.Group>
//           );
//         })}
//       <div className="pagination-container">
//         <Pagination
//           defaultActivePage={1}
//           secondary
//           onPageChange={goToPage}
//           totalPages={Math.ceil(result.length / pageDevider)}
//         />
//       </div>
//     </>
//   );
// }

// export default PendingTable;


// function PendingTable({ list, changeStatus }) {
//   const [productsByPage, setProductsByPage] = useState([]);
//   const [start, setStart] = useState(0);
//   const [result, setResult] = useState([]);
//   const pageDevider = 4;

//   useEffect(() => {
//     setProductsByPage(list.slice(start, start + pageDevider));
//   }, [start, result]);

//   useEffect(() => {
//     if (list && list.length > 0) setResult(list);
//   }, [list]);

//   function goToPage(e, data) {
//     console.log(data.activePage);
//     setStart(data.activePage * pageDevider - pageDevider);
//   }

//   return (
//     <>
//       {productsByPage &&
//         productsByPage.length > 0 &&
//         productsByPage.map((item) => {
//           console.log("item", item);
//           return (
//             // <Grid className="grid-table" key={nanoid()}>
//             //   <Grid.Row>
//             //     <Grid.Column width="7">
//             //       <Segment.Inline>
//             //         <List.Header id="name-prudct">
//             //           {item.product.name}
//             //         </List.Header>
//             //         <Image
//             //           avatar
//             //           className="product-icon"
//             //           src={item.product.img[0]?.imagePath || productImg}
//             //         />
//             //       </Segment.Inline>
//             //     </Grid.Column>
//             //     {/* <Grid.Column width="4">
//             //       <Segment.Inline>
//             //         <List.Content>

//             //         </List.Content>
//             //       </Segment.Inline>
//             //     </Grid.Column> */}
//             //     <Grid.Column width="3">
//             //       <Segment.Inline>
//             //         <div id="status-id">STATUS</div>
//             //         {item.orderStatus}
//             //       </Segment.Inline>
//             //     </Grid.Column>
//             //     <Grid.Column width="6">
//             //       <Segment.Inline>
//             // <Dropdown pointing="top left" text="Edit">
//             //   <Dropdown.Menu>
//             //     <Dropdown.Item
//             //       onClick={() => {
//             //         changeStatus("PENDING", item.id);
//             //       }}
//             //       text="Pending"
//             //       icon="plus"
//             //     />
//             //     <Dropdown.Item
//             //       onClick={() => {
//             //         changeStatus("SENT", item.id);
//             //       }}
//             //       text="Sent"
//             //       icon="calendar"
//             //     />
//             //     <Dropdown.Item
//             //       onClick={() => {
//             //         changeStatus("PAID", item.id);
//             //       }}
//             //       text="Paid"
//             //       icon="calendar"
//             //     />
//             //     <Dropdown.Item
//             //       onClick={() => {
//             //         changeStatus("DONE", item.id);
//             //       }}
//             //       text="Done"
//             //       icon="calendar"
//             //     />
//             //   </Dropdown.Menu>
//             // </Dropdown>
//             //       </Segment.Inline>
//             //     </Grid.Column>
//             //   </Grid.Row>
//             //   <Grid.Row>
//             //     <Grid.Column width="7" id="price-id">
//             //       {item.product.price} {item.product.currency}
//             //     </Grid.Column>

//             //     <Grid.Column width="3" id="address">
//             //       <div id="address-id">ADDRESS</div>
//             //       {item.address}
//             //     </Grid.Column>
//             //     <Grid.Column width="6"><span className="phone-pending">PHONE:</span> {item.phone}</Grid.Column>
//             //     <Grid.Column></Grid.Column>
//             //   </Grid.Row>
//             // </Grid>)
//             <Item.Group key={nanoid()}>
//               <Item>
//                 <Item.Image
//                   size="tiny"
//                   src={item.product.img[0]?.imagePath || logo}
//                 />
//                 <Item.Content>{item.orderStatus}</Item.Content>
//                 <Item.Content>
//                   <Item.Header as="a"> {item.product.name}</Item.Header>
//                   <Item.Extra>{item.product.description.comment} </Item.Extra>
//                 </Item.Content>
//                 <Item.Content>
//                   <Item.Header as="a">
//                     <Dropdown pointing="top left" text="Edit Status">
//                       <Dropdown.Menu>
//                         <Dropdown.Item
//                           onClick={() => {
//                             changeStatus("PENDING", item.id);
//                           }}
//                           text="Pending"
//                           icon="plus"
//                         />
//                         <Dropdown.Item
//                           onClick={() => {
//                             changeStatus("SENT", item.id);
//                           }}
//                           text="Sent"
//                           icon="calendar"
//                         />
//                         <Dropdown.Item
//                           onClick={() => {
//                             changeStatus("PAID", item.id);
//                           }}
//                           text="Paid"
//                           icon="calendar"
//                         />
//                         <Dropdown.Item
//                           onClick={() => {
//                             changeStatus("DONE", item.id);
//                           }}
//                           text="Done"
//                           icon="calendar"
//                         />
//                       </Dropdown.Menu>
//                     </Dropdown>{" "}
//                   </Item.Header>
//                   <Item.Meta></Item.Meta>
//                   <Item.Description>Address {item.address}</Item.Description>
//                   <Item.Extra>Phone {item.phone}</Item.Extra>
//                 </Item.Content>
//               </Item>
//             </Item.Group>
//           );
//         })}
//       <div className="pagination-container">
//         <Pagination
//           defaultActivePage={1}
//           secondary
//           onPageChange={goToPage}
//           totalPages={Math.ceil(result.length / pageDevider)}
//         />
//       </div>
//     </>
//   );
// }

// export default PendingTable;



function PendingTable({ list, changeStatus }) {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 4;

  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);

  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }

  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          console.log("item", item);
          return (
            // <Grid className="grid-table" key={nanoid()}>
            //   <Grid.Row>
            //     <Grid.Column width="7">
            //       <Segment.Inline>
            //         <List.Header id="name-prudct">
            //           {item.product.name}
            //         </List.Header>
            //         <Image
            //           avatar
            //           className="product-icon"
            //           src={item.product.img[0]?.imagePath || productImg}
            //         />
            //       </Segment.Inline>
            //     </Grid.Column>
            //     {/* <Grid.Column width="4">
            //       <Segment.Inline>
            //         <List.Content>

            //         </List.Content>
            //       </Segment.Inline>
            //     </Grid.Column> */}
            //     <Grid.Column width="3">
            //       <Segment.Inline>
            //         <div id="status-id">STATUS</div>
            //         {item.orderStatus}
            //       </Segment.Inline>
            //     </Grid.Column>
            //     <Grid.Column width="6">
            //       <Segment.Inline>
            // <Dropdown pointing="top left" text="Edit">
            //   <Dropdown.Menu>
            //     <Dropdown.Item
            //       onClick={() => {
            //         changeStatus("PENDING", item.id);
            //       }}
            //       text="Pending"
            //       icon="plus"
            //     />
            //     <Dropdown.Item
            //       onClick={() => {
            //         changeStatus("SENT", item.id);
            //       }}
            //       text="Sent"
            //       icon="calendar"
            //     />
            //     <Dropdown.Item
            //       onClick={() => {
            //         changeStatus("PAID", item.id);
            //       }}
            //       text="Paid"
            //       icon="calendar"
            //     />
            //     <Dropdown.Item
            //       onClick={() => {
            //         changeStatus("DONE", item.id);
            //       }}
            //       text="Done"
            //       icon="calendar"
            //     />
            //   </Dropdown.Menu>
            // </Dropdown>
            //       </Segment.Inline>
            //     </Grid.Column>
            //   </Grid.Row>
            //   <Grid.Row>
            //     <Grid.Column width="7" id="price-id">
            //       {item.product.price} {item.product.currency}
            //     </Grid.Column>

            //     <Grid.Column width="3" id="address">
            //       <div id="address-id">ADDRESS</div>
            //       {item.address}
            //     </Grid.Column>
            //     <Grid.Column width="6"><span className="phone-pending">PHONE:</span> {item.phone}</Grid.Column>
            //     <Grid.Column></Grid.Column>
            //   </Grid.Row>
            // </Grid>)
            <Item.Group key={nanoid()}>
              <Item>
                <Item.Image
                  size="tiny"
                  src={item.product.img[0]?.imagePath || logo}
                />
                <Item.Content>{item.orderStatus}</Item.Content>
                <Item.Content>
                  <Item.Header as="a"> {item.product.name}</Item.Header>
                  <Item.Extra>{item.product.description.comment} </Item.Extra>
                </Item.Content>
                <Item.Content>
                  <Item.Header as="a">
                    <Dropdown pointing="top left" text="Edit Status">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("PENDING", item.id);
                          }}
                          text="Pending"
                          icon="plus"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("SENT", item.id);
                          }}
                          text="Sent"
                          icon="calendar"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("PAID", item.id);
                          }}
                          text="Paid"
                          icon="calendar"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("DONE", item.id);
                          }}
                          text="Done"
                          icon="calendar"
                        />
                      </Dropdown.Menu>
                    </Dropdown>{" "}
                  </Item.Header>
                  <Item.Meta></Item.Meta>
                  <Item.Description>Address {item.address}</Item.Description>
                  <Item.Extra>Phone {item.phone}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          );
        })}
      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </>
  );
}

export default PendingTable;