import Banner from './components/Banner';
import Faq from './components/Faq';
import Separator from './components/Separator';
import { ValueProps1, ValueProps2, ValueProps3, ValueProps4 } from './components/ValueProps';


function App() {
  return (
    <div className="App">
      <Banner />
      <Separator />
      <ValueProps1 />
      <Separator />
      <ValueProps2 />
      <Separator />
      <ValueProps3 />
      <Separator />
      <ValueProps4 />
      <Separator />
      <Faq />
      <Separator />
    </div>
  );
}

export default App;
