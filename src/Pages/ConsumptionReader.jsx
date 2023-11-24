import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ConsumptionReader.css'

const ConsumptionReader = () => {
  const [percentageConsumed, setPercentageConsumed] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/consumption_reader/');
        const data = response.data.data;
        setPercentageConsumed(data.percentage_consumed);
      } catch (error) {
        console.error('Error fetching consumption data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="consumption-reader">
      <h2>Consumption Reader</h2>
      <CircularProgressbar
        value={percentageConsumed}
        text={`${percentageConsumed}%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '10px',
          pathTransitionDuration: 0.5,
          pathColor: `rgba(62, 152, 199, ${percentageConsumed / 100})`,
          textColor: 'grey',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default ConsumptionReader;
