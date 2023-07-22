// import './TrainSchedule.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Train() {
    const { train_no } = useParams();
    const [train, setTrain] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/train/'+train_no);
        const data = await response.json();
        setTrain(data); // Set the train state with the fetched data
      } catch (error) {
        console.error('Error fetching train data:' + error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
        <td>{train.train_id}</td>
    </div>
  );
}

export default Train;
