
import { nanoid } from "nanoid";
import { Grid, Segment, list, Image, Dropdown, Item,Pagination,List } from "semantic-ui-react";
import "./DataTable.css";
import { useState, useEffect } from "react";
import logo  from "../../img/logo 1.jpg";

function DataTableForUsers({ list }) {
const [productsByPage, setProductsByPage] = useState([]);
const [imgFile, setImgFile] = useState();
const [start, setStart] = useState(0);
const [result, setResult] = useState([]);

const pageDevider = 4;

console.log("pend-list", list);
function onChange(e) {
  console.log(e.target.files);
  setImgFile(e.target.files[0]);
}
useEffect(() => {
  console.log(imgFile);
}, [imgFile]);

useEffect(() => {
  setProductsByPage(list.slice(start, start + pageDevider));
}, [start, result]);

useEffect(()=>{
  if(list && list.length>0)setResult(list);
},[list])

function goToPage(e, data) {
  console.log(data.activePage);
  setStart(data.activePage * pageDevider - pageDevider);
}
return (
  <>
    {productsByPage &&
      productsByPage.length > 0 &&
      productsByPage.map((item) => {
        return (
          <Grid className="grid-table" key={nanoid()}>
            <Grid.Row>
              <Grid.Column width="2">
                <Segment.Inline>{item.id}</Segment.Inline>
              </Grid.Column>
              <Grid.Column width="5">
                <Segment.Inline>
                  <Image
                    avatar
                    className="product-icon"
                    src={
                      item.product.img[item.product.img.length - 1]
                        ?.imagePath || logo
                    }
                  />
                </Segment.Inline>
              </Grid.Column>
              <Grid.Column width="9">
                <Segment.Inline>
                  <List.Content>
                    <List.Header>{item.product.name} </List.Header>
                    {item.product.price}
                    {item.product.currency}
                    <Segment.Inline>{item.orderStatus}</Segment.Inline>
                  </List.Content>
                </Segment.Inline>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      })}

    <div className="pagination-container">
      <Pagination
        defaultActivePage={1}
        secondary
        onPageChange={goToPage}
        totalPages={Math.ceil(list.length / pageDevider)}
      />
    </div>
  </>
);
}

export default DataTableForUsers;