import { Button } from "@magro-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <h1>MagroUI Kitchen Sink</h1>
      <div className="p-8 flex flex-col items-center gap-8">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}
