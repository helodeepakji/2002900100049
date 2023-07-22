import './TrainSchedule.css';
import { useState, useEffect } from "react";

function TrainSchedule() {
  const [train, setTrain] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/train');
        const data = await response.json();
        setTrain(data); // Set the train state with the fetched data
      } catch (error) {
        console.error('Error fetching train data:' + error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div className="TrainSchedule">
      <h1>Train Schedule</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Train No</th>
              <th>Train Name</th>
              <th>Seats Available</th>
              <th>Ticket Price</th>
              <th>Departure time</th>
              <th>Arrival time</th>
              <th>Duration</th>
              <th>Arrival station</th>
              <th>Departure station</th>
            </tr>
          </thead>
          <tbody>
            {train.map((trainItem) => (
              <tr key={trainItem.train_id}>
                <td>{trainItem.train_id}</td>
                <td>{trainItem.train_name}</td>
                <td>{trainItem.seats_available}</td>
                <td>{trainItem.ticket_price}</td>
                <td>{trainItem.departure_time}</td>
                <td>{trainItem.arrival_time}</td>
                <td>{trainItem.duration}</td>
                <td>{trainItem.arrival_station}</td>
                <td>{trainItem.departure_station}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainSchedule;
