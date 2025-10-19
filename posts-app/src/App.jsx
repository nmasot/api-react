import React from 'react';
import MiApi from './components/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-4">
        <h1>📝 Blog Posts API</h1>
        <p>Explora 100 posts de una API pública. Busca y ordena por título.</p>
      </header>
      <main className="container mt-4">
        <MiApi />
      </main>
    </div>
  );
}

export default App;