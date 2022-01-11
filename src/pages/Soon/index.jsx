import Menu from '../../components/Menu'
import Header from '../../components/Header'

import './style.scss';

const Soon = () => {
    return (
      <div className='soon'>
        <Menu/>
        <main>
        <Header page='Soon'/>
        </main>
      </div>
    );
  };
  
  export default Soon;