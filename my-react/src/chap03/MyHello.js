// Prop-Typesをインストール
import PropTypes from 'prop-types';

// export default function MyHello(props) {
//     return (
//         <div>こんにちは、{props.myName}さん!</div>
//     );
// }

function MyHello(props) {
    return (
        <div>こんにちは、{props.myName}さん！</div>
    );
}

// 型情報を宣言
MyHello.propTypes = {
    myName: PropTypes.string.isRequired
};

export default MyHello;