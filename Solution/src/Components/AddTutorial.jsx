const AddTutorial = () => {
  return (
    <div className="container">
        <h1 className="display-6 text-danger text-center mt-3">Tutorial List</h1>
      <form className="text-center">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptiuon"
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
