import React, { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './about.css';
import firebase from 'firebase';
import config from '../../firebase/config';

const About = () => {

  useEffect(() => {
    var btn = document.getElementById('btnSingUp');

    btn.onclick = function () {
      var email = document.getElementById('mail').value;
      var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(email, password)
      alert('跑玩')
    }
  }, []);

  // 登入
  useEffect(() => {
    var btnLogin = document.getElementById('btnLogin');

    btnLogin.onclick = function () {
      var email = document.getElementById('mail').value;
      var password = document.getElementById('password').value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res)
          if (user) {
            console.log(user.email)
          } else {
            console.log('no ')
          }
        })
        .catch((error) => {
          console.log(error.message);
        });

      var user = firebase.auth().currentUser;

    }
  }, []);

  let app;
  if (!firebase.apps.length) {
    app = firebase.initializeApp(config);
    console.log('初始化')
  } else {
    app = firebase.app();
    console.log('非初始')
  } // 也許是該放在 Redux

  // 資料庫
  const database = app.database()
  const path = '/test';
  database.ref(path).once("value", e => {
    console.log(e.val())
  });


  var provider = new firebase.auth.GoogleAuthProvider(); // google 註冊初始

  const signupPopup = () => { // 彈出視窗註冊
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // 可以獲得 Google 提供 token，token 可透過 Google API 獲得其他數據。  
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token)
        console.log(user)
        // 這裡面就包含使用者資料，直接存在redux上面應該就行。要保持登入就把這些資料存在 cookie 吧
      });
  }

  return (
    <div className="about">

      <button id="googleSingUpPopup" onClick={signupPopup}>使用google註冊(Popup)</button>


      <div>   輸入帳號 : <input id="mail" type="email" /> </div>
      <div>   輸入密碼 : <input id="password" type="password" /> </div>
      <button id="btnSingUp">註冊</button>
      <button id="btnLogin">登入</button>

      <Jumbotron>
        <h1 className="about__title">maxime quas veniam</h1>
        <pre className="about__content">
          {`
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis alias harum voluptatem nostrum vero mollitia cum,
          voluptas neque praesentium provident quasi, obcaecati enim consequatur illo.
          Hic autem minus aperiam velit.
          Ducimus corrupti iusto officia aperiam eius ad neque sit minima ut
          nostrum aliquideaque qui maxime quas veniam doloremque quaerat repellendus esse,
          rem dolorum tempora perspiciatis impedit?
          Possimus omnis pariatur et quia eum molestiae, sint unde,
          reprehenderit recusandae consequuntur iusto eos quis ipsum veritatis,
          tempore deleniti totam sunt nisi a!
          `}
        </pre>
      </Jumbotron>
    </div >
  );
}


export default About;
