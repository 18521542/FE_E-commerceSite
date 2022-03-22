import logo from './logo.svg';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`This is for khoa luan tot nghiep of Trong & Linh`}
        </a>
      </header>
      <MessengerCustomerChat
        pageId="1420082828281837"
        appId="317973160172635"
      />
    </div>
  );
}

export default App;
