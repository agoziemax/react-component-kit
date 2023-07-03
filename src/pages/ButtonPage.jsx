import './App.css';
import Button from '../components/Button';
import { FaBeer, FaSearch } from 'react-icons/fa';

function ButtonPage() {
  return (
    <div className='App pl-3 pt-2'>
      <div>
        <Button className=''>
          Click me!! <FaSearch />
        </Button>
      </div>
      <div>
        <Button className='bg-red-500 text-white'>Buy Now!!</Button>
      </div>
      <div>
        <Button className='bg-green-500 text-white rounded p-2'>See Deal</Button>
      </div>
      <div>
        <Button>Complete</Button>
      </div>
      <div>
        <Button>Continue</Button>
      </div>
      <div>
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
