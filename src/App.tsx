import { useEffect } from 'react'
import './App.css'

function App() {
  // Auto-redirect to the new domain
  useEffect(() => {
    window.location.href = 'https://pharma-at-hand.app';
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://pharma-at-hand.app';
  };

  return (
    <div className="app">
      <div className="container">
        <img src="/logoBlue.png" className='image' alt="" />
        <h1 className="title">Pharma at Hand</h1>
        <p className="description">
          We moved domains to <strong>pharma-at-hand.app</strong>
        </p>
        <button className="redirect-button" onClick={handleRedirect}>
          Go to pharma-at-hand.app
        </button>
        <p className="redirect-text">
          Redirecting you automatically...
        </p>
      </div>
    </div>
  )
}

export default App
