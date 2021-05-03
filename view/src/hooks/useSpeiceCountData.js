import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSpeiceCountData() {

  const [count, setCount] = useState([]);
  const specieName = ['TOTAL', 'KILLER WHALE', 'MINKE', 'GRAY WHALE', 'HUMBACK', 'DALLS PORPOISE', 'HARBOR PORPOISE', 'ATLANTIC WHITE SIDED DOLPHIN',
    'PACIFIC WHITE SIDED DOLPHIN', 'HARBOR SEAL', 'NORTHERN ELEPHANT SEAL', 'SOUTHERN ELEPHANT SEAL', 'CALIFORNIA SEA LION',
    'STELLER SEA LION', 'SEA OTTER', 'OTHER'];

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:9001/count/total`),
      axios.get(`http://localhost:9001/count/orca`),
      axios.get(`http://localhost:9001/count/minke`),
      axios.get(`http://localhost:9001/count/gray-whale`),
      axios.get(`http://localhost:9001/count/humpback`),
      axios.get(`http://localhost:9001/count/dalls-porpoise`),
      axios.get(`http://localhost:9001/count/harbor-porpoise`),
      axios.get(`http://localhost:9001/count/atlantic-white-sided-dolphin`),
      axios.get(`http://localhost:9001/count/pacific-white-sided-dolphin`),
      axios.get(`http://localhost:9001/count/harbor-seal`),
      axios.get(`http://localhost:9001/count/northern-elephant-seal`),
      axios.get(`http://localhost:9001/count/southern-elephant-seal`),
      axios.get(`http://localhost:9001/count/california-sea-Lion`),
      axios.get(`http://localhost:9001/count/steller-sea-Lion`),
      axios.get(`http://localhost:9001/count/sea-otter`),
      axios.get(`http://localhost:9001/count/other`),
    ]).then((all) => {
      console.log("all", all);
      all.forEach(speice => {
        let tempArr = [...count];
        tempArr.push(speice.data);
        setCount(prev => [...prev, speice.data]);
      });
    });
  }, []);

  const result = [];
  specieName.forEach((name, index) => {
    const speiceCountObj = {};
    const number = count[index];
    speiceCountObj["name"] = name.toLowerCase();
    speiceCountObj["count"] = number;
    result.push(speiceCountObj);
    return result;    
  });

  return {
    count,
    specieName,
    result
  };
}
