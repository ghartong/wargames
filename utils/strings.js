export const capFirstLetter = (word) => {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
};
