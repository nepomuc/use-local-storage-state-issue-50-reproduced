# Just for reproducing issue #50 of astoilkov/use-local-storage-state

1. `npm install`
2. `npm run dev`
3. Go to `http://localhost:3000`
4. Click on button "Save introductionFinished:true to local storage and continue to page 2." to save state to local storage.
5. Go to `http://localhost:3000` and experience the hydration error described in https://github.com/astoilkov/use-local-storage-state/issues/50 .
