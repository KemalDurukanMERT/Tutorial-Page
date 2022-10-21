import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({tutorials, getTutorials}) => {
  const [editItem, setEditItem] = useState("");

  const editTutorial = async (id, title, description) => {
    const url = `https://tutorials-api-cw.herokuapp.com/api/tutorials`
    const edited = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: description }));

    await axios.put(`${url}/${id}`, edited[0]);
    getTutorials();
  };

  const deleteTutorial = async (id) => {
    const url = `https://tutorials-api-cw.herokuapp.com/api/tutorials`
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error);
    }
    getTutorials()
  } 

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                    onClick={() => setEditItem(item)}
                    />
                  <AiFillDelete 
                    size={22}
                    type='button'
                    className="text-danger"
                    onClick={()=> deleteTutorial(id)}
                    />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editItem={editItem} editTutorial={editTutorial}/>
    </div>
  );
};

export default TutorialList;
