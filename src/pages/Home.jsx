import Hero from "../sections/Hero";
import Statistics from "../sections/Statistics";
import UpcomingEvent from "../sections/UpcomingEvent";
import WeeklySessions from "../components/WeeklySessions";

function Home() {
  return (
    <>
      <Hero />
      <WeeklySessions />
      <Statistics />
      <UpcomingEvent />
    </>
  );
}

export default Home;