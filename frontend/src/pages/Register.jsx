import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../store/slices/userSlice';

const Register = () => {
  const[role,setRole] =useState("");
  const[name,setName] =useState("");
  const[email,setEmail] =useState("");
  const[phone,setPhone] =useState("");
  const[address,setAddress] =useState("");
  const[password,setPassword] =useState("");
  const[firstNiche,setFirstNiche] =useState("");
  const[secondNiche,setSecondNiche] =useState("");
  const[thirdNiche,setThirdNiche] =useState("");
  const[coverLetter,setCoverLetter] =useState("");
  const[resume,setResume] =useState("");


  const nichesArray = [
    "All",
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  const resumeHandler=(e)=>{
    const file=e.target.files[0];
    setResume(file);
  };

  const {loading,isAuthenticated,error,message} = useSelector((state)=>state.user);

  const dispatch= useDispatch();
  const navigateTo =useNavigate();

  const handleRegister =async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("role",role);
    formData.append("name",name);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("address",address);
    formData.append("password",password);
    if(role==="Job Seeker"){
      formData.append("firstNiche",firstNiche);
      formData.append("secondNiche",secondNiche);
      formData.append("thirdNiche",thirdNiche);
      formData.append("coverLetter",coverLetter);
      formData.append("resume",resume);

    }
    dispatch(register(formData));
   
  };

  useEffect(()=>{
    
  })


  return (
    <div>
      
    </div>
  )
}

export default Register
