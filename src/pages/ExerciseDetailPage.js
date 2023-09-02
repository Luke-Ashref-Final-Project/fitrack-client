// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExerciseDetailPage = () => {
  const id = useParams();
  console.log(id);
  
  return <div>Hello!</div>;
};

export default ExerciseDetailPage;
