import { Moon, Sun } from "lucide-react";
import useDarkMode from "../../../hooks/useDarkMode";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="relative group z-50 flex items-center justify-center">
      <button
        onClick={() => setIsDark(!isDark)}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="relative w-5 h-5 overflow-hidden">
          {/* Sun Icon: Slides/Rotates out when dark */}
          <div
            className={`absolute inset-0 transition-all duration-500 transform ${
              isDark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-8 rotate-90 opacity-0"
            }`}
          >
            <Sun className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>

          {/* Moon Icon: Slides/Rotates in when light */}
          <div
            className={`absolute inset-0 transition-all duration-500 transform ${
              !isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-8 -rotate-90 opacity-0"
            }`}
          >
            <Moon className="w-5 h-5 text-slate-700 fill-slate-700" />
          </div>
        </div>
      </button>

      {/* Tooltip: Styled to match your branding */}
      <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900 dark:bg-blue-600 px-2 py-1 rounded shadow-xl pointer-events-none">
        {isDark ? "Light" : "Dark"}
      </span>
    </div>
  );
};

