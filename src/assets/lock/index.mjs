// @ts-nocheck

const btn = document.querySelector('button');
const input = document.querySelector('input');

const destination = new URLSearchParams(location.search).get('url');

const checkIfPasswordTyped = async () => {
  const { passwordTyped } = await chrome.storage.session.get('passwordTyped');
  if (passwordTyped) location.href = destination;
};

const unlock = async () => {
  const value = input.value;
  const { password } = await chrome.storage.local.get('password');
  if (value === password) {
    chrome.storage.session.set({ passwordTyped: true });
    location.href = destination;
  } else {
    alert('❌ Wrong password!');
  }
};

btn.addEventListener('click', unlock);

input.addEventListener('keydown', (e) => e.key === 'Enter' && unlock());

document.addEventListener(
  'visibilitychange',
  () => document.visibilityState === 'visible' && checkIfPasswordTyped()
);

checkIfPasswordTyped();
