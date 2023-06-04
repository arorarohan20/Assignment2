/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Rohan Arora Student ID: rarora65 Date: June 03,2023
*
********************************************************************************/ 


const collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then(() => {
    

    collegeData.getAllStudents()
      .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);
      })
      .catch((error) => {
        console.error(error);
      });

    collegeData.getCourses()
      .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);
      })
      .catch((error) => {
        console.error(error);
      });

    collegeData.getTAs()
      .then((tas) => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
