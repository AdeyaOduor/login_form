import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://my-bff-service.com';

function MyComponent({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

function MyBFFComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/my-data`).then((response) => {
      setData(response.data);
    });
  }, []);

  return <MyComponent data={data} />;
}

// When may it be advantageous to use the BFF pattern to your React application, then? One example is having a frontend application 
// that is both large and sophisticated, with several API calls, data processing snd aggregation responsibilities, such as a dashboard. 
//   By separating your heavy processing logic from your frontend, you create a more scalable and maintainable architecture.
