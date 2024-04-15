import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import * as CountryServices from "../services/country.services"

@Resolver()
export class CountryResolver {
    @Mutation(() => Country)
    createCountry(
        @Arg("code") code: string,
        @Arg("name") name: string,
        @Arg("emoji") emoji: string
    ){
        return CountryServices.addCountry(code, name, emoji);
    }

    @Query(() => [Country])
    getCountries(){
        return CountryServices.findCountries();
    }

    @Query(() => Country)
    getCountryByCode(
        @Arg("code") code: string
    ){
        return CountryServices.findCountryByCode(code);
    }
}