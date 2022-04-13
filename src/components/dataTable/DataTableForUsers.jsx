import productImg from "../../img/img1.jpg";
import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import "./DataTable.css";
import { useState, useEffect } from "react";

function DataTableForUsers({ list }) {
  const [imgFile, setImgFile] = useState();

  console.log("pend-list",list);
  function onChange(e) {
    console.log(e.target.files);
    setImgFile(e.target.files[0]);
  }
  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);

  // function onFormSubmit() {

  // }
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
                <Grid.Column width="2">
                  {/* <Segment.Inline>{item.id}</Segment.Inline> */}
                </Grid.Column>
                <Grid.Column width="5">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.product.img[item.product.img.length-1]?.imagePath || productImg}
                    />
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="9">
                  <Segment.Inline>
                    <List.Content>
                      <List.Header>{item.product.name} </List.Header>
                      {item.product.price}{item.product.currency}
                      <Segment.Inline>{item.orderStatus}</Segment.Inline>
                      
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
    </>
  );
}

export default DataTableForUsers;