import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <h1>BookIt</h1>
      <h2>The #1 Community Board for Personal Growth Books! 📚</h2>
      <Card name="Atomic Habits" author="James Clear" image="image" website="Buy Now"/>
      <Card name="Deep Work" author="Cal Newport" image="image" website="Buy Now"/>
    </div>
  )
}

export default App