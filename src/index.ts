/* eslint-disable no-console */
import app from "./app";

const port: number = 3000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});