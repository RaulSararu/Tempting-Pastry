import axios from "axios";
import React , { useEffect, useContext } from "react"; 
import { useParams } from "react-router-dom";
import { MyContext } from "../Context";
import { useNavigate } from "react-router";

export default function Google() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(MyContext);


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/auth/google/" + id);

      console.log("response:", response);

      if (response.data.success) {
        setCurrentUser(response.data.user);

        navigate(`/`); 
      }
    };

    getData();
  }, []);

  console.log("FROM GOOGLE LOGIN", currentUser._id);

  return <div>Hello from glogin at client with id {id}</div>;
}