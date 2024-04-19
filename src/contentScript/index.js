// @ts-nocheck

async function main() {
  // check if user has typed in correct password in current session yet
  const { password } = await chrome.storage.sync.get('password');
  const { passwordTyped } = await chrome.storage.session.get('passwordTyped');

  if (password && !passwordTyped) {
    document.write('');

    const passwordForm = document.createElement('div');
    passwordForm.id = 'chromeLock_PasswordForm';
    passwordForm.innerHTML = `
      <div class="container">
        <h1>🔒 Enter Password</h1>
        <p><input type="password" id="password" placeholder="password" /></p>
        <p><button id="submitBtn">Unlock</button></p>
      </div>
    `;
    document.appendChild(passwordForm);

    passwordForm.querySelector('button').addEventListener('click', () => {
      const value = passwordForm.querySelector('input').value;
      if (value === password) {
        chrome.storage.session.set({ passwordTyped: true });
        location.reload();
      } else {
        alert('❌ Wrong password!');
      }
    });
  }
}

main();
