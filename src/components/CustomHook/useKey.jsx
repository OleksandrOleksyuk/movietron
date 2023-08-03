import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function callback(evt) {
      if (evt.code.toLowerCase() == key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}
