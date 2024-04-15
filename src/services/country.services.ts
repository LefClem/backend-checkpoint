import { Country } from "../entities/country";

export async function addCountry(code: string, name: string, emoji: string){
    const newCountry = new Country();

    newCountry.code = code;
    newCountry.name = name;
    newCountry.emoji = emoji;

    try {
        await newCountry.save();
        return newCountry;
    } catch (error) {
        console.error('Error saving country:', error);
        throw new Error('Failed to save country');
    }
}

export async function findCountries() {
    try {
        return await Country.find();
    } catch (error) {        
        console.error('Error finding countries:', error);
        throw new Error('Failed to find countries');
    }
}

export async function findCountryByCode(code: string){
    try {
        return await Country.find({
            where: {
                code: code
            }
        })
    } catch (error) {
        console.error('Error finding country:', error);
        throw new Error('Failed to find country');
    }
}