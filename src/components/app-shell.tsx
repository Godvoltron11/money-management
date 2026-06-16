import { ReactNode } from "react";
import TopNavbar from "./top-navbar";
import "./app-shell.css";

type AppShellProps = {
  children: ReactNode;
  onLogout: () => void;
};

export default function AppShell({ children, onLogout }: AppShellProps) {
  return (
    <div className="app-shell">
      <TopNavbar onLogout={onLogout} />
      <main className="app-shell__content">{children}</main>
    </div>
  );
}
