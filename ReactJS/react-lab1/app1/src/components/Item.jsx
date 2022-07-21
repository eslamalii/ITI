import { Component } from 'react';
import { Card, Button, Container } from 'react-bootstrap';

class Items extends Component {
  render() {
    let { title, price } = this.props;
    return (
      <Container className="col-4">
        <Card className="mx-auto my-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://picsum.photos/200/180" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">{price || 'Not Available'}</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Items;
