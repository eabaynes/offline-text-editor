const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// event listener for the beforeinstallprompt event, delaying the prompt
window.addEventListener('beforeinstallprompt', (event) => {
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    butInstall.classList.toggle('hidden', false);
});

// event listener for the install button
butInstall.addEventListener('click', async () => {
    const prompt = window.deferredPrompt;

    if (!prompt) {
        // The deferred prompt isn't available.
        return;
    }

    // Show the install prompt.
    prompt.prompt();

    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;

    // Hide the install button.
    butInstall.classList.toggle('hidden', true);
});

//  event listner to see if the app was installed. clear the deferredPrompt if it was
window.addEventListener('appinstalled', (event) => {
    // clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
});
