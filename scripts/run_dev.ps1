code .
wt -w 0 nt pwsh -noExit -c "pnpm dev"
wt -w 0 nt pwsh -noExit -c "firebase emulators:start --import=./saved_data"
