import { faker } from '@faker-js/faker';

export function Generate(humans) {

    let human = 0
    let output = []
    while (human < humans) {
        output.push([
            `${faker.name.firstName()} ${faker.name.lastName()}`,
            faker.name.gender(),
            faker.name.jobTitle(),
            faker.phone.number('+###########'),
            `Favourite color:  ${faker.commerce.color()}`,
            `Genres: ${faker.music.genre()} and ${faker.music.genre()}`,
            `EMEI: ${faker.phone.imei()}`,
            `Selector: ${faker.word.adverb()}`,
        ])
        human += 1
    }
    return output
}