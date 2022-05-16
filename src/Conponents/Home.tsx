import axios from "axios";
import { useEffect, useState } from "react";
import ListOfEvents from "./ListOfEvents";

export interface Event {
  name: string;
  description: string;
  url: string;
  localDate: string;
  localTime: string;
  venues: string;
  imageUrl: string;
}

interface ApiEvent {
  name: string;
  description: string;
  url: string;
  dates: any;
  _embedded: any;
  images: any;
}

function Home() {
  const [searchEvent, setSearchEvent] = useState<string>("");
  const [listOfEvents, setListOfEvents] = useState<Event[]>([]);
  const [eventsFiltered, setEventsFiltered] = useState<Event[]>([]);

  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchEvent(event.target.value);
  };
  const filterEvent = (e: React.FormEvent<HTMLFormElement>) => {
    setEventsFiltered(
      listOfEvents.filter((event) =>
        event.name.toLowerCase().includes(searchEvent.toLowerCase())
      )
    );
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?&locale=fr&countryCode=fr&size=100&apikey=37GDSMWA5jNwN9vHl8zXcj1Gv9trVfhp`
      )
      .then((response) => response.data._embedded.events)
      .then((result) => (
        setListOfEvents(
          result.map((event: ApiEvent) => ({
            name: event.name,
            description: event.description,
            url: event.url,
            localDate: event.dates.start.localDate,
            localTime: event.dates.start.localTime,
            venues: event._embedded.venues[0].name,
            imageUrl: event.images[1].url,
          }))),
          setEventsFiltered(
            result.map((event: ApiEvent) => ({
              name: event.name,
              description: event.description,
              url: event.url,
              localDate: event.dates.start.localDate,
              localTime: event.dates.start.localTime,
              venues: event._embedded.venues[0].name,
              imageUrl: event.images[1].url,
            }) 
          )
        ))
      );
  }, []);
  return (
    <div>
      <form onSubmit={filterEvent} className="homecontainer">
        <label>
          <input type="text" value={searchEvent} onChange={handleEvent} />
        </label>
      </form>
      <ListOfEvents listOfEvents={eventsFiltered} />
    </div>
  );
}

export default Home;
