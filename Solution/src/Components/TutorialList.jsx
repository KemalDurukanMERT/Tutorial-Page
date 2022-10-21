import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = () => {
  const tutorialExample = [
    {
      id: 1,
      title: "merhaba",
      description: "deneme",
    },
    {
      id: 1,
      title: "merhaba",
      description: "deneme",
    },
  ];
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Description</th>
            <th className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorialExample.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit type="button" className="text-warning" size={20} />
                  <AiFillDelete
                    type="button"
                    className="text-danger"
                    size={20}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
