import Address from "./address";
import Customer from "./customer"

describe("Customer unit tests", () => {
    it("should throw error when id is empty", async () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("Id is required");
    })

    it("should throw error when name is empty", async () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    })

    it("should change name", async () => {
        const customer = new Customer("123", "John");
        
        customer.changeName("Jane");

        expect(customer.name).toBe("Jane");
    })

    it("should activate customer", async () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 123, "12223113", "SP");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it("should deactivate customer", async () => {
        const customer = new Customer("1", "Customer 1");
        
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it("should throw error when address is undefined when you activate a customer", async () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    })
})