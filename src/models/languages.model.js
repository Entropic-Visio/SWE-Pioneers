const languagesService = require('../services/languages.service.js');

class Language {
    constructor(countryCode, language) {
        this.countryCode = countryCode;
        this.language = language;
        this.isOfficial = null;
        this.percentage = null;
        this.population = null;
    }

    async initializeLanguage() {
        const result = await languagesService.getLanguageByCode(this.countryCode);
        if (result) {
            this.isOfficial = result.IsOfficial;
            this.percentage = result.Percentage;
        } else {
            throw new Error("Language not found");
        }
    }
}

module.exports = Language;