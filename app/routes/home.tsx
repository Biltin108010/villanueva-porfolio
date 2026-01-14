import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "John Rhey Villanueva | Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of John Rhey R. Villanueva — IT student focused on streamlined school systems, inventory solutions, and design-forward experiences.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
