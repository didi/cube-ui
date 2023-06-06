import klawSync from "klaw-sync";
import { resolve } from "path";
import { spawn } from "child_process";

const entries = klawSync(resolve(__dirname, "../src/modules"), {
  depthLimit: 0,
}).map((node) => node.path);

const run = (index: number) => {
  const build = spawn("vite", [
    "build",
    "-c",
    "vite.module.config.ts",
    `${index}`,
  ]);

  return new Promise((res, rej) => {
    build.stdout.on("data", (data) => {
      console.log(`${data}`);
    });

    build.stderr.on("data", (data) => {
      console.error(`${data}`);
      rej();
    });

    build.on("close", (code) => {
      console.log(`Success`);
      res(undefined);
    });
  });
};

(async () => {
  let index = 0;

  for (let i of entries) {
    try {
      await run(index);
    } catch (error) {

    }
    index++
  }
})();
