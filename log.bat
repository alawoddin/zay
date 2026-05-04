@echo off
cd /d C:\your-project-path

for /l %%x in (1, 1, 10) do (
    echo Update %%x >> log.txt
    git add .
    git commit -m "i commit the code but not show the commit it is scure  %%x"
)

git push origin main
pause