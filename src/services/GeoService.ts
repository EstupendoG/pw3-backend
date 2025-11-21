import prisma from "../prismaClient";
import ContinentRepository from "../repositories/ContinentRepository";
import CountryRepository from "../repositories/CountryRepository";
import Continent from "../models/Continent";
import Country from "../models/Country";

interface RestCountry {
    name: {
        common: string;
    };
    translations?: {
        por?: {
            common: string;
        };
    };
    languages?: Record<string, string>;
    currencies?: Record<string, { name: string }>;
    continents?: string[];
    flag?: string;
    population?: number;
}

const CONTINENTS_MAP: Record<string, string> = {
  "Africa": "África",
  "Antarctica": "Antártida",
  "Asia": "Ásia",
  "Europe": "Europa",
  "North America": "América do Norte",
  "South America": "América do Sul",
  "Oceania": "Oceania"
};

const LANGUAGES_PT: Record<string, string> = {
  "Afrikaans": "Africânder",
  "Albanian": "Albanês",
  "Amharic": "Amárico",
  "Arabic": "Árabe",
  "Armenian": "Armênio",
  "Aymara": "Aimará",
  "Azerbaijani": "Azeri",
  "Bangladeshi": "Bengali",
  "Basque": "Basco",
  "Belarusian": "Bielorrusso",
  "Bengali": "Bengali",
  "Berber": "Berbere",
  "Bislama": "Bislama",
  "Bosnian": "Bósnio",
  "Bulgarian": "Búlgaro",
  "Burmese": "Birmanês",
  "Cambodian": "Cambojano",
  "Carolinian": "Carolínio",
  "Catalan": "Catalão",
  "Chibarwe": "Chibarwe",
  "Chinese": "Chinês",
  "Croatian": "Croata",
  "Czech": "Tcheco",
  "Danish": "Dinamarquês",
  "Dari": "Dari",
  "Divehi": "Divehi",
  "Dutch": "Holandês",
  "English": "Inglês",
  "Estonian": "Estoniano",
  "Faroese": "Faroês",
  "Fijian": "Fijiano",
  "Finnish": "Finlandês",
  "French": "Francês",
  "Georgian": "Georgiano",
  "German": "Alemão",
  "Ghanaian": "Ganês",
  "Greek": "Grego",
  "Greenlandic": "Gronelandês",
  "Guaraní": "Guarani",
  "Gujarati": "Gujarati",
  "Haitian Creole": "Crioulo Haitiano",
  "Hausa": "Hauçá",
  "Hebrew": "Hebraico",
  "Hindi": "Hindi",
  "Hungarian": "Húngaro",
  "Icelandic": "Islandês",
  "Igbo": "Ibo",
  "Indonesian": "Indonésio",
  "Irish": "Irlandês",
  "Italian": "Italiano",
  "Japanese": "Japonês",
  "Javanese": "Javanês",
  "Kazakh": "Cazaque",
  "Khmer": "Khmer",
  "Korean": "Coreano",
  "Kurdish": "Curdo",
  "Kyrgyz": "Quirguiz",
  "Lao": "Laosiano",
  "Latin": "Latim",
  "Latvian": "Letão",
  "Lingala": "Lingala",
  "Lithuanian": "Lituano",
  "Luxembourgish": "Luxemburguês",
  "Macedonian": "Macedônio",
  "Malagasy": "Malgaxe",
  "Malay": "Malaio",
  "Malayalam": "Malaiala",
  "Maltese": "Maltês",
  "Maldivian": "Maldiviano",
  "Marathi": "Marathi",
  "Mongolian": "Mongol",
  "Montenegrin": "Montenegrino",
  "Nepali": "Nepalês",
  "Norwegian": "Norueguês",
  "Norwegian Nynorsk": "Norueguês Nynorsk",
  "Pali": "Páli",
  "Panjabi": "Panjabi",
  "Papiamento": "Papiamento",
  "Persian (Farsi)": "Persa",
  "Polish": "Polonês",
  "Portuguese": "Português",
  "Punjabi": "Punjabi",
  "Romanian": "Romeno",
  "Russian": "Russo",
  "Samoan": "Samoano",
  "Sango": "Sango",
  "Sanskrit": "Sânscrito",
  "Serbian": "Sérvio",
  "Seychellois Creole": "Crioulo Seichelense",
  "Shona": "Shona",
  "Sinhala": "Cingalês",
  "Slovak": "Eslovaco",
  "Slovene": "Esloveno",
  "Somali": "Somali",
  "Spanish": "Espanhol",
  "Swahili": "Suaíli",
  "Swedish": "Sueco",
  "Swiss German": "Alemão Suíço",
  "Tagalog": "Tagalo",
  "Tajik": "Tajique",
  "Tamil": "Tâmil",
  "Tatar": "Tártaro",
  "Telugu": "Télugo",
  "Thai": "Tailandês",
  "Tibetan": "Tibetano",
  "Tigrinya": "Tigrínia",
  "Tok Pisin": "Tok Pisin",
  "Tonga": "Tonga",
  "Tsonga": "Tsonga",
  "Turkish": "Turco",
  "Turkmen": "Turcomeno",
  "Twi": "Twi",
  "Ukrainian": "Ucraniano",
  "Urdu": "Urdu",
  "Uyghur": "Uigur",
  "Uzbek": "Uzbeque",
  "Vietnamese": "Vietnamita",
  "Walloon": "Valão",
  "Welsh": "Galês",
  "Xhosa": "Xosa",
  "Yiddish": "Iídiche",
  "Yoruba": "Iorubá",
  "Zulu": "Zulu"
};

const CURRENCIES_PT: Record<string, string> = {
  "Euro": "Euro",
  "US Dollar": "Dólar Americano",
  "British Pound": "Libra Esterlina",
  "Japanese Yen": "Iene Japonês",
  "Swiss Franc": "Franco Suíço",
  "Canadian Dollar": "Dólar Canadense",
  "Australian Dollar": "Dólar Australiano",
  "New Zealand Dollar": "Dólar Neozelandês",
  "Chinese Yuan": "Yuan Chinês",
  "Indian Rupee": "Rupia Indiana",
  "Brazilian Real": "Real Brasileiro",
  "Russian Ruble": "Rublo Russo",
  "Mexican Peso": "Peso Mexicano",
  "Singapore Dollar": "Dólar de Singapura",
  "Hong Kong Dollar": "Dólar de Hong Kong",
  "Swedish Krona": "Coroa Sueca",
  "Norwegian Krone": "Coroa Norueguesa",
  "Danish Krone": "Coroa Dinamarquesa",
  "Polish Zloty": "Zloty Polonês",
  "Czech Koruna": "Coroa Tcheca",
  "Hungarian Forint": "Forint Húngaro",
  "Romanian Leu": "Leu Romeno",
  "Turkish Lira": "Lira Turca",
  "South African Rand": "Rand Sul-Africano",
  "Israeli Shekel": "Shekel Israelense",
  "Thai Baht": "Baht Tailandês",
  "Malaysian Ringgit": "Ringgit Malaio",
  "Indonesian Rupiah": "Rupia Indonésia",
  "Philippine Peso": "Peso Filipinense",
  "Vietnamese Dong": "Dong Vietnamita",
  "Pakistani Rupee": "Rupia Paquistanesa",
  "Bangladesh Taka": "Taka Bengali",
  "Sri Lankan Rupee": "Rupia do Sri Lanka",
  "Kuwait Dinar": "Dinar Kuwaitiano",
  "Saudi Riyal": "Rial Saudita",
  "United Arab Emirates Dirham": "Dirham dos EAU",
  "Qatari Rial": "Rial Qatariano",
  "Omani Rial": "Rial Omanense",
  "Bahraini Dinar": "Dinar Barenita",
  "Argentine Peso": "Peso Argentino",
  "Chilean Peso": "Peso Chileno",
  "Colombian Peso": "Peso Colombiano",
  "Peruvian Sol": "Sol Peruano",
  "Venezuelan Bolivar": "Bolívar Venezuelano",
  "Ecuadorian Dollar": "Dólar Equatoriano"
};

export default class GeoService {
  private continentRepository = new ContinentRepository();
  private countryRepository = new CountryRepository();

  // Busca dados da API REST Countries
  private async fetchFromRestCountries(): Promise<RestCountry[]> {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,languages,currencies,continents,translations,population"
    );
    
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API REST Countries");
    }
    
    const data = await response.json();
    return data as RestCountry[];
  }

  // Sincroniza continentes no banco usando o repository
  private async syncContinents(): Promise<Map<string, number>> {
    const continentMap = new Map<string, number>();

    for (const [engName, ptName] of Object.entries(CONTINENTS_MAP)) {
        let continent = await prisma.continent.findFirst({
            where: { ctn_nome: ptName }
        });

        if (!continent) {
            const newContinent = new Continent(ptName, `Continente: ${ptName}`);
            const created = await this.continentRepository.create(newContinent);
            continentMap.set(engName, created.getId!);
        } else {
            continentMap.set(engName, continent.ctn_id);
        }
    }

    return continentMap;
  }

    // Sincroniza países no banco usando o repository
    private async syncCountries(
            countries: RestCountry[],
            continentMap: Map<string, number>
        ): Promise<void> {
            let count = 0;
            for (const country of countries) {
                try {
                    const countryName = country.translations?.por?.common ?? country.name.common;
                    const continentEng = country.continents?.[0] || "Oceania";
                    const continentId = continentMap.get(continentEng);

                    if (!continentId) continue;

                    // Pega o idioma nativo e traduz para português
                    let languageEn = country.languages
                        ? Object.values(country.languages)[0]
                        : "Desconhecido";
                    const language = LANGUAGES_PT[languageEn] || languageEn;

                    // Pega a moeda e traduz para português
                    let currencyEn = country.currencies
                        ? Object.values(country.currencies)[0]?.name ?? "Desconhecida"
                        : "Desconhecida";
                    const currency = CURRENCIES_PT[currencyEn] || currencyEn;

                    const population = country.population ?? 0;

                    // Verifica se o país existe
                    const existingCountry = await prisma.country.findFirst({
                        where: { ctr_nome: countryName }
                    });

                    if (!existingCountry) {
                        const newCountry = new Country(
                            countryName,
                            population,
                            language,
                            continentId,
                            currency
                        );
                        
                            console.log(`[DEBUG] Criando país: ${countryName}, idioma: ${language}, moeda: ${currency}, continente: ${continentId}`);
                        await this.countryRepository.create(newCountry);
                        count++;
                    }
                } catch (error) {
                    console.error(`Erro ao processar país:`, error);
                }
            }
            console.log(`[DEBUG] ${count} países criados`);
        }

    // Inicializa dados geográficos (executado uma vez ao iniciar o servidor)
    async initializeGeoData(): Promise<void> {
        try {
            // Verifica se já existem continentes no banco
            const existingContinents = await prisma.continent.count();
            
            if (existingContinents > 0) {
                console.log(`[INFO] Banco de dados já contém dados. Pulando sincronização.`);
                return;
            }

            console.log(`[INFO] Banco vazio. Iniciando sincronização de dados...`);
            const countriesData = await this.fetchFromRestCountries();
            const continentMap = await this.syncContinents();
            await this.syncCountries(countriesData, continentMap);
            
            const countryCount = await prisma.country.count();
            console.log(`[INFO] Sincronização concluída! ${countryCount} países carregados.`);
        } catch (error) {
            console.error("Erro ao inicializar dados geográficos:", error);
            throw error;
        }
    }

    // Função para sincronizar manualmente (se necessário)
    async syncGeoData(): Promise<{ continentes: any[]; paises: any[] }> {
        try {
        const countriesData = await this.fetchFromRestCountries();
        const continentMap = await this.syncContinents();

        await this.syncCountries(countriesData, continentMap);

        const continents = await prisma.continent.findMany();
        const countries = await prisma.country.findMany({
            include: {
            continent: true
            }
        });

        return {
            continentes: continents.map(c => ({
                id: c.ctn_id,
                nome: c.ctn_nome,
                descricao: c.ctn_descricao
            })),
            paises: countries.map(c => ({
                id: c.ctr_id,
                nome: c.ctr_nome,
                populacao: c.ctr_populacao,
                idioma: c.ctr_idioma,
                moeda: c.ctr_moeda,
                continente: c.continent.ctn_nome
            }))
        };
        } catch (error) {
            console.error("Erro ao sincronizar dados geográficos:", error);
            throw error;
        }
    }

    // Apenas retorna dados sem sincronizar
    async getGeoData(): Promise<{ continentes: any[]; paises: any[] }> {
        const continents = await prisma.continent.findMany();
        const countries = await prisma.country.findMany({
            include: {
                continent: true
            }
        });

        return {
            continentes: continents.map(c => ({
                id: c.ctn_id,
                nome: c.ctn_nome,
                descricao: c.ctn_descricao
            })),
            paises: countries.map(c => ({
                id: c.ctr_id,
                nome: c.ctr_nome,
                populacao: c.ctr_populacao,
                idioma: c.ctr_idioma,
                moeda: c.ctr_moeda,
                continente: c.continent.ctn_nome
            }))
        };
    }
}
