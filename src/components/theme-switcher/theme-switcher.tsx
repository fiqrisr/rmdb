import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

import { SunIcon } from "@/icons/SunIcon";
import { MoonIcon } from "@/icons/moon-icon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      size="lg"
      isSelected={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Switch.Control className="data-[selected=true]:bg-accent">
        <Switch.Thumb>
          <Switch.Icon>
            {theme === "dark" ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
          </Switch.Icon>
        </Switch.Thumb>
      </Switch.Control>
    </Switch>
  );
};
