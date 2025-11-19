import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/BuggyComponent';
import SafeComponent from './components/SafeComponent';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🧪 Error Handling Test in React + TypeScript </h1>

      <SafeComponent />

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
