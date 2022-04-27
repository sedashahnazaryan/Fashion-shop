import { nanoid } from "nanoid";
import logo from "../../img/logo 1.jpg";
import "./DataTable.css";
import {
  List,
  Image,
  Button,
  Grid,
  Segment,
  Dropdown,
  Item,
  Pagination,
  Icon,
} from "semantic-ui-react";
import { useEffect, useState, useRef } from "react";

function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 4;
  const selectidId = useRef(null);

  function onChange(e, id) {
    selectidId.current = id;

    setImgFile(e.target.files[0]);
  }
  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  useEffect(() => {}, [imgFile]);

  useEffect(() => {
    selectidId.current = null;
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }
  return (
    <div>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          console.log(item);
          //           return (
          //             <Grid className="grid-table" key={nanoid()}>
          //               <Grid.Row>
          //                 <Grid.Column width="2">
          //                   <Segment.Inline className="productId">{`N ${item.id}`}</Segment.Inline>
          //                 </Grid.Column>

          //                 <Grid.Column width="3">
          //                   <Segment.Inline>
          //                     <Image
          //                       avatar
          //                       className="product-icon"
          //                       src={item.img[item.img.length - 1]?.imagePath || logo}
          //                     />
          //                   </Segment.Inline>
          //                 </Grid.Column>

          //                 <Grid.Column width="2">
          //                   <Segment.Inline>
          //                     <List.Header>{item.name} </List.Header>
          //                     <div className="price">
          //                       {item.price} {item.currency}
          //                     </div>
          //                   </Segment.Inline>
          //                 </Grid.Column>

          //                 <Grid.Column width="6">
          //                   <Segment.Inline>
          //                     <List.Content>
          //                       <Segment.Inline>{item.orderStatus}</Segment.Inline>
          //                       <form
          //                         onSubmit={(e) => {
          //                           e.preventDefault();
          //                           uploadImg(imgFile, item.id);
          //                         }}
          //                       >
          //                         <label
          //                           htmlFor={`file-input-${item.id}`}
          //                           className="img-icon"
          //                         >
          //                           <Icon
          //                             className="btn-icon"
          //                             color="green"
          //                             name="images"
          //                           />
          //                         </label>
          //                         <input
          //                           type="file"
          //                           id={`file-input-${item.id}`}
          //                           onChange={(e) => {
          //                             onChange(e, item.id);
          //                           }}
          //                         />
          //                         <button className="btn-upload" type="submit">
          //                           <Icon
          //                             className="btn-icon"
          //                             name="upload"
          //                             color={
          //                               selectidId.current === item.id ? "green" : "grey"
          //                             }
          //                           />
          //                         </button>
          //                       </form>
          //                     </List.Content>
          //                   </Segment.Inline>
          //                 </Grid.Column>
          //               </Grid.Row>
          //             </Grid>
          //           );
          //         })}
          //       <div className="pagination-container">
          //         {/* semantic pagination */}
          //         <Pagination
          //           defaultActivePage={1}
          //           secondary
          //           onPageChange={goToPage}
          //           totalPages={Math.ceil(result.length / pageDevider)}
          //         />
          //       </div>
          //     </div>
          //   );
          // }

          // export default DataTable;

          return (
            <Item.Group className="add-prd-list" key={nanoid()}>
              <Item>
                <Item.Image
                  size="tiny"
                  src={item.img[item.img.length - 1]?.imagePath || logo}
                />

                <Item.Content>
                  <Item.Header as="a"> {item.name}</Item.Header>
                  <Item.Meta></Item.Meta>
                  <Item.Description>
                    {item.description.comment}
                  </Item.Description>
                </Item.Content>
                <Item.Content>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      uploadImg(imgFile, item.id);
                    }}
                  >
                    <label htmlFor="file-input" className="img-icon">
                      <Icon className="btn-icon" color="green" name="images" />
                    </label>
                    <input type="file" id="file-input" onChange={onChange} />
                    <Button className="btn-upload" type="submit">
                      <Icon className="btn-icon" color="green" name="upload" />
                    </Button>
                  </form>
                </Item.Content>
                <Item.Content>
                  Available <div>{item.stock.count}</div>
                </Item.Content>
                <Item.Content>
                  {item.price}
                  <div className="currency">{item.currency}</div>
                </Item.Content>
              </Item>
              <Item></Item>
            </Item.Group>
          );
        })}
      <div className="pagination-container">
        {" "}
        {/* semantic pagination */}{" "}
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </div>
  );
}

export default DataTable;
