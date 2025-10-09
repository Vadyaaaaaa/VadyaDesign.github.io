@echo off
echo Установка расширений для Cursor...
echo.

REM Python разработка
echo Устанавливаем расширения для Python...
cursor --install-extension ms-python.python
cursor --install-extension ms-python.vscode-pylance
cursor --install-extension ms-python.debugpy
cursor --install-extension ms-python.flask
cursor --install-extension njpwerner.autodocstring

echo.
echo Устанавливаем расширения для React/JavaScript...
REM React/JavaScript разработка
cursor --install-extension dsznajder.es7-react-js-snippets
cursor --install-extension formulahendry.auto-rename-tag
cursor --install-extension xabikos.javascriptsnippets
cursor --install-extension esbenp.prettier-vscode
cursor --install-extension dbaeumer.vscode-eslint

echo.
echo Устанавливаем расширения для веб-разработки...
REM Веб-разработка
cursor --install-extension ecmel.vscode-html-css
cursor --install-extension ritwickdey.liveserver
cursor --install-extension pranaygp.vscode-css-peek
cursor --install-extension abusaidm.html-snippets

echo.
echo Устанавливаем полезные утилиты...
REM Полезные утилиты
cursor --install-extension eamodio.gitlens
cursor --install-extension christian-kohler.path-intellisense
cursor --install-extension pkief.material-icon-theme
cursor --install-extension usernamehw.errorlens
cursor --install-extension rangav.vscode-thunder-client

echo.
echo Устанавливаем дополнительные инструменты...
REM Дополнительные инструменты
cursor --install-extension antfu.vite
cursor --install-extension steoates.autoimport
cursor --install-extension aaron-bond.better-comments

echo.
echo Все расширения установлены!
echo Перезапустите Cursor для применения изменений.
pause


