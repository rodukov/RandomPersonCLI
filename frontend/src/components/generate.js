import { faker } from '@faker-js/faker';

export function Generate() {
    let name = faker.name.findName()
    let email = faker.internet.email()
    let test = faker.address.streetAddress()

    return [name, email, test]
}