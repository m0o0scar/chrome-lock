# Chrome Lock Extension 🔐

## Overview

Chrome Lock is a Chrome extension aimed at enhancing privacy and security by locking user access to webpages until the correct password is entered. It redirects any attempt to access a webpage to a password input screen if the session has not yet authenticated the user with the previously stored password. 

## How It Works

### Components

1. **Background Script:**
   - Located in `src/background/index.js`
   - Sets the access level for session storage, allowing both trusted and untrusted contexts to access it.
   
2. **Content Script:**
   - Located in `src/contentScript/index.js`
   - Runs on each webpage to check if the user has authenticated their session with the correct password.
   - Redirects the user to the lock page if they haven't authenticated with the session's password yet.
   
3. **Options Page:**
   - Located in `src/options/index.js`
   - Allows the user to set or clear the password stored in Chrome's local storage.
   - The password is used to authenticate access to web pages.
   
4. **Lock Page:**
   - Located in `src/assets/lock/index.mjs`
   - Provides a password input field for authentication.
   - If the correct password is entered
