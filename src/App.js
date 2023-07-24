import './App.css';
import Accordion from './components/Accordion';
import { Routes, Route } from 'react-router-dom';
import TablePage from './pages/TablePage';

function App() {
  const items = [
    {
      label: 'Proverbs 20 vs 24',
      content: `It is the Lord who directs my life,
        for each step i take is ordained by God to bring me closer to my destiny.
        So much of my life then remains a mystery.`,
    },
    {
      label: 'Proverbs 10 vs 24',
      content: 'If you faint in the day of adversity, then your strngth is little.',
    },
    {
      label: '2 Timothy 2 vs 4',
      content: `A soldier on active duty doesnt get caught up in the marketplace making deals. He concentrates op
      carrying out orders`,
    },
  ];

  return (
    <div>
      {/* <Accordion items={items} />; */}

      <Routes>
        <Route path='/' element={<TablePage />} />

      </Routes>

    </div>
  );
}
export default App;
