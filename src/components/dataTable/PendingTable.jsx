import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import { Grid,  Segment,List,Image,Dropdown } from "semantic-ui-react";
import {nanoid} from "nanoid";
import productImg from "../../img/img1.jpg" 
import "./DataTable.css";


function PendingTable({ list, changeStatus }) {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);

  const pageDevider = 4;
  console.log("liststatus",list);
  // console.log("list product", list.product.name);
  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);
  useEffect(()=>{
    if(list && list.length>0)setResult(list);
  },[list])
  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage);
  }
  
  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          console.log("item", item);
          return (
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
                <Grid.Column width="5">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.product.img[0]?.imagePath || productImg}
                    />
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="6">
                  <Segment.Inline>
                    <List.Content>
                      <List.Header>{item.id} {item.product.name} </List.Header>
                      {item.product.price} {item.address} {item.phone}
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="3">
                  <Segment.Inline>{item.orderStatus}</Segment.Inline>
                </Grid.Column>
                <Grid.Column width="2">
                  <Segment.Inline>
                    <Dropdown pointing="top left" text="Edit">
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
                    </Dropdown>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
        <div className="pagination-container">
        {/* semantic pagination */}
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