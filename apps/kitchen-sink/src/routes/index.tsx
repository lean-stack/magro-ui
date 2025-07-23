import { Button } from "@magro-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <h1>MagroUI Kitchen Sink</h1>
      <div className="p-8">
        <Button variant="primary">Works</Button>
      </div>
    </div>
  );
}
