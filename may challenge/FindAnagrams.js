/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const anagrams = [];
    if(p.length > s.length) return anagrams;

    const pCharacterCountMap = buildCharacterCountMap(p);
    const sWindowCharacterCountMap = buildCharacterCountMap(s.substring(0, p.length));
    let amountOfMatchingEntries = countMatchingCharacters(pCharacterCountMap, sWindowCharacterCountMap);

    // handle first case
    if(checkAllCharactersMatch(pCharacterCountMap, amountOfMatchingEntries)) anagrams.push(0);

    for(let i = p.length; i < s.length; i++) {
        
        const charToRemoveFromWindow = s[i - p.length];
        const charToAddToWindow = s[i];
        
        if(charToRemoveFromWindow !== charToAddToWindow) {
            const toRemoveUpdate = sWindowCharacterCountMap.get(charToRemoveFromWindow) - 1;
            sWindowCharacterCountMap.set(charToRemoveFromWindow, toRemoveUpdate);

            const toRemoveInP = pCharacterCountMap.get(charToRemoveFromWindow);
            if(toRemoveUpdate + 1 === toRemoveInP)
                amountOfMatchingEntries--;
            else if(toRemoveUpdate === toRemoveInP)
                amountOfMatchingEntries++;
            

            let toAddUpdate = sWindowCharacterCountMap.get(charToAddToWindow);
            if(!toAddUpdate)
            {
                sWindowCharacterCountMap.set(charToAddToWindow, 1);
                toAddUpdate = 1;
            }
            else
                sWindowCharacterCountMap.set(charToAddToWindow, ++toAddUpdate);
            const toAddInP = pCharacterCountMap.get(charToAddToWindow);
            if(toAddUpdate - 1 === toAddInP)
                amountOfMatchingEntries--;
            else if(toAddUpdate === toAddInP)
                amountOfMatchingEntries++;
        }
        
        if(checkAllCharactersMatch(pCharacterCountMap, amountOfMatchingEntries))
            anagrams.push(i - p.length + 1);
    }

    return anagrams;
};

function buildCharacterCountMap(phrase) {
    const characterCountMap = new Map();
    for(const character of phrase) {
        if(!characterCountMap.get(character))
            characterCountMap.set(character, 0)
        characterCountMap.set(character, characterCountMap.get(character) + 1);
    }
    return characterCountMap;
}

function countMatchingCharacters(pMap, sWindowMap) {
    let count = 0;
    for(const pKey of pMap.keys()) {
        if(pMap.get(pKey) === sWindowMap.get(pKey))
            count++;
    }
    return count;
}

function checkAllCharactersMatch(pCharacterCountMap, amountOfMatchingEntries) {
    return pCharacterCountMap.size === amountOfMatchingEntries;
}


console.log(findAnagrams("abab", "ab"));
