import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      Synerthink Remix Template
      <Button>Shadcn Test</Button>
    </h1>
  );
}
