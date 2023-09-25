import { useState } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="flex justify-between p-4">
      <h1 className="text-xl font-semibold">MeuApp</h1>
      <button onClick={toggleTheme}>
        Trocar para modo {theme === "light" ? "escuro" : "claro"}
      </button>
    </header>
  );
}
