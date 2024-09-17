#!/bin/sh

RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"

get_package_manager() {
  if [ -x "$(command -v pkg)" ]; then
    echo "pkg"
  elif [ -x "$(command -v apt-get)" ]; then
    echo "apt-get"
  elif [ -x "$(command -v yum)" ]; then
    echo "yum"
  elif [ -x "$(command -v dnf)" ]; then
    echo "dnf"
  elif [ -x "$(command -v pacman)" ]; then
    echo "pacman"
  elif [ -x "$(command -v brew)" ]; then
    echo "brew"
  else
    echo "unsupported"
  fi
}

OS=$(uname -s)
PACKAGE_MANAGER=$(get_package_manager)

if [ "$OS" = "Linux" ] && [ "$PREFIX" = "/data/data/com.termux/files/usr" ]; then
  EXECUTABLE="$PREFIX/bin/FSS"
else
  EXECUTABLE="$HOME/bin/FSS"
fi

case "$OS" in
  Linux)
    if [ "$PACKAGE_MANAGER" = "unsupported" ]; then
      echo "${RED}[!]${YELLOW} Unsupported Linux distribution."
      exit 1
    fi
    ;;
  Darwin)
    if [ "$PACKAGE_MANAGER" != "brew" ]; then
      echo "${RED}[!]${YELLOW} Unsupported MacOS package manager."
      exit 1
    fi
    ;;
  *)
    echo "${RED}[!]${YELLOW} Unsupported OS."
    exit 1
    ;;
esac

create_executable() {
  echo "${BLUE}[+]${YELLOW} Updating package lists..."
  case "$PACKAGE_MANAGER" in
    pkg) pkg update -y ;;
    apt-get) sudo apt-get update -y ;;
    yum) sudo yum check-update -y ;;
    dnf) sudo dnf check-update -y ;;
    pacman) sudo pacman -Syu --noconfirm ;;
    brew) brew update ;;
  esac

  echo "${BLUE}[+]${YELLOW} Installing Node.js..."
  case "$PACKAGE_MANAGER" in
    pkg) pkg install nodejs -y ;;
    apt-get) sudo apt-get install nodejs -y ;;
    yum) sudo yum install nodejs -y ;;
    dnf) sudo dnf install nodejs -y ;;
    pacman) sudo pacman -S nodejs --noconfirm ;;
    brew) brew install node ;;
  esac

  mkdir -p "$(dirname "$EXECUTABLE")"
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
    create_executable
  fi
else
  create_executable
fi

