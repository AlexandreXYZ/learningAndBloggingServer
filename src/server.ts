import express, {Response, Request, NextFunction} from 'express';

const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("hi")
})
app.get("/home", (req, res) => {
    res.send(['a', 'b', 'c', 'd', 'e', 'f'])
})


app.listen(3001, () => console.log('Server started!'))