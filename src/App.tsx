import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo,
} from "./components/features/card";
import { FeatureTitle } from "./components/features/title";
import { Hero } from "./components/hero";
import "./index.css";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    card: Todo,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: Colors,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availability,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: Music,
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
    card: SchedulingLinks,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: Team,
  },
];

function App() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Hero />
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>
    </div>
  );
}

export default App;
