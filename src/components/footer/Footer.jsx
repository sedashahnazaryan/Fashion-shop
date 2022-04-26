import {
  Header,
  Container,
  Grid,
  List,
  Segment,
  Icon,
} from "semantic-ui-react";
import "./Footer.css";

// function Footer() {
//     return (
//         <div className="footer">
//              <Segment inverted vertical style={{ padding: '5em 0em' }}>
//       <Container>
//         <Grid divided inverted stackable>
//           <Grid.Row>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='About' />
//               <List link inverted>
//                 <List.Item as='a'></List.Item>
//                 <List.Item as='a'></List.Item>
//                 <List.Item as='a'></List.Item>
//                 <List.Item as='a'></List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='Services' />
//               <List link inverted>
//                 <List.Item as='a'></List.Item>
//                 <List.Item as='a'></List.Item>
//                 <List.Item as='a'></List.Item>
//                 <List.Item as='a'></List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={7}>
//               <Header as='h4' inverted>
//                 Footer Header
//               </Header>
//               <p>

//               </p>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Container>
//     </Segment>
//         </div>
//     )
// }

function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
             
            <Grid.Column width={3}>
                <Header inverted as="h4" content="About"/>
                {/* <List.Item as='li'> */}
          <a href='https://www.aravot.am/2016/06/30/710023/'>Click here</a>
        {/* </List.Item> */}
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as="h4" content="Home" />
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Products" />
              </Grid.Column>

              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  <Icon name="facebook" />
                  <Icon name="instagram" />
                  <Icon name="twitter square" />
                </Header>
              </Grid.Column>

              <Grid.Column width={3}>
                <Icon name="phone square" />
                +374 98313871
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
