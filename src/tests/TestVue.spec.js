import { mount } from "@vue/test-utils";
import Test from "../pages/Test.vue";

describe("Test", () => {
    it("should render button enabled", () => {
        const wrapper = mount(Test, {
            props: {
                client: { id: 1 },
            },
        });

        const button = wrapper.get('button');

        expect(button.element).toBeEnabled();
    });

    it("should render the correct header based on isEdit state", async () => {
        const wrapper = mount(Test);

        expect(wrapper.find('h1').text()).toBe('Create');
        expect(wrapper.find('h1').exists()).toBeTruthy();

        // Clicar no botão "Toogle Edit"
        await wrapper.find('button').trigger('click');

        expect(wrapper.find('h1').text()).toBe('Edit');
        expect(wrapper.find('h1').exists()).toBeTruthy();
    });

    it("should update the name state when typing in the input", async () => {
        const wrapper = mount(Test);

        const input = wrapper.get('input[type="text"]');

        // Simular a digitação de um nome
        await input.setValue('John Doe');

        expect(input.element.value).toBe('John Doe');
    });
});
