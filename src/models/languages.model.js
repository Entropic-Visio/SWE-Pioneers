const languagesService = require('../services/languages.service.js');

class Language {
    constructor(countryCode, language) {
        this.CountryCode = countryCode;
        this.Language = language;
        this.IsOfficial = null;
        this.Percentage = null;
        this.Population = null;
    }

    async initializeLanguage() {
        const result = await languagesService.getLanguageByCode(this.CountryCode, this.Language);
        if (result) {
            this.IsOfficial = result.IsOfficial;
            this.Percentage = result.Percentage;
        } else {
            throw new Error("Language not found");
        }
    }
}

module.exports = Language;