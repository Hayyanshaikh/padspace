import { useState, useEffect } from "react";

// Type for the hook's argument
type UseFormattedDateProps = number | null;

const useFormattedDate = (timestamp: UseFormattedDateProps): string => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    if (timestamp) {
      const date = new Date(timestamp * 1000);

      const formatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setFormattedDate(formatted);
    }
  }, [timestamp]);

  return formattedDate;
};

export default useFormattedDate;
