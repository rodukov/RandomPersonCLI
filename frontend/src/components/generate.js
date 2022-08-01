import { faker } from '@faker-js/faker';

export function Generate(humans) {

    let human = 0
    let output = []
    while (human < humans) {
        let name = faker.name.findName()
        let email = faker.internet.email()
        let address = faker.address.streetAddress()
        output.push([name, email, address])
        human += 1
    }
    return output
}