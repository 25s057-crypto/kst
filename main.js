const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// AI 도움으로 추가: 요청 데이터 처리
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 기존 웹페이지 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// AI 도움으로 작성: MySQL DB 연결 설정

const db = mysql.createConnection({
    host: 'mysql-6094218-sunrint-5b20.d.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_h9Cg4zDioISbpt7Lo7w',
    database: 'defaultdb',
    port: 19135,
  
    ssl: { rejectUnauthorized: false }
  });
  
  db.connect((err) => {
    if (err) {
      console.error('DB 연결 실패:', err.message);
      return;
    }
  
    console.log('DB 연결 성공!');
  });