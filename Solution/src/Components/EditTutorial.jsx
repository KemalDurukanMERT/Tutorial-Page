import { useState } from "react";

const EditTutorial = ({ editItem, editTutorial }) => {
  console.log(editItem.title);
  const [title, setTitle] = useState(editItem.title);

  const [desc, setDesc] = useState(editItem.description);

  const handleData = (e) => {
    e.preventDefault();
    editTutorial(editItem.id, title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder={editItem.title}
                  value={title || ""}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
                  placeholder={editItem.description}
                  value={desc || ""}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleData}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
