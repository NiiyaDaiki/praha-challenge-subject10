import React from 'react';
import { Status } from './Status';
import '../index.css';

export default {
  component: Status, // コンポーネント自体
  title: 'Status', // Storybookのサイドバーにあるコンポーネントを参照する方法
  // argTypes: { onClick: { action: 'clicked' } },
};

// コンポーネントにストーリーが複数連なっているので,
// 各ストーリーを単一の Template 変数に割り当てる
const Template = (args) => <Status {...args} />;

// Statusに対するテスト用の状態を書いていく
export const Default = Template.bind({});
Default.args = {
  winner: null,
  xIsNext: true,
};

export const WinnerX = Template.bind({});
WinnerX.args = {
  winner: 'X',
  xIsNext: true,
};

export const WinnerO = Template.bind({});
WinnerO.args = {
  winner: 'O',
  xIsNext: true,
};

export const Draw = Template.bind({});
Draw.args = {
  winner: 'draw',
  xIsNext: false,
};
