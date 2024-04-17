const languagesService = require('../services/languages.service.js');

class Language {
    constructor(countryCodeAlpha3, langauge) {
        this.countryCodeAlpha3 = countryCodeAlpha3.toUpperCase();
        this.langauge = langauge;
        this.isOfficial = null;
        this.percentage = null;
        this.population = null;
    }

    async initializeLanguage() {
        // TODO COMPELTE
    }
}