@echo off
cd /d C:\your-project-path

for /l %%x in (1, 1, 10) do (
    echo Update %%x >> log.txt
    git add .
    git commit -m "Auto commit %%x"
)

git push origin main
pause