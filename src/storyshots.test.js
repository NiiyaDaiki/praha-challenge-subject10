import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/adうdon-storyshots-puppeteer';

initStoryshots({
  suite: 'Puppeteer storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
  }),
});
