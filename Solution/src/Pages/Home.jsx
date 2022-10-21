import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import AddTutorial from "../Components/AddTutorial";
import TutorialList from "../Components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = `https://tutorials-api-cw.herokuapp.com/api/tutorials`;

  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials}/>
      <TutorialList tutorials={tutorials} getTutorials={getTutorials}/>
    </>
  );
};

export default Home;
