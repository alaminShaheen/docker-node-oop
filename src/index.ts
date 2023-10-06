import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.get("/", (request: Request, response: Response) => {
	console.log("Hello world!!!");
	response.json({ hello: "new" });
});

app.get("/yo", (request: Request, response: Response) => {
	response.json({ hello: "yo mother" });
});

const port  = Number(process.env.PORT || 3000)

app.listen(port, '0.0.0.0', () => {
	console.log(`Server listening on http://localhost:${port}`);
})