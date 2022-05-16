import styled from "styled-components";
import CartEvent from "./CartEvent";
import { Event } from "./Home";

interface Props {
  listOfEvents: Event[];
}

const ListOfEvents = ({ listOfEvents }: Props) => {
  return (
    <ListEvents>
      {listOfEvents.map((event: Event) => (
        <CartEvent event={event} />
      ))}
    </ListEvents>
  );
}

const ListEvents = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default ListOfEvents;
