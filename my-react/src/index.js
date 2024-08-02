import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ■ Chap02
import AppClass from "./AppClass";
import "./chap02/class.css";

// ■ Chap03
import MyHello from "./chap03/MyHello";
import EventBasic from "./chap03/EventBasic";
import StateBasic from "./chap03/StateBasic";
import books from "./chap03/books";
import ForList from "./chap03/ForList";
import ForNest from "./chap03/Fornest";
import ForFilter from "./chap03/ForFilter";
import ForSort from "./chap03/ForSort";
import SelectStyle from "./chap03/SelectStyle";
import StyledPanel from "./chap03/StyledPanel";
import TitledPanel from "./chap03/TitledPanel";
import ListTemplate from "./chap03/ListTemplate";
import TypeProp, { Member } from "./chap03/TypeProp";
import StateParent from "./chap03/StateParent";
import EventMouse from "./chap03/EventMouse";
import EventCompare from "./chap03/EventCompare";
import EventError from "./chap03/EventError";
import EventObj from "./chap03/EventObj";
import EventPoint from "./chap03/EventPoint";
import EventKey from "./chap03/EventKey";
import EventArgs from "./chap03/EventArgs";
import EventArgs2 from "./chap03/EventArgs2";
import EventPropagation from "./chap03/EventPropagation";
import EventOnece from "./chap03/EventOnce";
import EventPassive from "./chap03/EventPassive";
// ■ Chap04
import StateForm from "./chap04/StateForm";
import StateFormUC from "./chap04/StateFormUC";
import FormTextarea from "./chap04/FormTextarea";
import FormSelect from "./chap04/FormSelect";
import FormList from "./chap04/FormList";
import FormRadio from "./chap04/FormRadio";
import FormCheck from "./chap04/FormCheck";
import FormCheckMulti from "./chap04/FormCheckMulti";
import FormFile from "./chap04/FormFile";
import StateNest from "./chap04/StateNest";
import StateNestImmer from "./chap04/StateNestImmer";
import StateNestImmer2 from "./chap04/StateNestImmer2";
import StateTodo from "./chap04/StateTodo";
import FormBasic from "./chap04/FormBasic";

const root = ReactDOM.createRoot(document.getElementById("root"));
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

// root.render(
//   <SelectStyle mode="light" />
// );

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中!</p>
//     <p>ようこそ、WINGSプロジェクトへ!!</p>
//   </StyledPanel>
// );

// root.render(
//   <TitledPanel title={
//     <p>メンバー募集中！</p>
//   } body={
//     <p>ようこそ、WINGSプロジェクトへ</p>
//   }>
//   </TitledPanel>
// );

// const title = <p>メンバー募集中!</p>;
// const body = <p>ようこそ、WINGSプロジェクトへ</p>;
// root.render(
//   <TitledPanel title={title} body={body} />
// );

// root.render(
//   <TitledPanel>
//     <p key="title">メンバー募集中!</p>
//     <p key="body">ようこそ、WINGSプロジェクトへ</p>
//   </TitledPanel>
// );

// root.render(
//   <ListTemplate src={books}>
//     {elem => (
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title} ({elem.price}円)
//           </a>
//         </dt>
//         <dd>{elem.summary}</dd>
//       </>
//     )}
//   </ListTemplate>
// );

// root.render(
//   <ListTemplate src={books} render={ elem =>(
//     <>
//       <dt>
//         <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//           {elem.title} ({elem.price}円)
//         </a>
//       </dt>
//       <dd>{elem.summary}</dd>
//     </>
//   )} />
// );

// root.render(
//   <MyHello />
// );

// root.render(
//   // 正しい使い方
//   // <TypeProp prop1={new Member()} />
//   // 誤った例
//   <TypeProp prop1="hoge" />
// );

// root.render(
//   // 正しい使い方
//   // <TypeProp prop2="男性" />
//   // 間違った例
//   <TypeProp prop2="hoge" />
// );

// root.render(
//   // 正しい例
//   <TypeProp prop3="鈴木花子" />
//   // 誤った例
//   // <TypeProp prop3={new Member()} />
// );

// root.render(
//   // 正しい例
//   <TypeProp prop4={[15, 30]} />
//   // 誤った例
//   // <TypeProp prop3 prop4={[333, '鈴木花子']} />
// );

// root.render(
//   // 正しい例
//   <TypeProp prop5={{ '鈴木花子' : 15, '佐藤零': 30 }} />
//   // 誤った例
//   // <TypeProp prop5={{ '鈴木花子' : 15, '佐藤零' : '三十'}} />
// );

// root.render(
//   // 正しい例
//   // <TypeProp prop6={{ name: '鈴木花子', age: 35, sex: '女性', blood: 'A'  }} />
//   // 誤った例
//   <TypeProp prop6={{ age: 35, sex: '女性' }} />

// );

// root.render(
//   <StateParent />
// );

// root.render(
//   <EventMouse alt="ロゴ画像" beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif" afterSrc="https://www.web-deli.com/image/home_chara.gif" />
// );

// root.render(
//   <EventCompare />
// );

// root.render(
//   <EventError src="./image/wings.jpg" alt="サンプル画像" />
// );

// root.render(
//   <EventObj />
// );

// root.render(
//   <EventPoint />
// );

// root.render(
//   <EventKey />
// );

// root.render(
//   <EventArgs />
// );

// root.render(
//   <EventArgs2 />
// );

// root.render(
//   <EventPropagation />
// );

// root.render(
//   <EventOnece />
// );

// root.render(
//   <EventPassive />
// );

// root.render(
//   <StateForm />
// );

// root.render(
//   <StateFormUC />
// );

// root.render(
//   <FormTextarea />
// );

// root.render(
//   <FormSelect />
// );

// root.render(
//   <FormList />
// );

// root.render(
//   <FormRadio />
// );

// root.render(
//   <FormCheck />
// );

// root.render(
//   <FormCheckMulti />
// );

// root.render(
//   <FormFile />
// );

// root.render(
//   <StateNest />
// );

// root.render(<StateNestImmer />);
// root.render(<StateNestImmer2 />);
// root.render(<StateTodo />);
root.render(<FormBasic />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
