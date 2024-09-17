#!/bin/sh

RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"

OS=$(uname -s)

if [ "$OS" = "Linux" ]; then
  if command -v apt-get > /dev/null; then
    PACKAGE_MANAGER="apt-get"
  elif command -v yum > /dev/null; then
    PACKAGE_MANAGER="yum"
  elif command -v dnf > /dev/null; then
    PACKAGE_MANAGER="dnf"
  elif command -v pacman > /dev/null; then
    PACKAGE_MANAGER="pacman"
  else
    echo "${RED}[!]${YELLOW} Unsupported Linux distribution."
    exit 1
  fi
elif [ "$OS" = "Darwin" ]; then
  PACKAGE_MANAGER="brew"
else
  echo "${RED}[!]${YELLOW} Unsupported OS."
  exit 1
fi

EXECUTABLE="$HOME/bin/FSS"

createExecutable() {
  echo "${BLUE}[+]${YELLOW} Updating package lists..."
  if [ "$PACKAGE_MANAGER" = "apt-get" ]; then
    sudo apt-get update -y
  elif [ "$PACKAGE_MANAGER" = "yum" ]; then
    sudo yum check-update -y
  elif [ "$PACKAGE_MANAGER" = "dnf" ]; then
    sudo dnf check-update -y
  elif [ "$PACKAGE_MANAGER" = "pacman" ]; then
    sudo pacman -Syu --noconfirm
  elif [ "$PACKAGE_MANAGER" = "brew" ]; then
    brew update
  fi
  
  echo "${BLUE}[+]${YELLOW} Installing Node.js..."
  if [ "$PACKAGE_MANAGER" = "apt-get" ]; then
    sudo apt-get install nodejs -y
  elif [ "$PACKAGE_MANAGER" = "yum" ]; then
    sudo yum install nodejs -y
  elif [ "$PACKAGE_MANAGER" = "dnf" ]; then
    sudo dnf install nodejs -y
  elif [ "$PACKAGE_MANAGER" = "pacman" ]; then
    sudo pacman -S nodejs --noconfirm
  elif [ "$PACKAGE_MANAGER" = "brew" ]; then
    brew install node
  fi

  mkdir -p "$(dirname "$EXECUTABLE")"
  touch "$EXECUTABLE"
  CURRENT_PATH=$(pwd)

  cat << EOF > "$EXECUTABLE"
#!/bin/sh
if [ -e "$CURRENT_PATH" ] && [ -e "$CURRENT_PATH/index.js" ]; then
  cd "$CURRENT_PATH"
  node index.js
else 
  echo "${CURRENT_PATH} or ${CURRENT_PATH}/index.js does not exist."
fi
EOF

  echo "${BLUE}[+]${YELLOW} Setting executable permissions..."
  chmod +x "$EXECUTABLE"

  echo "${BLUE}[+]${YELLOW} Installation complete. Running FSS..."
  if [ -e "$CURRENT_PATH/index.js" ]; then 
    "$EXECUTABLE"
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

