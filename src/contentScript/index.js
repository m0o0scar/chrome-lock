// @ts-nocheck

async function main() {
  // check if user has typed in correct password in current session yet
  const { password } = await chrome.storage.local.get('password');
  const { passwordTyped } = await chrome.storage.session.get('passwordTyped');
  const needLogin = password && !passwordTyped;

  if (needLogin) {
    const lockPageUrl = chrome.runtime.getURL('src/assets/lock/index.html');
    window.location.href = `${lockPageUrl}?url=${encodeURIComponent(
      location.href
    )}`;
  }
}

main();
