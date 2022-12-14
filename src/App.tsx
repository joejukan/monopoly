import { BoardUi } from 'components';
import { MonopolyProvider } from 'contexts/monopoly';
import styles from './app.module.scss';

function App() {
  return (
    <MonopolyProvider>
      <div className={styles.app}>
        <BoardUi />
      </div>
    </MonopolyProvider>
  );
}

export default App;
