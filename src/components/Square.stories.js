import React from 'react';
import Square from './Square';
import '../index.css';

export default {
  component: Square, // コンポーネント自体
  title: 'Square', // Storybookのサイドバーにあるコンポーネントを参照する方法
  // argTypes: { onClick: { action: 'clicked' } },
};

// コンポーネントにストーリーが複数連なっているので,
// 各ストーリーを単一の Template 変数に割り当てる
const Template = (args) => <Square {...args} />;

// Squareに対する3つのテスト用の状態を書いていく
export const Default = Template.bind({});
Default.args = {
  value: null,
};

export const DrawX = Template.bind({});
DrawX.args = {
  value: 'X',
};

export const DrawO = Template.bind({});
DrawO.args = {
  value: 'O',
};

export const DrawTriangle = Template.bind({});
DrawTriangle.args = {
  value: '▲',
};
