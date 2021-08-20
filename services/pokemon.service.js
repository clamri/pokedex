import {
    API_BASE_URL, API_POKEMON
} from "~/utils/constants";

export default class PokemonService {

    static getAll = async () => {
        return (await this.$axios.get(`${API_BASE_URL}${API_POKEMON}`))?.data;
    }

    static getOne = async (name) => {
        return (await this.$axios.get(`${API_BASE_URL}${API_POKEMON}/${name}`))?.data;
    }
}