const attributes = ["id", "class"];
const regexTypes = ["^", "$", "*", ""];
const names = [
	{ prefixSuffix: "ad" },
	{ prefixSuffix: "Ad" },
	{ prefixSuffix: "AD" },
	{ contains: "adfuel" },
	{ contains: "adblock" },
	{ contains: "DisplayAd" },
	{ contains: "onetrust" },
	{ contains: "sap-insights" },
	{ contains: "cookie" },
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
					((regexType === "^" || regexType === "$") && name.prefixSuffix) ||
					(regexType === "*" && name.contains) ||
					(regexType === "" && name.exact)
				) {
					const selector =
						"[" +
						attribute +
						regexType +
						'="' +
						(regexType === "$" ? separator : "") +
						(regexType === "*"
							? name.contains
							: regexType === ""
							? name.exact
							: name.prefixSuffix) +
						(regexType === "^" ? separator : "") +
						'"]';
					if (!selectors.includes(selector)) selectors.push(selector);
				}
			});
		});
	});
});
console.debug(selectors);

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
