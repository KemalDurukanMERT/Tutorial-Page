import AddTutorial from "../Components/AddTutorial";
import TutorialList from "../Components/TutorialList";

const Home = () => {
  const url = `https://tutorials-api-cw.herokuapp.com/api/tutorials`;
  

  return (
    <div className="container">
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
