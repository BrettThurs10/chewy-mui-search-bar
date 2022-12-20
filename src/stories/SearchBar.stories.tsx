import { Meta, Story } from "@storybook/react";
import { SearchBar, SearchBarProps } from "../components/SearchBar/SearchBar";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  primary: true,
  label: "Primary",
};
