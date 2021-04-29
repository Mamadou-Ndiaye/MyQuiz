import app from 'firebase/app';

import React, { Component } from 'react'


const config = {
    apiKey: "AIzaSyApKDcihSLQEzHH267dFCwlZf9dqnja_bM",
    authDomain: "myquiz-5d316.firebaseapp.com",
    projectId: "myquiz-5d316",
    storageBucket: "myquiz-5d316.appspot.com",
    messagingSenderId: "67614049490",
    appId: "1:67614049490:web:d9980cc285fbb617c2590b"
  };

class Firebase  {
    constructor() {
       app.initializeApp(config);
    }

  }
export default  Firebase;