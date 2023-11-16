export function wrapTextOld(context: any, text: string, x: number, y: number, maxCharacters: number, lineHeight: number) {
	const pattern = `.{1,${maxCharacters}}`
	const regex = new RegExp(pattern, "g");
    const array = text.match(regex) || [];
	let nextY = y;
	for (let i = 0; i < array.length; i++) {
		if (i != array.length-1 && !array[i].endsWith(".") || !array[i].endsWith(" ") || !array[i].endsWith(",") || !array[i].endsWith("!")) {
			array[i] += "-";
		}
		context.fillText(array[i], x, nextY);
		nextY += lineHeight;
	};
}

export function wrapText(context: any, text: string, x: number, y: number, maxCharacters: number, lineHeight: number) {
	let words = text.split(" ");
	let finalSentences = [];
	let currentSentenceIndex = 0;
	let currentSentence = "";
	let isN = false;
	words.forEach(word => {
		isN = false;
		if (currentSentence.length + word.length < maxCharacters) {
			if (word.startsWith("\\n")) {
				word = word.substring(2);
				finalSentences[currentSentenceIndex] = currentSentence;
				currentSentenceIndex += 1;
				currentSentence = word + " ";
				isN = true;
			} else {
				currentSentence += word + " ";
			}
		} else {
			finalSentences[currentSentenceIndex] = currentSentence;
			currentSentenceIndex += 1;
			currentSentence = word + " ";
		}
	});
	finalSentences[currentSentenceIndex] = currentSentence;
	let nextY = y;
	finalSentences.forEach(sentence => {
		context.fillText(sentence, x, nextY);
		nextY += lineHeight;
	})
	context.fillText("Generated by xeer.", x, 200-5);
}

function isUpperCase(str: string) { 
	return (str == str.toUpperCase()); 
}

export function altWrapText(context: any, text: string, x: number, y: number, maxCharacters: number, lineHeight: number) {
	let words = text.split(" ");
	let finalSentences = [];
	let currentSentenceIndex = 0;
	let currentSentence = "";
	words.forEach(word => {
		if (currentSentence.length + word.length < maxCharacters) {
			if (isUpperCase(word[0])) {
				finalSentences[currentSentenceIndex] = currentSentence;
				currentSentenceIndex += 1;
				currentSentence = word + " ";
			} else {
				currentSentence += word + " ";
			}
		} else {
			finalSentences[currentSentenceIndex] = currentSentence;
			currentSentenceIndex += 1;
			currentSentence = word + " ";
		}
	});
	finalSentences[currentSentenceIndex] = currentSentence;
	if (finalSentences[0] == "") {
		finalSentences.shift();
	}
	let nextY = y;
	finalSentences.forEach(sentence => {
		context.fillText(sentence, x, nextY);
		nextY += lineHeight;
	})
	context.fillText("Generated by xeer.", x, 600-5);
}