import { Outlet } from 'react-router-dom';
import NavBar from '../pages/NavBar';

const LayoutComponent = () => {
    return (
      <>
        {/* <header>Header Content</header> */}
        <NavBar />
        <main className='w-100'>
          <Outlet /> {/* Nested routes render here */}
        </main>
        <footer>Footer Content</footer>
      </>
    );
  }

export default LayoutComponent
  