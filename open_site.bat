@echo off
echo 🚀 Открытие сайта By Vadya Design...
echo.

REM Проверяем существование HTML файла
if not exist "kaito-style.html" (
    echo ❌ Файл kaito-style.html не найден!
    pause
    exit /b 1
)

echo ✅ Файл найден: kaito-style.html
echo 🌐 Открываем сайт в браузере...
echo.

REM Открываем HTML файл в браузере по умолчанию
start "" "kaito-style.html"

echo ✅ Сайт открыт в браузере!
echo 📍 Если браузер не открылся, найдите файл kaito-style.html и откройте его вручную
echo.
pause

