import { Card, Icon, Image,Button } from 'semantic-ui-react';
import "./cardItem.css";
import { useAuth0} from "@auth0/auth0-react";
import BuyProduct from '../BuyProduct/BuyProduct';
import {Link} from "react-router-dom";

function CardItem({description, image, name, price,item}){
    const{isAuthenticated}=useAuth0();


  return (
        <Card centered>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            
            <Card.Header>{name}</Card.Header>
            {/* <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta> */}
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra className='buy-info'>
          {price}
          {isAuthenticated ? (
          <BuyProduct item={item} productInfo={{description,image,name,price}}/>
        ) : (
          <Button as={Link} to="/login" color='green'inverted floated='right' >
            BUY
          </Button>
        )}
           
          </Card.Content>
        </Card>
      )
}

export default CardItem;