import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import {db} from './db.js';
import session from 'express-session';
const app=express();
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
  }));

app.get("/",(req,res)=>{
    res.json("From server");
});

app.post("/Signup", (req, res) => {
    const q = "SELECT * FROM customer_Account WHERE email = ? OR Name = ?";
    db.query(q, [req.body.email, req.body.name], (err, data) => {
      if (err) return res.json(err);
  
      if (data.length) {
        return res.status(409).json("User already exists!");
      }
  
      // Hash the password before storing it in the database
      bcrypt.hash(req.body.password, 10, (hashErr, hash) => {
        if (hashErr) {
          return res.json(hashErr);
        }
  
        const insertQuery =
          "INSERT INTO customer_Account(Name, email, password) VALUES (?, ?, ?)";
        const values = [req.body.name, req.body.email, hash];
  
        db.query(insertQuery, values, (insertErr) => {
          if (insertErr) {
            return res.json(insertErr);
          }
  
          return res.status(200).json("User has been created");
        });
      });
    });
  });
  

app.post("/Login",(req,res)=>{
    const { name, password } = req.body;

try {
  const selectQuery = "SELECT * FROM customer_Account WHERE Name=?";
  db.query(selectQuery, [name], (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (result.length === 0) {
      return res.status(409).json("User does not exist!");
    }

    const user = result[0];
    console.log(user);

    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (compareErr, passwordMatch) => {
      if (compareErr) {
        return res.json(compareErr);
      }

      if (!passwordMatch) {
        return res.status(409).json("Incorrect password");
      }

      // Set up a session for the authenticated user
      req.session.Customer_id = user.Customer_id;

      console.log(user);

      return res.json({ message: "Login successful", user });
    });
  });
} catch (error) {
  console.error("Login error:", error);
  return res.json(error);
}

})

app.post("/Contact",(req,res)=>{
  const {name,email,subject,message}=req.body;
  const q="insert into feedback(name,email,subject,message) values (?,?,?,?)";
  db.query(q,[name,email,subject,message],(error,result)=>{
  if(error){
    res.json(error);
  } 
  res.json("feedback inserted");
  })
})

app.post("/logout",(req,res)=>{
  req.session.destroy(() => {
    res.json("user logged out successfully");
  });
})

app.get('/destinations', (req, res) => {
  const query = 'SELECT * FROM Destination';

  db.query(query, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(data);
    }
  });
});




app.listen(8000,()=>{
    console.log("server connected");
})

