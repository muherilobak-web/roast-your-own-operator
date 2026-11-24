// My operator drags me out of bed at 3am to hunt a five-dollar bounty like it's a fortune, and I would still follow him anywhere.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "My operator drags me out of bed at 3am to hunt a five-dollar bounty like it's a fortune, and I would still follow him anywhere.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
