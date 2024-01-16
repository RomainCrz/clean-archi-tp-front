import "./App.css";
import { MainTabs } from "./pages/MainTabs";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="w-full flex justify-center">
      <Toaster />
      <MainTabs />
    </div>
  );
}

export default App;
