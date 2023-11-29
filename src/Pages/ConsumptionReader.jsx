import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ConsumptionReader.css'
import { getAccessToken } from './Cookie';

const ConsumptionReader = () => {
  const [percentageConsumed, setPercentageConsumed] = useState(0);
  const access_token = getAccessToken()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
            Authorization: `Bearer ${access_token}`
        }
        const response = await axios.get('http://127.0.0.1:8000/api/consumption_reader/', {
            headers: headers
        });
        const data = response.data
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
        value={percentageConsumed/2}
        text={`${percentageConsumed/2}%`}
        styles={buildStyles({
          rotation: 0.5,
          strokeLinecap: 'round',
          textSize: '10px',
          pathTransitionDuration: 1.5,
          pathColor: 'lightblue',
          textColor: 'white',
          trailColor: 'grey',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default ConsumptionReader;
