import { nanoid } from "nanoid";
import logo  from "../../img/logo 1.jpg";
import "./DataTable.css";
import {List,Image,Button,Grid,Segment,Dropdown,Item,Pagination,Icon} from "semantic-ui-react";
import{useEffect, useState} from "react";



function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 5;

  function onChange(e) {
    console.log(e.target.files);
    setImgFile(e.target.files[0]);
  }
  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);
  useEffect(() => {
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]);

  console.log("result", list);
  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }
  return (
    <div>
    {list &&
      list.length > 0 &&
      list.map((item) => {
        console.log(item);
        return (
          <>
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
                <Grid.Column width="2">
                  <Segment.Inline className="productId">{`N ${item.id}`}</Segment.Inline>
                </Grid.Column>

                <Grid.Column width="3">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={item.img[item.img.length - 1]?.imagePath || logo}
                    />
                  </Segment.Inline>
                </Grid.Column>

                <Grid.Column width="2">
                  <Segment.Inline>
                    <List.Header>{item.name} </List.Header>
                    <div className="price">
                      {item.price} {item.currency}
                    </div>
                  </Segment.Inline>
                </Grid.Column>

                <Grid.Column width="6">
                  <Segment.Inline>
                    <List.Content>
                      <Segment.Inline>{item.orderStatus}</Segment.Inline>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          uploadImg(imgFile, item.id);
                        }}
                      >
                        <label className="upload" htmlFor ="file-input">
                        <Icon className="iconUpload" name="images" />
                        </label>
                        <input
                          id = "file-input"
                          className="upload imgBtn"
                          type="file"
                          onChange={(e)=>onChange(e)}
                        ></input>
                       
                        <button type="submit" className="upload">
                        <Icon className="upload iconUpload" name="upload" />
                        </button>
                      </form>
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </>
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
  </div>
);
}


export default DataTable;

