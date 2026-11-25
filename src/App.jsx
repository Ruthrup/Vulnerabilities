
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Vulnerabilities from "./pages/Vulnerabilities";

import {
  DashboardPage,
  DependenciesPage,
  ReportsPage,
  SettingsPage,
  HelpPage
} from "./pages/OtherPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/dependencies"
          element={<DependenciesPage />}
        />

        <Route
          path="/vulnerabilities"
          element={<Vulnerabilities />}
        />

        <Route
          path="/reports"
          element={<ReportsPage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

        <Route
          path="/help"
          element={<HelpPage />}
        />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
