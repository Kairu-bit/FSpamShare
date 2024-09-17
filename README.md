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

- **Spam Share**: Share a Facebook post multiple times.
- **Show Tokens**: Display the stored Facebook access tokens.
- **Token Management**: Manage your access tokens (add or delete tokens).
- **Feedback**: Provide feedback or suggestions.
- **Exit**: Exit the program.

## Adding Facebook Access Tokens
To add a Facebook access token:
- Select the "Token Management" option from the menu.
- Choose "Add Token".
- Enter your Facebook username, email, or phone number.
- Enter your Facebook password.
- If the message "Token Was Successfully Saved" appears, the token has been stored.

> [!WARNING]
> For security reasons, DO NOT use your main Facebook account. It is recommended to use a dummy or newly created account to avoid potential suspensions or account lockouts.

> [!NOTE]
> Important Notice I am not interested in your account's content. This account will solely be used for automated spam sharing of your posts.

To spam shares on a Facebook post:

- Select the "Spam Share" option.
- Enter the URL of the Facebook post.
- Set the number of shares you want.

## Auto Update

The program automatically checks for updates from the Git repository. If updates are found, it will pull the latest changes.

## License
[MIT LICENSE](./LICENSE)
