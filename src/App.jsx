import Header from './components/Header/Header';
import CoreConceps from './components/Header/CoreConcepts';
import Exampels from './components/Header/Exampels';

export default function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConceps />
        <Exampels />
      </main>
    </>
  );
}
