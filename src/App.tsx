import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const notify = (message, className, icon) => {
    toast(message, {
      duration: 4000,
      position: 'top-center',
      // position: 'top-left',
      // position: 'top-right',
      // position: 'Bottom-right',
      className: className,
      // Styling
      style: {
        // Your global toast styles go here
        // This will apply on all the toasts if one adds any styles
        // color: "blue"
      },
      // Custom Icon
      icon: icon,
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      // Show sad message if the input is empty
      notify('Empty input! Try to type something 🤪', 'error-toast', '😢');
      setSuccessMessage('');
    } else {
      // Show success message under the input field
      notify(`Good Job ${inputValue}`, 'success-toast', '😄');
      setSuccessMessage(inputValue);
    }
  };

  return (
    <>
      <div>
        <button
          className="custom-toast"
          onClick={() => notify('Make me a toast', 'custom-toast', '👏😃')}
        >
          Make me a toast
        </button>
        <button
          className="error-toast"
          onClick={() => notify('Invalid input', 'error-toast', '😢')}
        >
          Invalid input
        </button>
        <button
          className="success-toast"
          onClick={() => notify('Good Job', 'success-toast', '😄')}
        >
          Success
        </button>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: 'black' }}>Type your name</h3>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              style={{ width: '200px', padding: '5px' }}
            />
          </div>
          <button type="submit" style={{ margin: '10px' }}>
            Submit
          </button>
          {successMessage && (
            <h3 style={{ color: 'black' }}>{successMessage}</h3>
          )}
        </form>

        <Toaster />
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </div>
    </>
  );
}

export default App;
