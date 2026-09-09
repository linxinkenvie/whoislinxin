(() => {
	const script = document.currentScript;
	if (!(script instanceof HTMLScriptElement)) return;

	const currentLanguage = script.dataset.currentLanguage;
	const chinesePath = script.dataset.chinesePath;
	const englishPath = script.dataset.englishPath;
	if (!currentLanguage || !chinesePath || !englishPath) return;

	const storageKey = 'whoislinxin-language';
	const getSavedLanguage = () => {
		try {
			const savedLanguage = window.localStorage.getItem(storageKey);
			return savedLanguage === 'zh' || savedLanguage === 'en' ? savedLanguage : null;
		} catch {
			return null;
		}
	};

	const browserLanguage = (navigator.languages?.[0] ?? navigator.language ?? 'en')
		.toLowerCase()
		.startsWith('zh')
		? 'zh'
		: 'en';
	const preferredLanguage = getSavedLanguage() ?? browserLanguage;
	const preferredPath = preferredLanguage === 'zh' ? chinesePath : englishPath;

	if (preferredLanguage !== currentLanguage && window.location.pathname !== preferredPath) {
		window.location.replace(preferredPath);
		return;
	}

	document.addEventListener('DOMContentLoaded', () => {
		const link = document.querySelector('[data-language-choice]');
		if (!(link instanceof HTMLAnchorElement)) return;

		link.addEventListener('click', () => {
			const selectedLanguage = link.dataset.languageChoice;
			if (selectedLanguage !== 'zh' && selectedLanguage !== 'en') return;
			try {
				window.localStorage.setItem(storageKey, selectedLanguage);
			} catch {
				// The normal link navigation still switches the language.
			}
		});
	});
})();
