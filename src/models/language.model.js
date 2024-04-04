const countryLanguageServices = require('../services/countryLanguage.services.js');
class Language {
    constructor(countryCodeAlpha3, language) {
        this.countryCodeAlpha3 = countryCodeAlpha3.toUpperCase();
        this.language = language;
        this.isOfficial = null;
        this.percentage = null;
        this.population = null;
    }

    async getLanguageInformation() {
        const result = await countryLanguageServices.getLanguageByCodeAndLanguage(this.countryCodeAlpha3, this.language);
        this.isOfficial = result.IsOfficial;
        this.percentage = result.Percentage;
    }

}

module.exports = { Language };