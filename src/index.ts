import { Counter } from "./scripts/counter";

const btn = document.getElementById("counter");
if (btn) new Counter(btn as HTMLButtonElement);
