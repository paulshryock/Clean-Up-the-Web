const attributes = ["id", "class"];
const regexTypes = ["^", "$", "*"];
const names = [
	{ short: "ad" },
	{ short: "Ad" },
	{ short: "AD" },
	{ short: "adfuel" },
	{ long: "adblock" },
	{ long: "DisplayAd" },
	{ long: "onetrust" },
	{ long: "sap-insights" },
	{ exact: "taw" },
];

const separators = ["-", "_"];

/**
 * CSS selectors.
 * @type {Array}
 */
const selectors = [];
attributes.forEach((attribute) => {
	regexTypes.forEach((regexType) => {
		names.forEach((name) => {
			separators.forEach((separator) => {
				if (
					(regexType === "*" && name.long) ||
					(regexType !== "*" && name.short)
				) {
					const selector =
						"[" +
						attribute +
						regexType +
						'="' +
						(regexType === "^" ? separator : "") +
						(regexType === "*"
							? name.long
							: regexType === ""
							? name.exact
							: name.short) +
						(regexType === "$" ? separator : "") +
						'"]';
					if (!selectors.includes(selector)) selectors.push(selector);
				}
			});
		});
	});
});

/**
 * Get the latest group of DOM elements matching the selectors, loop through,
 * and remove them all.
 */
function removeElements() {
	const elements = document.querySelectorAll(selectors.join(", "));
	for (const i = 0; i < elements.length; i++) {
		elements[i].parentElement.removeChild(elements[i]);
	}
}

/**
 * Call removeElements when <body> has updated child elements.
 */
const observer = new MutationObserver(removeElements);
observer.observe(document.querySelector("body"), { childList: true });
