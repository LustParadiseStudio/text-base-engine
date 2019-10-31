import { Liveroom, Bathroom } from "../Home";

function buildData() {
  return { randomNumber: Math.random() };
}

const registerComponents = [
  { id: "liveroom", build: buildData, component: Liveroom },
  { id: "bathroom", build: buildData, component: Bathroom }
];

export { registerComponents };
