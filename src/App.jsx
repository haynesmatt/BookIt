import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <h1>BookIt</h1>
      <h2>The #1 Community Board for Personal Growth Books! 📚</h2>
      <Card name="Atomic Habits" author="James Clear" image="./src/assets/atomic-habits.webp" website="Buy Now"/>
      <Card name="Deep Work" author="Cal Newport" image="./src/assets/deep-work.png" website="Buy Now"/>
      <Card name="How to Win Friends & Influence People" author="Dale Carnegie" image="./src/assets/how-to-win-friends.webp" website="Buy Now"/>
      <Card name="Thinking Fast & Slow" author="Daniel Kahneman" image="./src/assets/thinking-fast-slow.webp" website="Buy Now"/>
      <Card name="The Subtle Art of Not Giving a F*ck" author="Mark Manson" image="./src/assets/the-subtle-art-of.webp" website="Buy Now"/>
      <Card name="The 7 Habits of Highly Effective People" author="Stephen R. Covey" image="./src/assets/the-7-habits.webp" website="Buy Now"/>
      <Card name="The Art of Saying No" author="Damon Zahariades" image="./src/assets/the-art-of-saying-no.webp" website="Buy Now"/>
      <Card name="Build" author="Tony Fadell" image="./src/assets/build.webp" website="Buy Now"/>
      <Card name="The Defining Decade" author="Meg Jay" image="./src/assets/the-defining-decade.webp" website="Buy Now"/>
      <Card name="Think and Grow Rich" author="Napoleon Hill" image="./src/assets/think-and-grow-rich.webp" website="Buy Now"/>
    </div>
  )
}

export default App