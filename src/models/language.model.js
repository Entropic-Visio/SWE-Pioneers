const countryLanguageServices = require('../services/countryLanguage.services.js');

class Language {
    constructor(countryCodeAlpha3) {
        this.countryCodeAlpha3 = countryCodeAlpha3.toUpperCase();
        this.language = null;
        this.isOfficial = null;
        this.percentage = null;
    }

    async getLanguageInformation() {
        if (typeof this.name !== "string") {
            const result = await countryLanguageServices
        }
    }
}