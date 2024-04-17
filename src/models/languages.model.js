const languagesService = require('../services/languages.service.js');

class Language {
    constructor(countryCodeAlpha3, langauge) {
        this.countryCodeAlpha3 = countryCodeAlpha3.toUpperCase();
        this.langauge = null;
        this.isOfficial = null;
        this.percentage = null;
        this.population = null;
    }

    async getLanguageInfomation() {
        if (typeof this.langauge !== "string") {
                const result = await languagesService.getLanguageByCode(this.countryCodeAlpha3);
                if (result) { 
                    this.langauge = result.Language;
                    this.isOfficial = result.IsOfficial;
                    this.percentage = result.Percentage;
                    this.population = parseInt(result.Population);
                } else {
                    throw new Error("Language not found");
                }
        }
    }

    async initializeLanguage() {
        if (typeof this.langauge !== "string") {
            const result = await languagesService.getLanguageByCode(this.countryCodeAlpha3);
            if (result) {
                this.langauge = result.langauge;
                return this.langauge
            }
        }
    }
}

module.exports = Language;