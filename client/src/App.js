import TextEditor from "./Pages/TextEditor/TextEditor"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import Draw from "./Pages/TextEditor/Draw"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path="/documents/:id" element={<TextEditor />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </Router>
  )
}

export default App