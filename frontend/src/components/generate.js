import { faker } from '@faker-js/faker';

export function Generate() {
    let name = faker.name.findName()
    let email = faker.internet.email()
    let address = faker.address.streetAddress()

    return [
        {
            name: name,
            email: email,
            address: address
        }
    ]
}