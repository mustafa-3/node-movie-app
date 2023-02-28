import "./App.css";
import MainLayout from "./layout/MainLayout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
}

export default App;
