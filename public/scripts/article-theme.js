(() => {
	const storageKey = 'whoislinxin-article-theme';
	const media = window.matchMedia('(prefers-color-scheme: dark)');

	const getSavedTheme = () => {
		try {
			const savedTheme = window.localStorage.getItem(storageKey);
			return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;
		} catch {
			return null;
		}
	};

	const getSystemTheme = () => (media.matches ? 'dark' : 'light');
	const applyTheme = (theme) => {
		document.documentElement.dataset.articleTheme = theme;
	};

	applyTheme(getSavedTheme() ?? getSystemTheme());

	document.addEventListener('DOMContentLoaded', () => {
		const button = document.querySelector('#article-theme-toggle');
		if (!(button instanceof HTMLButtonElement)) return;

		const updateButton = () => {
			const currentTheme = document.documentElement.dataset.articleTheme;
			const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
			button.textContent = nextTheme === 'light' ? '☼ Light' : '☾ Dark';
			button.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
			button.title = `Switch to ${nextTheme} theme`;
		};

		button.addEventListener('click', () => {
			const nextTheme =
				document.documentElement.dataset.articleTheme === 'dark' ? 'light' : 'dark';
			applyTheme(nextTheme);
			try {
				window.localStorage.setItem(storageKey, nextTheme);
			} catch {
				// The selected theme still applies for this page view.
			}
			updateButton();
		});

		media.addEventListener('change', () => {
			if (getSavedTheme()) return;
			applyTheme(getSystemTheme());
			updateButton();
		});

		updateButton();
	});
})();
