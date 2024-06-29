import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ■ Chap02
import AppClass from './AppClass';
import './chap02/class.css';

// ■ Chap03
import MyHello from './chap03/MyHello';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import books from './chap03/books';
import ForList from './chap03/ForList';
import ForNest from './chap03/Fornest';
import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';
import SelectStyle from './chap03/SelectStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// setInterval(() => {
//   root.render(
//     <p>現在時刻:{ (new Date()).toLocaleString()}</p>
//   );
// }, 1000);

// root.render(
//   <React.StrictMode>
//     <AppClass/>
//   </React.StrictMode>
// );

// root.render(
//   <>
//     <p>こんにちは、世界!</p>
//     <p>はじめまして、React!!</p>
//   </>
// );

// const name = '鈴木';
// root.render(
//   <p>こんにちは、{name}です。</p>
// );

// const content = `<h3>WINGSプロジェクト</h3><img src="https://wings.msn.to/image/wings.jpg" />`;
// root.render(
  // <p>{content}</p>
//   <p dangerouslySetInnerHTML={{__html: content}}></p>
// );

// root.render(
//   <div>{'Tom &amp; Jerry'}</div>
//   // <div>Tom &amp; Jerry</div>
//   // <div>{'Tom \u0026 Jerry'}</div>
//   // <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>

// );

// root.render(
//   <ul>
//     <li>{true}</li>
//     <li>{false}</li>
//     <li>{undefined}</li>
//     <li>{null}</li>
//     <li>{0}</li>
//     <li>{String(true)}</li>
//   </ul>
// );

// const dest = 'https://ja.react.dev/';
// root.render(
//   <a href={dest}>React本家サイト</a>
// );

// const attrs = {
//   href: 'https://wings.msn.to/',
//   download: false,
//   target: '_blank',
//   rel: 'help'
// };

// root.render(
//   <a href={attrs.href} download={attrs.download} target={attrs.target} rel={attrs.rel}>サポートページへ</a>
//   <a {...attrs}>サポートページへ</a>
// );

// const props = {
//   color: 'white',
//   backgroundColor: 'Blue',
//   padding: 3,
// };

// root.render(
  // <p style={props}>WINGSプロジェクト</p>
  // <p className='hoge'>WINGSプロジェクト</p>
// );

// const title = 'これからはじめるVue.js 3実践入門';

// root.render(
//   <div className='main'>
//     <p>「{title}」(SBクリエティブ刊)</p>
//     <img src='https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg' alt={title} />
//     絶賛発売中！
//   </div>
// );
// root.render(
//   React.createElement('div', { className: 'main'}, 
//     React.createElement('p', null, `「${title}」（SBクリエイティブ刊）`),
//     React.createElement('img', {
//       src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
//       alt: title,
//     }),
//     '絶賛発売中！'
//   )
// );

// root.render(
//   <MyHello myName="鈴木" />
// );

// root.render(
//   <EventBasic type="time" />
// );

// root.render(
//   <StateBasic init={0} />
// );

// root.render(
//   <ForList src={books} />
// );
// root.render(
//   <ForNest src={books} />
// );

// root.render(
//   <ForFilter src={books} />
// );

// root.render(
//   <ForSort src={books} />
// );

root.render(
  <SelectStyle mode="light" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
