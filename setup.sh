#!/bin/sh

RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"

EXECUTABLE="$PREFIX/bin/FSS"

createExecutable() {
  echo "${BLUE}[+]${YELLOW} Updating package lists..."
  pkg update -y
  
  echo "${BLUE}[+]${YELLOW} Installing Node.js..."
  pkg install nodejs -y

  touch "$EXECUTABLE"
  CURRENT_PATH=$(pwd)

  cat << EOF > "$EXECUTABLE"
#!/bin/sh
if [ -e "$CURRENT_PATH" ] && [ -e "$CURRENT_PATH/index.js" ]; then
  cd "$CURRENT_PATH"
  node index.js
else 
  echo "${GREEN}${CURRENT_PATH} or ${CURRENT_PATH}/index.js ${YELLOW}does not exist."
fi
EOF

  echo "${BLUE}[+]${YELLOW} Setting executable permissions..."
  chmod +x "$EXECUTABLE"

  echo "${BLUE}[+]${YELLOW} Installation complete. Running FSS..."
  if [ -e "$CURRENT_PATH/index.js" ]; then 
    FSS
  else 
    echo "${GREEN}index.js ${YELLOW}does not exist."
  fi
}

if [ -e "$EXECUTABLE" ]; then
  EXECUTABLEOUTP=$(cat "$EXECUTABLE")
  TARGETDIR=$(echo "$EXECUTABLEOUTP" | grep -oP '(?<=cd ")[^"]*')
  if [ -e "$TARGETDIR" ]; then
    echo "${BLUE}[+]${GREEN} FSS${YELLOW} is already installed and executable. There is no need to recreate it."
    echo "${BLUE}[+]${YELLOW} Simply run: ${GREEN}FSS"
  else 
    echo "${BLUE}[+]${YELLOW} The target directory does not exist. Proceeding to create the executable for FSS..."
    createExecutable
  fi
else
  createExecutable
fi



