wt --window 0 -p "Windows Powershell" -d . powershell -noExit "pnpm dev"
wt --window 0 -p "Windows Powershell" -d . powershell -noExit "firebase emulators:start --import=./saved_data --export-on-exit"
