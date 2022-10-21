import axios from "axios";
import { useState } from "react";

const AddTutorial = ({getTutorials}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    postTutorial(newTutorial);
    setTitle("");
    setDescription("");
  };
  
  const postTutorial = async (newTutorial) => {
    const url = `https://tutorials-api-cw.herokuapp.com/api/tutorials`;
    try {
      await axios.post(url, newTutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="addTutorial my-5">
      <h1 className="display-6 text-center text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit} className="text-center mx-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Your Description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
