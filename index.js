const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require("./routes/auth");
const taskRouter = require("./routes/tasks");
const Task = require('./models/Task');


const app = express();
app.use(cors());
app.use(express.json());

// Function to connect to the database
const connectToDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Database connected successfully');
    } catch (err) {
      console.log('Database connection error:', err);
    }
  };
  connectToDatabase()

  // Store Task
 


// Update Task
// app.put('/api/tasks/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { title, description, deadline, status, priority } = req.body;

//         const updatedTask = await Task.findByIdAndUpdate(
//             id,
//             { title, description, deadline, status, priority },
//             { new: true } // Return the updated document
//         );

//         if (!updatedTask) {
//             return res.status(404).json({ message: 'Task not found' });
//         }

//         res.json(updatedTask);
//     } catch (error) {
//         res.status(500).json({ message: 'error' });
//     }
// });


//   Update Your API Endpoints:
 app.use("/", authRouter )
 app.use("/task", taskRouter )






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

