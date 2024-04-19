// @ts-nocheck

const input = document.getElementById('password');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

const { password } = await chrome.storage.sync.get('password');
console.log('password:', password);
input.value = password || '';

saveBtn.addEventListener('click', async () => {
  if (input.value) {
    await chrome.storage.sync.set({ password: input.value });
    alert('✅ Password Set');
  }
});

clearBtn.addEventListener('click', async () => {
  if (input.value) {
    await chrome.storage.sync.remove('password');
    input.value = '';
    alert('✅ Password Cleared');
  }
});
