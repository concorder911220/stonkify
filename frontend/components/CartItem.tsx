import { ICartItem } from "interfaces/cart.interface";
import Link from "next/link";
import { FC } from "react";
import { ListGroup, Row, Col, Form, Button, Image } from "react-bootstrap";

const CartItem: FC<{
  item: ICartItem;
  onRemoveFromCardHandler: (id: string) => void;
  onChangeQty: (id: string, qty: number) => void;
}> = ({ item, onRemoveFromCardHandler, onChangeQty }) => {
  return (
    <ListGroup.Item key={item._id}>
      <Row>
        <Col md={2}>
          <Image
            src={`${process.env.BACKEND_URL}${item.image}`}
            alt={item.name}
            fluid
            rounded
          ></Image>
        </Col>
        <Col md={3}>
          <Link href={`/product/${item._id}`}>{item.name}</Link>
        </Col>
        <Col md={2}>{item.price}</Col>
        <Col md={2}>
          <Form.Control
            as="select"
            value={item.qty}
            onChange={(e) => {
              onChangeQty(item!._id as string, Number(e.target.value));
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button
            type="button"
            variant="light"
            onClick={() => {
              onRemoveFromCardHandler(item!._id as string);
            }}
          >
            <i className="fas fa-trash"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
