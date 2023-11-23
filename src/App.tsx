import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Osaka", "Tokyo", "Kobe", "Oita", "Hokkaido"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
