import img from "./assets/1.png";
import Books from "./components/Books.jsx";
import { books } from "./constants/mockData.js";
import Layout from "./layouts/Layout.jsx";

function App() {
  return (
    <>
    <Layout>
      <Books/>
    </Layout>
      
    </>
  );
}

export default App;
