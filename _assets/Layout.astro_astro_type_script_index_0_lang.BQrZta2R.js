const e=localStorage.getItem("darkMode")==="true"||window.matchMedia("(prefers-color-scheme: dark)").matches;e&&document.documentElement.classList.add("dark");
