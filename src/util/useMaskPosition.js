import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function getMousePosition(e) {
    setMousePosition({ x: parseInt(e.clientX), y: parseInt(e.clientY) });
    console.log(mousePosition);
  }
  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);
    return () => window.removeEventListener("mousemove", getMousePosition);
  }, []);
  return mousePosition;
}
