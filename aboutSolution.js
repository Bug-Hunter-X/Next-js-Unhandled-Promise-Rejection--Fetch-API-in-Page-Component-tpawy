```javascript
// pages/aboutSolution.js
import {useEffect, useState} from 'react';

async function getApiData(){
  try{
    const response = await fetch('https://api.example.com/data');
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch(error){
    console.error('Error fetching data:', error);
    return null;
  }
}

function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{      
    const fetchData = async () => {
      const apiData = await getApiData();
      setData(apiData);
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
}

export default About;
```