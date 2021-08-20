export default ({ config }) => {
  return {
    ...config,
    extra: {
      IS_STORYBOOK: process.env.IS_STORYBOOK,
    },
  };
};
