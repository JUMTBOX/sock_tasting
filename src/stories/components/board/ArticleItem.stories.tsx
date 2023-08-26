import ArticleItem, {
  ArticleItemInfo,
} from "../../../components/board/ArticleItem";
import { Meta, Story } from "@storybook/react";

export default {
  title: "article item",
  component: ArticleItem,
  argTypes: {
    title: { control: "text" },
    author: { control: "text" },
  },
} as Meta;

const Template: Story<ArticleItemInfo> = (args) => <ArticleItem {...args} />;

export const Type1 = Template.bind({});

Type1.args = {
  title: "",
  author: "",
};
