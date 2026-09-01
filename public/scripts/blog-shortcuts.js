let lastCopyInterruptAt = null;

const isEditableTarget = (target) =>
	target instanceof HTMLElement &&
	(target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

document.addEventListener('keydown', (event) => {
	if (event.defaultPrevented || event.repeat || isEditableTarget(event.target)) return;

	if (event.key === 'Escape') {
		window.location.assign('/blog/');
		return;
	}

	const isCopyShortcut =
		event.ctrlKey &&
		!event.metaKey &&
		!event.altKey &&
		!event.shiftKey &&
		event.key.toLowerCase() === 'c';

	if (!isCopyShortcut) {
		if (event.key !== 'Control') lastCopyInterruptAt = null;
	}
});

document.addEventListener('copy', (event) => {
	if (isEditableTarget(event.target) || window.getSelection()?.toString()) {
		lastCopyInterruptAt = null;
		return;
	}

	const now = performance.now();
	if (lastCopyInterruptAt !== null && now - lastCopyInterruptAt <= 900) {
		window.location.assign('/blog/');
		return;
	}

	lastCopyInterruptAt = now;
});
