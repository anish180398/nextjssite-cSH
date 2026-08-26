import sharp from "sharp";
import { generateCoverSvg } from "./lib/cover-svg.mjs";

const svg = generateCoverSvg({ slug: "test-post-one", kicker: "Engineering · Test", motif: "network" });
await sharp(Buffer.from(svg)).png().toFile("/tmp/kryttr-cover-test.png");
console.log("done");
