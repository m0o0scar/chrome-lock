// @ts-nocheck

const input = document.getElementById('password');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

const { password } = await chrome.storage.local.get('password');
console.log('password:', password);
input.value = password || '';

const savePassword = async () => {
  if (input.value) {
    await chrome.storage.local.set({ password: input.value });
    alert('✅ Password Set');
  }
};

saveBtn.addEventListener('click', savePassword);

input.addEventListener('keydown', (e) => e.key === 'Enter' && unlock());

clearBtn.addEventListener('click', async () => {
  if (input.value) {
    await chrome.storage.local.remove('password');
    input.value = '';
    alert('✅ Password Cleared');
  }
});
