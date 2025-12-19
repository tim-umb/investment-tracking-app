import PageTemplate from './components/PageTemplate/PageTemplate';
import './App.css';

function App() {
  return (
    <PageTemplate>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Welcome to Investment Tracking App</h2>
        <p>This is the main content area.</p>
      </div>
    </PageTemplate>
  );
}

export default App;
