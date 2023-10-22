import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fbGet } from "../../Config/Firebasemethod";



export default function AcceptorId() {
  const params = useParams<any>();
  const [donorsData, setdonorsData] = useState<any>([]);
  const [donors, setdonors] = useState<any>();

  const getData = () => {
    fbGet("donors")
      .then((res: any) => {
        console.log(res);
        setdonorsData([...res]);
        const matchingDonors = res.find((donors: any) => donors.id === params.id);
        if (matchingDonors) {
        
          setdonors(matchingDonors);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };


  
  useEffect(() => {
    getData();
  }, [params.id]); // Add params.id as a dependency to rerun the effect when it changes

  return (
    <div>
      <h1>Donors Detail</h1  >
      <p>Name: {donors?.name}</p>
      <p>Father Name: {donors?.fatherName}</p>
      <p>Contact: {donors?.contact}</p>
      <p>CNIC: {donors?.cnic}</p>
      <p>Email: {donors?.email}</p>     
      <p>City: {donors?.city}</p>
      <p>Country: {donors?.country}</p>
      <p>Address: {donors?.address}</p>
      <p>Gender: {donors?.gender}</p>
    </div>
  );
}

