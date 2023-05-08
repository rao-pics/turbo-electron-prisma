import child from "child_process";
import { join } from "path";

const dirname = process.cwd();

child.exec(
  `ln -s ${join(dirname, "../../node_modules/.prisma")} ${join(
    dirname,
    "./node_modules",
  )}`,
);

child.exec(
  `ln -s ${join(dirname, "../../node_modules/@prisma")} ${join(
    dirname,
    "./node_modules",
  )}`,
);
