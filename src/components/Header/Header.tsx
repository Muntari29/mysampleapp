import { setLocalStorageItem } from "@/utils/localStorage";
import { memo } from "react";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const handleChangeTheme = () => {
    const hasClassNameDark =
      document.documentElement.classList.value === "dark";
    if (hasClassNameDark) {
      document.documentElement.classList.remove("dark");
      setLocalStorageItem("theme", "light");
      return;
    }
    document.documentElement.classList.add("dark");
    setLocalStorageItem("theme", "dark");
  };

  return (
    <header className="flex h-full box-border justify-end items-center bg-white dark:bg-dark-primary p-4">
      <div className="flex gap-4">
        <button
          className="flex items-center w-10 h-10 rounded-full bg-dark-primary dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-black"
          onClick={handleChangeTheme}
        >
          <div className="w-10 h-10 flex justify-center items-center">
            <MdDarkMode size={24} />
          </div>
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
