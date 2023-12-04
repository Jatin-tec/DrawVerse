import { Tldraw } from "@tldraw/tldraw";
import "./Draw.css";

export default function Draw() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw persistenceKey="demo" />
    </div>
  );
}
