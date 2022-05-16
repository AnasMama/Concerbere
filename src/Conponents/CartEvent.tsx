import React from "react";
import { Event } from "./Home";
import styled from "styled-components";

interface Props {
  event: Event;
}

const CartEvent = ({ event }: Props) => {
  const { name, description, url, localDate, localTime, venues, imageUrl } =
    event;
  return (
    <CardContainer>
      <h1>{name}</h1>
      <img src={imageUrl} alt="img"/>
      <p>{description}</p>
      <p>{url}</p>
      <p>{localDate}</p>
      <p>{localTime}</p>
      <p>{venues}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
    width: 30rem;

    img {
        width: 100%
    }
`;



export default CartEvent;
