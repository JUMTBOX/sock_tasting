import Title, { TitleProps } from "../Example";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Test1",
  component: Title,
  argTypes: {
    title: { control: "text" },
    textColor: { control: "text" },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Case1 = Template.bind({});

Case1.args = {
  title: "Red title",
  textColor: "Red",
};
