import { useCallback, useEffect } from "react";
import { hotjar } from "react-hotjar";

const useHotJar = (router) => {
  useEffect(() => {
    const id = 2987690;
    hotjar.initialize(id, 6);
  }, []);

  const handleListen = useCallback((state) => {
    console.log(state.pathname);
    hotjar.stateChange(state.pathname);
  }, []);

  useEffect(() => {
    if (router) {
      return router.history.listen(handleListen);
    }
  }, [handleListen, router]);
};

export default useHotJar;
