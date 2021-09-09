import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    address: "Some address",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    address: "Some address",
    description: "This is a second meetup",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
