# FACEBOOK SPAM SHARE

**FSS** is a tool designed to automate interactions on Facebook by using access tokens. It can spam shares on Facebook posts and offers various token management features.

## Installation
To install **FSS**, run the following commands:
```bash
cd $HOME &&
apt update &&
pkg install git &&
git clone https://github.com/Kairu-bit/FSpamShare &&
cd FSpamShare &&
chmod +x setup.sh &&
./setup.sh
```

## Usage
To start **FSS**, simply execute:
```bash
FSS
```

Once launched, a menu with the following options will appear:

1. **Spam Share**: Share a Facebook post multiple times.
2. **Show Tokens**: Display the stored Facebook access tokens.
3. **Token Management**: Manage your access tokens (add or delete tokens).
4. **Feedback**: Provide feedback or suggestions.
5. **Exit**: Exit the program.

## Adding Facebook Access Tokens
To add a Facebook access token:
1. Select the "Token Management" option from the menu.
2. Choose "Add Token".
3. Enter your Facebook username, email, or phone number.
4. Enter your Facebook password.
5. If the message "Token Was Successfully Saved" appears, the token has been stored.

> [!WARNING]
> For security reasons, DO NOT use your main Facebook account. It is recommended to use a dummy or newly created account to avoid potential suspensions or account lockouts.

> [!NOTE]
> Important Notice I am not interested in your account's content. This account will solely be used for automated spam sharing of your posts.

To spam shares on a Facebook post:

1. Select the "Spam Share" option.
2. Enter the URL of the Facebook post.
3. Set the number of shares you want.

## Auto Update

The program automatically checks for updates from the Git repository. If updates are found, it will pull the latest changes.

## License
[![MIT LICENSE]](./LICENSE);
