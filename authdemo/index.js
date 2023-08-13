const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'auth') {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}

app.get("/cities", (req,res) => {
    const cities = [
        {
            id: 1,
            name: "London",
        },
        {
            id: 2,
            name: "Delhi",
        },
        {
        id: 3,
        name: "Patna",
        },
    ];
  
    res.json(cities);
});

app.get("/users",isAuth, (req,res) => {
    const users = [
        {
            id: 1,
            name: "Shashi kumar",
          

        },
        {
            id: 2,
            name: "Ravi kumar",
          

        },
        {
            id: 3,
            name: "vinay kumar",
          

        },
        {
            id: 4,
            name: "Narendra kumar",
          

        },

        
    ];
  
    res.json(users);
});


app.listen(port, () => console.log(`Express app running on port ${port}!`));