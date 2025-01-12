import { useState, useEffect } from "react";

// Random ID aur unique value generate karne ka hook
const useRandomId = (): string => {
  const [randomId, setRandomId] = useState<string>("");

  useEffect(() => {
    const generateRandomId = () => {
      const uniqueId = `${Math.random()
        .toString(36)
        .substr(2, 9)}-${Date.now()}`;
      const formattedId = uniqueId.replace(/-/g, "");
      return formattedId;
    };

    setRandomId(generateRandomId());
  }, []);

  return randomId;
};

export default useRandomId;
