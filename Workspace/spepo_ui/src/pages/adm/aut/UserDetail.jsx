import React, { useState, useEffect } from 'react';
import {getAPI} from '../../../services/api';
import ViewDetails from '../../../components/form/ViewDetails';
import { useParams } from 'react-router-dom';


const svClass = "AutUserService";
const svName = "SVGet";
const userDTO = "userDTO";
const detailsDTO = "detailsDTO";

const UserDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getUser = { "svClass": svClass, "svName": svName, userDTO: { "id": id } };
      const displayItem = {};
      try {
        const response = await getAPI(getUser);

        if (response.data) {

          Object.entries(response.data).forEach(([key, value]) => {
            if (key === "status" && value === 0) {
              displayItem[key] = "vô hiệu hóa";
            } else if (key === "role" && value === 1) {
              displayItem[key] = "admin";
            } else {
              displayItem[key] = value;
            }
          });

          //    setData(displayItem);
        }


      } catch (error) {
        console.error('Error fetching data:', error);
      }


      const getUserDetail = { "svClass": "AutDetailsService", "svName": svName, detailsDTO: { "userId": id } };

      const displayItemDetail = {};
      try {
        const response = await getAPI(getUserDetail);
        if (response.data) {

          Object.entries(response.data).forEach(([key, value]) => {

            displayItemDetail[key] = value;

          });
          //setData(displayItemDetail);

        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      const combinedData = {
        ...displayItem,
        ...displayItemDetail
      };
      setData(combinedData);
    };

    fetchData();
  }, []);

  return (
    <ViewDetails data={data} svClass={svClass} objDTO={userDTO} />
  )
};
export default UserDetail