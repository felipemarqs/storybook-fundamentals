import {addons} from "@storybook/manager-api";
import {create} from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandImage:
      "https://static.wixstatic.com/media/8f5aba_a4092397148f4abb951bdd6d155d1042~mv2.png/v1/crop/x_0,y_0,w_100,h_23,q_85,enc_auto/8f5aba_a4092397148f4abb951bdd6d155d1042~mv2.png",
  }),
});
