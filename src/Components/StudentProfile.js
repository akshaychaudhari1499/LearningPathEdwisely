import React from 'react';


const StudentProfile = () => {
   const student= { 'firstname':'Akshay',
     'age':'24', 
     'major':'Science', 
     GPA:'8.48', 
     'profilePic':'https://images.unsplash.com/photo-1612299273045-362a39972259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' 
    }
  return (
    <div className="profile">
      <img src={student.profilePic} alt="Student Profile" className="profile-pic" />
      <div className="profile-info">
        <h2>{student.firstname}</h2>
        <p>Age: {student.age}</p>
        <p>Major: {student.major}</p>
        <p>GPA: {student.GPA}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
